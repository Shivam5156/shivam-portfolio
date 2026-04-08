import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-3 sm:py-4 px-4 sm:px-8 shadow-lg">

      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="items-center gap-2">
          <a href="#" className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
            Shivam <span className="text-purple">Singh</span>
          </a>

          <div className="w-2.5 h-2.5 bg-purple rounded-full"></div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">

          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-white/80 transition duration-300 hover:text-purple group"
            >
              <span>{link}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <a
            href="/Shivam_MERNStack_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-purple rounded-lg text-white hover:bg-purple/20 transition duration-300"
          >
            Resume
          </a>

        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              className="text-2xl cursor-pointer"
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={() => setShowMenu(true)}
            />
          )}
        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 mx-4 bg-dark-300 rounded-xl p-6 flex flex-col space-y-5 text-center"
          >

            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setShowMenu(false)}
                className="text-white/80 text-lg hover:text-purple transition duration-300"
              >
                {link}
              </a>
            ))}

            <a
              href="/Shivam_MERNStack_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowMenu(false)}
              className="px-4 py-2 border border-purple rounded-lg text-white hover:bg-purple/20 transition duration-300"
            >
              Resume
            </a>

          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}

export default Navbar;