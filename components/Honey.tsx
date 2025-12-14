import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Timeline } from "./ui/timeline";

const gallery = [
  { src: "/videos/honey.mp4", alt: "Honey farm in Tunisia" },
  { src: "/images/honeyfarme.png", alt: "honey farm in Tunisia " },
  { src: "/images/fresh-honey.png", alt: "fresh honey in Tunisia" },
  { src: "/images/honey.png", alt: "Honey farm in Tunisia" },
  { src: "/images/honey1.png", alt: "Close-up of premium honey jar" },
  { src: "/images/honey2.png", alt: "Honey dripping from comb" },
];
const timelineData = [
  {
    step: 1,
    title: "Natural Nectar Collection",
    subtitle: "Bees foraging wildflowers",
    meta: "Tunisian flora · Seasonal blooms",
    content: (
      <p className="text-stone-300 leading-relaxed">
        Honeybees collect nectar from wildflowers, citrus blossoms, and native
        Mediterranean plants across Tunisia. The floral source determines the
        honey’s aroma, color, and nutritional profile.
      </p>
    ),
  },
  {
    step: 2,
    title: "Hive Maturation",
    subtitle: "Natural enzymatic transformation",
    meta: "Enzymes · Moisture reduction",
    content: (
      <p className="text-stone-300 leading-relaxed">
        Inside the hive, bees naturally convert nectar into honey through enzymatic
        activity and controlled evaporation, sealing the honeycomb only when optimal
        maturity and moisture levels are reached.
      </p>
    ),
  },
  {
    step: 3,
    title: "Gentle Harvesting",
    subtitle: "Respecting bees and ecosystem",
    meta: "Traditional beekeeping",
    content: (
      <p className="text-stone-300 leading-relaxed">
        Beekeepers carefully harvest capped honeycombs using non-destructive methods,
        ensuring colony health, sustainability, and minimal disturbance to the bees.
      </p>
    ),
  },
  {
    step: 4,
    title: "Cold Extraction & Filtration",
    subtitle: "Raw and unprocessed",
    meta: "Low-temperature extraction",
    content: (
      <p className="text-stone-300 leading-relaxed">
        Honey is extracted at low temperatures and lightly filtered to remove natural
        wax particles while preserving enzymes, antioxidants, and antibacterial
        properties.
      </p>
    ),
  },
  {
    step: 5,
    title: "Quality Control & Packaging",
    subtitle: "Purity guaranteed",
    meta: "Food safety standards",
    content: (
      <p className="text-stone-300 leading-relaxed">
        Each batch is tested for purity, moisture content, and safety before being
        sealed in food-grade containers to maintain freshness, flavor, and shelf
        stability.
      </p>
    ),
  },
];
const Honey: React.FC = () => {
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
                Premium Tunisian Honey
              </h1>

              <p className="text-lg text-stone-300 mb-6">
                Harvested from the wildflowers of Tunisia's diverse landscapes, our honey is collected by local beekeepers using sustainable practices that preserve its natural sweetness and healing properties.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  ["Raw & Unfiltered", "Keeps natural enzymes intact"],
                  ["Rich in enzymes", "Supports digestion and health"],
                  ["Antibacterial", "Natural healing properties"],
                  ["Sustainably sourced", "Respecting nature and bees"],
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
                <span className="px-3 py-1 rounded-full bg-amber-900/40 text-amber-200 text-sm">Raw</span>
                <span className="px-3 py-1 rounded-full bg-amber-900/40 text-amber-200 text-sm">Organic</span>
                <span className="px-3 py-1 rounded-full bg-amber-900/40 text-amber-200 text-sm">Pure</span>
                <span className="px-3 py-1 rounded-full bg-amber-900/40 text-amber-200 text-sm">Wildflower</span>
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
            <p className="text-stone-300 text-sm">Family-owned apiaries, traditional beekeeping, and artisanal extraction methods.</p>
          </div>

          <div className="bg-black/25 p-6 rounded-xl">
            <h4 className="text-amber-300 font-semibold mb-2">Sustainability</h4>
            <p className="text-stone-300 text-sm">Eco-friendly beekeeping, zero-waste practices, and fair compensation for local beekeepers.</p>
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

export default Honey;