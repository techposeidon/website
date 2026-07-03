/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Solution, PainPoint, ProcessStep, Testimonial, FAQItem } from './types';

export const SOLUTIONS: Solution[] = [
  {
    id: 'investment',
    num: '01',
    title: 'Investment Strategy',
    description: 'Research-driven allocation across equities, metals, and alternative assets tailored to maximize long-term returns based on your risk profile.',
    icon: 'dollar'
  },
  {
    id: 'startup',
    num: '02',
    title: 'Startup Assistance',
    description: 'Strategic financial planning, management consulting, and operational optimization specifically designed for founders and emerging businesses.',
    icon: 'laptop'
  },
  {
    id: 'valuation',
    num: '03',
    title: 'Business Valuation',
    description: 'Comprehensive, metric-driven analysis and deep financial health assessments required for complex corporate advisory and M&A transactions.',
    icon: 'file-text'
  },
  {
    id: 'alternative',
    num: '04',
    title: 'Alternative Assets',
    description: 'Exclusive access to metal investments (Gold, Silver) and specialized hedging instruments typically unavailable to standard retail investors.',
    icon: 'box'
  }
];

export const PAIN_POINTS: PainPoint[] = [
  {
    id: 1,
    title: 'Your wealth strategy falls to the back-burner',
    description: 'Traditional firms force you into rigid, one-size-fits-all model portfolios without taking the time to understand your unique business baseline.'
  },
  {
    id: 2,
    title: "Traditional advisors don't understand you",
    description: 'They push generic products immediately and delay critical action on your portfolio due to manual, outdated bureaucratic processes.'
  },
  {
    id: 3,
    title: "You don't have time for complexity",
    description: "You're busy running operations. You need someone who speaks your language, tells it straight, and handles the intricate details."
  },
  {
    id: 4,
    title: 'Your net worth is tied up',
    description: 'Your net worth statement looks impressive, but most of it is locked in your business, exposing you to concentrated risk.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Discovery',
    description: 'We begin with in-depth conversations about your financial history, current situation, goals, and concerns. Discovery has meaning—we take the time to understand your baseline before ever suggesting an investment product.'
  },
  {
    id: 2,
    title: 'Strategic Planning',
    description: 'Every portfolio is designed specifically for you. No model portfolios. We construct a highly adaptive allocation strategy utilizing equities, metals, and alternative diversifications based on your individual risk appetite.'
  },
  {
    id: 3,
    title: 'Implementation',
    description: 'Once we are aligned on the strategy, I handle all aspects of implementation. Our focus remains strictly on capital preservation as our non-negotiable foundational principle while targeting sustainable growth.'
  },
  {
    id: 4,
    title: 'Ongoing Partnership',
    description: 'Our relationship continues with dynamic monitoring and regular check-ins. We respond to shifting global markets rapidly, adjusting your strategy to ensure it remains perfectly aligned with your evolving life.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 5,
    rating: 5,
    quote: 'As a retired individual it becomes very difficult to understand the new financial schemes and moves happening in the market, fortunately Poseidon was a very good choice, because it was a one stop solution to all financial management and the returns are very well aligned with the client.\nI wanted my funds to be safe and still grow so I got nearly 5 % return for the first quarter itself',
    author: 'Achyut Godbole',
    role: 'Retired Executive / Investor'
  },
  {
    id: 4,
    rating: 5,
    quote: 'He has shown outstanding returns even during global market crashes. Nearly got 8.5 percent returns in just 1 month of investing',
    author: 'Radhika Chitale',
    role: 'HNI Client'
  },
  {
    id: 1,
    rating: 5,
    quote: 'Poseidon Wealth Planners transformed our family wealth management approach. Their comprehensive planning and strategic advice have been invaluable.',
    author: 'Rajesh Kumar',
    role: 'Business Owner'
  },
  {
    id: 2,
    rating: 5,
    quote: 'The team at Poseidon provides exceptional advisory services. Their disciplined approach and alignment with client success sets them completely apart.',
    author: 'Priya Sharma',
    role: 'HNI Investor'
  },
  {
    id: 3,
    rating: 5,
    quote: 'Working with Poseidon on our startup consulting needs was a game-changer. Their strategic guidance and fundraising support models were outstanding.',
    author: 'Amit Patel',
    role: 'Entrepreneur'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: 'How much does it cost to work with you?',
    answer: 'For Investment Advisory, the typical fee ranges between 1.5% - 2.5% per annum of Assets Under Advisory (AUA), or a flat fee for specific targeted terms. For Startup Assistance, we operate on a flexible advisory equity model (usually 3% - 5%) to fully align ourselves with your growth trajectory.'
  },
  {
    id: 2,
    question: 'What makes you different from other wealth managers?',
    answer: 'We reject the industry standard of lazy, cookie-cutter "model portfolios". We custom-architect every portfolio from the ground up, incorporating direct metal allocations and operational hedges. Moreover, as an advisor to entrepreneurs, we analyze your corporate balance sheet alongside your personal assets for true total-wealth optimization.'
  },
  {
    id: 3,
    question: 'Are you certified to provide this advice?',
    answer: 'Yes, Atharva Chitale is a NISM (National Institute of Securities Markets) Certified Research Analyst. Our operations, strategic frameworks, and fee representations conform to standards and compliance parameters.'
  },
  {
    id: 4,
    question: 'Do you only work with clients in India?',
    answer: 'While our physical operations are based in India, we advise Indian expatriates (NRIs) and global clients seeking dedicated advisory services or emerging markets positioning.'
  }
];
