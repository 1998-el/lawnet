import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, MapPin, Clock, Calendar, MessageSquare, Check, Video, Check as CheckIcon } from 'lucide-react';
import './LawyerBooking.css';

// Mock lawyer data
const mockLawyers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    specialty: 'Criminal Defense Attorney',
    location: 'New York, NY',
    rating: 4.9,
    reviews: 127,
    experience: '15 years',
    hourlyRate: 350,
    languages: ['English', 'Spanish'],
    education: 'Harvard Law School',
    bio: 'Experienced criminal defense attorney with a track record of successful case outcomes. Dedicated to protecting client rights and providing aggressive legal representation.',
    image: '/assets/avatar.jpg',
    verified: true,
    skills: ['Criminal Defense', 'DUI', 'Traffic Law', 'Appeals'],
    responseTime: 'Less than 1 hour',
    completedCases: '500+'
  },
  {
    id: 2,
    name: 'Michael Chen',
    specialty: 'Family Law Specialist',
    location: 'Los Angeles, CA',
    rating: 4.8,
    reviews: 98,
    experience: '12 years',
    hourlyRate: 300,
    languages: ['English', 'Mandarin'],
    education: 'Stanford Law School',
    bio: 'Compassionate family law attorney specializing in divorce, custody disputes, and adoption cases.',
    image: '/assets/avatar.png',
    verified: true,
    skills: ['Family Law', 'Divorce', 'Custody', 'Adoption'],
    responseTime: '2 hours',
    completedCases: '350+'
  }
];

const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

const LawyerBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [consultationType, setConsultationType] = useState('video');
  const [notes, setNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const lawyer = mockLawyers.find(l => l.id === Number(id)) || mockLawyers[0];

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setConfirmed(true);
    }
  };

  const getNextDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      if (date.getDay() !== 0) {
        days.push({
          date: date.toISOString().split('T')[0],
          day: date.toLocaleDateString('en-US', { weekday: 'short' }),
          num: date.getDate(),
          month: date.toLocaleDateString('en-US', { month: 'short' })
        });
      }
    }
    return days;
  };

  if (confirmed) {
    return (
      <main className="lawyer-booking">
        <div className="booking-container">
          <div className="booking-confirmed">
            <div className="confirmed-icon"><CheckIcon size={32} /></div>
            <h1>Booking Confirmed!</h1>
            <p>Your appointment with <strong>{lawyer.name}</strong> is scheduled.</p>
            <div className="confirmed-details">
              <div className="confirmed-row"><Calendar size={18} /><span>{selectedDate}</span></div>
              <div className="confirmed-row"><Clock size={18} /><span>{selectedTime}</span></div>
              <div className="confirmed-row">{consultationType === 'video' ? <Video size={18} /> : <MapPin size={18} />}<span>{consultationType === 'video' ? 'Video Consultation' : 'In-Person'}</span></div>
            </div>
            <button className="btn btn-primary" onClick={() => navigate('/lawyers')}>Browse More Lawyers</button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="lawyer-booking">
      <div className="booking-container">
        {/* Profile Section */}
        <div className="profile-section">
          <button className="back-link" onClick={() => navigate(-1)}>
            ← Back to lawyers
          </button>

          <div className="lawyer-profile-card">
            <div className="profile-header">
              <div className="profile-avatar">
                <img src={lawyer.image} alt={lawyer.name} />
              </div>
              <div className="profile-info">
                <h1>{lawyer.name}</h1>
                <p className="profile-title">{lawyer.specialty}</p>
                <div className="profile-meta">
                  <span className="meta-item"><Star size={14} className="star-icon" /> {lawyer.rating} ({lawyer.reviews})</span>
                  <span className="meta-item"><MapPin size={14} /> {lawyer.location}</span>
                  <span className="meta-item"><Clock size={14} /> {lawyer.experience}</span>
                </div>
              </div>
            </div>

            <div className="profile-stats">
              <div className="stat-box"><span className="stat-value">${lawyer.hourlyRate}</span><span className="stat-label">per hour</span></div>
              <div className="stat-divider" />
              <div className="stat-box"><span className="stat-value">{lawyer.responseTime}</span><span className="stat-label">response</span></div>
              <div className="stat-divider" />
              <div className="stat-box"><span className="stat-value">{lawyer.completedCases}</span><span className="stat-label">completed</span></div>
            </div>

            <div className="profile-bio">
              <h3>About</h3>
              <p>{lawyer.bio}</p>
            </div>

            <div className="profile-skills">
              {lawyer.skills.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
            </div>

            <div className="profile-languages">
              <h4>Languages</h4>
              <span>{lawyer.languages.join(', ')}</span>
            </div>
          </div>

          <button className="btn btn-contact"><MessageSquare size={18} /> Contact</button>
        </div>

        {/* Booking Section */}
        <div className="booking-section">
          <div className="booking-card">
            <h2>Book a Consultation</h2>

            <div className="booking-option">
              <h3>Consultation Type</h3>
              <div className="option-cards">
                <button className={`option-card ${consultationType === 'video' ? 'active' : ''}`} onClick={() => setConsultationType('video')}>
                  <div className="option-icon"><Video size={24} /></div>
                  <div className="option-content"><span className="option-title">Video Call</span><span className="option-desc">Online consultation</span></div>
                  {consultationType === 'video' && <div className="option-check"><Check size={16} /></div>}
                </button>
                <button className={`option-card ${consultationType === 'inperson' ? 'active' : ''}`} onClick={() => setConsultationType('inperson')}>
                  <div className="option-icon"><MapPin size={24} /></div>
                  <div className="option-content"><span className="option-title">In-Person</span><span className="option-desc">Office visit</span></div>
                  {consultationType === 'inperson' && <div className="option-check"><Check size={16} /></div>}
                </button>
              </div>
            </div>

            <div className="booking-option">
              <h3>Select Date</h3>
              <div className="date-slider">
                {getNextDays().map(day => (
                  <button key={day.date} className={`date-card ${selectedDate === day.date ? 'active' : ''}`} onClick={() => setSelectedDate(day.date)}>
                    <span className="date-day">{day.day}</span>
                    <span className="date-num">{day.num}</span>
                    <span className="date-month">{day.month}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="booking-option">
              <h3>Select Time</h3>
              <div className="time-grid">
                {timeSlots.map(time => (
                  <button key={time} className={`time-chip ${selectedTime === time ? 'active' : ''}`} onClick={() => setSelectedTime(time)}>{time}</button>
                ))}
              </div>
            </div>

            <div className="booking-option">
              <h3>Notes (Optional)</h3>
              <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Describe your legal matter..." rows={3} />
            </div>

            <div className="booking-summary">
              <div className="summary-row"><span className="summary-label">Rate</span><span className="summary-value">${lawyer.hourlyRate}/hour</span></div>
              {selectedDate && <div className="summary-row"><span className="summary-label">Date</span><span className="summary-value">{selectedDate}</span></div>}
              {selectedTime && <div className="summary-row"><span className="summary-label">Time</span><span className="summary-value">{selectedTime}</span></div>}
              <div className="summary-total"><span>Total</span><span>${lawyer.hourlyRate}</span></div>
            </div>

            <button className="btn btn-continue" disabled={!selectedDate || !selectedTime} onClick={handleBooking}>
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LawyerBooking;
