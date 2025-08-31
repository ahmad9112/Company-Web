"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Import all 12 logos
import logo from "../assets/logo/logo.png";
import logo1 from "../assets/logo/logo1.png";
import logo2 from "../assets/logo/logo2.png";
import logo3 from "../assets/logo/logo3.png";
import logo4 from "../assets/logo/logo4.png";
import logo5 from "../assets/logo/logo5.png";
import logo6 from "../assets/logo/logo6.png";
import logo7 from "../assets/logo/logo7.png";
// import logo8 from "../assets/logo/logo8.png";
import logo9 from "../assets/logo/logo9.png";
import logo10 from "../assets/logo/logo10.png";
import logo11 from "../assets/logo/logo11.png";

export default function HeroSection() {
  const features = ["Payroll", "HR", "IT"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  // Split into Backed By (first 4) & Trusted By (rest)
  const backedBy = [logo, logo1, logo2, logo3];
  const trustedBy = [logo4, logo5, logo6, logo7, logo9, logo10, logo11];

  return (
    <section className="w-full overflow-hidden font-satoshi">
      {/* Sky Blue Section */}
      <div
        className="relative bg-[#B5DCFF] pb-20"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 10% 95%, 0 100%)",
        }}
      >
        {/* Hero Content */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 px-4 sm:px-8 md:px-12 pt-20 sm:pt-28 md:pt-32">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="bg-white px-2 inline-block"
              >
                {features[index]}
              </motion.span>
              <br />
              for global teams
            </h1>

            <p className="text-base sm:text-lg text-gray-700 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition text-center"
              >
                Get a free 30-min demo
              </a>
              <button className="px-6 py-3 bg-white text-black border rounded-full font-medium hover:bg-gray-100 transition">
                Speak to sales
              </button>
            </div>
          </motion.div>

          {/* Right Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-[700px] h-auto md:h-[420px] shadow-xl rounded-xl overflow-hidden">
              <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                controls
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Backed By & Trusted By Motion Section */}
        <div className="mt-16 md:mt-20 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12  pt-8">
            {/* Backed By */}
            <div className="text-center md:text-left overflow-hidden">
              <h3 className="text-lg sm:text-xl font-semibold mb-6">Backed By</h3>
              <motion.div
                className="flex gap-12"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ ease: "linear", duration: 20, repeat: Infinity }}
              >
                {[...backedBy, ...backedBy].map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt={`backed-logo-${i}`}
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition"
                  />
                ))}
              </motion.div>
            </div>

            {/* Trusted By */}
            <div className="text-center md:text-left md:border-l md:pl-8 overflow-hidden">
              <h3 className="text-lg sm:text-xl font-semibold mb-6">Trusted By</h3>
              <motion.div
                className="flex gap-12"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
              >
                {[...trustedBy, ...trustedBy].map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt={`trusted-logo-${i}`}
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition"
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* White Section Below */}
      <div className="bg-white py-12 sm:py-16 text-center relative z-10 px-4">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight font-satoshi">
          Your OrgGPT for instant
          <br className="hidden sm:block" />
          <span className="text-gray-900">answers and insights.</span>
        </h2>
      </div>
    </section>
  );
}
