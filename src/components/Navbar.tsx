import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, ArrowRight, User } from 'lucide-react';

import { AntixorLogo } from './AntixorLogo';

interface NavbarProps {
  favoriteCount: number;
  onOpenFavorites: () => void;
  onOpenLogin: () => void;
  onOpenGetStarted: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  favoriteCount,
  onOpenFavorites,
  onOpenLogin,
  onOpenGetStarted,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Properties', href: '#properties' },
    { name: 'About', href: '#lifestyle' },
    { name: 'Services', href: '#why-us' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-slate-200/80 text-slate-900'
          : 'bg-[#0E201B]/90 backdrop-blur-md py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md py-1"
          >
            <AntixorLogo lightMode={isScrolled} size="md" variant="navbar" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber-400 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm px-1 py-0.5 ${
                  isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Favorite button */}
            <button
              onClick={onOpenFavorites}
              className={`relative p-2 rounded-full transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-400 ${
                isScrolled
                  ? 'text-slate-700 hover:bg-slate-100 hover:text-rose-600'
                  : 'text-slate-200 hover:bg-white/10 hover:text-rose-400'
              }`}
              title="Saved Properties"
              aria-label="Saved Properties"
            >
              <Heart className={`w-5 h-5 ${favoriteCount > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
              {favoriteCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {favoriteCount}
                </span>
              )}
            </button>

            {/* Login */}
            <button
              onClick={onOpenLogin}
              className={`text-sm font-semibold transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-400 ${
                isScrolled
                  ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </button>

            {/* Gold Get Started Button */}
            <button
              onClick={onOpenGetStarted}
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-full bg-[#E8B042] text-slate-950 hover:bg-[#F2BC4E] active:scale-95 transition-all shadow-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenFavorites}
              className={`relative p-2 rounded-lg ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}
              aria-label="Favorites"
            >
              <Heart className={`w-5 h-5 ${favoriteCount > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
              {favoriteCount > 0 && (
                <span className="absolute 0 top-0.5 right-0.5 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {favoriteCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-400 ${
                isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0A1B16] text-white border-b border-emerald-950 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-3">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/10 flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenGetStarted();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#E8B042] text-slate-950 font-semibold text-sm hover:bg-[#F2BC4E]"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
