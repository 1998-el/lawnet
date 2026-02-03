import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import './MobileFooter.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const MobileFooter = () => {
  return (
    <footer className="mobile-footer">
      {/* Brand */}
      <motion.div 
        className="mobile-footer-brand"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
      >
        <h2 className="mobile-footer-logo">BW<span>GROUP</span></h2>
        <p className="mobile-footer-desc">
          Votre partenaire de confiance pour des solutions innovantes et performantes.
        </p>
        <motion.div 
          className="mobile-footer-social"
          variants={staggerContainer}
        >
          <motion.a href="#" aria-label="LinkedIn" whileHover={{ scale: 1.2 }}><Linkedin size={20} /></motion.a>
          <motion.a href="#" aria-label="Twitter" whileHover={{ scale: 1.2 }}><Twitter size={20} /></motion.a>
          <motion.a href="#" aria-label="Facebook" whileHover={{ scale: 1.2 }}><Facebook size={20} /></motion.a>
        </motion.div>
      </motion.div>

      {/* Contact Cards */}
      <motion.div 
        className="mobile-footer-contacts"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={staggerContainer}
      >
        <motion.a href="tel:+237242009397" className="mobile-contact-card" variants={fadeInUp}>
          <div className="mobile-contact-icon"><Phone size={20} /></div>
          <div className="mobile-contact-info">
            <span className="mobile-contact-label">Appelez-nous</span>
            <span className="mobile-contact-value">+237 242 009 397</span>
          </div>
        </motion.a>
        <motion.a href="tel:+237679177560" className="mobile-contact-card" variants={fadeInUp}>
          <div className="mobile-contact-icon"><Phone size={20} /></div>
          <div className="mobile-contact-info">
            <span className="mobile-contact-label">Appelez-nous</span>
            <span className="mobile-contact-value">+237 679 177 560</span>
          </div>
        </motion.a>
        <motion.a href="mailto:contact@bwgroup.com" className="mobile-contact-card" variants={fadeInUp}>
          <div className="mobile-contact-icon"><Mail size={20} /></div>
          <div className="mobile-contact-info">
            <span className="mobile-contact-label">Envoyez un email</span>
            <span className="mobile-contact-value">contact@bwgroup.com</span>
          </div>
        </motion.a>
        <motion.div className="mobile-contact-card" variants={fadeInUp}>
          <div className="mobile-contact-icon"><MapPin size={20} /></div>
          <div className="mobile-contact-info">
            <span className="mobile-contact-label">Notre adresse</span>
            <span className="mobile-contact-value">Biyemassi, Yaounde, Cameroun</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Quick Links */}
      <motion.div 
        className="mobile-footer-links"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
      >
        <h3>Liens rapides</h3>
        <div className="mobile-links-grid">
          <motion.a href="/" className="mobile-link-item" whileHover={{ x: 5 }}>Accueil</motion.a>
          <motion.a href="#services" className="mobile-link-item" whileHover={{ x: 5 }}>Services</motion.a>
          <motion.a href="#about" className="mobile-link-item" whileHover={{ x: 5 }}>À propos</motion.a>
          <motion.a href="#contact" className="mobile-link-item" whileHover={{ x: 5 }}>Contact</motion.a>
        </div>
      </motion.div>

      {/* Services */}
      <motion.div 
        className="mobile-footer-services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
      >
        <h3>Nos services</h3>
        <div className="mobile-links-grid">
          <motion.a href="#services" className="mobile-link-item" whileHover={{ x: 5 }}>Conseil stratégique</motion.a>
          <motion.a href="#services" className="mobile-link-item" whileHover={{ x: 5 }}>Innovation</motion.a>
          <motion.a href="#services" className="mobile-link-item" whileHover={{ x: 5 }}>Performance</motion.a>
          <motion.a href="#services" className="mobile-link-item" whileHover={{ x: 5 }}>Analyse de données</motion.a>
        </div>
      </motion.div>

      {/* Bottom */}
      <motion.div 
        className="mobile-footer-bottom"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        <p>© {new Date().getFullYear()} BW Group Ltd. Tous droits réservés.</p>
        <div className="mobile-footer-legal">
          <motion.a href="#" whileHover={{ scale: 1.1 }}>Confidentialité</motion.a>
          <motion.a href="#" whileHover={{ scale: 1.1 }}>Conditions</motion.a>
        </div>
      </motion.div>
    </footer>
  );
};

export default MobileFooter;
