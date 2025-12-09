import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import { playImg, pauseImg, replayImg } from "../utils";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    title: "Extra Virgin Olive Oil",
    subtitle: "Sun & Rain Grown, Cold-Pressed",
    video: "https://cdn.pixabay.com/video/2024/06/12/216471_large.mp4",
  },
  {
    id: 2,
    title: "Deglet Nour Dates",
    subtitle: "Queen of Dates, Organic",
    video: "https://cdn.pixabay.com/video/2017/01/20/7446-200336762_large.mp4",
  },
  {
    id: 3,
    title: "Wild Honey",
    subtitle: "Atlas Mountains, Pure & Unfiltered",
    video: "https://cdn.pixabay.com/video/2020/05/15/39119-421020170_large.mp4",
  },
  {
    id: 4,
    title: "Premium Tuna",
    subtitle: "Mediterranean, Rich Flavor",
    video: "https://cdn.pixabay.com/video/2023/03/10/154115-806988085_large.mp4",
  },
];

const VideoCarousel = () => {
  const videoRef = useRef<HTMLVideoElement[]>([]);
  const videoSpanRef = useRef<HTMLDivElement[]>([]);
  const videoDivRef = useRef<HTMLDivElement[]>([]);

  const [videoState, setVideoState] = useState({
    videoId: 0,
    isPlaying: true,
    isLastVideo: false,
    startPlay: false,
  });

  const { videoId, isPlaying, isLastVideo, startPlay } = videoState;

  useGSAP(() => {
    gsap.to("#slider", {
      x: `-${100 * videoId}%`,
      duration: 1.5,
      ease: "power2.inOut",
    });
  }, [videoId]);

  // Progress bar and auto next
  useEffect(() => {
    const video = videoRef.current[videoId];
    const progressBar = videoSpanRef.current[videoId];
    if (!video || !progressBar) return;

    const updateProgress = () => {
      const progressBar = videoSpanRef.current[videoId];
      if (!progressBar) return;

      const progress = (video.currentTime / video.duration) * 100 || 0;

      gsap.to(progressBar, {
        width: `${progress}%`,
        duration: 0.1,
        ease: "linear"
      });
    };

    const interval = setInterval(() => {
      if (isPlaying) updateProgress();
    }, 100);

    return () => clearInterval(interval);
  }, [videoId, isPlaying]);

  useEffect(() => {
    const video = videoRef.current[videoId];
    if (!video) return;
    if (isPlaying) video.play().catch(() => { });
    else video.pause();
  }, [videoId, isPlaying]);

  const togglePlay = () => {
    if (isLastVideo) {
      setVideoState({ videoId: 0, isPlaying: true, isLastVideo: false, startPlay: true });
    } else {
      setVideoState((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
    }
  };

  return (
    <>
      {/* Video slider */}
      <div id="videoCarousel" className="overflow-hidden w-full max-w-7xl rounded-3xl shadow-2xl mx-auto">
        <div id="slider" className="flex w-full transition-transform duration-700 ease-in-out">
          {products.map((product, i) => (
            <div
              key={product.id}
              className="w-full flex-shrink-0 relative flex items-center justify-center"
            >
              <video
                ref={(el) => {
                  if (el) videoRef.current[i] = el;
                }}
                src={product.video}
                muted
                playsInline
                className="w-full h-[75vh] object-cover rounded-3xl"
                onEnded={() =>
                  i !== products.length - 1
                    ? setVideoState((prev) => ({ ...prev, videoId: i + 1 }))
                    : setVideoState((prev) => ({ ...prev, isLastVideo: true, isPlaying: false }))
                }
              />

              {/* Text overlay */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white">
                <h2 className="text-4xl lg:text-6xl font-bold text-amber-400">{product.title}</h2>
                <p className="text-xl lg:text-2xl mt-2">{product.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress + Controls */}
      <div className="flex items-center justify-center mt-8 space-x-4">
        <div className="flex bg-neutral-900/50 rounded-full p-3 px-6 shadow-xl">
          {products.map((_, i) => (
            <div
              key={i}
              className="relative w-16 h-3 bg-neutral-700 rounded-full mx-2 overflow-hidden"
            >
              <div
                ref={(el) => (videoSpanRef.current[i] = el as any)}
                className="absolute top-0 left-0 h-full bg-amber-500 rounded-full w-0"
              />
            </div>
          ))}
        </div>

        <button
          className="ml-4 p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition shadow-md mb-3"
          onClick={togglePlay}
        >
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            className="w-4 h-4"
            alt="control"
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;