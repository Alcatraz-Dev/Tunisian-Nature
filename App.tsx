import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import ModelView from './components/ModelView';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import VideoCarousel from './components/VideoCarousel';

function App() {
  return (
    <main className="bg-black relative min-h-screen">
      <Navbar />
      <Hero />
      {/* <Highlights /> */}
      <VideoCarousel/>
      <ModelView />
      <Features />
      <HowItWorks />
      <Contact />
      <Footer />
      <Assistant />
    </main>
  );
}

export default App;