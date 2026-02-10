import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/animate.min.css';
import './css/bootstrap.min.css';
import './css/owl.carousel.min.css'; // Optional
import './css/owl.theme.default.min.css'; // Optional
import './css/magnific-popup.min.css'; // Optional
import './css/style.css'; // Legacy support
import './css/core.css';
import './css/custom.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Industries from './components/sections/Industries';
import Clients from './components/sections/Clients';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

// Service Pages
import VideoProduction from './components/pages/VideoProduction';
import DigitalMarketing from './components/pages/DigitalMarketing';
import Website from './components/pages/Website';
import Advertising from './components/pages/Advertising';
import Branding from './components/pages/Branding';
import CorporateGifts from './components/pages/CorporateGifts';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Home = () => (
  <main>
    <Hero />
    <About />
    <Services />
    <Industries />
    <Clients />
    <Testimonials />
    <Contact />
  </main>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/video-production" element={<VideoProduction />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/website" element={<Website />} />
          <Route path="/services/advertising" element={<Advertising />} />
          <Route path="/services/branding" element={<Branding />} />
          <Route path="/services/corporate-gifts" element={<CorporateGifts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
