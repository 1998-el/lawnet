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
import { useLanguage } from '../context/LanguageContext';
import './LawyerSearch.css';

// Import lawyer data from JSON file
import lawyersData from '../data/lawyers.json';

// Use the imported data
const mockLawyers = lawyersData;

const practiceAreas = [
  'Criminal Law',
  'Family Law',
  'Business Law',
  'Real Estate Law',
  'Labor Law',
  'Corporate Law',
  'Commercial Law',
  'Tax Law',
  'Banking Law',
  'Intellectual Property',
  'Land Law',
  'Immigration Law'
];

const LawyerSearch = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [rating, setRating] = useState(0);
  const [availability, setAvailability] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('rating');

  // Translations for this page
  const content = language === 'fr' ? {
    title: 'Trouvez votre avocat idéal',
    subtitle: 'Parcourez notre annuaire d\'avocats vérifiés et trouvez le bon expert juridique pour vos besoins',
    searchPlaceholder: 'Rechercher par nom, spécialisation...',
    searchBtn: 'Rechercher',
    filters: 'Filtres',
    practiceArea: 'Domaine de pratique',
    allPracticeAreas: 'Tous les domaines',
    location: 'Lieu',
    allLocations: 'Tous les lieux',
    hourlyRate: 'Tarif horaire',
    minRating: 'Note minimale',
    availability: 'Disponibilité',
    availableToday: 'Disponible aujourd\'hui',
    clearFilters: 'Effacer les filtres',
    lawyersFound: 'avocats trouvés',
    sortBy: 'Trier par :',
    highestRated: 'Les mieux notés',
    mostReviews: 'Plus d\'avis',
    priceLowToHigh: 'Prix : Croissant',
    priceHighToLow: 'Prix : Décroissant',
    featured: 'Mis en avant',
    verified: 'Vérifié',
    perHour: '/heure',
    book: 'Réserver',
    message: 'Message',
    noResults: 'Aucun avocat trouvé',
    tryAdjusting: 'Essayez d\'ajuster vos filtres'
  } : {
    title: 'Find Your Perfect Lawyer',
    subtitle: 'Browse our directory of verified attorneys and find the right legal expert for your needs',
    searchPlaceholder: 'Search by name, specialty, or keyword...',
    searchBtn: 'Search',
    filters: 'Filters',
    practiceArea: 'Practice Area',
    allPracticeAreas: 'All Practice Areas',
    location: 'Location',
    allLocations: 'All Locations',
    hourlyRate: 'Hourly Rate',
    minRating: 'Minimum Rating',
    availability: 'Availability',
    availableToday: 'Available Today',
    clearFilters: 'Clear All Filters',
    lawyersFound: 'lawyers found',
    sortBy: 'Sort by:',
    highestRated: 'Highest Rated',
    mostReviews: 'Most Reviews',
    priceLowToHigh: 'Price: Low to High',
    priceHighToLow: 'Price: High to Low',
    featured: 'Featured',
    verified: 'Verified',
    perHour: '/hr',
    book: 'Book',
    message: 'Message',
    noResults: 'No lawyers found',
    tryAdjusting: 'Try adjusting your search filters or search query'
  };

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
          <h1>{language === 'fr' ? 'Trouvez votre avocat idéal' : 'Find Your Perfect Lawyer'}</h1>
          <p>{language === 'fr' 
            ? 'Parcourez notre annuaire d\'avocats vérifiés et trouvez le bon expert juridique pour vos besoins'
            : 'Browse our directory of verified attorneys and find the right legal expert for your needs'}</p>
          
          {/* Search Bar */}
          <div className="search-bar">
            <div className="search-input-wrapper">
              <Search size={18} className="search-icon" />
              <input 
                type="text"
                placeholder={content.searchPlaceholder}
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
              <h3><SlidersHorizontal size={18} /> {content.filters}</h3>
              <button className="close-filters" onClick={() => setShowFilters(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="filter-group filter-practice">
              <label><MapPin size={14} /> {content.practiceArea}</label>
              <select 
                value={selectedArea} 
                onChange={(e) => setSelectedArea(e.target.value)}
              >
                <option value="">{content.allPracticeAreas}</option>
                {practiceAreas.map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>

            <div className="filter-group filter-location">
              <label><MapPin size={14} /> {content.location}</label>
              <select 
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="">{content.allLocations}</option>
                <option value="Douala">Douala</option>
                <option value="Yaoundé">Yaoundé</option>
                <option value="Bamenda">Bamenda</option>
                <option value="Buea">Buea</option>
                <option value="Kribi">Kribi</option>
                <option value="Limbe">Limbé</option>
              </select>
            </div>

            <div className="filter-group filter-price">
              <label><Star size={14} /> {content.hourlyRate}</label>
              <div className="price-range-slider">
                <div className="range-track"></div>
                <input 
                  type="range" 
                  min="0" 
                  max="100000" 
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                />
                <div className="range-fill" style={{ width: `${(priceRange[1] / 100000) * 100}%` }}></div>
              </div>
              <div className="range-labels">
                <span>0 XAF</span>
                <span>100,000 XAF</span>
              </div>
            </div>

            <div className="filter-group filter-rating">
              <label><Star size={14} /> {content.minRating}</label>
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
              <label><Clock size={14} /> {content.availability}</label>
              <div className="availability-filter">
                <button 
                  className={`availability-option ${availability === 'today' ? 'active' : ''}`}
                  onClick={() => setAvailability(availability === 'today' ? '' : 'today')}
                >
                  <Clock size={14} />
                  {content.availableToday}
                </button>
              </div>
            </div>

            <button 
              className="btn btn-outline clear-filters"
              onClick={() => {
                setSelectedArea('');
                setSelectedLocation('');
                setPriceRange([0, 100000]);
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
                        <span className="price">{lawyer.hourlyRate.toLocaleString()} XAF/hr</span>
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
