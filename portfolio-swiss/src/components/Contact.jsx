import React, { useState } from 'react';
import { content } from '../content.js';
import { ArrowRight, CheckSquare } from 'lucide-react';

export default function Contact() {
  const [inquiryType, setInquiryType] = useState('audit');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [dispatched, setDispatched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setDispatched(true);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto font-mono text-xs">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6 space-y-6">
          <span className="font-bold text-[#FF4800] uppercase tracking-widest block">
            05 // DIRECT DISPATCH
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-black dark:text-white">
            {content.contact.heading}
          </h2>
          <p className="font-sans text-base leading-relaxed opacity-85">
            {content.contact.subtext}
          </p>

          <div className="p-6 border-2 border-current bg-stone-100 dark:bg-stone-900 space-y-2">
            <div>LOCATION: {content.contact.studio}</div>
            <div>DIRECT: <a href={`mailto:${content.contact.email}`} className="text-[#FF4800] underline">{content.contact.email}</a></div>
            <div>SECURE LINE: {content.contact.phone}</div>
          </div>
        </div>

        <div className="lg:col-span-6 p-8 border-2 border-current bg-white dark:bg-black">
          {dispatched ? (
            <div className="py-16 text-center space-y-4">
              <div className="text-4xl text-[#FF4800]">■</div>
              <h3 className="text-2xl font-bold uppercase">Dispatch Transmitted</h3>
              <p className="font-sans text-sm opacity-80">
                Data packet queued for review. Expect architectural acknowledgment within 24 operational hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-bold uppercase mb-2">Scope of Engagement</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'audit', label: 'Systems Audit' },
                    { id: 'design-system', label: 'Token Architecture' },
                    { id: 'advisory', label: 'Executive Advisory' },
                    { id: 'terminal', label: 'High-Density UI' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setInquiryType(item.id)}
                      className={`p-3 text-left border uppercase font-bold transition-colors cursor-pointer ${
                        inquiryType === item.id
                          ? 'bg-[#FF4800] text-black border-[#FF4800]'
                          : 'border-current hover:bg-stone-100 dark:hover:bg-stone-900'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase mb-2">Institutional Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@enterprise.ch"
                  className="w-full bg-stone-100 dark:bg-stone-900 border border-current p-3 outline-none focus:border-[#FF4800]"
                />
              </div>

              <div>
                <label className="block font-bold uppercase mb-2">System Parameters / Scope</label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Number of products, current design token footprint, timeline..."
                  className="w-full bg-stone-100 dark:bg-stone-900 border border-current p-3 outline-none focus:border-[#FF4800] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-black text-white dark:bg-white dark:text-black hover:bg-[#FF4800] hover:text-black font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>TRANSMIT DISPATCH PACKET</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
