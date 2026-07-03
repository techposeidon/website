/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { ShieldCheck, Lock, Eye, EyeOff, Loader2, CheckCircle } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authorized, setAuthorized] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate high-security authentication check
    setTimeout(() => {
      setIsSubmitting(false);
      setAuthorized(true);
    }, 1800);
  };

  return (
    <div className="w-full">
      <header className="bg-bg-dark text-white text-center py-20 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(77,83,36,0.15),transparent_50%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block px-3 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-4">
            Security Vault
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.2] mb-6">
            Client Gateway
          </h1>
          <p className="font-sans text-[#AAA] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Authenticate credentials below to access private investment portfolios and secure financial reporting.
          </p>
        </div>
      </header>

      <section className="max-w-md mx-auto px-6 py-20">
        <div className="bg-white rounded-2xl border border-neutral-200 p-8 sm:p-10 shadow-lg relative overflow-hidden">
          {/* Top colored security banner */}
          <div className="absolute top-0 left-0 w-full h-1 bg-accent" />

          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 text-accent rounded-full text-[10px] font-bold uppercase tracking-wider">
              <Lock size={12} /> SECURE GATEWAY PORTAL
            </span>
          </div>

          {authorized ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="font-serif text-2xl text-[#191919] mb-3">Gateway Authorized</h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mb-6">
                Authentication key verified. Securing network tunnel...
              </p>
              <div className="inline-block px-4 py-2 bg-[#F6F6F2] rounded-lg border border-neutral-200 text-xs text-neutral-600 font-mono">
                SESSION_TOKEN: APPROVED_MOCK
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider">
                  Secure Authorized Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="client@planposeidon.com"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-250 rounded-xl font-sans text-sm focus:outline-none focus:border-accent focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider">
                    Password Parameters
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-xs text-accent hover:underline cursor-pointer"
                  >
                    {showPassword ? 'Hide Key' : 'Show Key'}
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-250 rounded-xl font-sans text-sm focus:outline-none focus:border-accent focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Options */}
              <div className="flex justify-between items-center text-xs font-semibold text-neutral-500">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input type="checkbox" className="rounded text-accent focus:ring-accent border-neutral-300 w-4 h-4" />
                  <span>Remember Access</span>
                </label>
                <button
                  type="button"
                  onClick={() => alert('Verification reset instructions sent to registered secondary channels.')}
                  className="text-accent hover:underline cursor-pointer"
                >
                  Reset Credentials?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-accent text-white rounded-xl font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-2 transition-all hover:bg-opacity-95 shadow-md active:scale-[0.98] cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Initializing Authorization Key...
                  </>
                ) : (
                  'Initialize Authorization Key'
                )}
              </button>
            </form>
          )}
        </div>
        
        <p className="text-[10px] text-center text-neutral-400 mt-8 leading-relaxed uppercase tracking-wider">
          All connection packets are logged for absolute audit integrity. <br />
          Protected under 256-bit SSL protocols.
        </p>
      </section>
    </div>
  );
}
