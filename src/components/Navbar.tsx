import { useState, useCallback, useMemo } from 'react';
import MobileMenu from './MobileMenu';
import MobileBanner from './MobileBanner';
import { useLanguage } from '../context/LanguageContext';
import NavbarTopBar from './NavbarTopBar';
import NavbarLogo from './NavbarLogo';
import NavbarDesktopMenu from './NavbarDesktopMenu';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const navLinks = useMemo(() => [
    { path: '/', label: 'Home', type: 'link' as const },
    { path: '/lawyers', label: 'Lawyers', type: 'link' as const },
    { path: '/domain', label: 'Practice Areas', type: 'link' as const },
    { path: '/about', label: 'About', type: 'link' as const },
    { path: '/contact', label: 'Contact', type: 'button' as const }
  ], []);

  return (
    <header className="header">
      {/* Top Bar - Separated Component */}
      <NavbarTopBar 
        language={language}
        onLanguageChange={setLanguage}
      />

      {/* Mobile Banner */}
      <MobileBanner />

      {/* Main Navigation */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar-container">
          <NavbarLogo />

          {/* Desktop Menu */}
          <NavbarDesktopMenu links={navLinks} />

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">
              {mobileMenuOpen ? 'Close menu' : 'Open menu'}
            </span>
            {mobileMenuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>

          {/* Mobile Menu */}
          <MobileMenu 
            id="mobile-menu"
            isOpen={mobileMenuOpen} 
            onClose={closeMobileMenu}
            links={navLinks}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
