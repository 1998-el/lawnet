import { Globe, ChevronDown } from 'lucide-react';
import './MobileBanner.css';

const MobileBanner = () => {
  return (
    <div className="mobile-banner">
      <div className="mobile-banner-container">
        {/* Phone Number Carousel */}
        <div className="phone-carousel">
          <div className="phone-carousel-inner">
            <a href="tel:+237242009397" className="phone-item">
              <span className="phone-icon">&#9742;</span>
              <span className="phone-text">+237 242 009 397</span>
            </a>
            <a href="tel:+237679177560" className="phone-item">
              <span className="phone-icon">&#9742;</span>
              <span className="phone-text">+237 679 177 560</span>
            </a>
            <a href="mailto:contact@bwgroup.com" className="phone-item">
              <span className="phone-icon">&#9993;</span>
              <span className="phone-text">contact@bwgroup.com</span>
            </a>
          </div>
        </div>

        {/* Language Selector */}
        <div className="mobile-lang-actions">
          <details className="mobile-language-selector">
            <summary className="mobile-language-btn">
              <Globe size={14} />
              <span>FR</span>
              <ChevronDown size={14} />
            </summary>
            <div className="mobile-language-dropdown">
              <button className="mobile-language-option">FR</button>
              <button className="mobile-language-option">EN</button>
              <button className="mobile-language-option">ES</button>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default MobileBanner;
