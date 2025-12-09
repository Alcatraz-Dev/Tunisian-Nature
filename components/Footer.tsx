import React from 'react';
import { NAV_LIST } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="py-10 px-5 sm:px-10 bg-black border-t border-stone-800">
            <div className="screen-max-width mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                    <div className="text-gray-400 text-xs flex flex-col gap-2">
                        <p className="font-bold text-amber-50 text-lg mb-2">TUNISIAN NATURE</p>
                        <p>Premium Organic Product Catalogue.</p>
                        <p>Copyright © {new Date().getFullYear()}. All rights reserved.</p>
                    </div>

                    <div className="text-gray-400 text-xs flex flex-col gap-2">
                        <p className="text-white font-semibold">Contact Us</p>
                        <p>For inquiries, pricing, or partnerships.</p>
                        <p className="hover:text-amber-400 cursor-pointer">wildhoneyorganic@gmail.com</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {NAV_LIST.map(nav => (
                            <a key={nav.name} href={nav.link} className="text-gray-400 text-xs hover:text-amber-400 transition-colors">
                                {nav.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;