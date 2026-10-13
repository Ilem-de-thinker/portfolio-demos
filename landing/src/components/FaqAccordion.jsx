import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqAccordion({ faqs = [] }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className="border border-stone-800/80 rounded-2xl overflow-hidden bg-stone-900/30 transition-colors"
          >
            <button
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-800/20 transition-colors"
            >
              <span className="text-base md:text-lg font-medium text-stone-100">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6 text-sm md:text-base text-stone-400 leading-relaxed border-t border-stone-800/40 pt-4">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
