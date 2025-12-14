"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  step?: number;
  title: string;
  subtitle?: string;
  meta?: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (lineRef.current) {
        setLineHeight(lineRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 70%"],
  });

  const progressHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [0, lineHeight]
  );

  const progressOpacity = useTransform(
    scrollYProgress,
    [0, 0.1],
    [0, 1]
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-linear-to-b from-stone-950 via-stone-900 to-stone-950"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 py-20">
        <h2 className="text-3xl md:text-5xl font-extrabold text-amber-400 mb-4">
          From Harvest to Table
        </h2>
        <p className="max-w-xl text-stone-300 text-base md:text-lg">
          A transparent journey that shows how quality, tradition, and care shape
          every product we deliver.
        </p>
      </div>

      {/* Timeline */}
      <div
        ref={lineRef}
        className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pb-32"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex gap-10 pt-16 md:pt-28"
          >
            {/* Left column */}
            <div className="relative w-16 flex justify-center">
              <div className="sticky top-36 z-20">
                <div className="h-12 w-12 rounded-full bg-stone-950 border-2 border-amber-400 flex items-center justify-center shadow-lg">
                  <span className="text-amber-400 font-bold">
                    {item.step ?? index + 1}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                {item.title}
              </h3>

              {item.subtitle && (
                <p className="text-amber-300 font-medium mb-1">
                  {item.subtitle}
                </p>
              )}

              {item.meta && (
                <p className="text-sm text-stone-400 mb-4">
                  {item.meta}
                </p>
              )}

              <div className="text-stone-300 text-base leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Vertical line */}
        <div className="absolute left-8 top-0 h-full w-[2px] bg-stone-700/40">
          <motion.div
            style={{
              height: progressHeight,
              opacity: progressOpacity,
            }}
            className="absolute top-0 left-0 w-[2px] bg-linear-to-b from-amber-400 via-orange-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </section>
  );
};