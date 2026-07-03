/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, ShieldCheck, Target, Award, ArrowUpRight, Play, Briefcase, Zap, CalendarDays } from 'lucide-react';
import { PageId } from '../types';

interface PricingProps {
  section: 'retail-features' | 'retail-fees' | 'corporate-structure' | 'corporate-fees';
  onNavigate: (page: PageId) => void;
}

export default function Pricing({ section, onNavigate }: PricingProps) {
  return (
    <div className="w-full">
      {/* ======================================================== */}
      {/* VIEW 1: RETAIL FEATURES OFFERINGS                        */}
      {/* ======================================================== */}
      {section === 'retail-features' && (
        <div>
          <header className="bg-bg-dark text-white text-center py-20 px-6 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,83,36,0.15),transparent_50%)]" />
            <div className="max-w-4xl mx-auto relative z-10">
              <span className="inline-block px-3 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-4">
                Private Division
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.2] mb-6">
                Comprehensive Financial Planning
              </h1>
              <p className="font-sans text-[#AAA] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Custom execution tracks mapping out private capital optimization avenues for family portfolios and high earners.
              </p>
            </div>
          </header>

          <section className="max-w-6xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '📊',
                  title: 'Comprehensive Financial Planning',
                  desc: 'A holistic approach to your financial goals, covering all strategic vectors of your dynamic wealth journey.'
                },
                {
                  icon: '📈',
                  title: 'Portfolio Construction',
                  desc: 'Building highly diversified portfolios custom-tailored to your target risk threshold and profile requirements.'
                },
                {
                  icon: '🎯',
                  title: 'Asset Allocation',
                  desc: 'Strategic structural distribution of investment capital across asset pools to buffer volatile market periods.'
                },
                {
                  icon: '🛡️',
                  title: 'Investment Monitoring',
                  desc: 'Continuous parameter tracking to preserve capital assets and flag optimization loops immediately.'
                },
                {
                  icon: '🔄',
                  title: 'Quarterly Reviews',
                  desc: 'Systematic milestone adjustments ensuring that allocation profiles remain aligned with systemic parameters.'
                },
                {
                  icon: '💎',
                  title: 'Goal-Based Wealth Planning',
                  desc: 'Customized milestone roadmaps locking in liquidity requirements matching specific life goals.'
                }
              ].map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] hover:border-accent/45 transition-all duration-300"
                >
                  <div className="text-4xl mb-6">{feat.icon}</div>
                  <h3 className="font-sans font-bold text-lg text-[#191919] mb-3">{feat.title}</h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-accent/5 rounded-3xl p-8 sm:p-12 border border-accent/15 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h4 className="font-sans font-bold text-[#191919] text-lg mb-2">Ready to secure your personal capital?</h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  We look forward to analyzing your personal holdings, metal lock configurations, and wealth safety parameters.
                </p>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="btn btn-solid w-full md:w-auto shrink-0 justify-center"
              >
                Schedule Introduction &rarr;
              </button>
            </div>
          </section>
        </div>
      )}

      {/* ======================================================== */}
      {/* VIEW 2: RETAIL FEES SCHEDULE                             */}
      {/* ======================================================== */}
      {section === 'retail-fees' && (
        <div>
          <header className="bg-bg-dark text-white text-center py-20 px-6 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(77,83,36,0.15),transparent_50%)]" />
            <div className="max-w-4xl mx-auto relative z-10">
              <span className="inline-block px-3 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-4">
                Retail Fees Alignment
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.2] mb-6">
                Plan | Fees | Work
              </h1>
              <p className="font-sans text-[#AAA] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                At Poseidon Wealth Planners, we believe our success should be explicitly and unconditionally aligned with our clients' success.
              </p>
            </div>
          </header>

          <section className="max-w-5xl mx-auto px-6 py-20">
            {/* Massive Annual Rate Display Badge */}
            <div className="bg-white border-2 border-accent rounded-3xl p-10 sm:p-16 text-center max-w-2xl mx-auto mb-16 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-accent" />
              <h3 className="font-sans font-bold text-accent text-sm uppercase tracking-[0.15em] mb-4">
                Annual Advisory Fee
              </h3>
              <div className="font-serif text-7xl sm:text-8xl font-bold text-[#191919] tracking-tight mb-2">
                2%
              </div>
              <p className="font-sans text-neutral-500 font-medium text-sm sm:text-base">
                per annum of Assets Under Advisory (AUA)
              </p>
              <div className="mt-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 text-accent text-xs font-semibold">
                <ShieldCheck size={14} /> Full Custody Integrity
              </div>
            </div>

            {/* Split Service Lists */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm">
                <h4 className="font-sans font-bold text-sm text-[#191919] uppercase tracking-wider mb-6 pb-2 border-b border-neutral-100">
                  Included in standard retainer:
                </h4>
                <ul className="space-y-4">
                  {[
                    'Comprehensive Financial Planning Integration',
                    'Strategic Portfolio Allocation Construction',
                    'Direct Asset & Equities Risk Assessments',
                    'Continual Capital Monitoring Protocols'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-600">
                      <Check size={16} className="text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm">
                <h4 className="font-sans font-bold text-sm text-[#191919] uppercase tracking-wider mb-6 pb-2 border-b border-neutral-100">
                  Specialized Premium Add-ons:
                </h4>
                <ul className="space-y-4">
                  {[
                    'Quarterly Performance Auditing Reports',
                    'Discrete Metal and Commodities Allocation Checks',
                    'Goal-Based Future Capitalization Mapping',
                    'Continual Dynamic Advisory Access'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-600">
                      <Check size={16} className="text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Special Disclosures Box */}
            <div className="bg-white border-l-4 border-accent p-6 rounded-r-xl shadow-sm mb-16">
              <h4 className="font-sans font-bold text-[#191919] text-sm mb-2">Performance-Based Mandates</h4>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                For select high-conviction mandates, an additional, strictly defined performance-linked fee structure may apply if portfolio returns exceed predetermined, compliant hurdles.
              </p>
            </div>

            {/* Suitability guidelines */}
            <div className="bg-[#191919] text-white p-8 sm:p-12 rounded-2xl text-center">
              <h4 className="font-serif text-lg text-accent font-semibold mb-6">Designed Specifically For:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-xs sm:text-sm font-medium">
                <div className="p-4 bg-[#222222] rounded-xl border border-neutral-800">• High Earner Professionals</div>
                <div className="p-4 bg-[#222222] rounded-xl border border-neutral-800">• HNIs & UHNI Families</div>
                <div className="p-4 bg-[#222222] rounded-xl border border-neutral-800">• Business Founders</div>
                <div className="p-4 bg-[#222222] rounded-xl border border-neutral-800">• Strategic Corporates</div>
                <div className="p-4 bg-[#222222] rounded-xl border border-neutral-800">• Capital Preservation Lists</div>
                <div className="p-4 bg-[#222222] rounded-xl border border-neutral-800">• Non-Resident Indians (NRIs)</div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ======================================================== */}
      {/* VIEW 3: CORPORATE TIMELINE STRUCTURES                    */}
      {/* ======================================================== */}
      {section === 'corporate-structure' && (
        <div>
          <header className="bg-bg-dark text-white text-center py-20 px-6 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(77,83,36,0.15),transparent_50%)]" />
            <div className="max-w-4xl mx-auto relative z-10">
              <span className="inline-block px-3 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-4">
                Corporate Framework
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.2] mb-6">
                Advisory Architecture
              </h1>
              <p className="font-sans text-[#AAA] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Our structured timeline mapping approach applied systematically across corporate growth frameworks and capitalization events.
              </p>
            </div>
          </header>

          <section className="max-w-6xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Engagement 1: Startup Advisory */}
              <div>
                <div className="flex items-center gap-3 mb-8 border-b-2 border-accent pb-3">
                  <Zap className="text-accent" size={24} />
                  <h2 className="font-serif text-2xl text-[#191919] font-medium">
                    Startup Consulting Engagement
                  </h2>
                </div>
                
                <div className="relative border-l border-neutral-200 pl-8 space-y-10">
                  {[
                    {
                      num: '1',
                      title: 'Discovery & Assessment',
                      desc: 'Logging operational metrics, operational runway metrics, and defining the target structural scaling parameters.'
                    },
                    {
                      num: '2',
                      title: 'Strategy Development',
                      desc: 'Constructing monetization models, target funding projections, equity pools, and valuation metrics schemas.'
                    },
                    {
                      num: '3',
                      title: 'Implementation Planning',
                      desc: 'Structuring execution milestones, pitch deck materials, and direct venture investor pipelines.'
                    },
                    {
                      num: '4',
                      title: 'Execution Support',
                      desc: 'Hands-on negotiation advisory, term sheet evaluations, and capitalization events management.'
                    },
                    {
                      num: '5',
                      title: 'Growth Monitoring',
                      desc: 'Deploying milestone audits, optimization protocols, and continuous financial health metrics validation.'
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* Node circle */}
                      <span className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-sans font-bold text-xs shadow-md">
                        {step.num}
                      </span>
                      <div className="bg-white p-6 rounded-xl border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                        <h4 className="font-sans font-bold text-sm text-[#191919] mb-1.5">{step.title}</h4>
                        <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-neutral-400 italic mt-8 text-center">
                  * Compensation operates on strategic advisory equity allocations to optimize early-stage capital.
                </p>
              </div>

              {/* Engagement 2: M&A Advisory */}
              <div>
                <div className="flex items-center gap-3 mb-8 border-b-2 border-accent pb-3">
                  <Briefcase className="text-accent" size={24} />
                  <h2 className="font-serif text-2xl text-[#191919] font-medium">
                    M&A Advisory Process
                  </h2>
                </div>

                <div className="relative border-l border-neutral-200 pl-8 space-y-10">
                  {[
                    {
                      num: '1',
                      title: 'Consultation & Needs Assessment',
                      desc: 'Defining target structural exit objectives, dynamic corporate valuations, and liquidity parameters.'
                    },
                    {
                      num: '2',
                      title: 'Target Identification & Evaluation',
                      desc: 'Comprehensive market research mapping, target company evaluations, and risk mitigation profiles.'
                    },
                    {
                      num: '3',
                      title: 'Valuation & Deal Structuring',
                      desc: 'Formulating cash-flow projection matrix models, capital structuring parameters, and draft Letter of Intent (LOI) documents.'
                    },
                    {
                      num: '4',
                      title: 'Due Diligence & Negotiation',
                      desc: 'Rigorous accounting, regulatory, and corporate diligence, paired with hands-on transaction terms negotiations.'
                    },
                    {
                      num: '5',
                      title: 'Transaction Closing & Support',
                      desc: 'Coordinating legal executions, final capital payouts, and post-merger integration planning.'
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* Node circle */}
                      <span className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-sans font-bold text-xs shadow-md">
                        {step.num}
                      </span>
                      <div className="bg-white p-6 rounded-xl border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                        <h4 className="font-sans font-bold text-sm text-[#191919] mb-1.5">{step.title}</h4>
                        <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-neutral-400 italic mt-8 text-center">
                  * Compensations are structured on a transaction success basis, aligning advisor incentives.
                </p>
              </div>

            </div>
          </section>
        </div>
      )}

      {/* ======================================================== */}
      {/* VIEW 4: CORPORATE FEES STRUCTURE                         */}
      {/* ======================================================== */}
      {section === 'corporate-fees' && (
        <div>
          <header className="bg-bg-dark text-white text-center py-20 px-6 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(77,83,36,0.15),transparent_50%)]" />
            <div className="max-w-4xl mx-auto relative z-10">
              <span className="inline-block px-3 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-4">
                Corporate Compensation
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.2] mb-6">
                Strategic Fees & Execution
              </h1>
              <p className="font-sans text-[#AAA] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Strategic growth alignment and premium transaction advisory for corporate ecosystems at every stage of their institutional development.
              </p>
            </div>
          </header>

          <section className="max-w-5xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Card A: Startup Consulting Plan */}
              <div className="bg-white rounded-2xl border border-neutral-150 p-8 sm:p-12 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-accent uppercase block mb-3">
                    Corporate Program 01
                  </span>
                  <h3 className="font-serif text-3xl text-[#191919] mb-4">
                    🚀 Startup Consulting
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed mb-8">
                    Fully optimized for early-stage and high-growth operators seeking validation, strategic capital planning, and fundraising readiness.
                  </p>
                  
                  <div className="h-[1px] bg-neutral-100 my-6" />

                  <h5 className="font-sans font-bold text-xs text-[#191919] uppercase tracking-wider mb-4">
                    Included Workflows:
                  </h5>
                  <ul className="space-y-3 mb-10 text-xs sm:text-sm text-neutral-600">
                    <li className="flex items-center gap-2.5">
                      <Check size={15} className="text-accent shrink-0" />
                      <span>Corporate Monetization Strategy Optimization</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={15} className="text-accent shrink-0" />
                      <span>Fundraising Blueprinting & Material Audits</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={15} className="text-accent shrink-0" />
                      <span>Financial Projections & Modeling</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={15} className="text-accent shrink-0" />
                      <span>Direct Venture Networks Integrations</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#F6F6F2] p-6 rounded-xl border border-neutral-200 text-center">
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block mb-1">
                    Retainer Alignment
                  </span>
                  <div className="font-serif text-3xl font-bold text-accent">
                    5% - 10% Equity
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    Or custom structured advisory options
                  </p>
                </div>
              </div>

              {/* Card B: M&A Advisory Plan */}
              <div className="bg-white rounded-2xl border border-neutral-150 p-8 sm:p-12 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-accent uppercase block mb-3">
                    Corporate Program 02
                  </span>
                  <h3 className="font-serif text-3xl text-[#191919] mb-4">
                    🏢 M&A Advisory
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed mb-8">
                    Constructed for mid-market ecosystems seeking target mappings, transaction structures, buy-side or sell-side closures.
                  </p>
                  
                  <div className="h-[1px] bg-neutral-100 my-6" />

                  <h5 className="font-sans font-bold text-xs text-[#191919] uppercase tracking-wider mb-4">
                    Included Workflows:
                  </h5>
                  <ul className="space-y-3 mb-10 text-xs sm:text-sm text-neutral-600">
                    <li className="flex items-center gap-2.5">
                      <Check size={15} className="text-accent shrink-0" />
                      <span>Ecosystem Mapping & Target Valuation</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={15} className="text-accent shrink-0" />
                      <span>LOI Formulations & Structural Terms Layout</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={15} className="text-accent shrink-0" />
                      <span>Comprehensive Deal Pipeline Diligence</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={15} className="text-accent shrink-0" />
                      <span>Post-Transaction Integration Frameworks</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#F6F6F2] p-6 rounded-xl border border-neutral-200 text-center">
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block mb-1">
                    Execution Fee Model
                  </span>
                  <div className="font-serif text-3xl font-bold text-accent">
                    Success-Based Fee
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    Calculated strictly on final transaction value
                  </p>
                </div>
              </div>

            </div>
          </section>
        </div>
      )}
    </div>
  );
}
