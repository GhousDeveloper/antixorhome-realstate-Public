import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { BLOG_POSTS_DATA, BlogPost } from '../data/realEstateData';
import antixorLogoImg from '@/src/assets/images/antixor_home_logo_1792695934191.jpg';

interface BlogSectionProps {
  onSelectArticle: (article: BlogPost) => void;
  onViewAllArticles: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onSelectArticle,
  onViewAllArticles,
}) => {
  return (
    <section id="blog" className="py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-800">
              LATEST FROM OUR BLOG
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
              Real Estate Insights & Tips
            </h2>
          </div>

          <button
            onClick={onViewAllArticles}
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 hover:text-emerald-700 transition-colors group cursor-pointer"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS_DATA.map((article, index) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image with Antixor Home Brand Badge */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                {/* Antixor Home Verified Publication Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold shadow-xs">
                  <img
                    src={antixorLogoImg}
                    alt="Antixor Home Logo"
                    className="w-3.5 h-3.5 rounded-full object-cover"
                  />
                  <span>Antixor Home</span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Date & Read time */}
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-500 mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{article.date}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-emerald-800 transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-2.5 text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                {/* Read More Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-800 group-hover:text-emerald-600 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
