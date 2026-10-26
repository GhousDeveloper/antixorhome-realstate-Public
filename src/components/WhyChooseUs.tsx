import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/realEstateData';

interface WhyChooseUsProps {
  onLearnMoreClick: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onLearnMoreClick }) => {
  const benefits = [
    'Curated premium listings',
    'Trusted & verified properties',
    'Expert guidance at every step',
    'Global properties, local support',
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Description & Benefits */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-800">
              WHY CHOOSE ANTIXORHOME
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mt-3 leading-[1.15]">
              More Than Just a <br />
              <span className="text-slate-800">Property Website</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
              We help you find the right property with confidence, comfort and complete support — from search to keys.
            </p>

            {/* Checklist */}
            <div className="mt-8 space-y-4">
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                    <CheckCircle2 className="w-4 h-4 fill-emerald-800 text-white" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-10">
              <button
                onClick={onLearnMoreClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#10382B] text-white hover:bg-[#164838] active:scale-95 transition-all text-sm font-semibold shadow-md group cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: High-rise Property Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-lg mx-auto aspect-3/4">
              <img
                src={IMAGES.highriseTower}
                alt="Modern luxury high-rise residential towers"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
