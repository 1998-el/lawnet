import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Footer />
      <MobileFooter />
    </div>
  );
}

export default App;
