import React, { useState } from 'react';
import {
  MapPin,
  Building,
  DollarSign,
  Search,
  ShieldCheck,
  UserCheck,
  Sparkles,
  Globe2,
} from 'lucide-react';
import { IMAGES } from '../data/realEstateData';
import antixorLogoImg from '@/src/assets/images/antixor_home_logo_1792695934191.jpg';

interface HeroProps {
  onSearch: (filters: { location: string; type: string; price: string }) => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onExploreClick }) => {
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      location: selectedLocation,
      type: selectedType,
      price: selectedPrice,
    });
  };

  return (
    <section id="home" className="relative w-full overflow-hidden">
      {/* 
        HERO WRAPPER CONTAINER:
        Structured for future video background compatibility.
        Contains the replaceable visual layer below.
      */}
      <div className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center">
        {/* 
          REPLACEABLE HERO MEDIA LAYER:
          When the user integrates the scrolling video background, this layer can be toggled
          or made transparent without modifying any of the text, layout, or search components.
        */}
        <div
          id="hero-media-layer"
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
          data-role="replaceable-media-layer"
        >
          {/* Measured architectural scrim gradient ensuring WCAG AA contrast for headline & search while revealing video */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061712]/80 via-[#071c16]/50 to-transparent" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#061712]/15 to-[#061712]/60" />
        </div>

        {/* HERO CONTENT LAYER (z-10) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            {/* Top Tag / Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wide text-amber-300 uppercase mb-6">
              <img
                src={antixorLogoImg}
                alt="Antixor Home"
                className="w-4 h-4 rounded-full object-cover border border-amber-400/50"
              />
              <span>Antixor Home · Find Your Dream Property</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Modern Homes <br />
              <span className="text-white">for a Better Future.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-200/90 max-w-xl leading-relaxed mb-10">
              Discover premium properties, connect with trusted agents, and find the perfect place to call home — anywhere in the world.
            </p>

            {/* Large Property Search Component */}
            <div className="w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/40 mb-12">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                {/* 1. Location */}
                <div className="md:col-span-4 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-3 border border-transparent hover:border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label htmlFor="hero-location" className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Location
                    </label>
                    <select
                      id="hero-location"
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-hidden cursor-pointer truncate"
                    >
                      <option value="All">City, Area or Country</option>
                      <option value="Los Angeles">Los Angeles, USA</option>
                      <option value="London">London, UK</option>
                      <option value="Dubai">Dubai, UAE</option>
                      <option value="Sydney">Sydney, Australia</option>
                      <option value="Mallorca">Mallorca, Spain</option>
                    </select>
                  </div>
                </div>

                {/* 2. Property Type */}
                <div className="md:col-span-4 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-3 border border-transparent hover:border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label htmlFor="hero-type" className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Property Type
                    </label>
                    <select
                      id="hero-type"
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-hidden cursor-pointer truncate"
                    >
                      <option value="All">House, Apartment, Villa...</option>
                      <option value="Villa">Luxury Villa</option>
                      <option value="Apartment">Modern Apartment</option>
                      <option value="Penthouse">Skyline Penthouse</option>
                      <option value="House">Residential House</option>
                    </select>
                  </div>
                </div>

                {/* 3. Price Range */}
                <div className="md:col-span-4 lg:col-span-3 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-3 border border-transparent hover:border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label htmlFor="hero-price" className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Price Range
                    </label>
                    <select
                      id="hero-price"
                      value={selectedPrice}
                      onChange={(e) => setSelectedPrice(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-slate-800 focus:outline-hidden cursor-pointer truncate"
                    >
                      <option value="All">Any Price</option>
                      <option value="under-1m">Under $1,000,000</option>
                      <option value="1m-3m">$1M - $3,000,000</option>
                      <option value="over-3m">$3,000,000+</option>
                      <option value="rent">Rental listings</option>
                    </select>
                  </div>
                </div>

                {/* Search Button */}
                <div className="md:col-span-12 lg:col-span-1 flex items-center justify-end">
                  <button
                    type="submit"
                    className="w-full lg:w-auto px-6 py-3.5 bg-[#E8B042] hover:bg-[#F2BC4E] text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95 transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500"
                    aria-label="Search Properties"
                  >
                    <Search className="w-5 h-5 text-slate-950" />
                    <span className="lg:hidden font-bold">Search</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Below Search: 4 Key Value Props matching reference icons & subtitles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-white/10">
              {/* Item 1 */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Verified Listings</h4>
                  <p className="text-xs text-slate-300">Safe & Trusted</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Expert Agents</h4>
                  <p className="text-xs text-slate-300">Personal Support</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Best Deals</h4>
                  <p className="text-xs text-slate-300">Save More</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Global Reach</h4>
                  <p className="text-xs text-slate-300">Top Locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
