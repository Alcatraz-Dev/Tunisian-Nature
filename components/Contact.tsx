import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const formRef = useRef<HTMLFormElement>(null);

  useGSAP(() => {
    gsap.from('#contact-title', {
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.contact-item', {
      scrollTrigger: {
        trigger: '#contact-form-container',
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(

        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );
      console.log({
        service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      });
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Message failed. Please try again.');
      setStatus('idle');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="w-full bg-black relative py-20 sm:py-32 overflow-hidden">
      <div className="screen-max-width px-5 sm:px-10 relative z-10">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Text Content */}
          <div className="lg:w-1/3 pt-10">
            <h2 id="contact-title" className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Get in <span className="text-amber-500">touch.</span>
            </h2>
            <div className="contact-item space-y-8 text-stone-400">
              <p className="text-lg leading-relaxed">
                Interested in wholesale, private labeling, or just want to know more about our organic harvest? We'd love to hear from you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center border border-stone-800 text-amber-500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <span>+46 73 721 57 75</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center border border-stone-800 text-amber-500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <span>wildhoneyorganic@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center border border-stone-800 text-amber-500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <span>Stockholm, Sweden</span>
                  <span> &</span>
                  <span>Sousse, Tunisia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div id="contact-form-container" className="lg:w-2/3 bg-stone-900/50 p-8 md:p-12 rounded-3xl border border-stone-800 backdrop-blur-sm">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="contact-item flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-stone-300 ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-stone-700 rounded-xl px-5 py-4 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="contact-item flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-stone-300 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-stone-700 rounded-xl px-5 py-4 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="contact-item flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-stone-300 ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-stone-700 rounded-xl px-5 py-4 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>

              {/* Hidden time field */}
              <input type="hidden" name="time" value={new Date().toLocaleString()} />

              <div className="contact-item pt-4">
                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2
                    ${status === 'success'
                      ? 'bg-green-600 text-white cursor-default'
                      : 'bg-amber-600 text-white hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-900/20'
                    }
                    disabled:opacity-70 disabled:cursor-not-allowed
                  `}
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                      Message Sent
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Blob */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-stone-800/20 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Contact;