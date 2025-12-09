import React, { useState } from "react";
import { Link } from "react-router-dom";

const gallery = [
  { src: "/images/tuna.png", alt: "Fresh Tunisian tuna" },
  { src: "/images/tuna1.png", alt: "Sliced tuna on plate" },
  { src: "/images/tuna2.png", alt: "Whole tuna in Mediterranean waters" },
];

const Tuna: React.FC = () => {
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/30">
              <img
                src={active.src}
                alt={active.alt}
                className="w-full h-96 sm:h-[520px] object-cover transform transition-transform duration-700 ease-out hover:scale-105"
                loading="lazy"
              />

              {/* Badge */}
              <div className="absolute top-4 left-4 bg-amber-600/95 text-stone-900 px-3 py-1 rounded-full text-sm font-semibold shadow">
                Premium
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex items-center gap-3 justify-center">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`rounded-xl overflow-hidden ring-2 ring-transparent focus:outline-none focus:ring-amber-400/60 ${i === index ? "ring-amber-400/80 scale-105" : "opacity-70 hover:opacity-100"
                    } transition-all duration-200`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    className="w-24 h-16 object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
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
      </div>
    </section>
  );
};

export default Tuna;