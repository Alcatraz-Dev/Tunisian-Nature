import React, { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ModelView: React.FC = () => {
    const [view, setView] = useState<'wholesale' | 'partnership'>('wholesale');

    useGSAP(() => {
        gsap.to('#heading', {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '#heading',
                start: 'top 85%',
            }
        });
    }, []);

    return (
        <section id="wholesale" className="common-padding py-20 bg-stone-900">
            <div className="screen-max-width px-5 sm:px-10">
                <h1 id="heading" className="text-stone-400 font-semibold text-2xl lg:text-3xl text-center mb-10 opacity-0 translate-y-20">
                    Business Solutions
                </h1>

                <div className="flex flex-col items-center justify-center mt-5">
                    <div className="w-full h-[50vh] md:h-[60vh] w-full flex items-center justify-center relative overflow-hidden bg-stone-800/50 rounded-2xl border border-stone-700 shadow-2xl">
                        <div className="absolute inset-0 w-full h-full">
                            {view === 'wholesale' ? (
                                <img src="/images/tunis.png" className="w-full h-full object-cover opacity-60" alt="Wholesale" />
                            ) : (
                                <img src="/images/cape.png" className="w-full h-full object-cover opacity-60" alt="Partnership" />
                            )}
                        </div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 backdrop-blur-sm bg-black/30">
                            {view === 'wholesale' ? (
                                <div className="animate-fade-in">
                                    <h3 className="text-4xl font-bold text-white mb-4">Wholesale Supply</h3>
                                    <p className="text-stone-200 max-w-lg mx-auto">
                                        We supply organic shops, supermarkets, and restaurants with bulk packaging options (1L to 5L tins) and premium retail boxes.
                                    </p>
                                </div>
                            ) : (
                                <div className="animate-fade-in">
                                    <h3 className="text-4xl font-bold text-white mb-4">Private Label</h3>
                                    <p className="text-stone-200 max-w-lg mx-auto">
                                        Custom packaging and branding solutions for international distributors. Export support available.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col items-center mt-10 gap-6">
                        <p className="text-sm font-light text-center mb-5 text-stone-400">
                            Choose your solution.
                        </p>

                        <div className="flex items-center justify-center bg-stone-800 rounded-full p-1 backdrop-blur border border-stone-700">
                            <button
                                onClick={() => setView('wholesale')}
                                className={`px-6 py-2 text-sm flex items-center justify-center rounded-full transition-all ${view === 'wholesale' ? 'bg-amber-100 text-stone-900 font-bold' : 'text-white hover:text-amber-200'}`}
                            >
                                Wholesale
                            </button>
                            <button
                                onClick={() => setView('partnership')}
                                className={`px-6 py-2 text-sm flex items-center justify-center rounded-full transition-all ${view === 'partnership' ? 'bg-amber-100 text-stone-900 font-bold' : 'text-white hover:text-amber-200'}`}
                            >
                                Private Label
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ModelView;