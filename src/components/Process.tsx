/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { PROCESS_STEPS } from '../data';
import { Compass, FileCheck, CheckSquare, RefreshCw } from 'lucide-react';
import { animate, stagger } from 'motion';

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const getStepIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Compass size={18} className="text-accent" />;
      case 2:
        return <FileCheck size={18} className="text-accent" />;
      case 3:
        return <CheckSquare size={18} className="text-accent" />;
      case 4:
        return <RefreshCw size={18} className="text-accent" />;
      default:
        return null;
    }
  };

  const scrollToStep = (id: number) => {
    setActiveStep(id);
    const element = document.getElementById(`process-card-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  useEffect(() => {
    // Animate cards when section comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = cardsRef.current.filter(el => el !== null);
            if (cards.length > 0) {
              animate(cards, { opacity: [0, 1], y: [50, 0], scale: [0.95, 1] }, { duration: 0.6, delay: stagger(0.2) });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F6F6F2] py-24 px-6 border-b border-[#E5E5E5]" id="approach">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Navigation and Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="font-sans font-bold text-accent text-xs uppercase tracking-[0.25em] block mb-3">
              The Protocol
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#191919] leading-tight mb-8">
              What to expect
            </h2>
            
            {/* Nav list - clickable selector */}
            <ul className="space-y-1 hidden lg:block">
              {PROCESS_STEPS.map((step) => (
                <li key={step.id}>
                  <button
                    onClick={() => scrollToStep(step.id)}
                    className={`w-full text-left py-4.5 px-6 border-l-2 text-sm font-sans tracking-wide transition-all uppercase font-semibold flex items-center justify-between group cursor-pointer ${
                      activeStep === step.id
                        ? 'border-accent text-[#191919] bg-accent/5'
                        : 'border-neutral-200 text-neutral-400 hover:text-neutral-600 hover:border-neutral-400'
                    }`}
                  >
                    <span>{step.id}. {step.title}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      {getStepIcon(step.id)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 scrollbar-none">
              {PROCESS_STEPS.map((step) => (
                <button
                  key={step.id}
                  onClick={() => scrollToStep(step.id)}
                  className={`shrink-0 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer ${
                    activeStep === step.id
                      ? 'bg-accent text-white'
                      : 'bg-white border border-neutral-200 text-neutral-500'
                  }`}
                >
                  {step.id}. {step.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Cards Display Stack */}
          <div className="lg:col-span-7 space-y-8">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => (cardsRef.current[index] = el)}
                id={`process-card-${step.id}`}
                className={`bg-white p-8 sm:p-12 rounded-2xl border transition-all duration-300 relative overflow-hidden opacity-0 ${
                  activeStep === step.id
                    ? 'border-accent shadow-[0_10px_30px_rgba(77,83,36,0.04)] ring-1 ring-accent/10'
                    : 'border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.01)]'
                }`}
                onMouseEnter={() => setActiveStep(step.id)}
              >
                {/* Step watermarked index number */}
                <div className="absolute top-4 right-8 font-serif text-8xl font-black text-neutral-100 select-none pointer-events-none">
                  0{step.id}
                </div>

                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    {getStepIcon(step.id)}
                  </div>
                  <span className="text-xs font-sans tracking-[0.2em] text-accent uppercase font-bold">
                    Phase 0{step.id}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#191919] mb-4 relative z-10">
                  {step.title}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed max-w-xl relative z-10">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
