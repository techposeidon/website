/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TrendingUp, Laptop, BarChart3, Gem, DollarSign, FileText, Box } from 'lucide-react';
import { SOLUTIONS } from '../data';
import { PageId } from '../types';

interface SolutionsProps {
  onNavigate: (page: PageId) => void;
}

export default function Solutions({ onNavigate }: SolutionsProps) {
  // Map our static string key to its actual lucide-react component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'dollar':
        return <DollarSign size={22} className="text-white" />;
      case 'laptop':
        return <Laptop size={22} className="text-white" />;
      case 'file-text':
        return <FileText size={22} className="text-white" />;
      case 'box':
        return <Box size={22} className="text-white" />;
      default:
        return <TrendingUp size={22} className="text-white" />;
    }
  };

  return (
    <section className="bg-[#191919] text-white py-24 px-6 relative z-10 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h4 className="font-sans font-bold text-accent text-xs uppercase tracking-[0.25em] mb-3">Our Solutions</h4>
            <h2 className="font-serif text-3xl sm:text-5xl text-white leading-tight tracking-tight">
              Build your wealth, your way
            </h2>
          </div>
          <p className="font-sans text-neutral-400 text-sm sm:text-base max-w-sm leading-relaxed">
            Our private wealth and corporate advisory services provide highly optimized structures to preserve and deploy capital.
          </p>
        </div>

        {/* 2x2 Balanced Bento Grid with custom hover states */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="bg-[#222222] p-8 sm:p-12 rounded-2xl border border-neutral-800/80 hover:border-accent transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle accent hover indicator in background */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/15 transition-all duration-300" />
              
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs sm:text-sm font-sans font-semibold text-neutral-600 tracking-wider">
                  {sol.num}
                </span>
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 duration-300">
                  {getIcon(sol.icon)}
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-4 font-normal group-hover:text-accent transition-colors duration-300">
                {sol.title}
              </h3>
              
              <p className="font-sans text-xs sm:text-sm lg:text-base text-neutral-400 leading-relaxed mb-8">
                {sol.description}
              </p>

              {/* Action buttons directly linked to specific divisions */}
              <button
                onClick={() => {
                  if (sol.id === 'investment' || sol.id === 'alternative') {
                    onNavigate('retail-features');
                  } else {
                    onNavigate('corporate-structure');
                  }
                }}
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent hover:text-white transition-colors cursor-pointer"
              >
                Explore Offerings &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
