import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, CheckCircle, Mail, Phone, MapPin, Clock, Copy, Check, 
  ArrowUpRight, MessageSquare, ChevronDown, Sparkles 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FORMSPREE_URL = 'https://formspree.io/f/xzdkpanq';

const FAQS = [
  {
    q: 'What is your current availability for projects?',
    a: 'I am actively open for select freelance contracts, AI integration initiatives, and full-time software engineering roles. Typical turnaround for project scoping is within 24–48 hours.'
  },
  {
    q: 'What is your core technical stack?',
    a: 'My primary stack consists of React.js, Next.js, TypeScript, Tailwind CSS on the frontend, and Python, Django, Node.js, and PostgreSQL on the backend, alongside modern OpenAI/Gemini API integrations.'
  },
  {
    q: 'How do you approach milestones and client communication?',
    a: 'I work with clear milestone agreements, weekly demo builds on preview URLs (e.g. Vercel staging environments), and transparent communication via Slack, WhatsApp, or email.'
  },
  {
    q: 'Are you open to global remote opportunities?',
    a: 'Yes. I am based in Lagos, Nigeria (GMT+1) and have extensive experience collaborating asynchronously and synchronously with distributed international teams across North America, Europe, and Africa.'
  }
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const emailAddress = 'israelloko65@gmail.com';
  const whatsappNumber = '+234 707 416 5672';
  const whatsappLink = 'https://wa.me/2347074165672';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

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

  const inputBase =
    'w-full px-4 py-3.5 bg-white border border-zinc-200/90 rounded-xl text-ink placeholder-zinc-400 focus:outline-none focus:border-[#c8a845] focus:ring-1 focus:ring-[#c8a845] transition-all text-sm font-sans';

  return (
    <>
      <Head>
        <title>Contact &amp; Let&apos;s Talk | Loko Israel</title>
        <meta name="description" content="Get in touch with Loko Israel for software development, full-stack projects, AI integration, and engineering roles." />
      </Head>

      <Navbar />

      <main className="pt-28 lg:pt-36 bg-[#f5f2ec] min-h-screen text-[#1a1a1a]">
        
        {/* Page Hero Header */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200/80 shadow-sm text-xs font-mono text-zinc-600 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c8a845] animate-pulse" />
              <span>COMMUNICATION // OPEN TO OPPORTUNITIES</span>
            </div>

            <h1 className="font-serif italic text-5xl sm:text-7xl lg:text-8xl text-ink leading-[1.05] tracking-tight mb-6">
              Let&apos;s Start a <span className="text-[#c8a845] font-normal not-italic font-display">Conversation</span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed font-sans max-w-3xl">
              Whether you need to engineer a new web application from ground zero, optimize existing backend infrastructure, or explore full-time software engineering roles, I&apos;d love to connect.
            </p>
          </div>
        </section>

        {/* Contact Form & Direct Details Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Quick Direct Info */}
              <div className="p-8 bg-white border border-zinc-200/90 rounded-2xl shadow-sm space-y-6">
                <h2 className="font-serif italic text-2xl text-ink">Direct Channels</h2>

                {/* Email Card with Copy */}
                <div className="p-4 bg-[#f5f2ec] rounded-xl border border-zinc-200/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#c8a845]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-zinc-400 block uppercase">Email</span>
                      <a href={`mailto:${emailAddress}`} className="text-sm font-medium text-ink hover:text-[#c8a845] transition-colors">
                        {emailAddress}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-600 transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp Card */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#f5f2ec] rounded-xl border border-zinc-200/80 flex items-center justify-between gap-3 hover:border-[#c8a845] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#c8a845]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-zinc-400 block uppercase">WhatsApp / Phone</span>
                      <span className="text-sm font-medium text-ink group-hover:text-[#c8a845] transition-colors">
                        {whatsappNumber}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-ink transition-colors" />
                </a>

                {/* Location & Timezone */}
                <div className="p-4 bg-[#f5f2ec] rounded-xl border border-zinc-200/80 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#c8a845]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 block uppercase">Location &amp; Time</span>
                    <span className="text-sm font-medium text-ink">Lagos, Nigeria (GMT+1) · Remote Worldwide</span>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="p-8 bg-white border border-zinc-200/90 rounded-2xl shadow-sm">
                <h3 className="font-serif italic text-xl text-ink mb-4">Developer Profiles</h3>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href="https://github.com/loko-israel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#f5f2ec] hover:bg-zinc-200 text-ink rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/loko-israel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#f5f2ec] hover:bg-zinc-200 text-ink rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://twitter.com/loko_israel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#f5f2ec] hover:bg-zinc-200 text-ink rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <span>X (Twitter)</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 border border-zinc-200/90 rounded-2xl shadow-sm">
              <span className="font-mono text-xs text-[#c8a845] uppercase tracking-widest block mb-2">
                Send a Message
              </span>
              <h2 className="font-serif italic text-3xl sm:text-4xl text-ink mb-8">
                How can I help you?
              </h2>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#f5f2ec] flex items-center justify-center text-[#c8a845] mb-4">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif italic text-3xl text-ink mb-2">Message Dispatched!</h3>
                    <p className="text-zinc-500 text-sm max-w-md mb-8 font-sans">
                      Thank you for reaching out. I have received your message and will reply to your email address within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="bg-ink text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-black transition-all"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 block">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Alex Morgan"
                          className={inputBase}
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 block">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="alex@company.com"
                          className={inputBase}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 block">
                        Subject / Project Type
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Full-Stack Web Platform or Contract Role"
                        className={inputBase}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 block">
                        Message Details *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell me about your technical requirements, project timeline, and key deliverables..."
                        className={`${inputBase} resize-none`}
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-600 text-sm font-medium">
                        An error occurred while sending your message. Please reach out directly to israelloko65@gmail.com.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 bg-[#c8a845] hover:bg-[#b89738] text-[#1a1a1a] font-semibold text-sm rounded-xl shadow-md transition-all disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        'Transmitting message...'
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* Working Together FAQ */}
        <section className="py-20 bg-white border-t border-zinc-200/80">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="font-mono text-xs text-[#c8a845] uppercase tracking-widest block mb-2">FAQ</span>
              <h2 className="font-serif italic text-4xl lg:text-5xl text-ink">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="border border-zinc-200 rounded-xl overflow-hidden bg-[#f5f2ec]/40">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-ink text-base sm:text-lg"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-[#c8a845] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-sm text-zinc-600 font-sans leading-relaxed border-t border-zinc-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

