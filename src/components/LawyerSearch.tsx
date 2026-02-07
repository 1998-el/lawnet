import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Clock,
  Calendar,
  MessageSquare,
  X,
  SlidersHorizontal
} from 'lucide-react';
import './LawyerSearch.css';

// Mock data for lawyers
const mockLawyers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    specialty: 'Criminal Defense Attorney',
    location: 'New York, NY',
    rating: 4.9,
    reviews: 127,
    experience: '15 years',
    hourlyRate: 350,
    availability: 'Available Today',
    languages: ['English', 'Spanish'],
    education: 'Harvard Law School',
    bio: 'Experienced criminal defense attorney with a track record of successful case outcomes. Dedicated to protecting client rights and providing aggressive legal representation.',
    image: '/assets/avatar.jpg',
    verified: true,
    featured: true
  },
  {
    id: 2,
    name: 'Michael Chen',
    specialty: 'Family Law Specialist',
    location: 'Los Angeles, CA',
    rating: 4.8,
    reviews: 98,
    experience: '12 years',
    hourlyRate: 300,
    availability: 'Next Available Tomorrow',
    languages: ['English', 'Mandarin'],
    education: 'Stanford Law School',
    bio: 'Compassionate family law attorney specializing in divorce, custody disputes, and adoption cases. Committed to finding amicable solutions.',
    image: '/assets/avatar.png',
    verified: true,
    featured: true
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    specialty: 'Corporate Law Attorney',
    location: 'Chicago, IL',
    rating: 4.7,
    reviews: 156,
    experience: '18 years',
    hourlyRate: 450,
    availability: 'Available Today',
    languages: ['English', 'Spanish', 'Portuguese'],
    education: 'Yale Law School',
    bio: 'Senior corporate lawyer with expertise in business formation, contracts, and mergers & acquisitions. Trusted advisor to Fortune 500 companies.',
    image: '/assets/avatar.jpg',
    verified: true,
    featured: false
  },
  {
    id: 4,
    name: 'David Thompson',
    specialty: 'Personal Injury Lawyer',
    location: 'Houston, TX',
    rating: 4.9,
    reviews: 203,
    experience: '20 years',
    hourlyRate: 275,
    availability: 'Available Today',
    languages: ['English'],
    education: 'University of Texas Law School',
    bio: 'Passionate personal injury advocate fighting for maximum compensation for accident victims. No win, no fee guarantee.',
    image: '/assets/avatar.jpg',
    verified: true,
    featured: true
  },
  {
    id: 5,
    name: 'Amanda Foster',
    specialty: 'Immigration Attorney',
    location: 'Miami, FL',
    rating: 4.8,
    reviews: 89,
    experience: '10 years',
    hourlyRate: 250,
    availability: 'Next Available Monday',
    languages: ['English', 'Spanish', 'French'],
    education: 'Georgetown Law',
    bio: 'Immigration expert helping individuals and families navigate complex visa and citizenship processes. Multilingual team support.',
    image: '/assets/avatar.png',
    verified: true,
    featured: false
  },
  {
    id: 6,
    name: 'Robert Williams',
    specialty: 'Real Estate Attorney',
    location: 'Phoenix, AZ',
    rating: 4.6,
    reviews: 67,
    experience: '14 years',
    hourlyRate: 225,
    availability: 'Available Today',
    languages: ['English'],
    education: 'Arizona State Law',
    bio: 'Real estate specialist handling residential and commercial property transactions, leases, and disputes.',
    image: '/assets/avatar.jpg',
    verified: true,
    featured: false
  }
];

const practiceAreas = [
  'Criminal Defense',
  'Family Law',
  'Corporate Law',
  'Personal Injury',
  'Immigration',
  'Real Estate',
  'Estate Planning',
  'Employment Law',
  'Bankruptcy',
  'Intellectual Property'
];

const LawyerSearch = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [rating, setRating] = useState(0);
  const [availability, setAvailability] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('rating');

  const filteredLawyers = mockLawyers.filter(lawyer => {
    const matchesSearch = lawyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lawyer.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lawyer.bio.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesArea = !selectedArea || lawyer.specialty.includes(selectedArea);
    const matchesLocation = !selectedLocation || lawyer.location.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchesPrice = lawyer.hourlyRate >= priceRange[0] && lawyer.hourlyRate <= priceRange[1];
    const matchesRating = !rating || lawyer.rating >= rating;
    const matchesAvailability = !availability || lawyer.availability.includes('Today');
    
    return matchesSearch && matchesArea && matchesLocation && matchesPrice && matchesRating && matchesAvailability;
  });

  const sortedLawyers = [...filteredLawyers].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviews - a.reviews;
      case 'price-low':
        return a.hourlyRate - b.hourlyRate;
      case 'price-high':
        return b.hourlyRate - a.hourlyRate;
      default:
        return 0;
    }
  });

  return (
    <main className="lawyer-search">
      {/* Search Header */}
      <section className="search-header">
        <div className="container">
          <h1>Find Your Perfect Lawyer</h1>
          <p>Browse our directory of verified attorneys and find the right legal expert for your needs</p>
          
          {/* Search Bar */}
          <div className="search-bar">
            <div className="search-input-wrapper">
              <Search size={18} className="search-icon" />
              <input 
                type="text"
                placeholder="Search by name, specialty, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="search-content">
        <div className="search-layout">
          {/* Filters Sidebar */}
          <aside className={`filters-sidebar ${showFilters ? 'open' : ''}`}>
            <div className="filters-header">
              <h3><SlidersHorizontal size={18} /> Filters</h3>
              <button className="close-filters" onClick={() => setShowFilters(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="filter-group filter-practice">
              <label><MapPin size={14} /> Practice Area</label>
              <select 
                value={selectedArea} 
                onChange={(e) => setSelectedArea(e.target.value)}
              >
                <option value="">All Practice Areas</option>
                {practiceAreas.map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>

            <div className="filter-group filter-location">
              <label><MapPin size={14} /> Location</label>
              <select 
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="">All Locations</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="Houston">Houston</option>
                <option value="Miami">Miami</option>
                <option value="Phoenix">Phoenix</option>
              </select>
            </div>

            <div className="filter-group filter-price">
              <label><Star size={14} /> Hourly Rate: ${priceRange[0]} - ${priceRange[1]}</label>
              <div className="price-range-slider">
                <div className="range-track"></div>
                <input 
                  type="range" 
                  min="0" 
                  max="500" 
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                />
                <div className="range-fill" style={{ width: `${(priceRange[1] / 500) * 100}%` }}></div>
              </div>
              <div className="range-labels">
                <span>$0</span>
                <span>$500</span>
              </div>
            </div>

            <div className="filter-group filter-rating">
              <label><Star size={14} /> Minimum Rating</label>
              <div className="rating-filter">
                {[4, 3, 2, 1].map(stars => (
                  <button 
                    key={stars}
                    className={`rating-option ${rating === stars ? 'active' : ''}`}
                    onClick={() => setRating(rating === stars ? 0 : stars)}
                  >
                    <Star size={14} className="star-icon" />
                    <span>{stars}+</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group filter-availability">
              <label><Clock size={14} /> Availability</label>
              <div className="availability-filter">
                <button 
                  className={`availability-option ${availability === 'today' ? 'active' : ''}`}
                  onClick={() => setAvailability(availability === 'today' ? '' : 'today')}
                >
                  <Clock size={14} />
                  Available Today
                </button>
              </div>
            </div>

            <button 
              className="btn btn-outline clear-filters"
              onClick={() => {
                setSelectedArea('');
                setSelectedLocation('');
                setPriceRange([0, 500]);
                setRating(0);
                setAvailability('');
              }}
            >
              Clear All Filters
            </button>
          </aside>

          {/* Results */}
          <div className="search-results">
            {/* Results Header */}
            <div className="results-header">
              <div className="results-count">
                <span>{sortedLawyers.length}</span> lawyers found
              </div>
              <div className="results-sort">
                <label>Sort by:</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="rating">Highest Rated</option>
                  <option value="reviews">Most Reviews</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
              <button 
                className="btn btn-outline mobile-filter-btn"
                onClick={() => setShowFilters(true)}
              >
                <Filter size={14} /> Filters
              </button>
            </div>

            {/* Lawyers Grid */}
            <div className="lawyers-grid">
              {sortedLawyers.map(lawyer => (
                <div 
                  className={`lawyer-card ${lawyer.featured ? 'featured' : ''}`}
                  key={lawyer.id}
                >
                  {lawyer.featured && <span className="featured-badge">Featured</span>}
                  {lawyer.verified && <span className="verified-badge"><Star size={10} /> Verified</span>}
                  
                  <div className="lawyer-image">
                    <img src={lawyer.image} alt={lawyer.name} />
                  </div>
                  
                  <div className="lawyer-info">
                    <div className="lawyer-header">
                      <h3>{lawyer.name}</h3>
                      <div className="lawyer-rating">
                        <Star size={14} className="star filled" />
                        <span>{lawyer.rating}</span>
                        <span className="review-count">({lawyer.reviews})</span>
                      </div>
                    </div>
                    
                    <p className="lawyer-specialty">{lawyer.specialty}</p>
                    
                    <div className="lawyer-location">
                      <MapPin size={12} />
                      <span>{lawyer.location}</span>
                    </div>
                    
                    <div className="lawyer-details">
                      <div className="detail">
                        <Clock size={12} />
                        <span>{lawyer.experience}</span>
                      </div>
                      <div className="detail">
                        <span className="price">${lawyer.hourlyRate}/hr</span>
                      </div>
                    </div>
                    
                    <div className="lawyer-availability">
                      <Clock size={12} />
                      <span className={lawyer.availability.includes('Today') ? 'available' : ''}>
                        {lawyer.availability}
                      </span>
                    </div>
                    
                    <div className="lawyer-languages">
                      {lawyer.languages.map(lang => (
                        <span key={lang} className="language-tag">{lang}</span>
                      ))}
                    </div>
                    
                    <p className="lawyer-bio">{lawyer.bio}</p>
                    
                    <div className="lawyer-actions">
                      <button 
                        className="btn btn-primary"
                        onClick={() => navigate(`/book/${lawyer.id}`)}
                      >
                        <Calendar size={14} /> Book
                      </button>
                      <button className="btn btn-outline">
                        <MessageSquare size={14} /> Message
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {sortedLawyers.length === 0 && (
              <div className="no-results">
                <Search size={40} />
                <h3>No lawyers found</h3>
                <p>Try adjusting your search filters or search query</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default LawyerSearch;
