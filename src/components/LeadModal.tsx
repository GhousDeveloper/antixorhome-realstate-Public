import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { AntixorLogo } from './AntixorLogo';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  onSubmitSuccess: (message: string) => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  title = "Get Started with AntixorHome",
  subtitle = "Tell us what you're looking for, and our luxury real estate advisors will curate off-market options for you.",
  onSubmitSuccess,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('$1M - $3M');
  const [locationPref, setLocationPref] = useState('Los Angeles');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
      setTimeout(() => {
        onSubmitSuccess(`Thank you ${name}! We will contact you at ${email} with curated options.`);
        setSubmitted(false);
        onClose();
      }, 1200);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <AntixorLogo size="lg" variant="mark" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">{subtitle}</p>
        </div>

        {submitted ? (
          <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
            <h4 className="text-lg font-bold text-emerald-900">Inquiry Received!</h4>
            <p className="text-xs text-emerald-700 mt-1">
              Your AntixorHome personal advisor has been assigned and will prepare a customized dossier.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">
                Your Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Julian Thorne"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-emerald-700 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="julian@example.com"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-emerald-700 focus:bg-white transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">
                  Target City
                </label>
                <select
                  value={locationPref}
                  onChange={(e) => setLocationPref(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-hidden focus:border-emerald-700"
                >
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="London">London</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Sydney">Sydney</option>
                  <option value="Mallorca">Mallorca</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">
                  Budget Range
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-hidden focus:border-emerald-700"
                >
                  <option value="Under $1M">Under $1M</option>
                  <option value="$1M - $3M">$1M - $3M</option>
                  <option value="$3M - $6M">$3M - $6M</option>
                  <option value="$6M+">$6M+</option>
                  <option value="Rental">Rental</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#E8B042] hover:bg-[#F2BC4E] text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md active:scale-98 cursor-pointer mt-3 flex items-center justify-center gap-2"
            >
              <span>Submit Request</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
