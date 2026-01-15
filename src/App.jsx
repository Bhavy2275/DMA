import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import SEO from './components/SEO';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <SEO
        title="Home"
        description="DMA Media is a premier digital marketing agency amplifying brands through data-driven campaigns, innovative design, and strategic growth solutions."
      />
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}

      <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20">
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <Work />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
