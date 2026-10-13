import React, { useState } from 'react';
import { content } from '../content.js';
import { Film, ArrowRight, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', role: '', projectType: '', email: '', pitch: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) return;
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-current/20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs uppercase font-mono tracking-widest text-[#D4AF37] block">
            {content.contact.slate}
          </span>
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight font-cinema">
            Direct Commission & Production
          </h2>
          <p className="text-base opacity-80 leading-relaxed font-sans">
            {content.contact.subtext}
          </p>

          <div className="p-6 border border-current/20 bg-current/5 space-y-3 font-mono text-xs">
            <div>REPRESENTATION: {content.contact.agent}</div>
            <div>DIRECT: <a href={`mailto:${content.contact.email}`} className="text-[#D4AF37] underline">{content.contact.email}</a></div>
            <div>PRODUCTION DESK: {content.contact.phone}</div>
          </div>
        </div>

        <div className="lg:col-span-7 p-8 md:p-10 border border-current/20 bg-current/5 backdrop-blur-sm">
          {sent ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-12 h-12 rounded-full border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-2xl uppercase font-cinema">Production Slate Logged</h3>
              <p className="text-sm font-sans opacity-80 max-w-sm mx-auto">
                Script logline transmitted to Mateo Thorne's representation desk. We prioritize original auteur narratives.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest mb-2 opacity-75">
                    Your Name / Studio
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Nordic Film Lab"
                    className="w-full bg-transparent border-b border-current/30 focus:border-[#D4AF37] py-2.5 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest mb-2 opacity-75">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="producer@studio.com"
                    className="w-full bg-transparent border-b border-current/30 focus:border-[#D4AF37] py-2.5 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest mb-2 opacity-75">
                  Production Type
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['Narrative Feature', 'Atmospheric Short', 'Auteur Campaign'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: opt })}
                      className={`p-2.5 text-[11px] font-mono uppercase border transition-colors cursor-pointer ${
                        formData.projectType === opt
                          ? 'border-[#D4AF37] text-[#D4AF37] bg-current/10'
                          : 'border-current/20 hover:border-current/50'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest mb-2 opacity-75">
                  Synopsis / Production Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.pitch}
                  onChange={(e) => setFormData({ ...formData, pitch: e.target.value })}
                  placeholder="Outline logline, projected principal photography dates, and visual references..."
                  className="w-full bg-transparent border-b border-current/30 focus:border-[#D4AF37] py-2.5 text-sm outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-mono text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Dispatch To Slate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
