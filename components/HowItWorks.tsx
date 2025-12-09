import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { chipImg, frameImg, frameVideo, frameImg2 } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animateWithGsap } from '../utils/animations'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HowItWorks = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return

    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom',
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut',
    })

    gsap.fromTo(
      '.mask-wrapper',
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: '.mask-wrapper',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
        ease: 'power2.inOut',
      }
    )
  }, [])

  return (
    <section className="py-20 px-5 sm:px-10 w-full bg-black overflow-hidden common-padding">
      <div className="max-w-[1120px] mx-auto screen-max-width">
        {/* Chip */}
        <div id="chip" className="flex items-center justify-center w-full my-20">
          <img
            src={chipImg}
            alt="chip"
            width={180}
            height={180}
            className="invert brightness-0 filter contrast-200"
          />
        </div>

        {/* Heading */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-7xl font-bold text-center text-amber-50 mb-5">
            Certified Organic. <br /> A victory for purity.
          </h2>

          <p className="text-stone-400 text-xl md:text-2xl font-semibold mt-5 max-w-2xl text-center">
            It's here. The highest standard of natural cultivation in the history of Tunisian
            agriculture.
          </p>
        </div>

        {/* Video Frame */}
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex items-center justify-center">
            <div className="overflow-hidden relative z-10">
              <img
                src={frameImg2}
                alt="frame"
                className="bg-transparent relative z-10 w-full h-full"
              />
            </div>

            {/* Video Mask */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none mask-wrapper sm:opacity-100">
              <div className="w-[90%] h-[90%] rounded-[30px] sm:rounded-[56px] overflow-hidden relative mt-1 sm:mt-2">
                <video
                  className="pointer-events-none object-cover w-full h-full"
                  playsInline
                  muted
                  autoPlay
                  loop
                  ref={videoRef}
                >
                  <source src={frameVideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <p className="text-stone-500 font-semibold text-center mt-3">Tunisian Landscapes</p>
        </div>

        {/* Text Blocks */}
        <div className="flex flex-col md:flex-row gap-10 mt-20 px-5 w-full">
          <div className="flex flex-1 justify-center flex-col gap-6">
            <p className="text-stone-400 text-xl font-medium g_fadeIn opacity-0 translate-y-10">
              Our 'Tunisian Nature' seal represents an entirely new class of quality that delivers
              our{' '}
              <span className="text-white">best organic performance by far</span>.
            </p>

            <p className="text-stone-400 text-xl font-medium g_fadeIn opacity-0 translate-y-10">
              Every harvest will <span className="text-white">taste and feel so authentic</span>,
              with incredibly detailed flavor profiles and zero chemical intervention.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn opacity-0 translate-y-10">
            <p className="text-stone-400 text-xl font-medium">New</p>
            <p className="text-white text-3xl md:text-5xl font-bold my-2">Bio-Dynamic Farming</p>
            <p className="text-stone-400 text-xl font-medium">with 0% pesticides</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks