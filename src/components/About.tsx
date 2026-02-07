import { Shield, Clock, Award, Target } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About LAWNET</h1>
          <p>Connecting people with trusted legal professionals since 2015</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <span className="section-label">Our Mission</span>
              <h2>Making Legal Services Accessible to Everyone</h2>
              <p>
                At LAWNET, we believe that quality legal representation should be accessible 
                to everyone, regardless of their background or circumstances. Our platform 
                connects individuals and businesses with verified, experienced attorneys who 
                are committed to providing exceptional legal services.
              </p>
              <p>
                We've helped thousands of clients find the right lawyer for their needs, 
                making the legal process simpler, more transparent, and less intimidating. 
                Our mission is to demystify the legal system and empower people to make 
                informed decisions about their legal matters.
              </p>
            </div>
            <div className="mission-stats">
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Clients Served</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Verified Lawyers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Practice Areas</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Shield size={28} />
              </div>
              <h3>Trust & Verification</h3>
              <p>Every lawyer on our platform undergoes a rigorous vetting process to ensure credentials and good standing.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Target size={28} />
              </div>
              <h3>Client-First Approach</h3>
              <p>We put our clients' needs first, connecting them with the right lawyer for their specific situation.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Clock size={28} />
              </div>
              <h3>Transparency</h3>
              <p>Clear pricing, honest reviews, and open communication throughout the legal process.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Award size={28} />
              </div>
              <h3>Excellence</h3>
              <p>We maintain high standards for all lawyers on our platform to ensure quality representation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <h2 className="section-title">Our Leadership</h2>
          <p className="section-subtitle">Meet the team behind LAWNET</p>

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
          <h2>Ready to Find Your Lawyer?</h2>
          <p>Browse our directory of verified attorneys and start your legal journey today.</p>
          <div className="cta-buttons">
            <a href="/lawyers" className="btn btn-primary">Find a Lawyer</a>
            <a href="/domain" className="btn btn-secondary">Explore Practice Areas</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
