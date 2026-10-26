import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/realEstateData';

interface LifestyleSectionProps {
  onExploreClick: () => void;
}

export const LifestyleSection: React.FC<LifestyleSectionProps> = ({ onExploreClick }) => {
  return (
    <section id="lifestyle" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-800">
              LIFESTYLE & LIVING
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mt-3 leading-[1.15]">
              More Than a Home, <br />
              <span className="text-slate-800">It’s a Lifestyle</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-md">
              Explore beautiful spaces, modern designs and prime locations that match your lifestyle and dreams.
            </p>

            <div className="mt-8">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#10382B] text-white hover:bg-[#164838] active:scale-95 transition-all text-sm font-semibold shadow-md group cursor-pointer"
              >
                <span>Explore Properties</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Overlapping Real-Estate Lifestyle Collage */}
          <div className="lg:col-span-7 relative">
            {/* Organic dark green decorative backdrop circle */}
            <div className="absolute -top-6 left-12 w-32 h-32 rounded-full bg-[#10382B] -z-10 opacity-90 hidden sm:block" />
            
            {/* Stylized leaf / botanical accent */}
            <div className="absolute top-2 right-4 -z-10 hidden sm:block opacity-75">
              <svg width="48" height="64" viewBox="0 0 48 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 64V8M24 8C24 8 8 20 8 36C8 52 24 56 24 56M24 8C24 8 40 20 40 36C40 52 24 56 24 56" stroke="#10382B" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M24 22C16 26 12 34 12 34M24 34C16 38 12 44 12 44M24 22C32 26 36 34 36 34M24 34C32 38 36 44 36 44" stroke="#10382B" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            <div className="grid grid-cols-12 gap-4 sm:gap-6 items-center">
              {/* Top Collage Card: Villa Pool with "Prime Locations" Badge */}
              <div className="col-span-12 sm:col-span-8 sm:col-start-4 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white aspect-16/10">
                  <img
                    src={IMAGES.lifestylePool}
                    alt="Tropical luxury modern resort villa pool"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Floating Pill Badge */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="px-3 py-1 bg-[#10382B]/90 backdrop-blur-md text-white text-[11px] font-semibold rounded-md shadow-xs">
                      Prime Locations
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Center Card: Living Lounge with "Modern Living" Badge */}
              <div className="col-span-12 sm:col-span-7 relative sm:-mt-12 z-10">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-4/3">
                  <img
                    src={IMAGES.lifestyleLounge}
                    alt="Luxury interior living room lounge"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Bottom Center Pill Badge */}
                  <div className="absolute bottom-3 left-4">
                    <span className="px-3 py-1 bg-[#10382B]/90 backdrop-blur-md text-white text-[11px] font-semibold rounded-md shadow-xs">
                      Modern Living
                    </span>
                  </div>
                </div>
              </div>

              {/* Lower Right Card: Balcony with "Better Lifestyle" Badge */}
              <div className="col-span-12 sm:col-span-5 relative sm:-mt-8">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white aspect-4/5">
                  <img
                    src={IMAGES.lifestyleBalcony}
                    alt="Luxury apartment balcony overlooking the city at sunset"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Floating Pill Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 bg-[#10382B]/90 backdrop-blur-md text-white text-[10px] font-semibold rounded-md shadow-xs">
                      Better Lifestyle
                    </span>
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
