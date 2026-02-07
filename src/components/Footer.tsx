import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Scale,
  Shield,
  Clock,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import './Footer.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Footer = () => {
  
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer */}
        <motion.div 
          className="footer-main"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
        >
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Scale size={32} />
              <span>LAW<span>NET</span></span>
            </div>
            <p className="footer-description">
              Connecting people with qualified lawyers for accessible, transparent legal assistance.
            </p>
            <div className="footer-trust">
              <div className="trust-item">
                <Shield size={18} />
                <span>Verified Lawyers</span>
              </div>
              <div className="trust-item">
                <Clock size={18} />
                <span>24/7 Support</span>
              </div>
              <div className="trust-item">
                <CheckCircle size={18} />
                <span>Secure Platform</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/search">Find a Lawyer</a></li>
              <li><a href="/services">Practice Areas</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="footer-section">
            <h4>Practice Areas</h4>
            <ul className="footer-links">
              <li><a href="/search?area=criminal">Criminal Defense</a></li>
              <li><a href="/search?area=family">Family Law</a></li>
              <li><a href="/search?area=corporate">Corporate Law</a></li>
              <li><a href="/search?area=real-estate">Real Estate</a></li>
              <li><a href="/search?area=personal-injury">Personal Injury</a></li>
              <li><a href="/search?area=immigration">Immigration</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon"><MapPin size={18} /></span>
                <span>123 Legal Street, New York, NY 10001</span>
              </li>
              <li>
                <span className="contact-icon"><Phone size={18} /></span>
                <a href="tel:+1-800-LAWNET">1-800-LAWNET</a>
              </li>
              <li>
                <span className="contact-icon"><Mail size={18} /></span>
                <a href="mailto:info@lawnet.com">info@lawnet.com</a>
              </li>
            </ul>
            <div className="footer-social">
              <motion.a 
                href="https://www.linkedin.com/company/lawnet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="https://www.facebook.com/lawnet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                whileHover={{ scale: 1.2 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="https://www.twitter.com/lawnet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                whileHover={{ scale: 1.2 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/lawnet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{ scale: 1.2 }}
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div 
          className="footer-newsletter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="newsletter-content">
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for legal tips and platform updates.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>© {new Date().getFullYear()} LAWNET. All rights reserved. | <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a></p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
