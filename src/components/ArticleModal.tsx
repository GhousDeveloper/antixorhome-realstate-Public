import React from 'react';
import { X, Calendar, Clock, Share2, BookOpen } from 'lucide-react';
import { BlogPost } from '../data/realEstateData';

interface ArticleModalProps {
  article: BlogPost | null;
  onClose: () => void;
  onShare: (title: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onShare }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Article Image */}
        <div className="relative aspect-16/9 w-full bg-slate-900">
          <img
            src={article.image}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3 text-xs font-medium text-slate-500 mb-3">
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

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
            {article.title}
          </h2>

          <p className="mt-4 text-base font-medium text-emerald-900/90 italic border-l-4 border-emerald-600 pl-4 py-1 bg-emerald-50/50 rounded-r-lg">
            {article.excerpt}
          </p>

          <div className="mt-6 text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
            <p>{article.content}</p>
            <p>
              When evaluating premium acquisitions, AntixorHome advisors recommend conducting a comprehensive multi-factor audit encompassing structural resilience, localized zoning adjustments, historical climate metrics, and capital appreciation velocity.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => onShare(article.title)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Article</span>
            </button>

            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-[#10382B] text-white text-xs font-semibold rounded-xl hover:bg-[#164838] transition-colors cursor-pointer"
            >
              Done Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
