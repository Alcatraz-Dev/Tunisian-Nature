import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Timeline } from "./ui/timeline";

const gallery = [
  { src: "/videos/tuna.mp4", alt: "Fresh Tunisian tuna" },
  { src: "/images/tuna3.png", alt: "Fresh Tunisian tuna" },
  { src: "/images/tuna.png", alt: "Fresh Tunisian tuna" },
  { src: "/images/tuna1.png", alt: "Sliced tuna on plate" },
  { src: "/images/tuna2.png", alt: "Whole tuna in Mediterranean waters" },
];
const timelineData = [
  {
    step: 1,
    title: "Sustainable Fishing",
    subtitle: "Wild-caught Mediterranean tuna",
    meta: "FAO 37 · Regulated season",
    content: (
      <p className="text-stone-300 leading-relaxed">
        Our tuna is wild-caught in the Mediterranean Sea using regulated and selective
        fishing methods that minimize bycatch and protect marine ecosystems, in line
        with international fisheries management standards.
      </p>
    ),
  },
  {
    step: 2,
    title: "Immediate Onboard Handling",
    subtitle: "Freshness preserved at sea",
    meta: "Iced or super-chilled",
    content: (
      <p className="text-stone-300 leading-relaxed">
        Immediately after capture, the tuna is carefully bled, cleaned, and rapidly
        chilled onboard to slow oxidation and bacterial growth, preserving texture,
        flavor, and nutritional value.
      </p>
    ),
  },
  {
    step: 3,
    title: "Controlled Processing",
    subtitle: "Traditional Mediterranean methods",
    meta: "HACCP certified facilities",
    content: (
      <p className="text-stone-300 leading-relaxed">
        The fish is processed in certified facilities under strict hygiene controls.
        Filleting and preparation are performed with minimal handling to maintain the
        natural structure and quality of the meat.
      </p>
    ),
  },
  {
    step: 4,
    title: "Quality & Safety Testing",
    subtitle: "Verified purity and safety",
    meta: "Mercury & histamine tested",
    content: (
      <p className="text-stone-300 leading-relaxed">
        Each batch undergoes laboratory testing for mercury levels, histamine, and
        microbiological safety, ensuring compliance with EU and international food
        safety regulations.
      </p>
    ),
  },
  {
    step: 5,
    title: "Packaging & Cold Chain",
    subtitle: "Freshness locked in",
    meta: "Vacuum-sealed · Cold chain maintained",
    content: (
      <p className="text-stone-300 leading-relaxed">
        Tuna portions are vacuum-packed and transported under a continuous cold chain,
        protecting freshness, flavor, and nutritional integrity from sea to customer.
      </p>
    ),
  },
];
const Tuna: React.FC = () => {
  const [index, setIndex] = useState(0);
  const active = gallery[index];

  return (
    <section className="min-h-screen bg-linear-to-b from-stone-950 via-stone-900 to-stone-950 text-white py-16">
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
                Premium Tunisian Tuna
              </h1>

              <p className="text-lg text-stone-300 mb-6">
                Caught in the crystal-clear waters of the Mediterranean Sea, our tuna is sustainably harvested and processed using traditional methods that preserve its fresh, delicate flavor and nutritional value.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  ["Sustainably caught", "Respecting marine life and environment"],
                  ["Rich in Omega-3", "Supports heart and brain health"],
                  ["Low in mercury", "Safe and healthy consumption"],
                  ["Traditional processing", "Preserves freshness and flavor"],
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

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-amber-900/40 text-amber-200 text-sm">Premium</span>
                <span className="px-3 py-1 rounded-full bg-amber-900/40 text-amber-200 text-sm">Sustainable</span>
                <span className="px-3 py-1 rounded-full bg-amber-900/40 text-amber-200 text-sm">Fresh</span>
                <span className="px-3 py-1 rounded-full bg-amber-900/40 text-amber-200 text-sm">Mediterranean</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 mt-4">
              <Link to="/">
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
            <p className="text-stone-300 text-sm">Family-owned fisheries, traditional Mediterranean practices, and sustainable fishing methods.</p>
          </div>

          <div className="bg-black/25 p-6 rounded-xl">
            <h4 className="text-amber-300 font-semibold mb-2">Sustainability</h4>
            <p className="text-stone-300 text-sm">Responsible fishing, eco-friendly processing, and support for local communities.</p>
          </div>

          <div className="bg-black/25 p-6 rounded-xl">
            <h4 className="text-amber-300 font-semibold mb-2">Shipping</h4>
            <p className="text-stone-300 text-sm">Fast EU delivery with tracking — arrives in 3–7 days.</p>
          </div>
        </div>
        {/* Timeline */}
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default Tuna;