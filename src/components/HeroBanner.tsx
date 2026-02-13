import React from 'react';
import { Scale, Star, Shield, ArrowRight } from 'lucide-react';
import './HeroBanner.css';

const HeroBanner: React.FC = () => {
  return (
    <section className="hero-banner">
      <img 
        src="https://plus.unsplash.com/premium_photo-1698084059560-9a53de7b816b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF2b2NhdCUyMGFmcm98ZW58MHx8MHx8fDA%3D" 
        alt="Legal Partner" 
        className="hero-banner-bg"
      />
      <div className="hero-banner-overlay"></div>
      
      <div className="hero-banner-content">
       
        
        <h1 className="hero-banner-title">
          Your Trusted<br />
          Legal Partner
        </h1>
        
        <p className="hero-banner-subtitle">
          Professional and personalized legal solutions
          to protect your interests with excellence.
        </p>
        
        <div className="hero-banner-search">
          <div className="hero-banner-search-input">
            <ArrowRight size={18} className="search-icon" />
            <input type="text" placeholder="Search for a lawyer, a domain..." />
          </div>
          <button className="hero-banner-search-btn">Search</button>
        </div>
        
        <div className="hero-banner-stats">
          <div className="hero-banner-stat">
            <Star size={20} />
            <span className="hero-banner-stat-number">15+</span>
            <span className="hero-banner-stat-label">Years of Experience</span>
          </div>
          <div className="hero-banner-stat">
            <Shield size={20} />
            <span className="hero-banner-stat-number">500+</span>
            <span className="hero-banner-stat-label">Satisfied Clients</span>
          </div>
          <div className="hero-banner-stat">
            <Scale size={20} />
            <span className="hero-banner-stat-number">98%</span>
            <span className="hero-banner-stat-label">Success Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
