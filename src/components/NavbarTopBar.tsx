import { memo } from 'react';
import { Phone, Mail, LogIn, UserPlus } from 'lucide-react';

interface NavbarTopBarProps {
  language: 'fr' | 'en';
  onLanguageChange: (lang: 'fr' | 'en') => void;
}

const NavbarTopBar = memo(({ language, onLanguageChange }: NavbarTopBarProps) => {
  const translations = {
    login: 'Login',
    register: 'Register'
  };

  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <div className="top-bar-contact">
          <a 
            href="tel:+1-800-LAWNET" 
            className="top-contact-item"
            aria-label="Call us at 1-800-LAWNET"
          >
            <Phone size={14} className="icon" aria-hidden="true" />
            <span className="label">1-800-LAWNET</span>
          </a>
          <a 
            href="mailto:info@lawnet.com" 
            className="top-contact-item"
            aria-label="Email us at info@lawnet.com"
          >
            <Mail size={14} className="icon" aria-hidden="true" />
            <span className="label">info@lawnet.com</span>
          </a>
        </div>
        
        <div className="top-bar-actions">
          <div className="auth-buttons">
            <a 
              href="/login" 
              className="auth-btn login-btn"
              aria-label={translations.login}
            >
              <LogIn size={14} className="icon" aria-hidden="true" />
              <span className="label">{translations.login}</span>
            </a>
            <a 
              href="/register" 
              className="auth-btn register-btn"
              aria-label={translations.register}
            >
              <UserPlus size={14} className="icon" aria-hidden="true" />
              <span className="label">{translations.register}</span>
            </a>
          </div>
          
          <div className="language-toggle" role="tablist">
            <button
              className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
              onClick={() => onLanguageChange('fr')}
              aria-selected={language === 'fr'}
              role="tab"
              aria-label="Switch to French"
            >
              FR
            </button>
            <button
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => onLanguageChange('en')}
              aria-selected={language === 'en'}
              role="tab"
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

NavbarTopBar.displayName = 'NavbarTopBar';
export default NavbarTopBar;
