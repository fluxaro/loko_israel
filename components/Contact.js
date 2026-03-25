import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdEmail, MdPerson, MdSubject, MdMessage, MdSend, MdCheckCircle } from 'react-icons/md';
import { ImSpinner8 } from 'react-icons/im';

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
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', subject: '', message: '' }); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  const inputBase = 'w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#FFD700] focus:bg-white transition-all text-sm font-medium';

  return (
    <section id="contact" ref={ref} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-[#FFD700]" />
            <span className="text-[#8a6d00] font-mono text-xs uppercase tracking-widest font-semibold">Contact</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900">Get In Touch</h2>
          <p className="text-gray-400 mt-3">Have a project in mind? Let's build something great together.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 }} className="lg:col-span-2 flex flex-col gap-6">
            <div className="p-6 bg-gray-900 rounded-3xl text-white">
              <h3 className="font-black text-xl mb-2">Let's work together</h3>
              <p className="text-gray-400 text-sm leading-relaxed">I'm open to freelance projects, collaborations, and full-time opportunities. Drop me a message and I'll get back to you within 24 hours.</p>
            </div>
            {[
              { icon: MdEmail, label: 'Email', value: 'israelloko65@gmail.com' },
              { icon: MdPerson, label: 'Available', value: 'For work & freelance' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#FFD700]/15 flex items-center justify-center shrink-0">
                  <Icon className="text-[#8a6d00] text-lg" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{label}</div>
                  <div className="text-sm font-bold text-gray-800 mt-0.5">{value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }} className="lg:col-span-3 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                    <MdCheckCircle className="text-green-500 text-4xl" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">Message Sent!</h3>
                  <p className="text-gray-500">Thank you for reaching out. I'll get back to you soon.</p>
                  <button onClick={() => setStatus('idle')} className="mt-2 px-6 py-2.5 bg-gray-900 text-white font-semibold rounded-xl text-sm hover:bg-gray-800 transition-colors">Send Another</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">Name</label>
                      <div className="relative">
                        <MdPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                        <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={`${inputBase} pl-9`} />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">Email</label>
                      <div className="relative">
                        <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                        <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={`${inputBase} pl-9`} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">Subject</label>
                    <div className="relative">
                      <MdSubject className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                      <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder="What's this about?" className={`${inputBase} pl-9`} />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">Message</label>
                    <div className="relative">
                      <MdMessage className="absolute left-3 top-4 text-gray-400 text-lg" />
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell me about your project..." className={`${inputBase} pl-9 resize-none`} />
                    </div>
                  </div>
                  {status === 'error' && <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again.</p>}
                  <motion.button type="submit" disabled={status === 'loading'} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 bg-[#FFD700] text-gray-900 font-black rounded-xl text-base hover:bg-yellow-300 transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                    {status === 'loading' ? <><ImSpinner8 className="animate-spin" /> Sending...</> : <><MdSend /> Send Message</>}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
