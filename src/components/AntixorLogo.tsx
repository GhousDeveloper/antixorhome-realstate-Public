import React from 'react';
import antixorLogoImg from '@/src/assets/images/antixor_home_logo_1792695934191.jpg';

interface AntixorLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'navbar' | 'mark' | 'full' | 'footer';
  lightMode?: boolean;
}

export const AntixorLogo: React.FC<AntixorLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'navbar',
  lightMode = false,
}) => {
  const sizeMap = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-20 h-20',
  };

  const imageSize = sizeMap[size];

  if (variant === 'mark') {
    return (
      <div className={`relative rounded-xl overflow-hidden shadow-xs shrink-0 ${imageSize} ${className}`}>
        <img
          src={antixorLogoImg}
          alt="Antixor Home Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border border-amber-500/30">
          <img
            src={antixorLogoImg}
            alt="Antixor Home Logo"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <span className="block text-xl font-bold tracking-tight text-white">
            Antixor <span className="text-amber-400">Home</span>
          </span>
          <span className="block text-[10px] font-semibold tracking-widest text-emerald-300 uppercase">
            Luxury Real Estate
          </span>
        </div>
      </div>
    );
  }

  // Navbar & Footer lockup
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Brand Emblem */}
      <div className={`relative rounded-xl overflow-hidden shadow-xs border border-amber-400/30 shrink-0 ${imageSize} group-hover:scale-105 transition-transform duration-300`}>
        <img
          src={antixorLogoImg}
          alt="Antixor Home Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <span
          className={`text-xl font-extrabold tracking-tight transition-colors ${
            lightMode ? 'text-slate-900' : 'text-white'
          }`}
        >
          Antixor<span className="text-amber-400">Home</span>
        </span>
        <span
          className={`text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5 ${
            lightMode ? 'text-emerald-800' : 'text-emerald-300/90'
          }`}
        >
          Modern Luxury
        </span>
      </div>
    </div>
  );
};
