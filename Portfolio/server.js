import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Resend (works great from cloud platforms like Render)
// Get your API key from https://resend.com/api-keys
const resend = new Resend(process.env.RESEND_API_KEY);

// Verify Resend is configured
if (!process.env.RESEND_API_KEY) {
  console.warn('⚠️  RESEND_API_KEY not set. Email functionality will not work.');
} else {
  console.log('✅ Resend email service initialized');
}

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

    // Get recipient email (your email where you want to receive messages)
    const recipientEmail = process.env.CONTACT_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    
    if (!recipientEmail) {
      throw new Error('CONTACT_EMAIL environment variable not set');
    }
    
    if (!fromEmail) {
      throw new Error('RESEND_FROM_EMAIL environment variable not set');
    }

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail, // Your email where you want to receive messages
      replyTo: email, // So you can reply directly to the sender
      subject: `New portfolio message from ${escapeHtml(name)}`,
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

    if (error) {
      throw error;
    }

    res.json({
      success: true,
      message: "Thanks for reaching out! I'll get back to you soon.",
    });
  } catch (error) {
    console.error('Failed to send contact email:', error);
    console.error('Error details:', {
      message: error.message,
      name: error.name,
    });
    
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


