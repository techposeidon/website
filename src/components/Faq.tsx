/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export default function Faq() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-bg-dark text-white py-24 px-6 relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-sans font-bold text-accent text-xs uppercase tracking-[0.25em] block mb-3">
            Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-neutral-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Transparent, straight answers regarding our certifications, investment approach, fee structures, and scope.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`border-b border-neutral-800 transition-colors duration-300 ${
                  isOpen ? 'bg-[#222222]/40 rounded-xl px-4 sm:px-6' : 'px-2'
                }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left py-6.5 flex justify-between items-center gap-4 cursor-pointer focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-white group-hover:text-accent transition-colors duration-200">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all border ${
                      isOpen
                        ? 'bg-accent border-accent text-white'
                        : 'border-neutral-800 text-accent group-hover:border-accent group-hover:bg-accent/5'
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[300px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-sans text-xs sm:text-sm leading-relaxed text-neutral-400 max-w-2xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
