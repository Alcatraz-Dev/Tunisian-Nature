
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import OliveOil from './components/OliveOil';
import Dates from './components/Dates';
import Honey from './components/Honey';
import Tuna from './components/Tuna';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <main className="bg-black relative min-h-screen">
            <Navbar />
            <Hero />
            {/* <Highlights /> */}
            <VideoCarousel />
            <ModelView />
            <Features />
            <HowItWorks />
            <Contact />
            <Footer />
            <Assistant />
          </main>
        } />
        <Route path="/olive-oil" element={<OliveOil />} />
        <Route path="/dates" element={<Dates />} />
        <Route path="/honey" element={<Honey />} />
        <Route path="/tuna" element={<Tuna />} />
      </Routes>
    </Router>
  );
}

export default App;