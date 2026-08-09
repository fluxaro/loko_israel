import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, CheckCircle } from 'lucide-react';

const FORMSPREE_URL = 'https://formspree.io/f/xzdkpanq';

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) { 
        setStatus('success'); 
        setForm({ name: '', email: '', subject: '', message: '' }); 
      } else {
        setStatus('error');
      }
    } catch { 
      setStatus('error'); 
    }
  };

  const inputBase = 'w-full px-4 py-3 bg-white border border-gray-200 text-ink placeholder-gray-400 focus:outline-none focus:border-ink transition-colors text-sm';

  return (
    <section id="contact" ref={ref} className="py-28 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-200" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* Left: Heading Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col"
          >
            <h2 className="font-serif italic text-4xl lg:text-5xl text-ink mb-6">Let's talk.</h2>
            <p className="text-gray-500 mb-8 max-w-sm leading-relaxed">
              I'm open to freelance projects, collaborations, and full-time opportunities. Drop me a message and I'll get back to you within 24 hours.
            </p>
            <a href="mailto:israelloko65@gmail.com" className="text-ink font-medium hover:text-accent transition-colors">
              israelloko65@gmail.com
            </a>
          </motion.div>

          {/* Right: Form Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success" 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }} 
                  className="flex flex-col items-start gap-4 py-8"
                >
                  <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center mb-2">
                    <CheckCircle className="text-ink w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif italic text-ink">Message Sent!</h3>
                  <p className="text-gray-500">Thank you for reaching out. I'll get back to you soon.</p>
                  <button 
                    onClick={() => setStatus('idle')} 
                    className="mt-4 px-6 py-3 bg-ink text-white font-medium text-sm hover:bg-gray-800 transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-gray-500 mb-1.5 block">Name</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputBase} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500 mb-1.5 block">Email</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputBase} />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500 mb-1.5 block">Subject</label>
                    <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder="What's this about?" className={inputBase} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500 mb-1.5 block">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell me about your project..." className={`${inputBase} resize-none`} />
                  </div>
                  
                  {status === 'error' && <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again.</p>}
                  
                  <button 
                    type="submit" 
                    disabled={status === 'loading'} 
                    className="w-full py-3 bg-ink text-white font-medium text-sm hover:bg-gray-800 transition-colors disabled:opacity-60 flex items-center justify-center gap-2 mt-2"
                  >
                    {status === 'loading' ? 'Sending...' : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
