import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Scale } from 'lucide-react';
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
        <h2 className="mobile-footer-logo">
          <Scale size={24} />
          LAW<span>NET</span>
        </h2>
        <p className="mobile-footer-desc">
          Connecting people with qualified lawyers for accessible, transparent legal assistance.
        </p>
        <motion.div 
          className="mobile-footer-social"
          variants={staggerContainer}
        >
          <motion.a href="https://www.linkedin.com/company/lawnet" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" whileHover={{ scale: 1.2 }}><Linkedin size={20} /></motion.a>
          <motion.a href="https://www.facebook.com/lawnet" target="_blank" rel="noopener noreferrer" aria-label="Facebook" whileHover={{ scale: 1.2 }}><Facebook size={20} /></motion.a>
          <motion.a href="https://www.twitter.com/lawnet" target="_blank" rel="noopener noreferrer" aria-label="Twitter" whileHover={{ scale: 1.2 }}><Twitter size={20} /></motion.a>
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
        <motion.a href="tel:+1-800-LAWNET" className="mobile-contact-card" variants={fadeInUp}>
          <div className="mobile-contact-icon"><Phone size={20} /></div>
          <div className="mobile-contact-info">
            <span className="mobile-contact-label">Call Us</span>
            <span className="mobile-contact-value">1-800-LAWNET</span>
          </div>
        </motion.a>
        <motion.a href="mailto:info@lawnet.com" className="mobile-contact-card" variants={fadeInUp}>
          <div className="mobile-contact-icon"><Mail size={20} /></div>
          <div className="mobile-contact-info">
            <span className="mobile-contact-label">Email Us</span>
            <span className="mobile-contact-value">info@lawnet.com</span>
          </div>
        </motion.a>
        <motion.div className="mobile-contact-card" variants={fadeInUp}>
          <div className="mobile-contact-icon"><MapPin size={20} /></div>
          <div className="mobile-contact-info">
            <span className="mobile-contact-label">Visit Us</span>
            <span className="mobile-contact-value">123 Legal Street, New York, NY 10001</span>
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
        <h3>Quick Links</h3>
        <div className="mobile-links-grid">
          <motion.a href="/" className="mobile-link-item" whileHover={{ x: 5 }}>Home</motion.a>
          <motion.a href="/search" className="mobile-link-item" whileHover={{ x: 5 }}>Find a Lawyer</motion.a>
          <motion.a href="/services" className="mobile-link-item" whileHover={{ x: 5 }}>Practice Areas</motion.a>
          <motion.a href="/dashboard" className="mobile-link-item" whileHover={{ x: 5 }}>My Account</motion.a>
        </div>
      </motion.div>

      {/* Practice Areas */}
      <motion.div 
        className="mobile-footer-services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
      >
        <h3>Practice Areas</h3>
        <div className="mobile-links-grid">
          <motion.a href="/search?area=criminal" className="mobile-link-item" whileHover={{ x: 5 }}>Criminal Defense</motion.a>
          <motion.a href="/search?area=family" className="mobile-link-item" whileHover={{ x: 5 }}>Family Law</motion.a>
          <motion.a href="/search?area=corporate" className="mobile-link-item" whileHover={{ x: 5 }}>Corporate Law</motion.a>
          <motion.a href="/search?area=real-estate" className="mobile-link-item" whileHover={{ x: 5 }}>Real Estate</motion.a>
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
        <p>© {new Date().getFullYear()} LAWNET. All rights reserved.</p>
        <div className="mobile-footer-legal">
          <motion.a href="/privacy" whileHover={{ scale: 1.1 }}>Privacy Policy</motion.a>
          <motion.a href="/terms" whileHover={{ scale: 1.1 }}>Terms of Service</motion.a>
        </div>
      </motion.div>
    </footer>
  );
};

export default MobileFooter;
