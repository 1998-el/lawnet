import { useState } from 'react';
import MobileMenu from './MobileMenu';
import MobileBanner from './MobileBanner';
import { useLanguage } from '../context/LanguageContext';
import { 
  Phone,
  Mail,
  Menu,
  X
} from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-contact">
            <a href="tel:+1-800-LAWNET" className="top-contact-item">
              <Phone size={14} className="icon" />
              <span className="label">1-800-LAWNET</span>
            </a>
            <a href="mailto:info@lawnet.com" className="top-contact-item">
              <Mail size={14} className="icon" />
              <span className="label">info@lawnet.com</span>
            </a>
          </div>
          <div className="top-bar-actions">
            <div className="language-toggle">
              <button
                className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
                onClick={() => setLanguage('fr')}
              >
                FR
              </button>
              <button
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Banner */}
      <MobileBanner />

      {/* Main Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            LAW<span>NET</span>
          </a>

          {/* Desktop Menu */}
          <ul className="navbar-menu">
            <li>
              <a href="/" className="nav-link active">Accueil</a>
            </li>
            <li>
              <a href="/lawyers" className="nav-link">Avocats</a>
            </li>
            <li>
              <a href="/domain" className="nav-link">Domaines</a>
            </li>
            <li>
              <a href="/about" className="nav-link">À propos</a>
            </li>
            <li>
              <a href="/contact" className="nav-link btn-contact">Contact</a>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu */}
          <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
