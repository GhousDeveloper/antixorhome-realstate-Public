import React from 'react';
import { X, Heart, Trash2, ArrowRight } from 'lucide-react';
import { Property } from '../data/realEstateData';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: string[];
  allProperties: Property[];
  onRemoveFavorite: (id: string) => void;
  onSelectProperty: (property: Property) => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({
  isOpen,
  onClose,
  favorites,
  allProperties,
  onRemoveFavorite,
  onSelectProperty,
}) => {
  if (!isOpen) return null;

  const favoriteProperties = allProperties.filter((p) => favorites.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
            <h3 className="text-lg font-bold text-slate-900">
              Saved Properties ({favoriteProperties.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* List */}
        <div className="p-6 max-h-[60vh] overflow-y-auto divide-y divide-slate-100">
          {favoriteProperties.length === 0 ? (
            <div className="py-12 text-center">
              <Heart className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-base font-semibold text-slate-700">No properties saved yet</p>
              <p className="text-xs text-slate-500 mt-1">
                Click the heart icon on any property card to save it to your wishlist.
              </p>
            </div>
          ) : (
            favoriteProperties.map((prop) => (
              <div key={prop.id} className="py-4 first:pt-0 last:pb-0 flex items-center gap-4">
                <img
                  src={prop.image}
                  alt={prop.title}
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 rounded-xl object-cover shrink-0 cursor-pointer"
                  onClick={() => {
                    onClose();
                    onSelectProperty(prop);
                  }}
                />
                <div
                  className="flex-1 min-w-0 cursor-pointer"
                  onClick={() => {
                    onClose();
                    onSelectProperty(prop);
                  }}
                >
                  <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wide">
                    {prop.location}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 truncate hover:text-emerald-800 transition-colors">
                    {prop.title}
                  </h4>
                  <div className="text-sm font-extrabold text-slate-900 mt-0.5">
                    {prop.price}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      onClose();
                      onSelectProperty(prop);
                    }}
                    className="p-2 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors"
                    title="View details"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemoveFavorite(prop.id)}
                    className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                    title="Remove from favorites"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Favorites are saved in your current browsing session.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
