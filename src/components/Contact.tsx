/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { ShieldCheck, Mail, Phone, Calendar, Loader2, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [window, setWindow] = useState('Weekday mornings, 9 AM - 12 PM IST');
  const [agreement, setAgreement] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!agreement) {
      alert('Please accept the processing protocols to continue.');
      return;
    }
    
    setIsSubmitting(true);
    // Simulate secure logging
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1800);
  };

  return (
    <div className="w-full">
      <header className="bg-bg-dark text-white text-center py-20 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(77,83,36,0.15),transparent_50%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block px-3 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-4">
            Intake Portal
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.2] mb-6">
            Start Your Financial Journey
          </h1>
          <p className="font-sans text-[#AAA] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Share your structural parameters below and our private wealth analyst will coordinate discrete contact channels.
          </p>
        </div>
      </header>

      <section className="max-w-2xl mx-auto px-6 py-20">
        <div className="bg-white rounded-2xl border border-neutral-250 p-8 sm:p-12 shadow-xl relative overflow-hidden">
          {/* Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-accent" />

          {/* Security Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#4D5324]/10 text-accent rounded-md text-[10px] font-semibold uppercase tracking-wider">
              🔒 256-bit SSL Encrypted
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#4D5324]/10 text-accent rounded-md text-[10px] font-semibold uppercase tracking-wider">
              🛡️ Data Protection Active
            </span>
          </div>

          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-accent/15 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#191919] mb-4">Transmission Logged</h3>
              <p className="font-sans text-xs sm:text-sm text-neutral-500 max-w-md mx-auto leading-relaxed mb-8">
                Your request has been securely dispatched over SSL tunnels. A private advisory coordinator will review your parameters and connect with your channels within 24 working hours.
              </p>
              <div className="p-4 bg-bg-light rounded-xl border border-neutral-200 inline-block font-mono text-[11px] text-neutral-600">
                DISPATCH_STATUS: SECURE_QUEUE_OK
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Full Name field */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider">
                  Full Name Identity *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-neutral-400">
                    <CheckCircle2 size={16} />
                  </span>
                  <input
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full pl-11 pr-4 py-3 bg-neutral-50 border border-neutral-250 rounded-xl font-sans text-sm focus:outline-none focus:border-accent focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider">
                  Secure Email Route *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-neutral-400">
                    <Mail size={16} />
                  </span>
                  <input
                    type="email"
                    required
                    disabled={isSubmitting}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full pl-11 pr-4 py-3 bg-neutral-50 border border-neutral-250 rounded-xl font-sans text-sm focus:outline-none focus:border-accent focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Phone field */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider">
                  Active Telephone Number *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-neutral-400">
                    <Phone size={16} />
                  </span>
                  <input
                    type="tel"
                    required
                    disabled={isSubmitting}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 00000 00000"
                    className="w-full pl-11 pr-4 py-3 bg-neutral-50 border border-neutral-250 rounded-xl font-sans text-sm focus:outline-none focus:border-accent focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Selector field */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider">
                  Preferred Contact Target Windows
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-neutral-400">
                    <Calendar size={16} />
                  </span>
                  <select
                    disabled={isSubmitting}
                    value={window}
                    onChange={(e) => setWindow(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-neutral-50 border border-neutral-250 rounded-xl font-sans text-sm focus:outline-none focus:border-accent focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option>Weekday mornings, 9 AM - 12 PM IST</option>
                    <option>Weekday afternoons, 2 PM - 5 PM IST</option>
                    <option>Special scheduled alignment sessions</option>
                  </select>
                </div>
              </div>

              {/* Checkbox agreement */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer select-none text-xs text-neutral-500 leading-normal">
                  <input
                    type="checkbox"
                    required
                    disabled={isSubmitting}
                    checked={agreement}
                    onChange={(e) => setAgreement(e.target.checked)}
                    className="rounded text-accent focus:ring-accent border-neutral-300 w-4 h-4 mt-0.5"
                  />
                  <span>
                    I confirm that the details provided are accurate and I agree to the processing protocols.
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="py-4 bg-accent text-white rounded-xl font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-2 transition-all hover:bg-opacity-95 shadow-md cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Dispatching over SSL...
                    </>
                  ) : (
                    'Get Started &rarr;'
                  )}
                </button>
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => {
                    setName('');
                    setEmail('');
                    setPhone('');
                    setAgreement(false);
                  }}
                  className="py-4 bg-[#F6F6F2] hover:bg-neutral-200 text-neutral-600 rounded-xl font-bold tracking-widest text-xs uppercase transition-colors cursor-pointer text-center"
                >
                  Clear Fields
                </button>
              </div>

            </form>
          )}
        </div>
      </section>
    </div>
  );
}
