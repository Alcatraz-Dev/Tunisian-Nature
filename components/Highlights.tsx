import React, { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const products = [
    {
      id: 1,
      title: "Extra Virgin Olive Oil",
      subtitle: "Sun & Rain Grown, Cold-Pressed",
      video: "https://cdn.pixabay.com/video/2024/06/12/216471_large.mp4"
    },
    {
      id: 2,
      title: "Deglet Nour Dates",
      subtitle: "Queen of Dates, Organic",
      video: "https://cdn.pixabay.com/video/2017/01/20/7446-200336762_large.mp4"
    },
    {
      id: 3,
      title: "Wild Honey",
      subtitle: "Atlas Mountains, Pure & Unfiltered",
      video: "https://cdn.pixabay.com/video/2020/05/15/39119-421020170_large.mp4"
    },
    {
      id: 4,
      title: "Premium Tuna",
      subtitle: "Mediterranean, Rich Flavor",
      video: "https://cdn.pixabay.com/video/2023/03/10/154115-806988085_large.mp4"
    }
  ];

  // Scroll fade-in animation
  useEffect(() => {
    gsap.to(".highlights-container", {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "bottom bottom" : "top center",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.inOut",
    });
  }, [isMobile]);

  // Handle slide fade
  useEffect(() => {
    slidesRef.current.forEach((slide, i) => {
      if (!slide) return;
      gsap.to(slide, {
        opacity: i === currentIndex ? 1 : 0,
        pointerEvents: i === currentIndex ? "auto" : "none",
        duration: 0.8,
        ease: "power2.inOut",
      });
    });
  }, [currentIndex]);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <section
      id="highlights"
      className="w-full overflow-hidden bg-black py-20 common-padding"
    >
      <div className="screen-max-width px-5 sm:px-10">
        <h2 className="text-amber-50 font-bold text-4xl lg:text-6xl mb-4">
          Premium Organic Collection
        </h2>
        <h3 className="text-amber-300 text-xl lg:text-2xl mb-12">
          From the heart of Tunisia
        </h3>

        <div className="highlights-container opacity-0 translate-y-20 relative w-full h-[90vh]  ">
          {/* Slides */}
          {products.map((product, i) => (
            <div
              key={product.id}
              ref={(el) => {
                slidesRef.current[i] = el!;
              }}
              className="absolute inset-0 w-full h-full opacity-0 flex items-center justify-center"
            >
              <div className="relative w-full max-w-5xl h-[80vh] rounded-3xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  src={product.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                  <h4 className="text-amber-50 font-bold text-4xl lg:text-6xl mb-4">
                    {product.title}
                  </h4>
                  <p className="text-amber-300 text-xl lg:text-2xl">
                    {product.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* Prev/Next */}
          <button
            onClick={() =>
              setCurrentIndex(
                (prev) => (prev - 1 + products.length) % products.length
              )
            }
            className="absolute top-0 left-0 z-10 flex h-full w-[15%] items-center justify-center text-white opacity-50 hover:opacity-90 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % products.length)
            }
            className="absolute top-0 right-0 z-10 flex h-full w-[15%] items-center justify-center text-white opacity-50 hover:opacity-90 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-3">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1 w-10 rounded-full transition-all duration-300 ${i === currentIndex
                  ? "bg-amber-400 scale-125"
                  : "bg-white/50 hover:bg-white"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;