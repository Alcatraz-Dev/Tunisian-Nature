import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features: React.FC = () => {
    useGSAP(() => {
        gsap.to('#features_title', {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '#features_title',
                start: 'top 85%',
            }
        })

        gsap.to('.g_grow', {
            scale: 1,
            opacity: 1,
            ease: 'power1',
            scrollTrigger: {
                trigger: '.g_grow',
                start: 'top 85%',
                end: 'bottom 85%',
                scrub: 5.5
            }
        });

        gsap.to('.g_text', {
            y: 0,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.g_text',
                start: 'top 90%',
            }
        });
    }, []);

    return (
        <section className="h-full bg-stone-950 py-24 relative overflow-hidden">
            <div className="screen-max-width px-5 sm:px-10">
                <div className="mb-24 pl-5">
                    <h2 id="features_title" className="text-5xl lg:text-7xl font-bold text-amber-50 mb-2 opacity-0 translate-y-20">The Spirit of Tunisia.</h2>
                    <h2 className="text-3xl lg:text-5xl font-bold text-stone-500">Where the Mediterranean meets the Sahara.</h2>
                </div>

                <div className="flex flex-col justify-center items-center overflow-hidden">
                    <div className="mt-10 mb-24 w-full relative">
                        <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
                            {/* Feature 1 - Dates/Desert */}
                            <Link to="/dates" className="block overflow-hidden flex-1 h-[50vh] bg-zinc-900 rounded-3xl group cursor-pointer relative">
                                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                <img src="/images/dates.png" alt="Sahara" className="feature-video g_grow w-full h-full object-cover scale-150 opacity-0 transition-transform duration-700 ease-in-out" />
                                <div className="absolute bottom-8 left-8 z-20">
                                    <p className="text-white font-semibold text-2xl">Golden Palm Oases <br /> of the Sahara.</p>
                                </div>
                            </Link>

                            {/* Feature 2 - Olive/Mediterranean */}
                            <div className="overflow-hidden flex-1 h-[50vh] bg-zinc-900 rounded-3xl group cursor-pointer relative">
                                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                <img src="/images/olive.png" alt="Olive Grove" className="feature-video g_grow w-full h-full object-cover scale-150 opacity-0 transition-transform duration-700 ease-in-out" />
                                <div className="absolute bottom-8 left-8 z-20">
                                    <p className="text-white font-semibold text-2xl">Ancient Olive Varieties <br /> Sun & Rain Grown.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-lg font-medium text-stone-400">
                            <div className="g_text opacity-0 translate-y-10">
                                <p>
                                    Our products are grown in pure, untouched environments. From the <span className="text-white">Atlas Mountains</span> to the Mediterranean coast, we harvest nature's finest treasures.
                                </p>
                            </div>
                            <div className="g_text opacity-0 translate-y-10">
                                <p>
                                    Experience exceptional organic quality. <span className="text-white">100% natural</span>, no irrigation, and produced with traditional methods for unmatched purity and flavor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;