import { useState } from 'react';
import MobileMenu from './MobileMenu';
import MobileBanner from './MobileBanner';
import { useLanguage } from '../context/LanguageContext';
import { 
  Phone,
  Mail,
  Menu,
  X,
  LogIn,
  UserPlus
} from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
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
            <div className="auth-buttons">
              <a href="/login" className="auth-btn login-btn">
                <LogIn size={14} className="icon" />
                <span className="label">{language === 'fr' ? 'Connexion' : 'Login'}</span>
              </a>
              <a href="/register" className="auth-btn register-btn">
                <UserPlus size={14} className="icon" />
                <span className="label">{language === 'fr' ? 'Inscription' : 'Register'}</span>
              </a>
            </div>
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
              <a href="/" className="nav-link active">Home</a>
            </li>
            <li>
              <a href="/lawyers" className="nav-link">Lawyers</a>
            </li>
            <li>
              <a href="/domain" className="nav-link">Practice Areas</a>
            </li>
            <li>
              <a href="/about" className="nav-link">About</a>
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
