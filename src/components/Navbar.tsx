/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, ArrowRight, Shield } from 'lucide-react';
import { PageId } from '../types';
// @ts-ignore
import logoImg from '../assets/Logo.png';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [retailDropdownOpen, setRetailDropdownOpen] = useState(false);
  const [corporateDropdownOpen, setCorporateDropdownOpen] = useState(false);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setRetailDropdownOpen(false);
    setCorporateDropdownOpen(false);
  };

  // Check if header backdrop should be dark based on active page
  const isDarkPage = currentPage !== 'home';

  return (
    <nav
      id="master-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isDarkPage
          ? 'bg-[#191919]/95 text-white border-neutral-800'
          : 'bg-[#F6F6F2]/95 text-[#191919] border-[#E5E5E5]'
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
          id="nav-logo"
        >
          <div className="w-9 h-9 flex items-center justify-center overflow-hidden">
            <img
              src={logoImg}
              alt="PlanPoseidon Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="font-serif font-semibold text-xl tracking-tight block">
              PlanPoseidon
            </span>
            <span className="text-[10px] font-sans uppercase tracking-[0.15em] block text-accent font-medium">
              Wealth Management
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold">
          <button
            onClick={() => handleNav('home')}
            className={`cursor-pointer hover:text-accent transition-colors ${
              currentPage === 'home' ? 'text-accent' : ''
            }`}
          >
            Home
          </button>
          
          <button
            onClick={() => handleNav('about')}
            className={`cursor-pointer hover:text-accent transition-colors ${
              currentPage === 'about' ? 'text-accent' : ''
            }`}
          >
            About Us
          </button>

          {/* Retail Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setRetailDropdownOpen(true)}
            onMouseLeave={() => setRetailDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-accent transition-colors py-2 cursor-pointer uppercase">
              Retail <span>▾</span>
            </button>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-48 mt-1 rounded-xl shadow-xl border overflow-hidden transition-all duration-200 ${
                retailDropdownOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2'
              } ${
                isDarkPage
                  ? 'bg-[#222222] border-neutral-800 text-white'
                  : 'bg-white border-neutral-200 text-[#191919]'
              }`}
            >
              <button
                onClick={() => handleNav('retail-features')}
                className={`w-full text-left px-5 py-3.5 text-xs hover:bg-accent hover:text-white transition-colors cursor-pointer block ${
                  currentPage === 'retail-features' ? 'text-accent font-bold' : ''
                }`}
              >
                Features
              </button>
              <button
                onClick={() => handleNav('retail-fees')}
                className={`w-full text-left px-5 py-3.5 text-xs hover:bg-accent hover:text-white transition-colors cursor-pointer block ${
                  currentPage === 'retail-fees' ? 'text-accent font-bold' : ''
                }`}
              >
                Fees Structure
              </button>
            </div>
          </div>

          {/* Corporate Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setCorporateDropdownOpen(true)}
            onMouseLeave={() => setCorporateDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-accent transition-colors py-2 cursor-pointer uppercase">
              Corporate <span>▾</span>
            </button>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-48 mt-1 rounded-xl shadow-xl border overflow-hidden transition-all duration-200 ${
                corporateDropdownOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2'
              } ${
                isDarkPage
                  ? 'bg-[#222222] border-neutral-800 text-white'
                  : 'bg-white border-neutral-200 text-[#191919]'
              }`}
            >
              <button
                onClick={() => handleNav('corporate-structure')}
                className={`w-full text-left px-5 py-3.5 text-xs hover:bg-accent hover:text-white transition-colors cursor-pointer block ${
                  currentPage === 'corporate-structure' ? 'text-accent font-bold' : ''
                }`}
              >
                Advisory Structure
              </button>
              <button
                onClick={() => handleNav('corporate-fees')}
                className={`w-full text-left px-5 py-3.5 text-xs hover:bg-accent hover:text-white transition-colors cursor-pointer block ${
                  currentPage === 'corporate-fees' ? 'text-accent font-bold' : ''
                }`}
              >
                Fees Architecture
              </button>
            </div>
          </div>

          <button
            onClick={() => handleNav('contact')}
            className={`cursor-pointer hover:text-accent transition-colors ${
              currentPage === 'contact' ? 'text-accent' : ''
            }`}
          >
            Contact Us
          </button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleNav('login')}
            className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest inline-flex items-center justify-center gap-1.5 transition-all duration-300 font-bold cursor-pointer border-2 ${
              isDarkPage
                ? 'bg-white text-[#191919] border-white hover:bg-transparent hover:text-white'
                : 'bg-accent text-white border-accent hover:bg-transparent hover:text-accent'
            }`}
          >
            Login <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden w-full border-t border-b overflow-y-auto max-h-[85vh] py-6 px-6 ${
            isDarkPage
              ? 'bg-[#191919] text-white border-neutral-800'
              : 'bg-[#F6F6F2] text-[#191919] border-neutral-200'
          }`}
        >
          <div className="flex flex-col gap-5 text-sm uppercase tracking-wider font-semibold">
            <button
              onClick={() => handleNav('home')}
              className="text-left py-2 hover:text-accent transition-colors cursor-pointer"
            >
              Home
            </button>
            
            <button
              onClick={() => handleNav('about')}
              className="text-left py-2 hover:text-accent transition-colors cursor-pointer"
            >
              About Us
            </button>

            {/* Mobile Retail Section */}
            <div className="border-l-2 border-accent/40 pl-4 py-1 flex flex-col gap-3">
              <span className="text-[10px] text-accent font-bold tracking-widest block">
                Retail Division
              </span>
              <button
                onClick={() => handleNav('retail-features')}
                className="text-left text-xs uppercase hover:text-accent transition-colors cursor-pointer"
              >
                • Offerings & Features
              </button>
              <button
                onClick={() => handleNav('retail-fees')}
                className="text-left text-xs uppercase hover:text-accent transition-colors cursor-pointer"
              >
                • Fee Alignment
              </button>
            </div>

            {/* Mobile Corporate Section */}
            <div className="border-l-2 border-accent/40 pl-4 py-1 flex flex-col gap-3">
              <span className="text-[10px] text-accent font-bold tracking-widest block">
                Corporate Division
              </span>
              <button
                onClick={() => handleNav('corporate-structure')}
                className="text-left text-xs uppercase hover:text-accent transition-colors cursor-pointer"
              >
                • Advisory Structure
              </button>
              <button
                onClick={() => handleNav('corporate-fees')}
                className="text-left text-xs uppercase hover:text-accent transition-colors cursor-pointer"
              >
                • Fees Architecture
              </button>
            </div>

            <button
              onClick={() => handleNav('contact')}
              className="text-left py-2 hover:text-accent transition-colors cursor-pointer"
            >
              Contact Us
            </button>

            <button
              onClick={() => handleNav('login')}
              className="w-full text-center py-4 bg-accent text-white rounded-xl font-bold tracking-widest text-xs cursor-pointer flex items-center justify-center gap-2 mt-2 shadow-md"
            >
              Client Login <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
