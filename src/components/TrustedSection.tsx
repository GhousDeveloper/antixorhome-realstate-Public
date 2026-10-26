import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { IMAGES } from '../data/realEstateData';

interface TrustedSectionProps {
  onReadSuccessStories: () => void;
}

export const TrustedSection: React.FC<TrustedSectionProps> = ({ onReadSuccessStories }) => {
  return (
    <section className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Container with Replaceable Media Layer */}
        <div className="relative rounded-3xl bg-[#071D16] text-white overflow-hidden shadow-2xl border border-emerald-950">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content Column */}
            <div className="p-8 sm:p-12 lg:p-16 lg:col-span-5 z-10">
              <span className="text-xs font-bold tracking-widest uppercase text-amber-400">
                REAL PEOPLE, REAL STORIES
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-3 leading-[1.15]">
                Trusted by Thousands <br />
                <span className="text-slate-100">of Home Seekers</span>
              </h2>

              <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed max-w-md">
                From first-time buyers to global investors, our clients find their perfect property with AntixorHome.
              </p>

              <div className="mt-8">
                <button
                  onClick={onReadSuccessStories}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#E8B042] text-slate-950 hover:bg-[#F2BC4E] active:scale-95 transition-all text-sm font-bold shadow-md group cursor-pointer"
                >
                  <span>Read Success Stories</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Media Column: Replaceable Image Container for future video */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[480px]">
              {/* Replaceable Media Layer */}
              <div
                id="trusted-media-layer"
                className="absolute inset-0 w-full h-full overflow-hidden"
                data-role="replaceable-media-layer"
              >
                <img
                  src={IMAGES.trustedMansion}
                  alt="Contemporary luxury illuminated mansion at dusk"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#071D16] via-transparent to-transparent hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071D16] via-transparent to-transparent lg:hidden" />
              </div>

              {/* Floating 98% Client Satisfaction Element */}
              <div className="absolute top-6 right-6 sm:top-10 sm:right-10 z-20">
                <div className="bg-[#09241B]/95 backdrop-blur-md border border-emerald-700/60 rounded-2xl p-4 sm:p-5 text-center shadow-xl">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums tracking-tight">
                    98%
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-200 mt-0.5">
                    Client Satisfaction
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-2 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
