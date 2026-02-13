import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';
import LawyerSearch from './components/LawyerSearch';
import LawyerBooking from './components/LawyerBooking';
import Domain from './components/Domain';
import About from './components/About';
import Contact from './components/Contact';
import UserDashboard from './components/UserDashboard';
import MessageSystem from './components/MessageSystem';
import AppointmentBooking from './components/AppointmentBooking';
import Login from './components/Login';
import Register from './components/Register';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Routes>
            {/* Pages without Navbar and Footer */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Pages with Navbar and Footer */}
            <Route path="/*" element={
              <>
                <Navbar />
                <main className="main-content">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/domains" element={<Domain />} />
                    <Route path="/domain" element={<Domain />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/search" element={<LawyerSearch />} />
                    <Route path="/lawyers" element={<LawyerSearch />} />
                    <Route path="/book/:id" element={<LawyerBooking />} />
                    <Route path="/dashboard" element={<UserDashboard />} />
                    <Route path="/messages" element={<MessageSystem />} />
                    <Route path="/booking" element={<AppointmentBooking />} />
                    <Route path="/about" element={<Home />} />
                    <Route path="/services" element={<Home />} />
                  </Routes>
                </main>
                <Footer />
                <MobileFooter />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
