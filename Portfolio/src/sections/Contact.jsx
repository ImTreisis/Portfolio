import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong' });
      }
    } catch (err) {
      console.error('Contact form submission failed', err);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com/ImTreisis', color: 'neon-purple' },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/treisis-gakas/',
      color: 'neon-blue',
    },
  ];

  return (
    <SectionWrapper id="contact">
      <Motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-neon-cyan">Get In</span>
          <span className="text-neon-pink"> Touch</span>
        </h2>
        <div className="w-24 h-1 bg-neon-purple mx-auto mb-12 shadow-neon-purple" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <h3 className="text-2xl font-bold text-neon-cyan mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cyber-dark border-2 border-cyber-card rounded-lg
                           text-white focus:border-neon-pink focus:outline-none focus:shadow-neon-pink
                           transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cyber-dark border-2 border-cyber-card rounded-lg
                           text-white focus:border-neon-cyan focus:outline-none focus:shadow-neon-cyan
                           transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-cyber-dark border-2 border-cyber-card rounded-lg
                           text-white focus:border-neon-purple focus:outline-none focus:shadow-neon-purple
                           transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {status.message && (
                <Motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-900/30 border border-green-500 text-green-400'
                      : 'bg-red-900/30 border border-red-500 text-red-400'
                  }`}
                >
                  {status.message}
                </Motion.div>
              )}

              <Button
                type="submit"
                variant="pink"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <h3 className="text-2xl font-bold text-neon-purple mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-neon-cyan">imtreisis@gmail.com</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-neon-cyan mb-6">Social Links</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <Motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center p-4 border-2 border-cyber-card rounded-lg
                             hover:border-neon-purple hover:shadow-neon-purple transition-all duration-300"
                  >
                    <span className="text-3xl mb-2">{social.icon}</span>
                    <span className="text-gray-300 text-sm">{social.name}</span>
                  </Motion.a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Motion.div>
    </SectionWrapper>
  );
};

export default Contact;


