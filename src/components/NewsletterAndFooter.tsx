import React, { useState } from 'react';
import { ArrowRight, Mail, CheckCircle2 } from 'lucide-react';

import { AntixorLogo } from './AntixorLogo';

interface NewsletterAndFooterProps {
  onGetStartedClick: () => void;
  onSubscribe: (email: string) => void;
}

export const NewsletterAndFooter: React.FC<NewsletterAndFooterProps> = ({
  onGetStartedClick,
  onSubscribe,
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      onSubscribe(email);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  return (
    <footer id="contact" className="relative mt-8">
      {/* 1. Newsletter Banner Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-3xl bg-[#0B1E19] text-white p-8 sm:p-12 border border-emerald-950 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-widest uppercase text-amber-400">
                READY TO FIND YOUR DREAM PROPERTY?
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-2">
                Let’s Make It Happen
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-md">
                Get personalized property recommendations and expert guidance — free, no obligation.
              </p>
              <div className="mt-5">
                <button
                  onClick={onGetStartedClick}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E8B042] text-slate-950 hover:bg-[#F2BC4E] text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Newsletter Subscription */}
            <div className="lg:col-span-6 lg:pl-8 border-t lg:border-t-0 lg:border-l border-emerald-900/60 pt-6 lg:pt-0">
              <h4 className="text-base sm:text-lg font-bold text-white">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Get the latest property listings and real estate insights delivered straight to your inbox.
              </p>

              {isSubscribed ? (
                <div className="mt-4 p-3 bg-emerald-900/50 border border-emerald-600 rounded-xl flex items-center gap-2 text-xs text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Thank you for subscribing to AntixorHome updates!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribeSubmit} className="mt-4 flex items-center gap-2">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="w-full bg-[#071612] border border-emerald-800/80 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-hidden focus:border-amber-400 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-10 h-10 rounded-xl bg-[#E8B042] hover:bg-[#F2BC4E] text-slate-950 flex items-center justify-center shrink-0 transition-all active:scale-95 cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-8 border-t border-slate-200/80">
          {/* Brand info */}
          <div className="col-span-2">
            <AntixorLogo lightMode={true} size="md" variant="navbar" />
            <p className="mt-3 text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
              Curated luxury properties, modern architectural villas, and premier urban penthouses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><a href="#home" className="hover:text-emerald-800 transition-colors">Home</a></li>
              <li><a href="#properties" className="hover:text-emerald-800 transition-colors">Featured Properties</a></li>
              <li><a href="#lifestyle" className="hover:text-emerald-800 transition-colors">Lifestyle</a></li>
              <li><a href="#why-us" className="hover:text-emerald-800 transition-colors">Why Choose Us</a></li>
              <li><a href="#locations" className="hover:text-emerald-800 transition-colors">Locations</a></li>
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Properties
            </h5>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><a href="#properties" className="hover:text-emerald-800 transition-colors">Villas for Sale</a></li>
              <li><a href="#properties" className="hover:text-emerald-800 transition-colors">City Apartments</a></li>
              <li><a href="#properties" className="hover:text-emerald-800 transition-colors">Skyline Penthouses</a></li>
              <li><a href="#properties" className="hover:text-emerald-800 transition-colors">Rental Residences</a></li>
              <li><a href="#properties" className="hover:text-emerald-800 transition-colors">New Developments</a></li>
            </ul>
          </div>

          {/* Legal / Social */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Legal & Policy
            </h5>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><a href="#privacy" className="hover:text-emerald-800 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-emerald-800 transition-colors">Terms of Service</a></li>
              <li><a href="#sitemap" className="hover:text-emerald-800 transition-colors">Sitemap</a></li>
              <li><a href="#security" className="hover:text-emerald-800 transition-colors">Security & Trust</a></li>
            </ul>
          </div>
        </div>

        {/* 3. Bottom Bar matching reference */}
        <div className="pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            <span>© 2026 AntixorHome. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#terms" className="hover:text-slate-800 transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="#sitemap" className="hover:text-slate-800 transition-colors">Sitemap</a>
          </div>

          <div>
            <span>Designed with <span className="text-amber-500">💛</span> by Antixor</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
