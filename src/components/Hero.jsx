import React, { useState } from "react";
import { motion } from "framer-motion";
import LogoPrincipal from "/LogoPrincipal.svg";
import CelularNobu2 from "../assets/images/celularNobu2.png";

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="lg:mb-16 w-full flex flex-wrap bg-customGray" 
      id="inicio"
    >
      <div className="relative w-full flex lg:flex-row flex-col justify-between items-center pt-16 pb-32 px-4 lg:px-16 mt-8">
      {/* Decorative shapes */}
    <div class="absolute top-0 left-0 w-64 h-64 bg-customNobuGreen opacity-50  -translate-x-32 -translate-y-32 rotate-45"></div>
        {/* Lado izquierdo: Texto e icono */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center mt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
          </motion.div>
                
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-wide mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                El futuro de tu <h2 className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">empresa:</h2>
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center w-full"
          >
          </motion.div>
          
          <div className="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mt-4">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
            >
              Me
            </motion.span>

            <motion.span 
              className="text-customNobuGreen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
            >
              no
            </motion.span>
                
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
            >
              s
            </motion.span>

            <span>&nbsp;</span>

            <motion.span 
              className="text-customNobuGreen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6, repeat: Infinity, repeatType: "reverse" }}
            >
              bu
            </motion.span>
            
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
            >
              rocracia 
            </motion.span>
          </div>
        </div>

        {/* Lado derecho: Imagen del celular */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full lg:w-1/2 mt-8 lg:mt-0 flex items-center justify-center"
        >
          <img 
            src={CelularNobu2} 
            alt="Aplicacion mobil nobu" 
            className="w-4/5 md:w-3/4 lg:w-full xl:w-4/5 2xl:w-3/4 object-contain filter-bottom-shadow mt-12"
          />
        </motion.div>

      </div>
      <div class="absolute bottom-0 w-96 h-96 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-50 translate-y-36 rotate-45 z-1"></div>


      <div className="custom-shape-divider-top-1665696661 w-full  z-[9999]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <defs>
            <linearGradient id="gradiente" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "rgb(32, 92, 250)", stopOpacity: 5 }} />
              <stop offset="100%" style={{ stopColor: "rgb(32, 92, 250)", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            fill="url(#gradiente)"
          ></path>
        </svg>
      </div>
    </section>
  );
};
