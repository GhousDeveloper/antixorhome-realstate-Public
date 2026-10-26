import React from 'react';
import { Heart, Bed, Bath, Maximize, ArrowRight } from 'lucide-react';
import { Property } from '../data/realEstateData';

interface FeaturedPropertiesProps {
  properties: Property[];
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectProperty: (property: Property) => void;
  onViewAllClick: () => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  favorites,
  onToggleFavorite,
  onSelectProperty,
  onViewAllClick,
}) => {
  // Show the 3 primary handpicked homes shown in the reference
  const displayedProperties = properties.slice(0, 3);

  return (
    <section id="properties" className="py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-800">
              FEATURED PROPERTIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
              Handpicked Homes <br />
              <span className="text-slate-800">Just for You</span>
            </h2>
          </div>

          <button
            onClick={onViewAllClick}
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 hover:text-emerald-700 transition-colors group cursor-pointer"
          >
            <span>View All Properties</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProperties.map((prop) => {
            const isFav = favorites.includes(prop.id);

            return (
              <div
                key={prop.id}
                onClick={() => onSelectProperty(prop)}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-md shadow-xs ${
                        prop.status === 'For Sale'
                          ? 'bg-[#155E45] text-white'
                          : 'bg-[#1E293B] text-white'
                      }`}
                    >
                      {prop.status}
                    </span>
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={(e) => onToggleFavorite(prop.id, e)}
                    className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-90"
                    title={isFav ? 'Remove from favorites' : 'Add to favorites'}
                    aria-label="Save property"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isFav ? 'fill-rose-500 text-rose-500' : 'text-white'
                      }`}
                    />
                  </button>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location Subtitle */}
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                      {prop.location}
                    </p>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mt-1 line-clamp-1 group-hover:text-emerald-800 transition-colors">
                      {prop.title}
                    </h3>

                    {/* Price */}
                    <div className="mt-3">
                      <span className="text-xl font-extrabold text-slate-900 tabular-nums">
                        {prop.price}
                      </span>
                    </div>
                  </div>

                  {/* Property Specs Divider & Row */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600 tabular-nums">
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-4 h-4 text-slate-400" />
                      <span>{prop.beds} Bed</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath className="w-4 h-4 text-slate-400" />
                      <span>{prop.baths} Bath</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Maximize className="w-4 h-4 text-slate-400" />
                      <span>{prop.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
