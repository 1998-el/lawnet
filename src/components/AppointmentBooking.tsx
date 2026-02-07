import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Video, 
  Building, 
  Phone,
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle,
  Shield
} from 'lucide-react';
import './AppointmentBooking.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const lawyer = {
  id: 1,
  name: 'Sarah Johnson',
  specialty: 'Criminal Defense Attorney',
  rating: 4.9,
  reviews: 127,
  avatar: './assets/avatar.jpg',
  verified: true
};

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM'
];

const AppointmentBooking = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [appointmentType, setAppointmentType] = useState<'video' | 'in-person'>('video');
  const [caseType, setCaseType] = useState('');
  const [notes, setNotes] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days = [];
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const isDateAvailable = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleBookAppointment = () => {
    console.log('Booking appointment:', {
      lawyer,
      date: selectedDate,
      time: selectedTime,
      type: appointmentType,
      caseType,
      notes
    });
    setStep(5);
  };

  return (
    <main className="appointment-booking">
      <div className="booking-container">
        {/* Progress Steps */}
        <div className="progress-steps">
          {['Select Date', 'Choose Time', 'Details', 'Confirm'].map((label, index) => (
            <div key={label} className={`step ${step > index + 1 ? 'completed' : ''} ${step === index + 1 ? 'active' : ''}`}>
              <div className="step-number">
                {step > index + 1 ? <CheckCircle size={20} /> : index + 1}
              </div>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="booking-content">
          {/* Left Side - Lawyer Info */}
          <aside className="lawyer-info-card">
            <img src={lawyer.avatar} alt={lawyer.name} className="lawyer-avatar" />
            <h2>{lawyer.name}</h2>
            <p className="lawyer-specialty">{lawyer.specialty}</p>
            <div className="lawyer-rating">
              <Star size={18} className="star filled" />
              <span>{lawyer.rating}</span>
              <span className="reviews">({lawyer.reviews} reviews)</span>
            </div>
            <div className="verification">
              <Shield size={16} />
              <span>Verified Lawyer</span>
            </div>
            <div className="lawyer-contact">
              <p><Phone size={16} /> 1-800-LAWNET</p>
            </div>
          </aside>

          {/* Right Side - Booking Form */}
          <div className="booking-form">
            {/* Step 1: Select Date */}
            {step === 1 && (
              <motion.div className="form-step" variants={fadeInUp} initial="hidden" animate="visible">
                <h3>Select a Date</h3>
                <p>Choose when you'd like to schedule your consultation</p>
                
                <div className="calendar">
                  <div className="calendar-header">
                    <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}>
                      <ChevronLeft size={20} />
                    </button>
                    <span>
                      {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </span>
                    <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}>
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  <div className="calendar-weekdays">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <span key={day}>{day}</span>
                    ))}
                  </div>
                  <div className="calendar-days">
                    {getDaysInMonth(currentMonth).map((date, index) => (
                      <button
                        key={index}
                        className={`day ${date ? '' : 'empty'} ${date && isDateAvailable(date) ? 'available' : 'unavailable'} ${date && date.toDateString() === selectedDate.toDateString() ? 'selected' : ''}`}
                        disabled={!date || !isDateAvailable(date)}
                        onClick={() => date && setSelectedDate(date)}
                      >
                        {date?.getDate()}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="btn btn-primary next-btn" onClick={() => setStep(2)}>
                  Continue <ChevronRight size={18} />
                </button>
              </motion.div>
            )}

            {/* Step 2: Select Time */}
            {step === 2 && (
              <motion.div className="form-step" variants={fadeInUp} initial="hidden" animate="visible">
                <h3>Select a Time</h3>
                <p>Available times for {formatDate(selectedDate)}</p>
                
                <div className="appointment-type">
                  <button 
                    className={`type-option ${appointmentType === 'video' ? 'active' : ''}`}
                    onClick={() => setAppointmentType('video')}
                  >
                    <Video size={24} />
                    <span>Video Call</span>
                  </button>
                  <button 
                    className={`type-option ${appointmentType === 'in-person' ? 'active' : ''}`}
                    onClick={() => setAppointmentType('in-person')}
                  >
                    <Building size={24} />
                    <span>In-Person</span>
                  </button>
                </div>

                <div className="time-slots">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                      onClick={() => setSelectedTime(time)}
                    >
                      <Clock size={14} />
                      {time}
                    </button>
                  ))}
                </div>

                <div className="form-actions">
                  <button className="btn btn-outline" onClick={() => setStep(1)}>
                    <ChevronLeft size={18} /> Back
                  </button>
                  <button className="btn btn-primary" onClick={() => setStep(3)} disabled={!selectedTime}>
                    Continue <ChevronRight size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Case Details */}
            {step === 3 && (
              <motion.div className="form-step" variants={fadeInUp} initial="hidden" animate="visible">
                <h3>Case Details</h3>
                <p>Provide some information about your legal matter</p>
                
                <div className="form-group">
                  <label>Type of Case</label>
                  <select value={caseType} onChange={(e) => setCaseType(e.target.value)}>
                    <option value="">Select case type</option>
                    <option value="criminal-defense">Criminal Defense</option>
                    <option value="dui">DUI/DWI</option>
                    <option value="traffic">Traffic Violation</option>
                    <option value="white-collar">White Collar Crime</option>
                    <option value="domestic">Domestic Violence</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Additional Notes (Optional)</label>
                  <textarea 
                    placeholder="Briefly describe your legal situation..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="form-actions">
                  <button className="btn btn-outline" onClick={() => setStep(2)}>
                    <ChevronLeft size={18} /> Back
                  </button>
                  <button className="btn btn-primary" onClick={() => setStep(4)}>
                    Review Booking <ChevronRight size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <motion.div className="form-step" variants={fadeInUp} initial="hidden" animate="visible">
                <h3>Confirm Your Booking</h3>
                <p>Review your appointment details before confirming</p>
                
                <div className="confirmation-card">
                  <div className="confirmation-section">
                    <h4><Calendar size={18} /> Date & Time</h4>
                    <p>{formatDate(selectedDate)}</p>
                    <p>{selectedTime}</p>
                  </div>
                  
                  <div className="confirmation-section">
                    <h4><Video size={18} /> Appointment Type</h4>
                    <p>{appointmentType === 'video' ? 'Video Call' : 'In-Person Meeting'}</p>
                  </div>
                  
                  <div className="confirmation-section">
                    <h4><Building size={18} /> Location</h4>
                    <p>
                      {appointmentType === 'video' 
                        ? 'Video call link will be sent to your email' 
                        : '123 Legal Street, New York, NY 10001'}
                    </p>
                  </div>
                  
                  {caseType && (
                    <div className="confirmation-section">
                      <h4><Shield size={18} /> Case Type</h4>
                      <p>{caseType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
                    </div>
                  )}
                </div>

                <div className="booking-summary">
                  <h4>Consultation Fee</h4>
                  <p className="price">$350.00 <span>/hour</span></p>
                  <p className="note">Payment will be collected after the consultation</p>
                </div>

                <div className="form-actions">
                  <button className="btn btn-outline" onClick={() => setStep(3)}>
                    <ChevronLeft size={18} /> Back
                  </button>
                  <button className="btn btn-primary confirm-btn" onClick={handleBookAppointment}>
                    <CheckCircle size={18} /> Confirm Booking
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Success */}
            {step === 5 && (
              <motion.div className="form-step success" variants={fadeInUp} initial="hidden" animate="visible">
                <div className="success-icon">
                  <CheckCircle size={64} />
                </div>
                <h2>Appointment Confirmed!</h2>
                <p>Your consultation with {lawyer.name} has been scheduled.</p>
                
                <div className="confirmation-details">
                  <div className="detail">
                    <Calendar size={20} />
                    <span>{formatDate(selectedDate)}</span>
                  </div>
                  <div className="detail">
                    <Clock size={20} />
                    <span>{selectedTime}</span>
                  </div>
                  <div className="detail">
                    <Video size={20} />
                    <span>Video Call</span>
                  </div>
                </div>

                <p className="confirmation-note">
                  A confirmation email has been sent to your registered email address.
                  The video call link will be provided 24 hours before the appointment.
                </p>

                <div className="success-actions">
                  <a href="/dashboard" className="btn btn-primary">View in Dashboard</a>
                  <a href="/" className="btn btn-outline">Back to Home</a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AppointmentBooking;
