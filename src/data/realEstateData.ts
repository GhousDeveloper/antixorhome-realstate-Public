import heroVillaImg from '@/src/assets/images/hero_luxury_villa_1792695046293.jpg';
import propOceanVillaImg from '@/src/assets/images/prop_ocean_villa_1792695045978.jpg';
import propCityAptImg from '@/src/assets/images/prop_city_apartment_1792695046310.jpg';
import propSkylinePentImg from '@/src/assets/images/prop_skyline_penthouse_1792695047522.jpg';
import lifestylePoolImg from '@/src/assets/images/lifestyle_villa_pool_1792695046592.jpg';
import lifestyleLoungeImg from '@/src/assets/images/lifestyle_interior_lounge_1792695048770.jpg';
import lifestyleBalconyImg from '@/src/assets/images/lifestyle_balcony_view_1792695048443.jpg';
import highriseTowerImg from '@/src/assets/images/highrise_modern_tower_1792695048911.jpg';
import locNewYorkImg from '@/src/assets/images/location_new_york_1792695049936.jpg';
import locLondonImg from '@/src/assets/images/location_london_1792695051206.jpg';
import locDubaiImg from '@/src/assets/images/location_dubai_1792695051237.jpg';
import locSydneyImg from '@/src/assets/images/location_sydney_1792695052514.jpg';
import trustedMansionImg from '@/src/assets/images/trusted_modern_mansion_1792695052782.jpg';
import blogHomeTipsImg from '@/src/assets/images/blog_home_tips_1792695052483.jpg';
import blogLocationImg from '@/src/assets/images/blog_location_investment_1792695053493.jpg';
import blogFutureImg from '@/src/assets/images/blog_future_realestate_1792695055216.jpg';
import ctaCoastalImg from '@/src/assets/images/cta_coastal_villa_1792695055238.jpg';
import avatarSarahImg from '@/src/assets/images/avatar_sarah_1792695054862.jpg';
import avatarJamesImg from '@/src/assets/images/avatar_james_1792695055757.jpg';
import avatarMariaImg from '@/src/assets/images/avatar_maria_1792695056260.jpg';

export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  country: string;
  price: string;
  numericPrice: number;
  type: 'House' | 'Apartment' | 'Villa' | 'Penthouse';
  status: 'For Sale' | 'For Rent';
  beds: number;
  baths: number;
  area: string;
  image: string;
  featured?: boolean;
  description: string;
  amenities: string[];
}

export interface LocationItem {
  id: string;
  city: string;
  country: string;
  image: string;
  propertiesCount: number;
  badge: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  image: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  avatar: string;
  quote: string;
  role: string;
  rating: number;
}

export const IMAGES = {
  heroVilla: heroVillaImg,
  propOceanVilla: propOceanVillaImg,
  propCityApt: propCityAptImg,
  propSkylinePent: propSkylinePentImg,
  lifestylePool: lifestylePoolImg,
  lifestyleLounge: lifestyleLoungeImg,
  lifestyleBalcony: lifestyleBalconyImg,
  highriseTower: highriseTowerImg,
  locNewYork: locNewYorkImg,
  locLondon: locLondonImg,
  locDubai: locDubaiImg,
  locSydney: locSydneyImg,
  trustedMansion: trustedMansionImg,
  blogHomeTips: blogHomeTipsImg,
  blogLocation: blogLocationImg,
  blogFuture: blogFutureImg,
  ctaCoastal: ctaCoastalImg,
  avatarSarah: avatarSarahImg,
  avatarJames: avatarJamesImg,
  avatarMaria: avatarMariaImg,
};

export const PROPERTIES_DATA: Property[] = [
  {
    id: 'prop-1',
    title: 'Modern Villa with Ocean View',
    location: 'Los Angeles, USA',
    city: 'Los Angeles',
    country: 'USA',
    price: '$2,850,000',
    numericPrice: 2850000,
    type: 'Villa',
    status: 'For Sale',
    beds: 4,
    baths: 4,
    area: '3,500 sq ft',
    image: propOceanVillaImg,
    featured: true,
    description: 'Breathtaking coastal contemporary architecture offering panoramic Pacific ocean views, infinity pool, custom Italian kitchen, and smart home automation.',
    amenities: ['Ocean View', 'Infinity Pool', 'Smart Home', 'Private Terrace', 'Wine Cellar', '3-Car Garage'],
  },
  {
    id: 'prop-2',
    title: 'Luxury Apartment in City Center',
    location: 'London, UK',
    city: 'London',
    country: 'UK',
    price: '$1,750,000',
    numericPrice: 1750000,
    type: 'Apartment',
    status: 'For Sale',
    beds: 3,
    baths: 2,
    area: '2,100 sq ft',
    image: propCityAptImg,
    featured: true,
    description: 'Refined penthouse-level residence overlooking the Thames and skyline. Features bespoke herringbone floors, curated lighting, and 24/7 concierge service.',
    amenities: ['City Skyline View', 'Concierge', 'Underground Parking', 'Gym & Spa', 'Balcony', 'Floor-to-Ceiling Windows'],
  },
  {
    id: 'prop-3',
    title: 'Stylish Apartment with Skyline View',
    location: 'Dubai, UAE',
    city: 'Dubai',
    country: 'UAE',
    price: '$4,500 / month',
    numericPrice: 4500,
    type: 'Penthouse',
    status: 'For Rent',
    beds: 2,
    baths: 2,
    area: '1,450 sq ft',
    image: propSkylinePentImg,
    featured: true,
    description: 'Ultra-modern furnished high-rise apartment in Downtown Dubai offering direct views of the Burj Khalifa and canal waterway, with resort amenities.',
    amenities: ['Burj Khalifa View', 'Infinity Pool Access', 'Fully Furnished', 'Valet Parking', 'High-Speed Elevators'],
  },
  {
    id: 'prop-4',
    title: 'Architectural Forest Sanctuary',
    location: 'Sydney, Australia',
    city: 'Sydney',
    country: 'Australia',
    price: '$3,200,000',
    numericPrice: 3200000,
    type: 'House',
    status: 'For Sale',
    beds: 5,
    baths: 4,
    area: '4,200 sq ft',
    image: trustedMansionImg,
    featured: false,
    description: 'Seamless glass pavilion nestled within tranquil eucalyptus grounds, featuring cantilevered decks, lap pool, and solar-positive design.',
    amenities: ['Private Garden', 'Heated Pool', 'Solar Powered', 'Home Cinema', 'Executive Study'],
  },
  {
    id: 'prop-5',
    title: 'Mediterranean Waterfront Estate',
    location: 'Mallorca, Spain',
    city: 'Mallorca',
    country: 'Spain',
    price: '$4,900,000',
    numericPrice: 4900000,
    type: 'Villa',
    status: 'For Sale',
    beds: 6,
    baths: 6,
    area: '5,800 sq ft',
    image: blogLocationImg,
    featured: false,
    description: 'Exclusive Mediterranean clifftop residence with private cove access, expansive travertine sun terraces, and lush olive groves.',
    amenities: ['Cove Access', 'Private Dock', 'Guest House', 'Infinity Pool', 'Olive Grove'],
  },
  {
    id: 'prop-6',
    title: 'Futuristic Eco-Residence',
    location: 'Malibu, USA',
    city: 'Malibu',
    country: 'USA',
    price: '$6,500,000',
    numericPrice: 6500000,
    type: 'Villa',
    status: 'For Sale',
    beds: 4,
    baths: 5,
    area: '4,800 sq ft',
    image: blogFutureImg,
    featured: false,
    description: 'Next-generation sculptural eco-villa engineered with living green roof gardens, smart climate insulation, and 360-degree sunset ocean views.',
    amenities: ['Living Roof', 'Zero Net Energy', 'Ocean Panorama', 'Smart Security', 'Thermal Pool'],
  },
];

export const LOCATIONS_DATA: LocationItem[] = [
  {
    id: 'loc-ny',
    city: 'New York',
    country: 'USA',
    image: locNewYorkImg,
    propertiesCount: 142,
    badge: '140+ Properties',
  },
  {
    id: 'loc-london',
    city: 'London',
    country: 'UK',
    image: locLondonImg,
    propertiesCount: 98,
    badge: '90+ Properties',
  },
  {
    id: 'loc-dubai',
    city: 'Dubai',
    country: 'UAE',
    image: locDubaiImg,
    propertiesCount: 215,
    badge: '210+ Properties',
  },
  {
    id: 'loc-sydney',
    city: 'Sydney',
    country: 'Australia',
    image: locSydneyImg,
    propertiesCount: 76,
    badge: '75+ Properties',
  },
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Top 10 Tips for Buying a Home in 2026',
    date: 'May 15, 2026',
    image: blogHomeTipsImg,
    readTime: '5 min read',
    excerpt: 'Navigating modern real estate markets requires foresight. Here are the top vetted steps to find the ideal property while protecting your capital.',
    content: 'Purchasing a home remains one of life’s most significant financial and emotional milestones. In today’s evolving market, informed buyers leverage accurate valuation data, independent structural audits, and neighborhood growth trajectories before finalizing contracts. Always ensure clear title diligence and evaluate long-term utility alongside cosmetic appeal.',
  },
  {
    id: 'blog-2',
    title: 'How to Choose the Right Location for Your Investment',
    date: 'May 10, 2026',
    image: blogLocationImg,
    readTime: '6 min read',
    excerpt: 'Location is more than an address—it determines capital appreciation, lifestyle convenience, rental yields, and generational value.',
    content: 'Macroeconomic trends continue to demonstrate that proximity to premier transit, top educational institutions, and emerging green urban corridors commands lasting rental resilience. Analyzing historical yield spreads across prime zones provides institutional-grade reassurance for private investors.',
  },
  {
    id: 'blog-3',
    title: 'The Future of Real Estate: Trends to Watch',
    date: 'May 2, 2026',
    image: blogFutureImg,
    readTime: '4 min read',
    excerpt: 'From biophilic architecture to carbon-negative residences, discover the breakthrough innovations shaping luxury living spaces.',
    content: 'Sustainable construction materials, integrated domestic microgrids, and fluid indoor-outdoor living spaces are no longer niche amenities—they are redefining modern prestige. Forward-thinking homeowners increasingly seek homes designed in harmony with their natural surroundings.',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Johnson',
    country: 'USA',
    role: 'Homeowner, Los Angeles',
    avatar: avatarSarahImg,
    quote: '"AntixorHome made the entire process smooth and stress-free. I found my dream home in just 2 weeks!"',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'James Miller',
    country: 'UK',
    role: 'Property Investor, London',
    avatar: avatarJamesImg,
    quote: '"Professional, responsive and truly customer-focused. Best real estate experience I\'ve ever had."',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Maria Lopez',
    country: 'UAE',
    role: 'Architect & Buyer, Dubai',
    avatar: avatarMariaImg,
    quote: '"I was impressed by their global network and expert guidance. Highly recommend AntixorHome!"',
    rating: 5,
  },
];
