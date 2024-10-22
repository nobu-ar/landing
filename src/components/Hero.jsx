import React from "react";
import { motion } from "framer-motion";
import LogoPrincipal from "/LogoPrincipal.svg";
import CelularNobu2 from "../assets/images/CelularNobu2.png";

export const Hero = () => {
  return (
    <section
      className="lg:mb-16 w-full flex flex-wrap bg-customGray" 
      id="home"
    >
      <div className="relative w-full flex lg:flex-row flex-col justify-between items-center pt-16 pb-32 px-4 lg:px-16 mt-10">
        {/* Lado izquierdo: Texto e icono */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center mt-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-customNobuColor text-sm xl:text-lg 2xl:text-xl sm:text-base mb-4">
              Descubre la nueva plataforma que viene a simplificar tus trámites.
            </div>
          </motion.div>
                
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <div className="text-3xl 2xl:text-6xl lg:text-5xl xl:text-5xl font-bold tracking-wide mb-6 text-customPrimary">
              Te presentamos
            </div>
          </motion.div>
            
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1}}
            className="flex justify-center w-full my-6"
          >
            <img src={LogoPrincipal} alt="LogoPrincipal" className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40"/>
          </motion.div>
          
          <div className="text-customNobuColor font-bold text-2xl sm:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl mt-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.0 }}
            >
              Me
            </motion.span>

            <motion.span className="text-customNobuGreen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.0 }}
            >
              no
            </motion.span>
                
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.0 }}
            >
              s
            </motion.span>

            <span>&nbsp;</span>

            <motion.span className="text-customNobuGreen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.0 }}
            >
              bu
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.0 }}
            >
              rocracia 
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 4 }}
            >
              ... menos vueltas.
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
            alt="Inicio Nobu" 
            className="w-4/5 md:w-3/4 lg:w-full xl:w-4/5 2xl:w-3/4 object-contain filter-bottom-shadow mt-12"
          />
        </motion.div>
      </div>

      <div className="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <defs>
            <linearGradient id="gradiente" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "rgb(32, 92, 250)", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "rgb(32, 92, 250)", stopOpacity: 0.5 }} />
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
