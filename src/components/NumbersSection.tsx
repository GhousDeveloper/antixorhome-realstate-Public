import React from 'react';
import { Users, Home, Globe2, Award } from 'lucide-react';

export const NumbersSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '12K+',
      label: 'Happy Clients',
    },
    {
      icon: Home,
      value: '8K+',
      label: 'Properties Listed',
    },
    {
      icon: Globe2,
      value: '25+',
      label: 'Countries',
    },
    {
      icon: Award,
      value: '98%',
      label: 'Satisfaction Rate',
    },
  ];

  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Emerald Container matching reference */}
        <div className="relative rounded-3xl bg-[#09241B] text-white p-8 sm:p-12 lg:p-14 overflow-hidden shadow-xl border border-emerald-900/60">
          {/* Subtle World Map Vector Silhouette Background */}
          <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full object-cover text-emerald-400"
              fill="currentColor"
            >
              <path d="M150,120 Q180,100 220,130 T280,160 T350,140 Q400,200 450,220 T520,200 Q580,180 620,150 T700,140 T780,180 Q850,220 900,200 T950,250 Q850,320 800,360 T700,380 T600,350 Q520,400 450,420 T350,400 T250,350 Q180,300 150,250 Z" opacity="0.3"/>
              <circle cx="210" cy="180" r="3" />
              <circle cx="480" cy="160" r="3" />
              <circle cx="580" cy="220" r="3" />
              <circle cx="820" cy="340" r="3" />
              <circle cx="750" cy="210" r="3" />
              <circle cx="260" cy="240" r="3" />
            </svg>
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="mb-10">
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">
                OUR IMPACT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mt-1.5">
                Numbers That <br className="hidden sm:inline" />
                Tell Our Story
              </h2>
            </div>

            {/* Horizontal 4-Stat Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-emerald-800/60 pt-2">
              {stats.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex flex-col items-start ${
                      index > 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''
                    }`}
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-emerald-800/40 border border-emerald-700/50 flex items-center justify-center text-amber-400 mb-4 shadow-xs">
                      <Icon className="w-5 h-5 text-amber-300" />
                    </div>

                    {/* Metric Value */}
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight tabular-nums">
                      {item.value}
                    </span>

                    {/* Label */}
                    <span className="text-xs sm:text-sm font-medium text-emerald-200/80 mt-1">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
