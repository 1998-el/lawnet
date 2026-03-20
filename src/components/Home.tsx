import { 
  Search,
  Shield,
  Calendar,
  MessageSquare,
  Star,
  ArrowRight,
  Gavel,
  Briefcase,
  Heart,
  FileText,
  Scale,
  MapPin,
  Eye
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HeroBanner from './HeroBanner';
import lawyersData from '../data/lawyers.json';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

const Home = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const content = language === 'fr' ? {
    howItWorks: 'Comment LAWNET fonctionne',
    getHelpSteps: 'Obtenez de l\'aide juridique en 3 étapes simples',
    search: 'Rechercher',
    searchDesc: 'Parcourez notre annuaire d\'avocats vérifiés par spécialisation, lieu ou nom.',
    book: 'Réserver',
    bookDesc: 'Planifiez un rendez-vous à votre convenance avec une réservation en ligne sécurisée.',
    connect: 'Contacter',
    connectDesc: 'Discutez, appelez vidéo ou rencontrez votre avocat et obtenez l\'aide juridique dont vous avez besoin.',
    practiceAreas: 'Domaines de pratique',
    findLawyers: 'Trouvez des avocats spécialisés dans vos besoins juridiques',
    criminalDefense: 'Défense pénale',
    criminalDefenseDesc: 'Représentation juridique experte pour les accusations et procédures pénales.',
    corporateLaw: 'Droit des sociétés',
    corporateLawDesc: 'Création d\'entreprise, contrats et affaires juridiques commerciales.',
    familyLaw: 'Droit de la famille',
    familyLawDesc: 'Divorce, garde, adoption et questions juridiques familiales.',
    realEstate: 'Immobilier',
    realEstateDesc: 'Transactions immobilières, baux et litiges immobiliers.',
    personalInjury: 'Dommage corporel',
    personalInjuryDesc: 'Indemnisation pour les blessures et accidents causés par autrui.',
    immigration: 'Immigration',
    immigrationDesc: 'Visas, citoyenneté et assistance juridique en immigration.',
    whyChoose: 'Pourquoi choisir LAWNET ?',
    mostTrusted: 'La plateforme la plus fiable pour l\'assistance juridique',
    verifiedLawyers: 'Avocats vérifiés',
    verifiedLawyersDesc: 'Tous les avocats de notre plateforme sont soigneusement examinés et vérifiés.',
    honestReviews: 'Avis honnêtes',
    honestReviewsDesc: 'De vrais avis de clients vérifiés pour vous aider à prendre des décisions éclairées.',
    easyScheduling: 'Planification facile',
    easySchedulingDesc: 'Réservez des rendez-vous qui correspondent à votre emploi du temps avec confirmation instantanée.',
    secureMessaging: 'Messagerie sécurisée',
    secureMessagingDesc: 'Communiquez en toute sécurité avec votre avocat grâce à un messagerie chiffrée.',
    availability247: 'Disponibilité 24h/24',
    availability247Desc: 'Accédez à l\'aide juridique à tout moment avec notre support disponible.',
    transparentPricing: 'Tarification transparente',
    transparentPricingDesc: 'Structures de frais claires sans coûts cachés ni surprises.',
    featuredLawyers: 'Avocats en vedette',
    topLawyers: 'Les avocats les mieux notés prêts à vous aider',
    view: 'Voir',
    viewAllLawyers: 'Voir tous les avocats',
    whatClientsSay: 'Ce que disent nos clients',
    realStories: 'De vraies histoires de vrais clients qui ont trouvé une aide juridique sur LAWNET',
    ctaTitle: 'Prêt à trouver votre avocat ?',
    ctaDesc: 'Rejoignez des milliers de clients satisfaits qui ont trouvé le bon avocat sur LAWNET.',
    getStarted: 'Commencer'
  } : {
    howItWorks: 'How LAWNET Works',
    getHelpSteps: 'Get legal help in 3 simple steps',
    search: 'Search',
    searchDesc: 'Browse through our directory of verified lawyers by specialty, location, or name.',
    book: 'Book',
    bookDesc: 'Schedule an appointment at your convenience with secure online booking.',
    connect: 'Connect',
    connectDesc: 'Chat, video call, or meet your lawyer and get the legal help you need.',
    practiceAreas: 'Practice Areas',
    findLawyers: 'Find lawyers specializing in your legal needs',
    criminalDefense: 'Criminal Defense',
    criminalDefenseDesc: 'Expert legal representation for criminal charges and proceedings.',
    corporateLaw: 'Corporate Law',
    corporateLawDesc: 'Business formation, contracts, and commercial legal matters.',
    familyLaw: 'Family Law',
    familyLawDesc: 'Divorce, custody, adoption, and family-related legal issues.',
    realEstate: 'Real Estate',
    realEstateDesc: 'Property transactions, leases, and real estate disputes.',
    personalInjury: 'Personal Injury',
    personalInjuryDesc: 'Compensation for injuries and accidents caused by others.',
    immigration: 'Immigration',
    immigrationDesc: 'Visas, citizenship, and immigration legal assistance.',
    whyChoose: 'Why Choose LAWNET?',
    mostTrusted: 'The most trusted platform for legal assistance',
    verifiedLawyers: 'Verified Lawyers',
    verifiedLawyersDesc: 'All lawyers on our platform are thoroughly vetted and verified for credentials.',
    honestReviews: 'Honest Reviews',
    honestReviewsDesc: 'Real reviews from verified clients to help you make informed decisions.',
    easyScheduling: 'Easy Scheduling',
    easySchedulingDesc: 'Book appointments that fit your schedule with instant confirmation.',
    secureMessaging: 'Secure Messaging',
    secureMessagingDesc: 'Communicate safely with your lawyer through encrypted messaging.',
    availability247: '24/7 Availability',
    availability247Desc: 'Access legal help anytime with our round-the-clock platform support.',
    transparentPricing: 'Transparent Pricing',
    transparentPricingDesc: 'Clear fee structures with no hidden costs or surprises.',
    featuredLawyers: 'Featured Lawyers',
    topLawyers: 'Top-rated lawyers ready to help you',
    view: 'View',
    viewAllLawyers: 'View All Lawyers',
    whatClientsSay: 'What Our Clients Say',
    realStories: 'Real stories from real clients who found legal help on LAWNET',
    ctaTitle: 'Ready to find your lawyer?',
    ctaDesc: 'Join thousands of satisfied clients who found the right lawyer on LAWNET.',
    getStarted: 'Get Started'
  };

  const features = [
    {
      id: 1,
      title: language === 'fr' ? 'Avocats vérifiés' : 'Verified Lawyers',
      description: language === 'fr' ? 'Tous les avocats de notre plateforme sont soigneusement examinés.' : 'All lawyers on our platform are thoroughly vetted and verified for credentials.',
      image: "/assets/129364.jpg"
    },
    {
      id: 2,
      title: language === 'fr' ? 'Avis honnêtes' : 'Honest Reviews',
      description: language === 'fr' ? 'De vrais avis de clients vérifiés pour vous aider à prendre des décisions.' : 'Real reviews from verified clients to help you make informed decisions.',
      image: "/assets/droit.jpg"
    },
    {
      id: 3,
      title: language === 'fr' ? 'Planification facile' : 'Easy Scheduling',
      description: language === 'fr' ? 'Réservez des rendez-vous qui correspondent à votre emploi du temps.' : 'Book appointments that fit your schedule with instant confirmation.',
      image: "/assets/devis.jpg"
    },
    {
      id: 4,
      title: language === 'fr' ? 'Messagerie sécurisée' : 'Secure Messaging',
      description: language === 'fr' ? 'Communiquez en toute sécurité avec votre avocat.' : 'Communicate safely with your lawyer through encrypted messaging.',
      image: "/assets/ticket.jpg"
    },
    {
      id: 5,
      title: language === 'fr' ? 'Disponibilité 24h/24' : '24/7 Availability',
      description: language === 'fr' ? 'Accédez à l\'aide juridique à tout moment.' : 'Access legal help anytime with our round-the-clock platform support.',
      image: "/assets/services.jpg"
    },
    {
      id: 6,
      title: language === 'fr' ? 'Tarification transparente' : 'Transparent Pricing',
      description: language === 'fr' ? 'Structures de frais claires sans coûts cachés.' : 'Clear fee structures with no hidden costs or surprises.',
      image: "/assets/banner_2.jpg"
    }
  ];

  return (
    <main className="home">
      {/* Hero Section - Standalone Component */}
      <HeroBanner />

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="section-container">
          <h2 className="section-title">{content.howItWorks}</h2>
          <p className="section-subtitle">{content.getHelpSteps}</p>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">
                <Search size={28} />
              </div>
              <h3>{content.search}</h3>
              <p>{content.searchDesc}</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">
                <Calendar size={28} />
              </div>
              <h3>{content.book}</h3>
              <p>{content.bookDesc}</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">
                <MessageSquare size={28} />
              </div>
              <h3>{content.connect}</h3>
              <p>{content.connectDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section id="practice-areas" className="practice-areas">
        <div className="section-container">
          <h2 className="section-title">{content.practiceAreas}</h2>
          <p className="section-subtitle">{content.findLawyers}</p>
          
          <div className="areas-grid">
            <div className="area-card">
              <Gavel size={32} />
              <h3>{content.criminalDefense}</h3>
              <p>{content.criminalDefenseDesc}</p>
            </div>
            <div className="area-card">
              <Briefcase size={32} />
              <h3>{content.corporateLaw}</h3>
              <p>{content.corporateLawDesc}</p>
            </div>
            <div className="area-card">
              <Heart size={32} />
              <h3>{content.familyLaw}</h3>
              <p>{content.familyLawDesc}</p>
            </div>
            <div className="area-card">
              <FileText size={32} />
              <h3>{content.realEstate}</h3>
              <p>{content.realEstateDesc}</p>
            </div>
            <div className="area-card">
              <Scale size={32} />
              <h3>{content.personalInjury}</h3>
              <p>{content.personalInjuryDesc}</p>
            </div>
            <div className="area-card">
              <Shield size={32} />
              <h3>{content.immigration}</h3>
              <p>{content.immigrationDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose LAWNET Section */}
      <section id="why-us" className="why-us">
        <div className="section-container">
          <h2 className="section-title">{content.whyChoose}</h2>
          <p className="section-subtitle">{content.mostTrusted}</p>
          
          <div className="features-grid">
            {features.map((feature) => (
              <div className="feature-card" key={feature.id}>
                <div className="feature-image">
                  <img src={feature.image} alt={feature.title} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Lawyers Section */}
      <section id="featured-lawyers" className="featured-lawyers">
        <div className="section-container">
          <h2 className="section-title">{content.featuredLawyers}</h2>
          <p className="section-subtitle">{content.topLawyers}</p>
          
          <div className="lawyers-grid">
            {lawyersData.slice(0, 4).map((lawyer) => (
              <div className="lawyer-card" key={lawyer.id}>
                <div className="lawyer-image">
                  <img src={lawyer.image} alt={lawyer.name} />
                </div>
                <div className="lawyer-info">
                  <h3>{lawyer.name}</h3>
                  <p className="lawyer-specialty">{lawyer.specialty}</p>
                  <div className="lawyer-rating">
                    <Star size={14} className="star filled" />
                    <span>({lawyer.reviews})</span>
                  </div>
                  <p className="lawyer-location"><MapPin size={12} /> {lawyer.location}</p>
                  <div className="lawyer-actions">
                    <button className="btn-primary" onClick={() => navigate(`/book/${lawyer.id}`)}><Eye size={14} /> {content.view}</button>
                    <button className="btn-outline" onClick={() => navigate(`/book/${lawyer.id}`)}><Calendar size={14} /> {language === 'fr' ? 'Réserver' : 'Book'}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="section-cta">
            <a href="/lawyers" className="btn-outline">
              {content.viewAllLawyers} <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="section-container">
          <h2 className="section-title">{content.whatClientsSay}</h2>
          <p className="section-subtitle">{content.realStories}</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
              </div>
              <p className="testimonial-text">
                "LAWNET made it incredibly easy to find a great lawyer for my case. The booking system was straightforward and the lawyer I chose was professional and helpful."
              </p>
              <div className="testimonial-author">
                <img src="/assets/avatar.jpg" alt="Client" />
                <div>
                  <h4>Michael Chen</h4>
                  <p>Family Law Case</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
              </div>
              <p className="testimonial-text">
                "The 24/7 messaging feature was a lifesaver. I could communicate with my attorney anytime, which made my legal process much smoother."
              </p>
              <div className="testimonial-author">
                <img src="/assets/avatar.png" alt="Client" />
                <div>
                  <h4>Emily Rodriguez</h4>
                  <p>Business Contract</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
              </div>
              <p className="testimonial-text">
                "I was impressed by how transparent everything was. No hidden fees, clear communication, and excellent legal representation."
              </p>
              <div className="testimonial-author">
                <img src="/assets/avatar.jpg" alt="Client" />
                <div>
                  <h4>David Thompson</h4>
                  <p>Personal Injury</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
  
    </main>
  );
};

export default Home;
