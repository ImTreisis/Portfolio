import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    try {
      const response = await fetch('https://portfolio-pzo8.onrender.com/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Something went wrong. Please try again.');
      setStatus({ type: 'success', message: data.message || 'Message sent. Thanks for reaching out.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Could not send your message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (event) => setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));

  return (
    <SectionWrapper id="contact" className="!min-h-0 !py-28 md:!py-36">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55 }}>
        <div className="mb-12 md:mb-16">
          <p className="section-label mb-5">Open channel</p>
          <h2 className="display-title text-6xl md:text-8xl">Have a good<br /><span className="text-[#f4e400]">one in mind?</span></h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="max-w-md text-base leading-8 text-[#aaa9a2]">I’m always up for an interesting product, a thoughtful team, or a conversation about what to build next.</p>
            <a href="mailto:imtreisis@gmail.com" className="mt-8 inline-flex items-center gap-3 border-b border-[#f4e400]/50 pb-2 font-mono text-sm text-[#f4e400] transition hover:border-[#f4e400]">imtreisis@gmail.com <span aria-hidden="true">↗</span></a>
            <div className="mt-12 flex gap-7 font-mono text-[.67rem] font-bold uppercase tracking-wider">
              <a href="https://github.com/ImTreisis" target="_blank" rel="noreferrer" className="text-white/50 transition hover:text-[#f4e400]">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/treisis-gakas/" target="_blank" rel="noreferrer" className="text-white/50 transition hover:text-[#f4e400]">LinkedIn ↗</a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5 border border-white/10 bg-white/[.025] p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 font-mono text-[.65rem] font-bold uppercase tracking-wider text-white/55">Name
                <input type="text" name="name" autoComplete="name" value={formData.name} onChange={updateField} required className="form-field mt-2 normal-case tracking-normal" placeholder="Your name" />
              </label>
              <label className="space-y-2 font-mono text-[.65rem] font-bold uppercase tracking-wider text-white/55">Email
                <input type="email" name="email" autoComplete="email" value={formData.email} onChange={updateField} required className="form-field mt-2 normal-case tracking-normal" placeholder="you@example.com" />
              </label>
            </div>
            <label className="block space-y-2 font-mono text-[.65rem] font-bold uppercase tracking-wider text-white/55">Message
              <textarea name="message" value={formData.message} onChange={updateField} required rows="5" className="form-field mt-2 resize-y normal-case tracking-normal" placeholder="What are you thinking about?" />
            </label>
            {status.message && <p role="status" className={`border p-3 text-sm ${status.type === 'success' ? 'border-emerald-400/40 text-emerald-300' : 'border-red-400/40 text-red-300'}`}>{status.message}</p>}
            <button type="submit" disabled={isSubmitting} className="signal-button w-full disabled:cursor-wait disabled:opacity-60">{isSubmitting ? 'Sending…' : 'Send message'} <span aria-hidden="true">↗</span></button>
          </form>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Contact;
