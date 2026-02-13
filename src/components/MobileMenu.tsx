import { useLanguage } from '../context/LanguageContext';
import { 
  Search, 
  User, 
  MessageSquare, 
  Home,
  FileText,
  Scale,
  Info,
  Phone,
  LogIn,
  UserPlus
} from 'lucide-react';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (lang: 'fr' | 'en') => {
    setLanguage(lang);
  };

  const menuItems = [
    { href: '/', icon: <Home size={20} />, label: t('nav.home') },
    { href: '/lawyers', icon: <Search size={20} />, label: t('nav.lawyers') },
    { href: '/domain', icon: <Scale size={20} />, label: t('services.title') },
    { href: '/about', icon: <Info size={20} />, label: t('nav.about') },
    { href: '/contact', icon: <Phone size={20} />, label: t('nav.contact') },
    { href: '/dashboard', icon: <User size={20} />, label: t('nav.dashboard') },
    { href: '/messages', icon: <MessageSquare size={20} />, label: t('nav.search') },
  ];

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-overlay ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
      />
      
      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <div className="mobile-logo">
            <Scale size={28} />
            <span>LAW<span>NET</span></span>
          </div>
          <button className="close-menu" onClick={onClose}>
            ×
          </button>
        </div>

        <ul className="mobile-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href} 
                className="mobile-link"
                onClick={onClose}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-actions">
          <a href="/login" className="btn btn-outline mobile-btn">
            <LogIn size={18} /> {language === 'fr' ? 'Connexion' : 'Login'}
          </a>
          <a href="/register" className="btn btn-primary mobile-btn">
            <UserPlus size={18} /> {language === 'fr' ? 'Inscription' : 'Register'}
          </a>
        </div>

        <div className="mobile-lang-selector">
          <span>Language:</span>
          <button 
            className={`mobile-lang-item ${language === 'fr' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('fr')}
          >
            FR
          </button>
          <button 
            className={`mobile-lang-item ${language === 'en' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            EN
          </button>
        </div>
      </nav>
    </>
  );
};

export default MobileMenu;
