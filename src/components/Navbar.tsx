import { Globe, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';
import MobileBanner from './MobileBanner';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      {/* Desktop Top Bar */}
      <motion.div 
        className="top-bar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="top-bar-container">
          <div className="top-bar-contact">
            <a href="tel:+237242009397" className="top-contact-item">
              <span className="icon">&#9742;</span>
              <span className="label">+237 242 009 397</span>
            </a>
            <a href="tel:+237679177560" className="top-contact-item">
              <span className="icon">&#9742;</span>
              <span className="label">+237 679 177 560</span>
            </a>
            <a href="mailto:contact@bwgroup.com" className="top-contact-item">
              <span className="icon">&#9993;</span>
              <span className="label">contact@bwgroup.com</span>
            </a>
          </div>
          <div className="top-bar-actions">
            <details className="language-selector">
              <summary className="language-btn">
                <Globe size={14} />
                <span>FR</span>
                <ChevronDown size={14} />
              </summary>
              <div className="language-dropdown">
                <button className="language-option">FR</button>
                <button className="language-option">EN</button>
                <button className="language-option">ES</button>
              </div>
            </details>
          </div>
        </div>
      </motion.div>

      {/* Mobile Banner */}
      <MobileBanner />

      {/* Main Navigation */}
      <motion.nav 
        className="navbar"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            BW<span>GROUP</span>
          </a>

          {/* Desktop Menu */}
          <ul className="navbar-menu">
            <motion.li whileHover={{ scale: 1.05 }}><a href="/" className="nav-link active">Accueil</a></motion.li>
            <motion.li whileHover={{ scale: 1.05 }}><a href="#services" className="nav-link">Services</a></motion.li>
            <motion.li whileHover={{ scale: 1.05 }}><a href="#about" className="nav-link">À propos</a></motion.li>
            <motion.li whileHover={{ scale: 1.05 }}><a href="#projects" className="nav-link">Projets</a></motion.li>
            <motion.li whileHover={{ scale: 1.05 }}><a href="#contact" className="nav-link btn-contact">Contact</a></motion.li>
          </ul>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
