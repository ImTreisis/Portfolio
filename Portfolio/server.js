import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Gmail SMTP configuration with explicit settings for cloud environments
// Try port 465 (SSL) first, fallback to 587 (TLS) if needed
// You can override via environment variable: SMTP_PORT=465 or SMTP_PORT=587
const smtpPort = parseInt(process.env.SMTP_PORT) || 465; // Default to 465 (SSL) for better cloud compatibility
const useSSL = smtpPort === 465;

const mailTransporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: smtpPort,
  secure: useSSL, // true for 465, false for other ports
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
  },
  tls: {
    // Do not fail on invalid certs (useful for some cloud environments)
    rejectUnauthorized: false,
  },
  connectionTimeout: 20000, // 20 seconds (increased for cloud)
  greetingTimeout: 20000,
  socketTimeout: 20000,
  // Retry configuration
  pool: true,
  maxConnections: 1,
  maxMessages: 3,
  // Additional options for cloud environments
  requireTLS: !useSSL, // Require TLS only if not using SSL
  debug: process.env.NODE_ENV === 'development', // Enable debug in development
});

// Verify connection asynchronously (non-blocking)
// This won't block server startup if there's a connection issue
mailTransporter.verify((err, success) => {
  if (err) {
    console.warn('⚠️  Nodemailer verification failed (will retry on first send):', err.message);
    console.log('📧 Email service will attempt connection when first email is sent');
  } else {
    console.log('✅ Mail server ready to send messages');
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Contact endpoint
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
    });
  }

  try {
    // Escape HTML to prevent XSS
    const escapeHtml = (text) => {
      const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      };
      return text.replace(/[&<>"']/g, (m) => map[m]);
    };

    // Send email with timeout handling
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Send to your own Gmail
      replyTo: email, // So you can reply directly to the sender
      subject: `New portfolio message from ${escapeHtml(name)}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a5568; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong style="color: #2d3748;">Name:</strong> <span style="color: #4a5568;">${escapeHtml(name)}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #2d3748;">Email:</strong> <span style="color: #4a5568;">${escapeHtml(email)}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #2d3748;">Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #4299e1; margin-top: 10px; white-space: pre-wrap; color: #2d3748;">
              ${escapeHtml(message).replace(/\n/g, '<br/>')}
            </div>
          </div>
        </div>
      `,
    };

    // Send email with promise timeout
    const sendEmailPromise = mailTransporter.sendMail(mailOptions);
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Email send timeout after 15 seconds')), 15000);
    });

    await Promise.race([sendEmailPromise, timeoutPromise]);

    res.json({
      success: true,
      message: "Thanks for reaching out! I'll get back to you soon.",
    });
  } catch (error) {
    console.error('Failed to send contact email:', error);
    console.error('Error details:', {
      code: error.code,
      command: error.command,
      message: error.message,
    });
    
    // More specific error messages
    let errorMessage = 'Failed to send your message. Please try again later.';
    if (error.code === 'ETIMEDOUT' || error.code === 'ECONNREFUSED') {
      errorMessage = 'Connection to email service timed out. Please try again.';
    } else if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please contact the site administrator.';
    }
    
    res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


