import React, { useState } from 'react'
import { NAV_LIST } from '../constants'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <header className="w-full py-4 lg:py-6 px-5 sm:px-10 bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/5 shadow-sm">
      <nav className="flex justify-between items-center max-w-[1280px] mx-auto w-full">
        {/* Logo */}
        <div className="flex items-center cursor-pointer text-white hover:text-amber-500 transition-colors">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-3 lg:mr-4"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
          <span className="font-bold text-lg lg:text-xl tracking-wide hidden sm:block uppercase">
            Tunisian Nature
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex flex-1 justify-center gap-10 lg:gap-14">
          {NAV_LIST.map((nav) => (
            <a
              key={nav.name}
              href={nav.link}
              className="text-sm lg:text-base text-gray-300 hover:text-white hover:scale-105 transition-transform transition-colors duration-300"
            >
              {nav.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none z-50 relative"
            aria-label="Toggle menu"
          >
            <AnimatePresence>
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiX size={26} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiMenu size={26} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="sm:hidden mt-3 flex flex-col items-center gap-3 bg-black/90 py-4 rounded-lg border border-white/10 overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            {NAV_LIST.map((nav) => (
              <a
                key={nav.name}
                href={nav.link}
                className="text-white text-sm hover:text-amber-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {nav.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar