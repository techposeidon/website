/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Pricing from './components/Pricing';
import Login from './components/Login';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="w-full">
            <Hero onNavigate={handleNavigate} />
            <About onNavigate={handleNavigate} />
            <Solutions onNavigate={handleNavigate} />
            <Process />
            <Testimonials />
            <Faq />
          </div>
        );
      case 'about':
        return <About onNavigate={handleNavigate} standalone={true} />;
      case 'retail-features':
        return <Pricing section="retail-features" onNavigate={handleNavigate} />;
      case 'retail-fees':
        return <Pricing section="retail-fees" onNavigate={handleNavigate} />;
      case 'corporate-structure':
        return <Pricing section="corporate-structure" onNavigate={handleNavigate} />;
      case 'corporate-fees':
        return <Pricing section="corporate-fees" onNavigate={handleNavigate} />;
      case 'testimonials':
        return <Testimonials standalone={true} />;
      case 'login':
        return <Login />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-bg-light font-sans text-text-dark">
      {/* Header and Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main viewport area with animated page transitions */}
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            {renderPageContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Unified professional footer matrix */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
