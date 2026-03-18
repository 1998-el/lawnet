import { Shield, Clock, Award, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
  const { language } = useLanguage();

  const content = language === 'fr' ? {
    heroTitle: 'À propos de LAWNET',
    heroSubtitle: 'Connecter les personnes avec des professionnels juridiques de confiance depuis 2015',
    ourMission: 'Notre mission',
    missionTitle: 'Rendre les services juridiques accessibles à tous',
    missionDesc1: 'Chez LAWNET, nous pensons que la représentation juridique de qualité devrait être accessible à tous, quel que soit leur contexte. Notre plateforme met en relation des particuliers et des entreprises avec des avocats vérifiés et expérimentés.',
    missionDesc2: 'Nous avons aidé des milliers de clients à trouver le bon avocat pour leurs besoins, rendant le processus juridique plus simple, transparent et moins intimidant.',
    clientsServed: 'Clients servis',
    verifiedLawyers: 'Avocats vérifiés',
    practiceAreas: 'Domaines de pratique',
    satisfactionRate: 'Taux de satisfaction',
    ourValues: 'Nos valeurs',
    valuesSubtitle: 'Les principes qui guident tout ce que nous faisons',
    trustTitle: 'Confiance et vérification',
    trustDesc: 'Chaque avocat de notre plateforme undergo un processus de vérification rigoureux.',
    clientFirstTitle: 'Approche client',
    clientFirstDesc: 'Nous mettons les besoins de nos clients en premier, en les connectant avec le bon avocat.',
    transparencyTitle: 'Transparence',
    transparencyDesc: 'Tarification claire, avis honnêtes et communication ouverte.',
    excellenceTitle: 'Excellence',
    excellenceDesc: 'Nous maintenons des normes élevées pour tous les avocats.',
    leadership: 'Notre équipe dirigeante',
    leadershipSubtitle: 'Découvrez l\'équipe derrière LAWNET',
    ctaTitle: 'Prêt à trouver votre avocat ?',
    ctaSubtitle: 'Parcourez notre annuaire d\'avocats vérifiés et commencez votre parcours juridique.',
    findLawyer: 'Trouver un avocat',
    exploreAreas: 'Explorer les domaines'
  } : {
    heroTitle: 'About LAWNET',
    heroSubtitle: 'Connecting people with trusted legal professionals since 2015',
    ourMission: 'Our Mission',
    missionTitle: 'Making Legal Services Accessible to Everyone',
    missionDesc1: 'At LAWNET, we believe that quality legal representation should be accessible to everyone, regardless of their background or circumstances. Our platform connects individuals and businesses with verified, experienced attorneys.',
    missionDesc2: 'We\'ve helped thousands of clients find the right lawyer for their needs, making the legal process simpler, more transparent, and less intimidating.',
    clientsServed: 'Clients Served',
    verifiedLawyers: 'Verified Lawyers',
    practiceAreas: 'Practice Areas',
    satisfactionRate: 'Satisfaction Rate',
    ourValues: 'Our Values',
    valuesSubtitle: 'The principles that guide everything we do',
    trustTitle: 'Trust & Verification',
    trustDesc: 'Every lawyer on our platform undergoes a rigorous vetting process.',
    clientFirstTitle: 'Client-First Approach',
    clientFirstDesc: 'We put our clients\' needs first, connecting them with the right lawyer.',
    transparencyTitle: 'Transparency',
    transparencyDesc: 'Clear pricing, honest reviews, and open communication.',
    excellenceTitle: 'Excellence',
    excellenceDesc: 'We maintain high standards for all lawyers on our platform.',
    leadership: 'Our Leadership',
    leadershipSubtitle: 'Meet the team behind LAWNET',
    ctaTitle: 'Ready to Find Your Lawyer?',
    ctaSubtitle: 'Browse our directory of verified attorneys and start your legal journey today.',
    findLawyer: 'Find a Lawyer',
    exploreAreas: 'Explore Practice Areas'
  };
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>{content.heroTitle}</h1>
          <p>{content.heroSubtitle}</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <span className="section-label">{content.ourMission}</span>
              <h2>{content.missionTitle}</h2>
              <p>{content.missionDesc1}</p>
              <p>{content.missionDesc2}</p>
            </div>
            <div className="mission-stats">
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">{content.clientsServed}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">{content.verifiedLawyers}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">{content.practiceAreas}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">{content.satisfactionRate}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <h2 className="section-title">{content.ourValues}</h2>
          <p className="section-subtitle">{content.valuesSubtitle}</p>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Shield size={28} />
              </div>
              <h3>{content.trustTitle}</h3>
              <p>{content.trustDesc}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Target size={28} />
              </div>
              <h3>{content.clientFirstTitle}</h3>
              <p>{content.clientFirstDesc}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Clock size={28} />
              </div>
              <h3>{content.transparencyTitle}</h3>
              <p>{content.transparencyDesc}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Award size={28} />
              </div>
              <h3>{content.excellenceTitle}</h3>
              <p>{content.excellenceDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <h2 className="section-title">{content.leadership}</h2>
          <p className="section-subtitle">{content.leadershipSubtitle}</p>

          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <img src="/assets/avatar.jpg" alt="John Smith" />
              </div>
              <div className="team-info">
                <h3>John Smith</h3>
                <p className="team-role">CEO & Founder</p>
                <p className="team-bio">Former attorney with 15+ years of experience in corporate law.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <img src="/assets/avatar.png" alt="Sarah Johnson" />
              </div>
              <div className="team-info">
                <h3>Sarah Johnson</h3>
                <p className="team-role">Chief Operations Officer</p>
                <p className="team-bio">Operations expert with a background in legal technology startups.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <img src="/assets/avatar.jpg" alt="Michael Chen" />
              </div>
              <div className="team-info">
                <h3>Michael Chen</h3>
                <p className="team-role">Head of Legal</p>
                <p className="team-bio">Bar-certified attorney specializing in compliance and ethics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>{content.ctaTitle}</h2>
          <p>{content.ctaSubtitle}</p>
          <div className="cta-buttons">
            <a href="/lawyers" className="btn btn-primary">{content.findLawyer}</a>
            <a href="/domain" className="btn btn-secondary">{content.exploreAreas}</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
