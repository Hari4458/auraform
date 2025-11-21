import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingMessenger from './components/FloatingMessenger';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import SoloLevelingCursor from './components/SoloLevelingCursor';
import MagicalEffects from './components/MagicalEffects';

// Import pages
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Background Elements */}
        <LoadingScreen />
        <ParticleBackground />
        <MagicalEffects />
        
        {/* Custom Cursor */}
        <SoloLevelingCursor />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main className="solo-leveling-theme">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer Elements */}
        <Footer />
        <FloatingMessenger />
      </div>
    </Router>
  );
}

export default App;
