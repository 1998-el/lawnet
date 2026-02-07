import { useState } from 'react';
import { ArrowRight, Shield, Briefcase, Users, Home, Scale, FileText, Heart, Building } from 'lucide-react';
import './Domain.css';

const domains = [
  {
    id: 1,
    title: 'Criminal Defense',
    icon: Shield,
    description: 'Expert legal representation for criminal charges, from minor offenses to serious felonies.',
    lawyers: 24,
    color: '#1a1a1a'
  },
  {
    id: 2,
    title: 'Corporate Law',
    icon: Briefcase,
    description: 'Business formation, contracts, mergers, acquisitions, and corporate governance.',
    lawyers: 32,
    color: '#2d2d2d'
  },
  {
    id: 3,
    title: 'Family Law',
    icon: Users,
    description: 'Divorce, custody, adoption, and domestic relations matters with compassionate guidance.',
    lawyers: 28,
    color: '#404040'
  },
  {
    id: 4,
    title: 'Real Estate',
    icon: Home,
    description: 'Residential and commercial property transactions, leases, and dispute resolution.',
    lawyers: 19,
    color: '#525252'
  },
  {
    id: 5,
    title: 'Personal Injury',
    icon: Heart,
    description: 'Fighting for maximum compensation for accident victims and injury claims.',
    lawyers: 21,
    color: '#616161'
  },
  {
    id: 6,
    title: 'Estate Planning',
    icon: FileText,
    description: 'Wills, trusts, probate, and comprehensive estate planning services.',
    lawyers: 15,
    color: '#737373'
  },
  {
    id: 7,
    title: 'Immigration',
    icon: Building,
    description: 'Navigating visa, citizenship, and immigration processes for individuals and families.',
    lawyers: 18,
    color: '#858585'
  },
  {
    id: 8,
    title: 'Employment Law',
    icon: Scale,
    description: 'Workplace disputes, discrimination, harassment, and labor law matters.',
    lawyers: 16,
    color: '#9ca3af'
  }
];

const Domain = () => {
  const [hoveredDomain, setHoveredDomain] = useState<number | null>(null);

  return (
    <main className="domain-page">
      {/* Header */}
      <section className="domain-header">
        <div className="container">
          <h1>Practice Areas</h1>
          <p>Explore our comprehensive legal specialties and find the right attorney for your needs</p>
        </div>
      </section>

      {/* Domain Grid */}
      <section className="domain-content">
        <div className="container">
          <div className="domain-grid">
            {domains.map((domain) => {
              const Icon = domain.icon;
              const isHovered = hoveredDomain === domain.id;

              return (
                <article
                  key={domain.id}
                  className={`domain-card ${isHovered ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredDomain(domain.id)}
                  onMouseLeave={() => setHoveredDomain(null)}
                  style={{
                    '--domain-color': domain.color,
                    '--domain-light': `${domain.color}15`
                  } as React.CSSProperties}
                >
                  <div className="domain-icon">
                    <Icon size={32} />
                  </div>
                  <h3>{domain.title}</h3>
                  <p>{domain.description}</p>
                  <div className="domain-footer">
                    <span className="lawyer-count">{domain.lawyers} lawyers</span>
                    <button className="domain-link">
                      View Lawyers
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="domain-cta">
        <div className="container">
          <h2>Not sure which practice area you need?</h2>
          <p>Our team can help you identify the right legal specialty for your situation.</p>
          <button className="btn btn-primary">
            Get Free Consultation
          </button>
        </div>
      </section>
    </main>
  );
};

export default Domain;
