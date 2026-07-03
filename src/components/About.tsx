/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle, ShieldCheck, UserCheck } from 'lucide-react';
import { PageId } from '../types';
// @ts-ignore
import logoImg from '../assets/Logo.png';
// @ts-ignore
import ceoImg from '../assets/CEO Atharva.jpeg';

interface AboutProps {
  onNavigate: (page: PageId) => void;
  standalone?: boolean;
}

const CYCLING_TITLES = [
  'NISM certified analyst',
  'wealth manager',
  'financial advisor',
  'business strategist'
];

export default function About({ onNavigate, standalone = false }: AboutProps) {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % CYCLING_TITLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-full ${standalone ? 'pt-24' : ''}`}>
      {/* Editorial page banner if rendered as standalone page */}
      {standalone && (
        <header className="bg-bg-dark text-white text-center py-20 px-6 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(77,83,36,0.15),transparent_50%)]" />
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="inline-block px-3 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-4">
              Our Identity
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.2] mb-6">
              Poseidon Wealth Planners
            </h1>
            <p className="font-sans text-[#AAA] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Creating lasting wealth for individuals, families, founders, and businesses through highly disciplined advice, deep analysis, and fully aligned incentives.
            </p>
          </div>
        </header>
      )}

      {/* Founder Spotlight - "Peanut Shell" styled section */}
      <section className="bg-gradient-to-b from-[#12130F] via-[#1E2019] to-[#12130F] text-white py-24 px-6 relative overflow-hidden flex items-center justify-center border-t border-b border-white/5">
        {/* Professional Ambient Lighting/Glows */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#4D5324]/20 blur-[160px] pointer-events-none z-0" />
        <div className="absolute bottom-[-25%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#323617]/15 blur-[140px] pointer-events-none z-0" />
        
        {/* Subtle geometric dot grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
        
        {/* Abstract elegant thin circular vector lines for corporate premium aesthetic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/[0.03] pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-dashed border-white/[0.02] pointer-events-none z-0" />
        
        <div className="max-w-4xl w-full bg-accent text-white px-8 py-16 sm:px-16 sm:py-20 rounded-[40px] sm:rounded-[80px] text-center relative z-10 shadow-2xl">
          {/* Avatar frame */}
          <div className="relative w-36 h-36 mx-auto mb-8">
            <div className="absolute inset-0 border-2 border-white/20 rounded-full scale-110 animate-pulse" />
            <img
              src={ceoImg}
              alt="Atharva Chitale"
              onError={(e) => {
                // If local file is missing, fallback gracefully to a high-end illustration placeholder
                e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300';
              }}
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl relative z-10"
            />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl leading-tight mb-2 tracking-tight">
            Hi, I'm Atharva Chitale.
          </h2>

          <h3 className="font-sans font-medium text-[#F6F6F2] text-lg sm:text-xl tracking-wide mb-8 min-h-[30px] flex items-center justify-center">
            I am a&nbsp;
            <AnimatePresence mode="wait">
              <motion.span
                key={titleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-white font-serif italic font-semibold border-b border-white/30"
              >
                {CYCLING_TITLES[titleIndex]}
              </motion.span>
            </AnimatePresence>
          </h3>

          <p className="font-sans font-light text-white/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            I help business owners, builders, and high-income professionals transform hard-earned operational success into structured, lasting wealth through wealth strategies traditional firms rarely disclose.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-wider uppercase">
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-black/20 rounded-full">
              <ShieldCheck size={14} className="text-[#F6F6F2]" /> NISM Certified
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-black/20 rounded-full">
              <UserCheck size={14} className="text-[#F6F6F2]" /> SEBI Compliant Fee Scale
            </span>
          </div>
        </div>
      </section>

      {/* Core Philosophy & List Block */}
      <section className="bg-bg-light py-24 px-6 border-b border-[#E5E5E5]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch items-start">
          
          {/* Strategic Approach List block */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-neutral-100">
            <h4 className="font-sans font-bold text-accent text-xs uppercase tracking-[0.2em] mb-3">Our Strategic Pillars</h4>
            <h2 className="font-serif text-3xl text-[#191919] mb-8 leading-tight">Why Clients Trust Us</h2>
            
            <ul className="space-y-6">
              {[
                {
                  title: 'Wealth Management',
                  desc: 'Tailored strategy design integrating long-term financial security parameters.'
                },
                {
                  title: 'Strategic Consulting',
                  desc: 'Objective planning methodologies for businesses seeking corporate metrics growth.'
                },
                {
                  title: 'Transaction Advisory',
                  desc: 'In-depth guidance for optimization across structured business transitions.'
                },
                {
                  title: 'Founder Advisory',
                  desc: 'Supporting scaling metrics from initial operations through milestone realizations.'
                },
                {
                  title: 'Long-Term Partnership',
                  desc: 'Built upon absolute transparency, data-backed strategy, and complete alignment.'
                }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <CheckCircle size={18} className="text-accent shrink-0 mt-1" />
                  <div>
                    <h5 className="font-sans font-bold text-sm text-[#191919] mb-1">{item.title}</h5>
                    <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Goal & Quote Block */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-white rounded-2xl p-0 shadow-sm border border-neutral-200 flex flex-col items-center justify-center flex-1 min-h-[350px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent opacity-60" />
              <img
                src={logoImg}
                alt="Poseidon Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full min-h-[350px] object-cover relative z-10 transition-transform duration-500 hover:scale-102"
              />
            </div>

            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shrink-0">
              <h4 className="font-sans font-bold text-[#191919] text-sm mb-2">Need a custom roadmap?</h4>
              <p className="text-xs text-neutral-500 mb-6 leading-relaxed">
                Connect directly for a personalized operational overview matching your corporate or personal trajectory.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline cursor-pointer"
              >
                Schedule Introduction <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
