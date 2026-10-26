import React, { useState } from 'react';
import { X, Heart, Bed, Bath, Maximize, MapPin, Check, Phone, Calendar, ShieldCheck } from 'lucide-react';
import { Property } from '../data/realEstateData';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onBookTour: (propertyTitle: string, tourDate: string) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  onClose,
  isFavorite,
  onToggleFavorite,
  onBookTour,
}) => {
  const [tourDate, setTourDate] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [booked, setBooked] = useState(false);

  if (!property) return null;

  const handleSubmitTour = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactName && (tourDate || contactEmail)) {
      onBookTour(property.title, tourDate || 'Tomorrow');
      setBooked(true);
      setTimeout(() => {
        setBooked(false);
        onClose();
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Image */}
        <div className="relative aspect-16/9 w-full bg-slate-900">
          <img
            src={property.image}
            alt={property.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-md shadow-xs ${
                property.status === 'For Sale' ? 'bg-[#155E45] text-white' : 'bg-[#1E293B] text-white'
              }`}
            >
              {property.status}
            </span>
            <span className="px-3 py-1 text-xs font-semibold rounded-md bg-white/90 text-slate-800 backdrop-blur-xs shadow-xs">
              {property.type}
            </span>
          </div>

          <button
            onClick={(e) => onToggleFavorite(property.id, e)}
            className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-white/90 hover:bg-white text-slate-900 font-semibold text-xs flex items-center gap-2 shadow-md cursor-pointer"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : 'text-slate-600'}`} />
            <span>{isFavorite ? 'Saved to Favorites' : 'Save Property'}</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>{property.location}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                {property.title}
              </h3>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-900 tabular-nums">
                {property.price}
              </span>
              <p className="text-xs text-slate-500 mt-0.5">Estimated taxes & fees included</p>
            </div>
          </div>

          {/* Key specs strip */}
          <div className="grid grid-cols-3 gap-4 py-5 border-b border-slate-100 text-center">
            <div className="p-3 rounded-xl bg-slate-50 flex flex-col items-center justify-center">
              <Bed className="w-5 h-5 text-emerald-800 mb-1" />
              <span className="text-sm font-bold text-slate-900">{property.beds} Bedrooms</span>
              <span className="text-[11px] text-slate-500">Spacious suites</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 flex flex-col items-center justify-center">
              <Bath className="w-5 h-5 text-emerald-800 mb-1" />
              <span className="text-sm font-bold text-slate-900">{property.baths} Bathrooms</span>
              <span className="text-[11px] text-slate-500">Luxury fittings</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 flex flex-col items-center justify-center">
              <Maximize className="w-5 h-5 text-emerald-800 mb-1" />
              <span className="text-sm font-bold text-slate-900">{property.area}</span>
              <span className="text-[11px] text-slate-500">Living space</span>
            </div>
          </div>

          {/* Description */}
          <div className="py-5 border-b border-slate-100">
            <h4 className="text-sm font-bold text-slate-900 mb-2">Property Overview</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Amenities */}
          <div className="py-5 border-b border-slate-100">
            <h4 className="text-sm font-bold text-slate-900 mb-3">Featured Amenities</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {property.amenities.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule a Private Tour or Inquire Form */}
          <div className="pt-6">
            <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-800" />
              <span>Schedule a Private Viewing</span>
            </h4>

            {booked ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                <span>Tour request confirmed! An AntixorHome specialist will contact you shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmitTour} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:border-emerald-700"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:border-emerald-700"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#10382B] hover:bg-[#164838] text-white text-xs sm:text-sm font-bold rounded-xl transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Request Tour</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
