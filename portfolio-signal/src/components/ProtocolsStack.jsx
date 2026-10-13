import React from 'react';
import { content } from '../content.js';

export default function ProtocolsStack() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-current/20">
      <div className="max-w-2xl mb-16">
        <span className="text-xs uppercase font-mono tracking-widest text-[#00F0FF] block mb-2">
          ARCHITECTURE // PROTOCOLS
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight font-signal">
          Core Protocols & Systems Invariants
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono">
        {content.protocols.map((proto, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl border border-current/20 bg-current/5 hover:border-[#00F0FF] transition-colors duration-200"
          >
            <span className="text-xs text-[#00F0FF] block mb-2 font-bold">
              PROTOCOL 0{idx + 1}
            </span>
            <h3 className="text-xl font-bold uppercase mb-3 font-signal">
              {proto.name}
            </h3>
            <p className="text-xs font-sans opacity-80 leading-relaxed">
              {proto.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
