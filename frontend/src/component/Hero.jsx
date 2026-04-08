import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-r from-[#1a1a1a] via-dark-300 to-dark-100"
    >
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

        {/* Left side */}
        <div className="w-full md:w-1/2 text-center md:text-left">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-purple">Shivam Singh</span>
          </h1>

          <h2 className="typewriter text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            Full Stack Developer
          </h2>

          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-md sm:max-w-lg mx-auto md:mx-0">
            Passionate MERN Stack Developer focused on creating high-performance,
            user-friendly, and visually appealing websites.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 w-full max-w-[400px] mx-auto md:mx-0">

            <a
              href="#projects"
              className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 text-center"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="w-full px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300 text-center"
            >
              Contact me
            </a>

          </div>
        </div>

        {/* Right side image */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">

          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-70"></div>

            <motion.img
              src="/shiva.jpeg"
              alt="Profile"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "circInOut",
              }}
              className="relative rounded-full w-full h-full object-cover z-10"
            />

          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default Hero;