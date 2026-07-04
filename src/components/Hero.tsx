/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowUpRight, Award, ShieldCheck, TrendingUp } from 'lucide-react';
import { PageId } from '../types';
// @ts-ignore
import heroBg from '../assets/Herosection.png';

interface HeroProps {
  onNavigate: (page: PageId) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#2C3114] pt-36 pb-20 lg:pt-48 lg:pb-32 px-6">
      {/* Premium background image with elegant 80% clear and 20% bottom blur */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none bg-[#2C3114]">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover filter blur-none opacity-85 scale-100 transition-all duration-700"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Soft elegant olive green overlays for text readability */}
        <div className="absolute inset-0 bg-[#2C3114]/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C3114]/15 via-[#2C3114]/35 to-[#2C3114]/85" />
        
        {/* 20% Elegant bottom blur transition layer to blur only the bottom area */}
        <div className="absolute bottom-0 left-0 right-0 h-[20%] backdrop-blur-md bg-gradient-to-b from-transparent to-[#2C3114]" />
      </div>

      {/* Decorative radial gradients for high-end aesthetic */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DFD7A5]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#DFD7A5]/3 rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Quality indicator / Tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DFD7A5]/30 bg-[#DFD7A5]/5 text-[#DFD7A5] text-[11px] font-semibold uppercase tracking-[0.2em] mb-8"
        >
          <Award size={13} /> Highly Discrete Private Wealth Advisory
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white mb-8"
        >
          You've built your business.<br />
          Now it's time to build your{' '}
          <span className="text-[#DFD7A5] italic relative inline-block">
            legacy
            <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#DFD7A5]/25" />
          </span>
          .
        </motion.h1>

        {/* Paragraph description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-base sm:text-xl text-[#F6F6F2]/90 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Secure your financial future with tailored wealth optimization strategies custom-built for builders, entrepreneurs, and high-net-worth professionals.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto bg-[#DFD7A5] text-[#2C3114] border-2 border-[#DFD7A5] hover:bg-transparent hover:text-[#DFD7A5] px-8 py-3.5 rounded-full text-xs font-bold tracking-[0.15em] flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
          >
            Schedule Consultation <ArrowUpRight size={15} />
          </button>
          
          <button
            onClick={() => onNavigate('about')}
            className="w-full sm:w-auto px-6 py-4 text-xs font-bold tracking-[0.15em] text-[#F6F6F2]/70 hover:text-[#DFD7A5] hover:scale-105 transition-all duration-300 uppercase flex items-center justify-center gap-1.5 cursor-pointer"
          >
            Learn Our Philosophy
          </button>
        </motion.div>

        {/* Subtle trust metrics footer banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 sm:mt-24 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#DFD7A5]/10 rounded-lg text-[#DFD7A5] mt-0.5">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-white mb-0.5">Compliance Aligned</h4>
              <p className="text-xs text-[#F6F6F2]/70">NISM Certified analyst operating under SEBI compliant parameters.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#DFD7A5]/10 rounded-lg text-[#DFD7A5] mt-0.5">
              <TrendingUp size={18} />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-white mb-0.5">Zero Cookie-Cutter</h4>
              <p className="text-xs text-[#F6F6F2]/70">Bespoke portfolio blueprints centered around absolute capital preservation.</p>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 flex items-start gap-3 border-t md:border-t-0 pt-4 md:pt-0 border-white/10">
            <div className="p-2 bg-[#DFD7A5]/10 rounded-lg text-[#DFD7A5] mt-0.5">
              <span className="font-serif font-extrabold text-xs">Au</span>
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-white mb-0.5">Metal & Hedging Locks</h4>
              <p className="text-xs text-[#F6F6F2]/70">Structured diversification utilizing physical gold and direct metal hedging models.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
