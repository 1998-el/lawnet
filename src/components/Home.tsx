import { 
  Briefcase, 
  Lightbulb, 
  Zap, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Award,
  ArrowRight,
  CreditCard,
  FileText,
  Ticket,
  Calendar,
  Clock,
  User,
  MessageSquare,
  Shield,
  Target,
  Users as UsersIcon,
  Zap as ZapIcon,
  RefreshCw,
  Heart
} from 'lucide-react';
import { motion } from 'framer-motion';
import './Home.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
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

const Home = () => {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            BW<span>GROUP</span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Solutions d'entreprise innovantes
          </motion.p>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Nous transformons vos idées en réalités tangibles. 
            Découvrez comment notre expertise peut propulser votre entreprise vers de nouveaux sommets.
            Avec plus de 10 ans d'expérience, nous accompagnons les entreprises dans leur transformation 
            numérique et leur croissance durable. Notre équipe d'experts passionnés est dédiée à votre succès.
          </motion.p>
          <motion.div 
            className="hero-features"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="feature">
              <span className="feature-icon"><Award size={18} /></span>
              <span>Expertise reconnue</span>
            </div>
            <div className="feature">
              <span className="feature-icon"><TrendingUp size={18} /></span>
              <span>Résultats mesurables</span>
            </div>
            <div className="feature">
              <span className="feature-icon"><Users size={18} /></span>
              <span>Accompagnement personnalisé</span>
            </div>
          </motion.div>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a href="#services" className="btn btn-primary">
              Découvrir nos services <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">Nous contacter</a>
          </motion.div>
        </div>
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img 
            src="./assets/banner_image.png" 
            alt="Professionnel BWGROUP" 
          />
        </motion.div>
      </section>

      {/* Quick Actions Section */}
      <section className="quick-actions">
        <div className="section-container">
          <motion.div 
            className="actions-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.a href="/paiement" className="action-card action-card-1" whileHover={{ scale: 1.05 }} variants={fadeInUp}>
              <div className="action-overlay">
                <div className="action-icon">
                  <CreditCard size={40} />
                </div>
                <h3>Paiement de service</h3>
                <p>Effectuez vos paiements en toute sécurité</p>
                <span className="action-link">
                  Accéder <ArrowRight size={16} />
                </span>
              </div>
            </motion.a>
            <motion.a href="/devis" className="action-card action-card-2" whileHover={{ scale: 1.05 }} variants={fadeInUp}>
              <div className="action-overlay">
                <div className="action-icon">
                  <FileText size={40} />
                </div>
                <h3>Demande de devis</h3>
                <p>Obtenez un devis personnalisé</p>
                <span className="action-link">
                  Accéder <ArrowRight size={16} />
                </span>
              </div>
            </motion.a>
            <motion.a href="/tickets" className="action-card action-card-3" whileHover={{ scale: 1.05 }} variants={fadeInUp}>
              <div className="action-overlay">
                <div className="action-icon">
                  <Ticket size={40} />
                </div>
                <h3>Achat de ticket</h3>
                <p>Réservez vos billets en ligne</p>
                <span className="action-link">
                  Accéder <ArrowRight size={16} />
                </span>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose BWGROUP Section */}
      <section id="why-us" className="why-us">
        <div className="section-container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            Pourquoi choisir BWGROUP ?
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Une expertise éprouvée depuis 2013 au service de votre réussite
          </motion.p>
          
          <motion.div 
            className="why-us-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div className="why-us-card" whileHover={{ y: -10 }} variants={fadeInUp}>
              <div className="why-us-icon">
                <Shield size={28} />
              </div>
              <h3>Sécurité Totale</h3>
              <p>Nous mettons l'accent sur une sécurité totale et un résultat de haute qualité pour tous vos projets.</p>
            </motion.div>
            <motion.div className="why-us-card" whileHover={{ y: -10 }} variants={fadeInUp}>
              <div className="why-us-icon">
                <Target size={28} />
              </div>
              <h3>Performance Garantie</h3>
              <p>Nous garantissons que votre produit fonctionnera exactement comme il se doit, même sous charge.</p>
            </motion.div>
            <motion.div className="why-us-card" whileHover={{ y: -10 }} variants={fadeInUp}>
              <div className="why-us-icon">
                <UsersIcon size={28} />
              </div>
              <h3>Équipe Dédiée</h3>
              <p>Une équipe dévouée et compétente qui vous soutient 24h/24 avec une équipe dédiée par projet.</p>
            </motion.div>
            <motion.div className="why-us-card" whileHover={{ y: -10 }} variants={fadeInUp}>
              <div className="why-us-icon">
                <ZapIcon size={28} />
              </div>
              <h3>Agilité et Évolution</h3>
              <p>Notre approche combine les meilleurs aspects de Lean et Scrum pour favoriser l'évolution et l'agilité.</p>
            </motion.div>
            <motion.div className="why-us-card" whileHover={{ y: -10 }} variants={fadeInUp}>
              <div className="why-us-icon">
                <RefreshCw size={28} />
              </div>
              <h3>Support Post-Développement</h3>
              <p>Nous fournissons un support post-développement complet et adaptons les processus à votre agenda.</p>
            </motion.div>
            <motion.div className="why-us-card" whileHover={{ y: -10 }} variants={fadeInUp}>
              <div className="why-us-icon">
                <Heart size={28} />
              </div>
              <h3>Valeur Ajoutée</h3>
              <p>Notre objectif ultime est d'ajouter de la valeur à votre entreprise avec des investissements réduits.</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="why-us-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="why-us-text" variants={fadeInUp}>
              <h3>Une Expertise Technique et Industrielle</h3>
              <p>
                Nous développons des applications web, mobile et desktop avec l'équilibre d'une expertise 
                technique et industrielle approfondie. Une fois que vous démarrez une collaboration avec 
                BWGROUP, vous obtenez un accès instantané à notre ensemble de compétences technologiques, 
                à notre infrastructure informatique prête à l'emploi et à nos processus de développement 
                de logiciels matures acquis depuis 2013.
              </p>
              <p>
                Nos conceptions reposent sur une compréhension approfondie des activités de nos clients 
                et de leurs clients. Nous incorporons des commentaires et des analyses pour créer des 
                interfaces fonctionnelles, belles et accessibles.
              </p>
            </motion.div>
            <motion.div className="why-us-image" variants={fadeInUp}>
              <div className="why-us-img-container">
                <img 
                  src="https://i.pinimg.com/1200x/66/a8/33/66a833ec9c6a3f76c67e111b2b455db5.jpg" 
                  alt="Équipe BWGROUP" 
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            Nos services
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Des solutions adaptées à vos besoins pour inspira votre croissance
          </motion.p>
          <motion.div 
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div className="service-card" whileHover={{ y: -10, scale: 1.02 }} variants={fadeInUp}>
              <div className="service-icon">
                <Briefcase size={32} />
              </div>
              <h3>Conseil stratégique</h3>
              <p>Accompagnement personnalisé pour optimiser votre stratégie d'entreprise et maximiser votre croissance.</p>
              <a href="#" className="service-link">
                En savoir plus <ArrowRight size={16} />
              </a>
            </motion.div>
            <motion.div className="service-card" whileHover={{ y: -10, scale: 1.02 }} variants={fadeInUp}>
              <div className="service-icon">
                <Lightbulb size={32} />
              </div>
              <h3>Innovation</h3>
              <p>Solutions créatives et technologiques pour garder une longueur d'avance sur vos concurrents.</p>
              <a href="#" className="service-link">
                En savoir plus <ArrowRight size={16} />
              </a>
            </motion.div>
            <motion.div className="service-card" whileHover={{ y: -10, scale: 1.02 }} variants={fadeInUp}>
              <div className="service-icon">
                <Zap size={32} />
              </div>
              <h3>Performance</h3>
              <p>Optimisation des processus pour améliorer l'efficacité et la productivité de votre organisation.</p>
              <a href="#" className="service-link">
                En savoir plus <ArrowRight size={16} />
              </a>
            </motion.div>
            <motion.div className="service-card" whileHover={{ y: -10, scale: 1.02 }} variants={fadeInUp}>
              <div className="service-icon">
                <BarChart3 size={32} />
              </div>
              <h3>Analyse de données</h3>
              <p>Transformez vos données en insights actionnables pour des décisions éclairées et stratégiques.</p>
              <a href="#" className="service-link">
                En savoir plus <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <motion.div 
            className="about-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="about-text" variants={fadeInUp}>
              <h2 className="section-title">À propos de BWGROUP</h2>
              <p>
                Depuis notre création, BWGROUP s'est imposé comme un acteur majeur 
                dans le monde de l'entreprise. Notre mission est de fournir des solutions 
                innovantes et personnalisées à nos clients.
              </p>
              <p>
                Nous croyons en la puissance de l'innovation et de la collaboration 
                pour créer des résultats exceptionnels. Notre équipe d'experts passionnés 
                est dédiée à votre succès.
              </p>
              <motion.div 
                className="about-stats"
                variants={staggerContainer}
              >
                <motion.div className="stat" whileInView={{ scale: 1.1 }} viewport={{ once: false }} variants={fadeInUp}>
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Années d'expérience</span>
                </motion.div>
                <motion.div className="stat" whileInView={{ scale: 1.1 }} viewport={{ once: false }} variants={fadeInUp}>
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Clients satisfaits</span>
                </motion.div>
                <motion.div className="stat" whileInView={{ scale: 1.1 }} viewport={{ once: false }} variants={fadeInUp}>
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Taux de réussite</span>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div className="about-image" variants={fadeInUp}>
              <div className="about-shape">
                <img 
                  src="./assets/avatar.png" 
                  alt="À propos de BWGROUP" 
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="appointment">
        <div className="section-container">
          <motion.div 
            className="appointment-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="appointment-info" variants={fadeInUp}>
              <h2 className="section-title">Prenez rendez-vous</h2>
              <p className="appointment-description">
                Planifiez une consultation avec nos experts. Nous vous répondrons sous 24h.
              </p>
              <motion.div 
                className="appointment-benefits"
                variants={staggerContainer}
              >
                <motion.div className="benefit" whileHover={{ x: 5 }} variants={fadeInUp}>
                  <div className="benefit-icon"><Calendar size={24} /></div>
                  <div>
                    <h4>Flexibilité</h4>
                    <p>Choisissez la date et l'heure qui vous conviennent</p>
                  </div>
                </motion.div>
                <motion.div className="benefit" whileHover={{ x: 5 }} variants={fadeInUp}>
                  <div className="benefit-icon"><Clock size={24} /></div>
                  <div>
                    <h4>Réponse rapide</h4>
                    <p>Nos équipes vous contactent sous 24h</p>
                  </div>
                </motion.div>
                <motion.div className="benefit" whileHover={{ x: 5 }} variants={fadeInUp}>
                  <div className="benefit-icon"><User size={24} /></div>
                  <div>
                    <h4>Expertise</h4>
                    <p>Consultation avec nos spécialistes</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div className="appointment-form-container" variants={fadeInUp}>
              <form className="appointment-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label><User size={16} /> Nom complet</label>
                  <input type="text" placeholder="Votre nom" required />
                </div>
                <div className="form-group">
                  <label><MessageSquare size={16} /> Service souhaité</label>
                  <select required>
                    <option value="">Sélectionnez un service</option>
                    <option value="conseil">Conseil stratégique</option>
                    <option value="innovation">Innovation</option>
                    <option value="performance">Performance</option>
                    <option value="analyse">Analyse de données</option>
                  </select>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label><Calendar size={16} /> Date</label>
                    <input type="date" required />
                  </div>
                  <div className="form-group">
                    <label><Clock size={16} /> Heure</label>
                    <select required>
                      <option value="">Heure</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message (optionnel)</label>
                  <textarea placeholder="Décrivez votre demande..." rows={3}></textarea>
                </div>
                <motion.button 
                  type="submit" 
                  className="btn btn-primary btn-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Confirmer le rendez-vous <ArrowRight size={18} />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta">
        <div className="section-container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2>Prêt à transformer votre entreprise ?</h2>
            <p>Contactez-nous dès aujourd'hui pour discuter de vos projets.</p>
            <motion.a 
              href="mailto:contact@bwgroup.com" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactez-nous
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
