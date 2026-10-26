import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProperties } from './components/FeaturedProperties';
import { LifestyleSection } from './components/LifestyleSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PopularLocations } from './components/PopularLocations';
import { NumbersSection } from './components/NumbersSection';
import { TrustedSection } from './components/TrustedSection';
import { BlogSection } from './components/BlogSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalCTASection } from './components/FinalCTASection';
import { NewsletterAndFooter } from './components/NewsletterAndFooter';
import { PropertyModal } from './components/PropertyModal';
import { FavoritesModal } from './components/FavoritesModal';
import { AllPropertiesModal } from './components/AllPropertiesModal';
import { ArticleModal } from './components/ArticleModal';
import { AuthModal } from './components/AuthModal';
import { LeadModal } from './components/LeadModal';
import { Toast, ToastMessage } from './components/Toast';
import {
  PROPERTIES_DATA,
  Property,
  BlogPost,
} from './data/realEstateData';

import { ScrollAnimationCanvas } from './components/ScrollAnimationCanvas';

export default function App() {
  // State for saved favorites (default with the first 2 properties saved)
  const [favorites, setFavorites] = useState<string[]>(['prop-1']);

  // Modals state
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isAllPropertiesOpen, setIsAllPropertiesOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  const [leadModalConfig, setLeadModalConfig] = useState({
    title: 'Get Started with AntixorHome',
    subtitle: 'Get personalized property recommendations and expert guidance — free, no obligation.',
  });

  // Search filter passed to all properties modal
  const [searchFilter, setSearchFilter] = useState<{
    location?: string;
    type?: string;
    price?: string;
  }>({});

  // Toast feedback state
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (type: 'favorite' | 'success' | 'info', message: string) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Toggle favorite
  const handleToggleFavorite = (propertyId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const prop = PROPERTIES_DATA.find((p) => p.id === propertyId);
    if (favorites.includes(propertyId)) {
      setFavorites((prev) => prev.filter((id) => id !== propertyId));
      addToast('info', `Removed "${prop?.title || 'Property'}" from your saved list`);
    } else {
      setFavorites((prev) => [...prev, propertyId]);
      addToast('favorite', `Saved "${prop?.title || 'Property'}" to your favorites!`);
    }
  };

  // Search handler from Hero
  const handleHeroSearch = (filters: { location: string; type: string; price: string }) => {
    setSearchFilter(filters);
    setIsAllPropertiesOpen(true);
    addToast('info', `Showing properties for ${filters.location !== 'All' ? filters.location : 'all locations'}`);
  };

  // Click on a popular city card
  const handleSelectLocation = (city: string) => {
    setSearchFilter({ location: city, type: 'All', price: 'All' });
    setIsAllPropertiesOpen(true);
    addToast('info', `Filtered listings in ${city}`);
  };

  // Tour booking
  const handleBookTour = (propertyTitle: string, tourDate: string) => {
    addToast('success', `Private viewing booked for "${propertyTitle}" on ${tourDate}`);
  };

  // Share article
  const handleShareArticle = (title: string) => {
    if (navigator.share) {
      navigator.share({
        title,
        text: `Check out this real estate article from AntixorHome: ${title}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      addToast('success', 'Article link copied to clipboard!');
    }
  };

  // Newsletter
  const handleNewsletterSubscribe = (email: string) => {
    addToast('success', `Subscribed ${email} to weekly AntixorHome market briefs`);
  };

  // Open generic lead modal
  const handleOpenLead = (title?: string, subtitle?: string) => {
    if (title && subtitle) {
      setLeadModalConfig({ title, subtitle });
    } else {
      setLeadModalConfig({
        title: 'Get Started with AntixorHome',
        subtitle: 'Get personalized property recommendations and expert guidance — free, no obligation.',
      });
    }
    setIsLeadOpen(true);
  };

  return (
    <div className="relative min-h-screen text-slate-900 bg-transparent">
      {/* =========================================================================
          LAYER 1: FUTURE SCROLLING VIDEO BACKGROUND (Dedicated Modular Slot)
          - Positioned fixed behind all website content (-z-30)
          - pointer-events-none ensures it never blocks clicks or scroll events
          - Ready for your scrolling/fixed video element without page rebuild
          ========================================================================= */}
      <div
        id="scrolling-video-background-layer"
        className="fixed inset-0 -z-30 pointer-events-none overflow-hidden"
        aria-hidden="true"
        data-role="future-scrolling-video-container"
      >
        <ScrollAnimationCanvas />
      </div>

      {/* =========================================================================
          LAYER 2: OPTIONAL VIDEO OVERLAY LAYER (Dedicated Modular Slot)
          - Sits between the future video and main website content (-z-20)
          - Can apply subtle tint/backdrop filter when video is activated
          ========================================================================= */}
      <div
        id="video-overlay-layer"
        className="fixed inset-0 -z-20 pointer-events-none transition-colors duration-500"
        aria-hidden="true"
        data-role="future-video-overlay"
      />

      {/* =========================================================================
          LAYER 3: MAIN WEBSITE CONTENT & UI COMPONENTS (z-10)
          - All sections match the uploaded screenshot with pixel precision
          - Content images, property cards, typography, and interactive controls
          ========================================================================= */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* 1. Header / Navbar */}
        <Navbar
          favoriteCount={favorites.length}
          onOpenFavorites={() => setIsFavoritesOpen(true)}
          onOpenLogin={() => setIsAuthOpen(true)}
          onOpenGetStarted={() => handleOpenLead()}
          activeSection="home"
        />

        <main className="flex-1">
          {/* 2. Hero Section */}
          <Hero
            onSearch={handleHeroSearch}
            onExploreClick={() => setIsAllPropertiesOpen(true)}
          />

          {/* Frosted content panel for middle catalog & editorial sections to maintain perfect contrast */}
          <div className="bg-[#F7F8F9]/92 backdrop-blur-xl border-y border-white/40 shadow-2xl transition-colors">
            {/* 3. Featured Properties ("Handpicked Homes Just for You") */}
            <FeaturedProperties
              properties={PROPERTIES_DATA}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onSelectProperty={(prop) => setSelectedProperty(prop)}
              onViewAllClick={() => setIsAllPropertiesOpen(true)}
            />

            {/* 4. Lifestyle Section ("More Than a Home, It’s a Lifestyle") */}
            <LifestyleSection
              onExploreClick={() => setIsAllPropertiesOpen(true)}
            />

            {/* 5. Why Choose Us ("More Than Just a Property Website") */}
            <WhyChooseUs
              onLearnMoreClick={() =>
                handleOpenLead(
                  'Learn More About AntixorHome Services',
                  'Connect with our senior portfolio directors for personalized acquisition strategies.'
                )
              }
            />

            {/* 6. Popular Locations ("Explore the Best Places to Live Around the World") */}
            <PopularLocations
              onSelectLocation={handleSelectLocation}
              onViewAllLocations={() => setIsAllPropertiesOpen(true)}
            />

            {/* 7. Numbers Section ("Numbers That Tell Our Story") */}
            <NumbersSection />

            {/* 8. Trusted Section ("Trusted by Thousands of Home Seekers") */}
            <TrustedSection
              onReadSuccessStories={() =>
                handleOpenLead(
                  'Read Client Success Stories',
                  'Download our recent case studies and client transactions report.'
                )
              }
            />

            {/* 9. Blog Section ("Real Estate Insights & Tips") */}
            <BlogSection
              onSelectArticle={(article) => setSelectedArticle(article)}
              onViewAllArticles={() => {
                if (PROPERTIES_DATA.length > 0) {
                  setSelectedArticle(null);
                  addToast('info', 'Viewing all recent AntixorHome editorial publications');
                }
              }}
            />

            {/* 10. Testimonials Section ("What Our Clients Say") */}
            <TestimonialsSection
              onViewAllReviews={() =>
                addToast('info', 'AntixorHome is rated 4.9/5 stars across 1,200+ verified client transactions.')
              }
            />
          </div>

          {/* 11. Final CTA Section ("Let’s Make It Happen") */}
          <FinalCTASection
            onGetStartedClick={() =>
              handleOpenLead(
                'Find Your Dream Property',
                'Tell us your requirements and schedule your consultation today.'
              )
            }
          />
        </main>

        {/* 12. Newsletter + Footer */}
        <NewsletterAndFooter
          onGetStartedClick={() =>
            handleOpenLead(
              'Get Started with AntixorHome',
              'Get personalized property recommendations and expert guidance — free, no obligation.'
            )
          }
          onSubscribe={handleNewsletterSubscribe}
        />
      </div>

      {/* =========================================================================
          INTERACTIVE MODALS & OVERLAYS
          ========================================================================= */}
      {/* Property Details Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        isFavorite={selectedProperty ? favorites.includes(selectedProperty.id) : false}
        onToggleFavorite={handleToggleFavorite}
        onBookTour={handleBookTour}
      />

      {/* Saved Favorites Drawer/Modal */}
      <FavoritesModal
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        allProperties={PROPERTIES_DATA}
        onRemoveFavorite={(id) => {
          setFavorites((prev) => prev.filter((favId) => favId !== id));
          addToast('info', 'Removed property from favorites');
        }}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
      />

      {/* Full Catalog / Search Results Modal */}
      <AllPropertiesModal
        isOpen={isAllPropertiesOpen}
        onClose={() => setIsAllPropertiesOpen(false)}
        properties={PROPERTIES_DATA}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        initialFilter={searchFilter}
      />

      {/* Blog Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onShare={handleShareArticle}
      />

      {/* User Login / Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={(userName) =>
          addToast('success', `Welcome back, ${userName}!`)
        }
      />

      {/* Lead Inquiry & Consultation Modal */}
      <LeadModal
        isOpen={isLeadOpen}
        onClose={() => setIsLeadOpen(false)}
        title={leadModalConfig.title}
        subtitle={leadModalConfig.subtitle}
        onSubmitSuccess={(msg) => addToast('success', msg)}
      />

      {/* Toast Notifications */}
      <Toast toasts={toasts} onDismiss={handleDismissToast} />
    </div>
  );
}
