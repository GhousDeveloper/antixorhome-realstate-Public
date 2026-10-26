import React from 'react';
import { Star, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/realEstateData';

interface TestimonialsSectionProps {
  onViewAllReviews: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onViewAllReviews,
}) => {
  return (
    <section className="py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-800">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
              What Our Clients Say
            </h2>
          </div>

          <button
            onClick={onViewAllReviews}
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 hover:text-emerald-700 transition-colors group cursor-pointer"
          >
            <span>View All Reviews</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Horizontal Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Quote text */}
              <div>
                <Quote className="w-8 h-8 text-amber-400/40 mb-3" />
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  {item.quote}
                </p>
              </div>

              {/* Client Profile and Stars */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border-2 border-slate-100 shadow-xs"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">
                      {item.country}
                    </p>
                  </div>
                </div>

                {/* 5 Stars */}
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
