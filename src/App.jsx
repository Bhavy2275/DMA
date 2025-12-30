import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}

      <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20">
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
