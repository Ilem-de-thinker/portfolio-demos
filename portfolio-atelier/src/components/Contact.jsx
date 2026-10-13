import React, { useState } from 'react';
import { content } from '../content.js';
import { ArrowRight, Check } from 'lucide-react';

export default function Contact({ isDark }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto border-t border-stone-800/10 dark:border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C37B5C] dark:text-[#E08A68] font-mono block font-semibold">
            06 // PRIVATE STUDIO VISIT
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif italic leading-tight transition-colors ${
            isDark ? 'text-white' : 'text-stone-900'
          }`}>
            {content.contact.greeting}
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed font-sans transition-colors ${
            isDark ? 'text-stone-200' : 'text-stone-700'
          }`}>
            {content.contact.description}
          </p>

          <div className={`p-4 sm:p-6 rounded-2xl border space-y-2 font-mono text-xs transition-colors ${
            isDark
              ? 'bg-white/10 border-white/15 text-stone-200'
              : 'bg-stone-900/5 border-stone-800/10 text-stone-700'
          }`}>
            <div>ATELIER: {content.contact.atelierLocation}</div>
            <div>POST: <a href={`mailto:${content.contact.email}`} className="text-[#C37B5C] dark:text-[#E08A68] underline">{content.contact.email}</a></div>
          </div>
        </div>

        <div className={`lg:col-span-7 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-[32px] border transition-colors ${
          isDark
            ? 'bg-white/10 border-white/15'
            : 'bg-stone-900/5 border-stone-800/10'
        }`}>
          {submitted ? (
            <div className="py-12 sm:py-16 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#C37B5C]/20 text-[#C37B5C] dark:text-[#E08A68] flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className={`text-2xl font-serif italic transition-colors ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}>
                Letter Received in Provence
              </h3>
              <p className={`text-sm max-w-sm mx-auto font-sans transition-colors ${
                isDark ? 'text-stone-200' : 'text-stone-700'
              }`}>
                Thank you for reaching out. I review private commission letters between firing seasons.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label className={`block text-xs uppercase tracking-wider font-mono mb-2 font-semibold transition-colors ${
                  isDark ? 'text-stone-200' : 'text-stone-700'
                }`}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Charlotte & Antoine"
                  className={`w-full bg-transparent border-b py-2.5 text-base sm:text-sm outline-none transition-colors ${
                    isDark
                      ? 'border-stone-600 focus:border-[#E08A68] text-white placeholder:text-stone-500'
                      : 'border-stone-400 focus:border-[#C37B5C] text-stone-900 placeholder:text-stone-400'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs uppercase tracking-wider font-mono mb-2 font-semibold transition-colors ${
                  isDark ? 'text-stone-200' : 'text-stone-700'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className={`w-full bg-transparent border-b py-2.5 text-base sm:text-sm outline-none transition-colors ${
                    isDark
                      ? 'border-stone-600 focus:border-[#E08A68] text-white placeholder:text-stone-500'
                      : 'border-stone-400 focus:border-[#C37B5C] text-stone-900 placeholder:text-stone-400'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs uppercase tracking-wider font-mono mb-2 font-semibold transition-colors ${
                  isDark ? 'text-stone-200' : 'text-stone-700'
                }`}>
                  Commission Vision / Studio Date
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Desire for tea bowls, amphora urns, or private atelier visit..."
                  className={`w-full bg-transparent border-b py-2.5 text-base sm:text-sm outline-none transition-colors resize-none ${
                    isDark
                      ? 'border-stone-600 focus:border-[#E08A68] text-white placeholder:text-stone-500'
                      : 'border-stone-400 focus:border-[#C37B5C] text-stone-900 placeholder:text-stone-400'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 sm:py-4 rounded-full border border-[#C37B5C] dark:border-[#E08A68] text-[#C37B5C] dark:text-[#E08A68] hover:bg-[#C37B5C] dark:hover:bg-[#E08A68] hover:text-white dark:hover:text-[#12100E] font-serif italic text-sm tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md min-h-[48px]"
              >
                <span>Send Studio Note</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
