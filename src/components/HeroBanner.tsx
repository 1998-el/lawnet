import React from 'react';
import { Scale, Star, Shield, ArrowRight, Phone, Mail } from 'lucide-react';
import './HeroBanner.css';

const HeroBanner: React.FC = () => {
  return (
    <section className="hero-banner">
      <img 
        src="/assets/droit.jpg" 
        alt="Cabinet d'Avocats" 
        className="hero-banner-bg"
      />
      <div className="hero-banner-overlay"></div>
      
      <div className="hero-banner-content">
       
        
        <h1 className="hero-banner-title">
          Votre partenaire<br />
          juridique de confiance
        </h1>
        
        <p className="hero-banner-subtitle">
          Des solutions juridiques professionnelles et personnalisées 
          pour protéger vos intérêts avec excellence.
        </p>
        
        <div className="hero-banner-search">
          <div className="hero-banner-search-input">
            <ArrowRight size={18} className="search-icon" />
            <input type="text" placeholder="Rechercher un avocat, un domaine..." />
          </div>
          <button className="hero-banner-search-btn">Rechercher</button>
        </div>
        
        <div className="hero-banner-stats">
          <div className="hero-banner-stat">
            <Star size={20} />
            <span className="hero-banner-stat-number">15+</span>
            <span className="hero-banner-stat-label">Années d'expérience</span>
          </div>
          <div className="hero-banner-stat">
            <Shield size={20} />
            <span className="hero-banner-stat-number">500+</span>
            <span className="hero-banner-stat-label">Clients satisfaits</span>
          </div>
          <div className="hero-banner-stat">
            <Scale size={20} />
            <span className="hero-banner-stat-number">98%</span>
            <span className="hero-banner-stat-label">Taux de succès</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
