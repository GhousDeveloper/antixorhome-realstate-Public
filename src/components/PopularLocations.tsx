import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { LOCATIONS_DATA, LocationItem } from '../data/realEstateData';

interface PopularLocationsProps {
  onSelectLocation: (city: string) => void;
  onViewAllLocations: () => void;
}

export const PopularLocations: React.FC<PopularLocationsProps> = ({
  onSelectLocation,
  onViewAllLocations,
}) => {
  return (
    <section id="locations" className="py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-800">
              POPULAR LOCATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2 leading-[1.2]">
              Explore the Best Places <br />
              <span className="text-slate-800">to Live Around the World</span>
            </h2>
          </div>

          <button
            onClick={onViewAllLocations}
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 hover:text-emerald-700 transition-colors group cursor-pointer"
          >
            <span>View All Locations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {LOCATIONS_DATA.map((loc: LocationItem) => (
            <div
              key={loc.id}
              onClick={() => onSelectLocation(loc.city)}
              className="group relative rounded-2xl overflow-hidden aspect-3/4 sm:aspect-4/5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200/60"
            >
              {/* City Photo */}
              <img
                src={loc.image}
                alt={`${loc.city}, ${loc.country}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

              {/* Top property count chip on hover */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-semibold rounded-md flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-300" />
                  <span>{loc.badge}</span>
                </span>
              </div>

              {/* Bottom Label */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {loc.city}
                </h3>
                <p className="text-xs font-medium text-slate-300">
                  {loc.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
