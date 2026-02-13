import { 
  Search,
  Shield,
  Calendar,
  MessageSquare,
  Star,
  ArrowRight,
  Gavel,
  Briefcase,
  Heart,
  FileText,
  Scale,
  MapPin,
  Eye,
  Clock
} from 'lucide-react';
import HeroBanner from './HeroBanner';
import './Home.css';

const Home = () => {

  const features = [
    {
      id: 1,
      title: "Verified Lawyers",
      description: "All lawyers on our platform are thoroughly vetted and verified for credentials.",
      image: "/assets/129364.jpg"
    },
    {
      id: 2,
      title: "Honest Reviews",
      description: "Real reviews from verified clients to help you make informed decisions.",
      image: "/assets/droit.jpg"
    },
    {
      id: 3,
      title: "Easy Scheduling",
      description: "Book appointments that fit your schedule with instant confirmation.",
      image: "/assets/devis.jpg"
    },
    {
      id: 4,
      title: "Secure Messaging",
      description: "Communicate safely with your lawyer through encrypted messaging.",
      image: "/assets/ticket.jpg"
    },
    {
      id: 5,
      title: "24/7 Availability",
      description: "Access legal help anytime with our round-the-clock platform support.",
      image: "/assets/services.jpg"
    },
    {
      id: 6,
      title: "Transparent Pricing",
      description: "Clear fee structures with no hidden costs or surprises.",
      image: "/assets/banner_2.jpg"
    }
  ];

  return (
    <main className="home">
      {/* Hero Section - Standalone Component */}
      <HeroBanner />

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="section-container">
          <h2 className="section-title">How LAWNET Works</h2>
          <p className="section-subtitle">Get legal help in 3 simple steps</p>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">
                <Search size={28} />
              </div>
              <h3>Search</h3>
              <p>Browse through our directory of verified lawyers by specialty, location, or name.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">
                <Calendar size={28} />
              </div>
              <h3>Book</h3>
              <p>Schedule an appointment at your convenience with secure online booking.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">
                <MessageSquare size={28} />
              </div>
              <h3>Connect</h3>
              <p>Chat, video call, or meet your lawyer and get the legal help you need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section id="practice-areas" className="practice-areas">
        <div className="section-container">
          <h2 className="section-title">Practice Areas</h2>
          <p className="section-subtitle">Find lawyers specializing in your legal needs</p>
          
          <div className="areas-grid">
            <div className="area-card">
              <Gavel size={32} />
              <h3>Criminal Defense</h3>
              <p>Expert legal representation for criminal charges and proceedings.</p>
            </div>
            <div className="area-card">
              <Briefcase size={32} />
              <h3>Corporate Law</h3>
              <p>Business formation, contracts, and commercial legal matters.</p>
            </div>
            <div className="area-card">
              <Heart size={32} />
              <h3>Family Law</h3>
              <p>Divorce, custody, adoption, and family-related legal issues.</p>
            </div>
            <div className="area-card">
              <FileText size={32} />
              <h3>Real Estate</h3>
              <p>Property transactions, leases, and real estate disputes.</p>
            </div>
            <div className="area-card">
              <Scale size={32} />
              <h3>Personal Injury</h3>
              <p>Compensation for injuries and accidents caused by others.</p>
            </div>
            <div className="area-card">
              <Shield size={32} />
              <h3>Immigration</h3>
              <p>Visas, citizenship, and immigration legal assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose LAWNET Section */}
      <section id="why-us" className="why-us">
        <div className="section-container">
          <h2 className="section-title">Why Choose LAWNET?</h2>
          <p className="section-subtitle">The most trusted platform for legal assistance</p>
          
          <div className="features-grid">
            {features.map((feature) => (
              <div className="feature-card" key={feature.id}>
                <div className="feature-image">
                  <img src={feature.image} alt={feature.title} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Lawyers Section */}
      <section id="featured-lawyers" className="featured-lawyers">
        <div className="section-container">
          <h2 className="section-title">Featured Lawyers</h2>
          <p className="section-subtitle">Top-rated lawyers ready to help you</p>
          
          <div className="lawyers-grid">
            {[1, 2, 3, 4].map((index) => (
              <div className="lawyer-card" key={index}>
                <div className="lawyer-image">
                  <img src="https://plus.unsplash.com/premium_photo-1707155465551-0d2b570926d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZvY2F0JTIwYWZyb3xlbnwwfHwwfHx8MA%3D%3D" alt={`Lawyer ${index}`} />
                </div>
                <div className="lawyer-info">
                  <h3>Sarah Johnson</h3>
                  <p className="lawyer-specialty">Criminal Defense Attorney</p>
                  <div className="lawyer-rating">
                    <Star size={14} className="star filled" />
                    <Star size={14} className="star filled" />
                    <Star size={14} className="star filled" />
                    <Star size={14} className="star filled" />
                    <Star size={14} className="star filled" />
                    <span>(127)</span>
                  </div>
                  <p className="lawyer-location"><MapPin size={12} /> New York, NY</p>
                  <div className="lawyer-actions">
                    <button className="btn-primary"><Eye size={14} /> View</button>
                    <button className="btn-outline"><Calendar size={14} /> Book</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="section-cta">
            <a href="/lawyers" className="btn-outline">
              View All Lawyers <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="section-container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real stories from real clients who found legal help on LAWNET</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
              </div>
              <p className="testimonial-text">
                "LAWNET made it incredibly easy to find a great lawyer for my case. The booking system was straightforward and the lawyer I chose was professional and helpful."
              </p>
              <div className="testimonial-author">
                <img src="/assets/avatar.jpg" alt="Client" />
                <div>
                  <h4>Michael Chen</h4>
                  <p>Family Law Case</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
              </div>
              <p className="testimonial-text">
                "The 24/7 messaging feature was a lifesaver. I could communicate with my attorney anytime, which made my legal process much smoother."
              </p>
              <div className="testimonial-author">
                <img src="/assets/avatar.png" alt="Client" />
                <div>
                  <h4>Emily Rodriguez</h4>
                  <p>Business Contract</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
                <Star size={16} className="star filled" />
              </div>
              <p className="testimonial-text">
                "I was impressed by how transparent everything was. No hidden fees, clear communication, and excellent legal representation."
              </p>
              <div className="testimonial-author">
                <img src="/assets/avatar.jpg" alt="Client" />
                <div>
                  <h4>David Thompson</h4>
                  <p>Personal Injury</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <h2>Ready to Find Your Legal Expert?</h2>
          <p>Join thousands of satisfied clients who found the right lawyer through LAWNET</p>
          <div className="cta-buttons">
            <a href="/lawyers" className="btn-primary">
              Search for Lawyers
            </a>
            <a href="/contact" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
