/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TESTIMONIALS } from '../data';
import { Star } from 'lucide-react';

interface TestimonialsProps {
  standalone?: boolean;
}

export default function Testimonials({ standalone = false }: TestimonialsProps) {
  // We duplicate the slides list to construct a seamless scrolling marquee loop
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className={`w-full bg-[#F6F6F2] py-24 ${standalone ? 'pt-24' : ''}`}>
      {standalone && (
        <header className="bg-bg-dark text-white text-center py-20 px-6 relative mb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,83,36,0.12),transparent_60%)]" />
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="inline-block px-3 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-4">
              Our Validation
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.2] mb-6">
              Client Chronicles & Trust
            </h1>
            <p className="font-sans text-[#AAA] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Verify the strategic analytical precision of PlanPoseidon through direct experiences logged by founders and portfolio builders.
            </p>
          </div>
        </header>
      )}

      {/* Infinite Seamless Scrolling Marquee Loop */}
      <div className="w-full overflow-hidden py-4 relative">
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#F6F6F2] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#F6F6F2] to-transparent z-10 pointer-events-none" />
        
        <div className="ticker-viewport w-full overflow-hidden">
          <div className="ticker-track flex gap-8 w-max ticker-track-animate hover:[animation-play-state:paused] py-4">
            {duplicatedTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="ticker-slide w-[320px] sm:w-[420px] h-[400px] sm:h-[340px] shrink-0 bg-white p-8 rounded-2xl border border-neutral-150 shadow-[0_4px_30px_rgba(0,0,0,0.015)] hover:border-accent hover:shadow-[0_10px_35px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Five star rating banner */}
                  <div className="flex gap-1 text-accent mb-6">
                    {Array.from({ length: item.rating }).map((_, s) => (
                      <Star key={s} size={15} fill="currentColor" className="text-accent" />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <p className={`font-serif italic text-[#191919] leading-relaxed mb-6 text-neutral-700 ${
                    item.quote.length > 200
                      ? 'text-xs sm:text-sm'
                      : 'text-base sm:text-lg'
                  }`}>
                    "{item.quote}"
                  </p>
                </div>

                {/* Author profile */}
                <div className="flex items-center gap-3.5 border-t border-neutral-100 pt-6 mt-auto">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center font-serif text-accent font-bold text-sm">
                    {item.author[0]}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs sm:text-sm text-[#191919]">
                      {item.author}
                    </h4>
                    <p className="font-sans text-[10px] sm:text-xs text-neutral-400">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
