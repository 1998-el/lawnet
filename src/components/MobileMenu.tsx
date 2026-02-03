import './MobileMenu.css';

const MobileMenu = () => {
  return (
    <details className="mobile-menu-container">
      <summary className="mobile-menu-toggle" aria-label="Toggle menu">
        <span className="hamburger"></span>
      </summary>
      <nav className="mobile-nav">
        <ul className="mobile-menu">
          <li><a href="/" className="mobile-link active">Accueil</a></li>
          <li><a href="#services" className="mobile-link">Services</a></li>
          <li><a href="#about" className="mobile-link">À propos</a></li>
          <li><a href="#projects" className="mobile-link">Projets</a></li>
          <li><a href="#contact" className="mobile-link mobile-btn-contact">Contact</a></li>
        </ul>
      </nav>
      <div className="mobile-overlay"></div>
    </details>
  );
};

export default MobileMenu;
