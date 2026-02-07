import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['1-800-LAWNET', '+1 (555) 123-4567'],
      subtitle: 'Mon-Fri 9am-6pm EST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@lawnet.com', 'support@lawnet.com'],
      subtitle: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['123 Legal Street', 'New York, NY 10001'],
      subtitle: 'Visit us by appointment'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Monday - Friday: 9am-6pm', 'Saturday: 10am-4pm'],
      subtitle: 'Emergency: 24/7'
    }
  ];

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Have questions? We're here to help you find the right legal solution.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>

              {submitted ? (
                <div className="form-success">
                  <MessageSquare size={48} />
                  <h3>Thank you for reaching out!</h3>
                  <p>We've received your message and will respond within 24 hours.</p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="lawyer">Find a Lawyer</option>
                        <option value="billing">Billing Question</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your legal needs..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-submit">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="contact-info-wrapper">
              <h2>Get in Touch</h2>
              <p>Prefer to talk? Here are all the ways you can reach us.</p>

              <div className="contact-info-grid">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="contact-info-card">
                      <div className="info-icon">
                        <Icon size={24} />
                      </div>
                      <div className="info-content">
                        <h3>{item.title}</h3>
                        {item.details.map((detail, i) => (
                          <p key={i}>{detail}</p>
                        ))}
                        <span className="info-subtitle">{item.subtitle}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="contact-cta">
                <h3>Need immediate assistance?</h3>
                <p>Our team is available to help you find the right lawyer for your needs.</p>
                <a href="/lawyers" className="btn btn-secondary">
                  Browse Lawyers
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Quick answers to common questions</p>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I find the right lawyer?</h3>
              <p>Browse our directory by practice area, location, or search by name. Read reviews, check credentials, and book a consultation.</p>
            </div>
            <div className="faq-item">
              <h3>Is the initial consultation free?</h3>
              <p>Many lawyers offer free initial consultations. Check individual lawyer profiles for their consultation policy.</p>
            </div>
            <div className="faq-item">
              <h3>How does the booking process work?</h3>
              <p>Select a lawyer, choose an available time slot, and complete the booking. You'll receive confirmation via email and SMS.</p>
            </div>
            <div className="faq-item">
              <h3>Can I communicate with my lawyer online?</h3>
              <p>Yes! Our secure messaging system allows you to communicate with your lawyer through the platform.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
