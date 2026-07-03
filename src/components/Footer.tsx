/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Award, ShieldAlert } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="w-full bg-[#191919] text-white">
      
      {/* Contact retain box at the top of the footer */}
      <section className="bg-[#F6F6F2] text-[#191919] py-16 px-6 border-t border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-[#191919] mb-4">
              Ready to discuss your financial goals? Let's connect.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed">
              The best way to determine if we are the right fit is through a brief, discrete, no-obligation consultation.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="mt-8 btn btn-outline px-6 py-3.5 text-xs font-bold tracking-wider uppercase cursor-pointer flex items-center gap-1.5"
            >
              Schedule Consultation Retainer &rarr;
            </button>
          </div>

          <div className="bg-accent text-white p-8 sm:p-10 rounded-2xl w-full lg:w-auto lg:min-w-[380px] shadow-lg shrink-0">
            <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#F6F6F2] mb-6 border-b border-white/10 pb-3">
              Discrete Routing Info
            </h4>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-[#F6F6F2] shrink-0 mt-1" />
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-white/50 mb-1">Direct Advisor Line</span>
                  <p className="font-sans font-semibold text-sm sm:text-base">+91 88550 47265</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={18} className="text-[#F6F6F2] shrink-0 mt-1" />
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-white/50 mb-1">Encrypted Email Channel</span>
                  <p className="font-sans font-semibold text-sm sm:text-base">planpotentia@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-[#F6F6F2] shrink-0 mt-1" />
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-white/50 mb-1">Headquarters</span>
                  <p className="font-sans font-semibold text-sm">India | Servicing Global Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main footer column linkages */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Brand identity column */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-serif text-white font-bold text-base">
              P
            </div>
            <span className="font-serif font-bold text-lg tracking-tight">PlanPoseidon</span>
          </div>
          <p className="font-sans text-xs text-neutral-400 leading-relaxed max-w-sm">
            Combining a rigorous research analyst's mindset with deep private wealth allocation expertise to custom-architect lasting wealth portfolios.
          </p>
        </div>

        {/* Middle Column: Certifications */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-sans font-bold text-[10px] uppercase tracking-[0.25em] text-neutral-500">
            Certifications
          </h4>
          <div className="space-y-3 text-xs text-neutral-300">
            <div className="flex items-start gap-2">
              <span className="text-accent font-bold text-sm shrink-0 leading-none">✓</span>
              <span>NISM Certified Research Analyst</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-accent font-bold text-sm shrink-0 leading-none">✓</span>
              <span>SEBI Compliant Fee Structures</span>
            </div>
          </div>
        </div>

        {/* Navigation linkages */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-sans font-bold text-[10px] uppercase tracking-[0.25em] text-neutral-500">
            Gateway Routes
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="space-y-2 flex flex-col">
              <button onClick={() => onNavigate('home')} className="text-left text-neutral-400 hover:text-white transition-colors cursor-pointer">Home</button>
              <button onClick={() => onNavigate('about')} className="text-left text-neutral-400 hover:text-white transition-colors cursor-pointer">About Us</button>
              <button onClick={() => onNavigate('testimonials')} className="text-left text-neutral-400 hover:text-white transition-colors cursor-pointer">Reviews</button>
            </div>
            <div className="space-y-2 flex flex-col">
              <button onClick={() => onNavigate('contact')} className="text-left text-neutral-400 hover:text-white transition-colors cursor-pointer">Intake</button>
              <button onClick={() => onNavigate('login')} className="text-left text-neutral-400 hover:text-white transition-colors cursor-pointer">Vault Portal</button>
              <span className="text-left text-neutral-500 hover:text-white transition-colors">Disclosures</span>
            </div>
          </div>
        </div>

      </div>

      {/* Disclaimers & Licensing */}
      <div className="border-t border-neutral-800 bg-[#141414] py-8 px-6 text-neutral-500 text-[10px] sm:text-xs">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p>© 2026 PlanPoseidon Wealth Planners. All rights reserved.</p>
          <p className="tracking-wide">
            Registered Under Udyam And Shop Act | GST No. 27CNTPC5892G1ZF
          </p>
        </div>
      </div>

    </footer>
  );
}
