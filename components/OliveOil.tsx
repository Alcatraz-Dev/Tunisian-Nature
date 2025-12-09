import React, { useState } from "react";
import { Link } from "react-router-dom";

const gallery = [
  { src: "/videos/olive.mp4", alt: "Video of olive oil pouring" },
  { src: "/images/olivefactory1.png", alt: "Olive grove at sunset" },
  { src: "/images/olivefactory.png", alt: "Olive grove at sunset" },
  { src: "/images/olives.png", alt: "Olive grove at sunset" },
  { src: "/images/olive1.png", alt: "Bottle of premium Tunisian olive oil on table" },
  { src: "/images/olive.png", alt: "Close-up shot of olive oil pouring" },
];

const OliveOil: React.FC = () => {
  const [index, setIndex] = useState(0);
  const active = gallery[index];

  return (
    <section className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-white py-16">
      <div className="screen-max-width px-5 sm:px-10">

        {/* Back */}
        <div className="flex items-center mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Gallery */}
          <div className="space-y-6">
            {/* Main Image / Video */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/30">
              {active.src.endsWith(".mp4") ? (
                <video
                  src={active.src}
                  className="w-full h-48 sm:h-64 md:h-[380px] object-cover transform transition-transform duration-700 ease-out hover:scale-105"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={active.src}
                  alt={active.alt}
                  className="w-full h-48 sm:h-64 md:h-[380px] object-cover transform transition-transform duration-700 ease-out hover:scale-105"
                  loading="lazy"
                />
              )}

              {/* Badge */}
              <div className="absolute top-3 left-3 bg-amber-600/95 text-stone-900 px-2 py-0.5 rounded-full text-xs sm:text-sm font-semibold shadow">
                Extra Virgin
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex items-center gap-2 justify-center">
              {gallery.map((g, i) => {
                const isVideo = g.src.endsWith(".mp4");
                return (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`relative rounded-xl overflow-hidden ring-2 ring-transparent focus:outline-none focus:ring-amber-400/60 ${i === index ? "ring-amber-400/80 scale-105" : "opacity-70 hover:opacity-100"
                      } transition-all duration-200`}
                  >
                    {isVideo ? (
                      <>
                        <video
                          src={g.src}
                          className="w-16 h-12 sm:w-20 sm:h-14 object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </>
                    ) : (
                      <img
                        src={g.src}
                        alt={g.alt}
                        className="w-16 h-12 sm:w-20 sm:h-14 object-cover"
                        loading="lazy"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-amber-400 leading-tight mb-4">
                Premium Tunisian Olive Oil
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .587l3.668 7.431L23.6 9.17l-5.8 5.66 1.37 7.98L12 18.896 4.83 22.81l1.37-7.98L.4 9.17l7.932-1.152L12 .587z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-stone-300">4.9 · 1.2k reviews</span>
              </div>

              <p className="text-lg text-stone-300 mb-6">
                Harvested from ancient groves along the Mediterranean coast, our cold-pressed olive oil captures a bright herbal aroma and a soft peppery finish. Pure, organic, and crafted with traditional methods.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  ["Cold-pressed", "First extraction, max freshness"],
                  ["100% Organic", "No pesticides — Non-GMO"],
                  ["Rich in antioxidants", "High polyphenol levels"],
                  ["Award-winning", "Recognized internationally"],
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-amber-400 rounded-full mt-2" />
                    <div>
                      <div className="text-stone-200 font-medium">{title}</div>
                      <div className="text-sm text-stone-400">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Nutrition */}
              <div className="bg-black/30 p-4 rounded-xl mb-6">
                <h3 className="text-sm text-stone-200 font-semibold mb-2">Nutrition (per 100ml)</h3>
                <div className="flex gap-4 text-sm text-stone-300">
                  <div>Calories: <strong className="text-amber-300">884 kcal</strong></div>
                  <div>Fat: <strong className="text-amber-300">100 g</strong></div>
                  <div>Saturated: <strong className="text-amber-300">14 g</strong></div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-amber-900/40 text-amber-200 text-sm">Extra Virgin</span>
                <span className="px-3 py-1 rounded-full bg-amber-900/40 text-amber-200 text-sm">Cold Pressed</span>
                <span className="px-3 py-1 rounded-full bg-amber-900/40 text-amber-200 text-sm">Organic</span>
                <span className="px-3 py-1 rounded-full bg-amber-900/40 text-amber-200 text-sm">500 ml</span>
              </div>
            </div>

            {/* CTA Buttons (no price) */}
            <div className="flex items-center gap-4 mt-4">
              <Link
                to="/"
              >
                <button
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 transition font-semibold shadow-lg"
                >
                  Contact to Order
                </button>
              </Link>




              <Link
                to="/"
                className="ml-auto text-sm text-stone-300 hover:text-white underline"
              >
                Ask a question
              </Link>
            </div>
          </div>
        </div>

        {/* Extra sections */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/25 p-6 rounded-xl">
            <h4 className="text-amber-300 font-semibold mb-2">Our Story</h4>
            <p className="text-stone-300 text-sm">Family-owned orchards, sustainable farming, and traditional artisanal pressing methods.</p>
          </div>

          <div className="bg-black/25 p-6 rounded-xl">
            <h4 className="text-amber-300 font-semibold mb-2">Sustainability</h4>
            <p className="text-stone-300 text-sm">Zero-waste production, solar-powered mills, and fair compensation for farmers.</p>
          </div>

          <div className="bg-black/25 p-6 rounded-xl">
            <h4 className="text-amber-300 font-semibold mb-2">Shipping</h4>
            <p className="text-stone-300 text-sm">Fast EU delivery with full tracking — arrives in 3–7 days.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OliveOil;