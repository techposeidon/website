/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId =
  | 'home'
  | 'about'
  | 'retail-features'
  | 'retail-fees'
  | 'corporate-structure'
  | 'corporate-fees'
  | 'testimonials'
  | 'login'
  | 'contact';

export interface Testimonial {
  id: number;
  rating: number;
  quote: string;
  author: string;
  role: string;
}

export interface Solution {
  id: string;
  num: string;
  title: string;
  description: string;
  icon: string;
}

export interface PainPoint {
  id: number;
  title: string;
  description: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}
