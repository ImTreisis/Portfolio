import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Gmail SMTP configuration
const mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
  },
});

mailTransporter.verify((err, success) => {
  if (err) {
    console.error('Nodemailer config error:', err);
  } else {
    console.log('Mail server ready to send messages');
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

    await mailTransporter.sendMail({
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
    });

    res.json({
      success: true,
      message: "Thanks for reaching out! I'll get back to you soon.",
    });
  } catch (error) {
    console.error('Failed to send contact email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send your message. Please try again later.',
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


