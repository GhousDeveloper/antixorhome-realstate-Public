import React, { useState } from 'react';
import { X, Heart, Bed, Bath, Maximize, Search, Filter } from 'lucide-react';
import { Property } from '../data/realEstateData';
import { AntixorLogo } from './AntixorLogo';

interface AllPropertiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  properties: Property[];
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectProperty: (property: Property) => void;
  initialFilter?: { location?: string; type?: string; price?: string };
}

export const AllPropertiesModal: React.FC<AllPropertiesModalProps> = ({
  isOpen,
  onClose,
  properties,
  favorites,
  onToggleFavorite,
  onSelectProperty,
  initialFilter,
}) => {
  const [filterType, setFilterType] = useState(initialFilter?.type || 'All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState(
    initialFilter?.location && initialFilter.location !== 'All' ? initialFilter.location : ''
  );

  if (!isOpen) return null;

  const filtered = properties.filter((p) => {
    if (filterType !== 'All' && p.type !== filterType) return false;
    if (filterStatus !== 'All' && p.status !== filterStatus) return false;
    if (
      searchTerm &&
      !p.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !p.location.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !p.city.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-6 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white">
          <div className="flex items-center gap-3">
            <AntixorLogo size="md" variant="mark" />
            <div>
              <span className="text-[11px] font-bold tracking-widest uppercase text-emerald-800">
                ANTIXORHOME COLLECTION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                All Available Properties ({filtered.length})
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Toolbar */}
        <div className="p-4 sm:px-6 bg-slate-50 border-b border-slate-100 flex flex-wrap gap-3 items-center justify-between shrink-0">
          <div className="flex items-center gap-2 flex-1 min-w-[240px] max-w-md bg-white border border-slate-200 rounded-xl px-3 py-1.5 shadow-2xs">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by city, title, or country..."
              className="w-full text-xs sm:text-sm bg-transparent focus:outline-hidden"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 shadow-2xs"
            >
              <option value="All">All Types</option>
              <option value="Villa">Villas</option>
              <option value="Apartment">Apartments</option>
              <option value="Penthouse">Penthouses</option>
              <option value="House">Houses</option>
            </select>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 shadow-2xs"
            >
              <option value="All">All Status</option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>
          </div>
        </div>

        {/* Property Grid */}
        <div className="p-6 overflow-y-auto flex-1">
          {filtered.length === 0 ? (
            <div className="py-16 text-center">
              <Filter className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-700">No properties match your filter</p>
              <button
                onClick={() => {
                  setFilterType('All');
                  setFilterStatus('All');
                  setSearchTerm('');
                }}
                className="mt-3 text-xs font-bold text-emerald-800 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((prop) => {
                const isFav = favorites.includes(prop.id);
                return (
                  <div
                    key={prop.id}
                    onClick={() => {
                      onClose();
                      onSelectProperty(prop);
                    }}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
                  >
                    <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                      <img
                        src={prop.image}
                        alt={prop.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-md ${
                            prop.status === 'For Sale' ? 'bg-[#155E45] text-white' : 'bg-[#1E293B] text-white'
                          }`}
                        >
                          {prop.status}
                        </span>
                      </div>
                      <button
                        onClick={(e) => onToggleFavorite(prop.id, e)}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white"
                      >
                        <Heart
                          className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : 'text-white'}`}
                        />
                      </button>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                          {prop.location}
                        </p>
                        <h4 className="text-base font-bold text-slate-900 mt-0.5 truncate group-hover:text-emerald-800 transition-colors">
                          {prop.title}
                        </h4>
                        <div className="text-base font-extrabold text-slate-900 mt-2">
                          {prop.price}
                        </div>
                      </div>

                      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
                        <div className="flex items-center gap-1">
                          <Bed className="w-3.5 h-3.5 text-slate-400" />
                          <span>{prop.beds} Beds</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath className="w-3.5 h-3.5 text-slate-400" />
                          <span>{prop.baths} Baths</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Maximize className="w-3.5 h-3.5 text-slate-400" />
                          <span>{prop.area}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
