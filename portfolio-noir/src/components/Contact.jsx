import React, { useState } from 'react';
import { content } from '../content.js';
import { Mail, ArrowRight, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', projectScope: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-current/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-red-600 dark:text-red-500">
            [{content.contact.kicker}]
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight mt-2 mb-6">
            {content.contact.heading}
          </h2>
          <p className="text-sm opacity-75 max-w-md leading-relaxed mb-8 font-sans">
            I accept a strictly limited number of commissions per calendar year to preserve darkroom integrity and personal printing time.
          </p>

          <div className="space-y-3 text-xs font-mono opacity-80 mb-8">
            <div>EMAIL: <a href={`mailto:${content.contact.email}`} className="underline hover:text-red-600">{content.contact.email}</a></div>
            <div>STUDIO: {content.contact.studioAddress}</div>
            <div>PHONE: {content.contact.phone}</div>
          </div>

          <div className="flex gap-6 text-xs font-mono uppercase tracking-widest">
            {content.contact.socials.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-600 dark:hover:text-red-500 transition-colors underline"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Dispatch Form */}
        <div className="p-8 border border-current/20 rounded-2xl bg-current/5 backdrop-blur-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-red-600/20 text-red-600 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif">Inquiry Received</h3>
              <p className="text-xs font-mono opacity-75 max-w-xs mx-auto">
                Thank you, {formData.name || 'Friend'}. I review commissions every Monday and will respond directly from my Paris atelier.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest mb-2 opacity-75">
                  Your Name / Fashion House
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Maison Laurent"
                  className="w-full bg-transparent border-b border-current/30 focus:border-red-600 py-3 text-sm focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest mb-2 opacity-75">
                  Direct Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. director@atelier.com"
                  className="w-full bg-transparent border-b border-current/30 focus:border-red-600 py-3 text-sm focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest mb-2 opacity-75">
                  Monograph / Campaign Vision
                </label>
                <textarea
                  rows={3}
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  placeholder="Format, projected shoot dates, and aesthetic notes..."
                  className="w-full bg-transparent border-b border-current/30 focus:border-red-600 py-3 text-sm focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full border border-current hover:bg-red-600 hover:border-red-600 hover:text-white transition-all text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Dispatch Commission Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
