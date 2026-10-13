import React, { useState } from 'react';
import { content } from '../content.js';
import { Terminal, Send, Check } from 'lucide-react';

export default function TerminalContact() {
  const [handle, setHandle] = useState('');
  const [parameters, setParameters] = useState('');
  const [dispatched, setDispatched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handle) return;
    setDispatched(true);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto font-mono text-xs">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 text-[#00F0FF] uppercase tracking-widest font-bold">
            <Terminal className="w-4 h-4" />
            <span>{content.contact.terminalHeader}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight font-signal text-current">
            Direct Terminal Dispatch
          </h2>
          <p className="font-sans text-sm opacity-80 leading-relaxed">
            {content.contact.prompt}
          </p>

          <div className="p-6 rounded-2xl border border-current/20 bg-current/5 space-y-3">
            <div>DIRECT: <a href={`mailto:${content.contact.email}`} className="text-[#00F0FF] underline">{content.contact.email}</a></div>
            <div>GPG KEY: {content.contact.gpgKey}</div>
            <div>KEYSERVER: {content.contact.keyserver}</div>
            <div>HUBS: {content.contact.location}</div>
          </div>
        </div>

        <div className="lg:col-span-7 p-8 md:p-10 rounded-2xl border border-[#00F0FF]/50 bg-black/80 shadow-[0_0_30px_rgba(0,240,255,0.15)]">
          {dispatched ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-12 h-12 rounded-full border border-[#00F0FF] text-[#00F0FF] flex items-center justify-center mx-auto shadow-[0_0_15px_#00F0FF]">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase text-[#00F0FF]">Packet Dispatched to Ring Buffer</h3>
              <p className="font-sans text-sm opacity-80 max-w-sm mx-auto">
                Signal acknowledgment routed. Dr. Vance audits verified engineering inquiries within one trading session.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center gap-2 text-[#00F0FF] border-b border-stone-800 pb-2">
                <span>$ ssh root@kaelenvance.io -p 2201</span>
              </div>

              <div>
                <label className="block text-stone-400 uppercase mb-2">Sender Protocol Address / Email *</label>
                <input
                  type="email"
                  required
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  placeholder="systems-lead@hft-fund.com"
                  className="w-full bg-black/60 border border-stone-800 focus:border-[#00F0FF] p-3 text-stone-200 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-stone-400 uppercase mb-2">Benchmark Parameters / System Scope</label>
                <textarea
                  rows={4}
                  value={parameters}
                  onChange={(e) => setParameters(e.target.value)}
                  placeholder="Describe consensus protocol, required throughput (msg/s), or latency ceiling..."
                  className="w-full bg-black/60 border border-stone-800 focus:border-[#00F0FF] p-3 text-stone-200 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#00F0FF] text-black hover:bg-white font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              >
                <span>TRANSMIT PACKET OVER BUS</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
