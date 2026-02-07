import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Calendar, 
  MessageSquare, 
  Star, 
  Settings,
  FileText,
  Bell,
  CreditCard,
  Shield,
  Clock,
  MapPin,
  Phone,
  Mail,
  Edit,
  ChevronRight,
  StarHalf,
  CheckCircle,
  XCircle
} from 'lucide-react';
import './UserDashboard.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'appointment', message: 'Reminder: Appointment with Sarah Johnson tomorrow at 2:00 PM', read: false },
    { id: 2, type: 'message', message: 'New message from David Thompson', read: false },
    { id: 3, type: 'review', message: 'Your review has been published', read: true }
  ]);

  const upcomingAppointments = [
    {
      id: 1,
      lawyerName: 'Sarah Johnson',
      specialty: 'Criminal Defense',
      date: '2024-02-15',
      time: '2:00 PM',
      status: 'confirmed',
      location: 'Video Call'
    },
    {
      id: 2,
      lawyerName: 'Michael Chen',
      specialty: 'Family Law',
      date: '2024-02-20',
      time: '10:00 AM',
      status: 'pending',
      location: '123 Legal St, New York'
    }
  ];

  const pastAppointments = [
    {
      id: 3,
      lawyerName: 'Emily Rodriguez',
      specialty: 'Corporate Law',
      date: '2024-01-25',
      time: '3:00 PM',
      status: 'completed',
      location: 'Video Call',
      rating: 5
    }
  ];

  const messages = [
    {
      id: 1,
      from: 'Sarah Johnson',
      subject: 'Re: Case Update',
      preview: 'Thank you for the documents. I have reviewed them and...',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 2,
      from: 'David Thompson',
      subject: 'Personal Injury Consultation',
      preview: 'I would like to discuss the details of your case...',
      time: '1 day ago',
      unread: false
    }
  ];

  const userProfile = {
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    memberSince: 'January 2024',
    avatar: './assets/avatar.jpg'
  };

  return (
    <main className="user-dashboard">
      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="user-card">
            <img src={userProfile.avatar} alt={userProfile.name} className="user-avatar" />
            <h3>{userProfile.name}</h3>
            <p className="user-email">{userProfile.email}</p>
            <span className="member-since">Member since {userProfile.memberSince}</span>
          </div>

          <nav className="sidebar-nav">
            <button 
              className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <User size={20} /> Overview
            </button>
            <button 
              className={`nav-item ${activeTab === 'appointments' ? 'active' : ''}`}
              onClick={() => setActiveTab('appointments')}
            >
              <Calendar size={20} /> Appointments
            </button>
            <button 
              className={`nav-item ${activeTab === 'messages' ? 'active' : ''}`}
              onClick={() => setActiveTab('messages')}
            >
              <MessageSquare size={20} /> Messages
              {notifications.filter(n => !n.read && n.type === 'message').length > 0 && (
                <span className="badge">2</span>
              )}
            </button>
            <button 
              className={`nav-item ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              <Star size={20} /> My Reviews
            </button>
            <button 
              className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <Edit size={20} /> Edit Profile
            </button>
            <button 
              className={`nav-item ${activeTab === 'billing' ? 'active' : ''}`}
              onClick={() => setActiveTab('billing')}
            >
              <CreditCard size={20} /> Billing
            </button>
            <button 
              className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <Settings size={20} /> Settings
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="dashboard-main">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div 
              className="tab-content"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="dashboard-header">
                <h1>Welcome back, {userProfile.name.split(' ')[0]}!</h1>
                <p>Here's an overview of your account activity</p>
              </div>

              {/* Stats Grid */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon appointments">
                    <Calendar size={24} />
                  </div>
                  <div className="stat-info">
                    <span className="stat-number">{upcomingAppointments.length}</span>
                    <span className="stat-label">Upcoming Appointments</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon messages">
                    <MessageSquare size={24} />
                  </div>
                  <div className="stat-info">
                    <span className="stat-number">{messages.filter(m => m.unread).length}</span>
                    <span className="stat-label">Unread Messages</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon reviews">
                    <Star size={24} />
                  </div>
                  <div className="stat-info">
                    <span className="stat-number">{pastAppointments.length}</span>
                    <span className="stat-label">Reviews Given</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon cases">
                    <FileText size={24} />
                  </div>
                  <div className="stat-info">
                    <span className="stat-number">2</span>
                    <span className="stat-label">Active Cases</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="quick-actions-section">
                <h2>Quick Actions</h2>
                <div className="quick-actions-grid">
                  <a href="/search" className="quick-action-card">
                    <Search size={24} />
                    <span>Find a Lawyer</span>
                  </a>
                  <a href="/appointments" className="quick-action-card">
                    <Calendar size={24} />
                    <span>Book Appointment</span>
                  </a>
                  <a href="/messages" className="quick-action-card">
                    <MessageSquare size={24} />
                    <span>Send Message</span>
                  </a>
                  <a href="/profile" className="quick-action-card">
                    <User size={24} />
                    <span>Update Profile</span>
                  </a>
                </div>
              </div>

              {/* Upcoming Appointments */}
              <div className="appointments-section">
                <div className="section-header">
                  <h2>Upcoming Appointments</h2>
                  <a href="/appointments" className="view-all">View All</a>
                </div>
                <div className="appointments-list">
                  {upcomingAppointments.map(apt => (
                    <div key={apt.id} className="appointment-card">
                      <div className="appointment-info">
                        <h3>{apt.lawyerName}</h3>
                        <p className="specialty">{apt.specialty}</p>
                        <div className="appointment-meta">
                          <span><Calendar size={14} /> {apt.date}</span>
                          <span><Clock size={14} /> {apt.time}</span>
                          <span><MapPin size={14} /> {apt.location}</span>
                        </div>
                      </div>
                      <div className={`appointment-status ${apt.status}`}>
                        {apt.status === 'confirmed' ? <CheckCircle size={16} /> : <Clock size={16} />}
                        {apt.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Messages */}
              <div className="messages-section">
                <div className="section-header">
                  <h2>Recent Messages</h2>
                  <a href="/messages" className="view-all">View All</a>
                </div>
                <div className="messages-list">
                  {messages.map(msg => (
                    <div key={msg.id} className={`message-card ${msg.unread ? 'unread' : ''}`}>
                      <div className="message-avatar">
                        {msg.from.charAt(0)}
                      </div>
                      <div className="message-content">
                        <div className="message-header">
                          <h4>{msg.from}</h4>
                          <span className="message-time">{msg.time}</span>
                        </div>
                        <p className="message-subject">{msg.subject}</p>
                        <p className="message-preview">{msg.preview}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Appointments Tab */}
          {activeTab === 'appointments' && (
            <motion.div 
              className="tab-content"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="dashboard-header">
                <h1>My Appointments</h1>
                <p>Manage your upcoming and past appointments</p>
              </div>

              <div className="appointments-container">
                <section className="appointments-section-full">
                  <h2>Upcoming Appointments</h2>
                  {upcomingAppointments.map(apt => (
                    <div key={apt.id} className="appointment-detail-card">
                      <div className="apt-header">
                        <div className="apt-lawyer">
                          <img src="./assets/avatar.jpg" alt={apt.lawyerName} />
                          <div>
                            <h3>{apt.lawyerName}</h3>
                            <p>{apt.specialty}</p>
                          </div>
                        </div>
                        <div className={`apt-status ${apt.status}`}>
                          {apt.status === 'confirmed' ? <CheckCircle size={16} /> : <Clock size={16} />}
                          {apt.status}
                        </div>
                      </div>
                      <div className="apt-details">
                        <div className="apt-detail">
                          <Calendar size={16} />
                          <span>{apt.date}</span>
                        </div>
                        <div className="apt-detail">
                          <Clock size={16} />
                          <span>{apt.time}</span>
                        </div>
                        <div className="apt-detail">
                          <MapPin size={16} />
                          <span>{apt.location}</span>
                        </div>
                      </div>
                      <div className="apt-actions">
                        <button className="btn btn-primary">Reschedule</button>
                        <button className="btn btn-outline">Cancel</button>
                        <button className="btn btn-secondary">Join Call</button>
                      </div>
                    </div>
                  ))}
                </section>

                <section className="appointments-section-full">
                  <h2>Past Appointments</h2>
                  {pastAppointments.map(apt => (
                    <div key={apt.id} className="appointment-detail-card past">
                      <div className="apt-header">
                        <div className="apt-lawyer">
                          <img src="./assets/avatar.png" alt={apt.lawyerName} />
                          <div>
                            <h3>{apt.lawyerName}</h3>
                            <p>{apt.specialty}</p>
                          </div>
                        </div>
                        <div className="apt-status completed">
                          <CheckCircle size={16} /> Completed
                        </div>
                      </div>
                      <div className="apt-details">
                        <div className="apt-detail">
                          <Calendar size={16} />
                          <span>{apt.date}</span>
                        </div>
                        <div className="apt-detail">
                          <Clock size={16} />
                          <span>{apt.time}</span>
                        </div>
                        <div className="apt-detail">
                          <MapPin size={16} />
                          <span>{apt.location}</span>
                        </div>
                      </div>
                      <div className="apt-rating">
                        <span>Your Rating:</span>
                        <div className="stars">
                          {[1, 2, 3, 4, 5].map(star => (
                            <Star 
                              key={star} 
                              size={18} 
                              className={star <= apt.rating ? 'filled' : ''} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
              </div>
            </motion.div>
          )}

          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <motion.div 
              className="tab-content"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="dashboard-header">
                <h1>Messages</h1>
                <p>Communicate with your lawyers</p>
              </div>

              <div className="messages-container">
                <div className="messages-list-full">
                  {messages.map(msg => (
                    <div key={msg.id} className={`message-detail-card ${msg.unread ? 'unread' : ''}`}>
                      <div className="msg-avatar">
                        {msg.from.charAt(0)}
                      </div>
                      <div className="msg-content">
                        <div className="msg-header">
                          <h4>{msg.from}</h4>
                          <span className="msg-time">{msg.time}</span>
                        </div>
                        <p className="msg-subject">{msg.subject}</p>
                        <p className="msg-body">{msg.preview}</p>
                      </div>
                      <ChevronRight size={20} className="msg-arrow" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <motion.div 
              className="tab-content"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="dashboard-header">
                <h1>My Reviews</h1>
                <p>Manage your lawyer reviews</p>
              </div>

              <div className="reviews-container">
                {pastAppointments.map((apt, index) => (
                  <div key={index} className="review-card">
                    <div className="review-lawyer">
                      <img src="./assets/avatar.png" alt={apt.lawyerName} />
                      <div>
                        <h3>{apt.lawyerName}</h3>
                        <p>{apt.specialty}</p>
                      </div>
                    </div>
                    <div className="review-content">
                      <div className="review-rating">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Star key={star} size={20} className={star <= apt.rating ? 'filled' : ''} />
                        ))}
                      </div>
                      <p className="review-date">Reviewed on {apt.date}</p>
                      <p className="review-text">
                        Excellent experience! The lawyer was professional, responsive, and helped me achieve a favorable outcome. Highly recommend their services.
                      </p>
                    </div>
                    <div className="review-actions">
                      <button className="btn btn-outline">Edit</button>
                      <button className="btn btn-outline delete">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <motion.div 
              className="tab-content"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="dashboard-header">
                <h1>Edit Profile</h1>
                <p>Update your personal information</p>
              </div>

              <form className="profile-form">
                <div className="form-section">
                  <h3>Personal Information</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" defaultValue="John" />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" defaultValue="Smith" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" defaultValue={userProfile.email} />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" defaultValue={userProfile.phone} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Location</label>
                    <input type="text" defaultValue={userProfile.location} />
                  </div>
                </div>

                <div className="form-section">
                  <h3>Profile Photo</h3>
                  <div className="avatar-upload">
                    <img src={userProfile.avatar} alt="Profile" />
                    <button type="button" className="btn btn-outline">Change Photo</button>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                  <button type="button" className="btn btn-outline">Cancel</button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <motion.div 
              className="tab-content"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="dashboard-header">
                <h1>Settings</h1>
                <p>Manage your account preferences</p>
              </div>

              <div className="settings-container">
                <div className="settings-section">
                  <h3><Bell size={20} /> Notifications</h3>
                  <div className="setting-item">
                    <div className="setting-info">
                      <h4>Email Notifications</h4>
                      <p>Receive email updates about appointments and messages</p>
                    </div>
                    <label className="toggle">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div className="setting-item">
                    <div className="setting-info">
                      <h4>SMS Notifications</h4>
                      <p>Receive text messages for important updates</p>
                    </div>
                    <label className="toggle">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>

                <div className="settings-section">
                  <h3><Shield size={20} /> Security</h3>
                  <div className="setting-item clickable">
                    <div className="setting-info">
                      <h4>Change Password</h4>
                      <p>Update your account password</p>
                    </div>
                    <ChevronRight size={20} />
                  </div>
                  <div className="setting-item clickable">
                    <div className="setting-info">
                      <h4>Two-Factor Authentication</h4>
                      <p>Add an extra layer of security</p>
                    </div>
                    <ChevronRight size={20} />
                  </div>
                </div>

                <div className="settings-section danger">
                  <h3><XCircle size={20} /> Danger Zone</h3>
                  <div className="setting-item clickable danger">
                    <div className="setting-info">
                      <h4>Delete Account</h4>
                      <p>Permanently delete your account and all data</p>
                    </div>
                    <ChevronRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
};

// Search Icon Component
const Search = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export default UserDashboard;
