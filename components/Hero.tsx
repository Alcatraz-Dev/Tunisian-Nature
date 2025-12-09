import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero: React.FC = () => {
  // Use a high-quality nature video (Wheat field/Sunset vibe suitable for organic products)
  const videoUrl = "./videos/desert.mp4";

  useGSAP(() => {
    gsap.to('#hero-title', { opacity: 1, y: 0, delay: 0.5, duration: 1, ease: 'power2.out' });
    gsap.to('#hero-subtitle', { opacity: 1, scale: 1, delay: 0.8, duration: 1, ease: 'power2.out' });

    // Animate the container in
    gsap.to('#cta', { opacity: 1, y: 0, delay: 1.5, duration: 1, ease: 'power2.out' });

    // Add a continuous gentle float animation to the button
    gsap.to('#cta-button', {
      y: -5,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: 'sine.inOut',
      delay: 2.5
    });
  }, []);

  return (
    <section className="w-full h-[calc(100vh-60px)] bg-black relative">
      <div className="h-full w-full flex flex-col items-center justify-start relative z-10">

        <div className="w-full h-[85vh] relative">
          <div className="w-full h-full bg-gray-900 overflow-hidden relative shadow-2xl shadow-amber-900/20 group">
            {/* Background Video */}
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              // controls
              key={videoUrl}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>

            {/* Dark Gradient Overlay for text readability - pointer-events-none allows clicks to pass through to video controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

            {/* Text Overlay - pointer-events-none allows clicks to pass through to video controls */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-5 pointer-events-none">
              <p id="hero-title" className="font-semibold text-center text-sm sm:text-lg md:text-2xl text-amber-300 opacity-0 translate-y-10 tracking-[0.2em] mb-2 drop-shadow-md">
                TUNISIAN NATURE
              </p>
              <h1 id="hero-subtitle" className="text-3xl sm:text-5xl md:text-8xl font-bold text-center text-white tracking-tighter opacity-0 scale-90 drop-shadow-xl">
                PREMIUM<br />ORGANIC
              </h1>
            </div>
          </div>
        </div>

        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20 relative z-20 pointer-events-none -mt-40 sm:-mt-48"
        >
          <a
            id="cta-button"
            href="#videoCarousel"
            className="px-6 py-2 sm:px-8 sm:py-3 rounded-full bg-amber-600 hover:bg-amber-500 transition-all duration-300 text-white text-sm sm:text-base font-medium shadow-lg shadow-amber-900/40 pointer-events-auto hover:shadow-amber-600/60 hover:scale-110 border border-transparent hover:border-amber-300"
          >
            Explore Collection
          </a>
          <p className="font-light text-xs sm:text-sm md:text-base text-gray-400 mt-3 drop-shadow-md  text-center">From the heart of the Mediterranean.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero;