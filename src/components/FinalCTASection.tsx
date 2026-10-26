import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { IMAGES } from '../data/realEstateData';

interface FinalCTASectionProps {
  onGetStartedClick: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onGetStartedClick }) => {
  return (
    <section className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card Container structured with Replaceable Media Layer */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[380px] lg:min-h-[440px] flex items-center border border-white/20">
          {/* 
            REPLACEABLE CTA MEDIA LAYER:
            Keeps the coastal villa image modular so it can be swapped or made transparent
            to reveal the future background video.
          */}
          <div
            id="cta-media-layer"
            className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
            data-role="replaceable-media-layer"
          >
            {/* Scrim gradient for contrast while revealing the sunset penthouse background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#061712]/85 via-[#061712]/60 to-transparent" />
          </div>

          {/* CTA Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-amber-300">
              READY TO FIND YOUR DREAM PROPERTY?
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-3 leading-[1.15]">
              Let’s Make It Happen
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-200/90 leading-relaxed max-w-lg">
              Get personalized property recommendations and expert guidance — free, no obligation.
            </p>

            <div className="mt-8">
              <button
                onClick={onGetStartedClick}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#E8B042] text-slate-950 hover:bg-[#F2BC4E] active:scale-95 transition-all text-sm font-bold shadow-lg group cursor-pointer"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Floating script/badge on right */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-10 hidden sm:block">
            <div className="px-4 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 text-white/90 text-sm font-serif italic flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Your Dream Home Awaits</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
