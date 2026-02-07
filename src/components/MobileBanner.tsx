import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail } from 'lucide-react';
import './MobileBanner.css';

const MobileBanner = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="mobile-banner">
      <div className="mobile-banner-container">
        {/* Contact Info */}
        <div className="mobile-banner-contact">
          <a href="tel:+1-800-LAWNET" className="mobile-contact-item">
            <Phone size={16} className="contact-icon" />
            <span className="contact-text">1-800-LAWNET</span>
          </a>
          <a href="mailto:info@lawnet.com" className="mobile-contact-item">
            <Mail size={16} className="contact-icon" />
            <span className="contact-text">info@lawnet.com</span>
          </a>
        </div>

        {/* Language Toggle */}
        <div className="mobile-lang-actions">
          <div className="mobile-language-toggle">
            <button
              className={`mobile-lang-btn ${language === 'fr' ? 'active' : ''}`}
              onClick={() => setLanguage('fr')}
            >
              FR
            </button>
            <button
              className={`mobile-lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBanner;
