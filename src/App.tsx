import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

// Lazy load pages for code splitting
const Home = lazy(() => import('./components/Home'));
const LawyerSearch = lazy(() => import('./components/LawyerSearch'));
const LawyerBooking = lazy(() => import('./components/LawyerBooking'));
const Domain = lazy(() => import('./components/Domain'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const UserDashboard = lazy(() => import('./components/UserDashboard'));
const MessageSystem = lazy(() => import('./components/MessageSystem'));
const AppointmentBooking = lazy(() => import('./components/AppointmentBooking'));
const Login = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Register'));

// Loading fallback component
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    flexDirection: 'column',
    gap: '1rem'
  }}>
    <div className="loading-spinner"></div>
    <p>Chargement...</p>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Routes>
            {/* Pages without Navbar and Footer */}
            <Route path="/login" element={
              <Suspense fallback={<PageLoader />}>
                <Login />
              </Suspense>
            } />
            <Route path="/register" element={
              <Suspense fallback={<PageLoader />}>
                <Register />
              </Suspense>
            } />
            
            {/* Pages with Navbar and Footer */}
            <Route path="/*" element={
              <>
                <Navbar />
                <main className="main-content">
                  <Suspense fallback={<PageLoader />}>
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
                  </Suspense>
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
