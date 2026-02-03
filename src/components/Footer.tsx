import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  Facebook,
  ArrowRight 
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
        <motion.div 
          className="footer-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
        >
          <h3 className="footer-logo">BW<span>GROUP</span></h3>
          <p className="footer-description">
            Votre partenaire de confiance pour des solutions innovantes et performantes.
            Nous accompagnons votre entreprise vers le succès.
          </p>
        </motion.div>

        <motion.div 
          className="footer-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
        >
          <h4>Liens rapides</h4>
          <ul className="footer-links">
            <motion.li variants={fadeInUp}><a href="/">Accueil</a></motion.li>
            <motion.li variants={fadeInUp}><a href="#services">Services</a></motion.li>
            <motion.li variants={fadeInUp}><a href="#about">À propos</a></motion.li>
            <motion.li variants={fadeInUp}><a href="#contact">Contact</a></motion.li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
        >
          <h4>Services</h4>
          <ul className="footer-links">
            <motion.li variants={fadeInUp}><a href="#services">Conseil stratégique</a></motion.li>
            <motion.li variants={fadeInUp}><a href="#services">Innovation</a></motion.li>
            <motion.li variants={fadeInUp}><a href="#services">Performance</a></motion.li>
            <motion.li variants={fadeInUp}><a href="#services">Analyse de données</a></motion.li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
        >
          <h4>Contact</h4>
          <ul className="footer-contact">
            <motion.li variants={fadeInUp}>
              <span className="contact-icon"><MapPin size={18} /></span>
              Biyemassi, Yaounde, Cameroun
            </motion.li>
            <motion.li variants={fadeInUp}>
              <span className="contact-icon"><Phone size={18} /></span>
              +237 242 009 397
            </motion.li>
            <motion.li variants={fadeInUp}>
              <span className="contact-icon"><Phone size={18} /></span>
              +237 679 177 560
            </motion.li>
            <motion.li variants={fadeInUp}>
              <span className="contact-icon"><Mail size={18} /></span>
              contact@bwgroup.com
            </motion.li>
          </ul>
        </motion.div>
      </div>

      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p> BW Group Ltd Copyright &copy; {new Date().getFullYear()}. Tous droits réservés.</p>
        <div className="footer-social">
          <motion.a 
            href="#" 
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <Linkedin size={18} />
          </motion.a>
          <motion.a 
            href="#" 
            aria-label="Twitter"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <Twitter size={18} />
          </motion.a>
          <motion.a 
            href="#" 
            aria-label="Facebook"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <Facebook size={18} />
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
