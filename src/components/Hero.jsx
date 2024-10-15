import React, { useState } from "react";
import { motion } from "framer-motion";
import LogoPrincipal from "/LogoPrincipal.svg";

export const Hero = () => {
  return (
    <section
      className="lg:mb-16 w-full flex flex-wrap flex-col justify-center items-center bg-customGray" 
      id="home"
    >
      <div className="relative w-full flex flex-col  justify-center items-center pt-16 text-center py-32 lg:text-center">
        <div className="w-full flex flex-col justify-center items-center lg:items-center px-4 lg:px-0 lg:pr-16 title-place">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
              
                <div className="text-customNobuColor text-sm xl:text-lg 2xl:text-xl sm:text-base mt-32 px-12 sm:px-48 lg:px-0 2xl:px-64">
                    Descubre la nueva plataforma que viene a simplificar tus trámites.
                </div>
            </motion.div>
                  
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
          >
              <div className="flex text-3xl 2xl:text-6xl lg:text-5xl xl:text-5xl font-bold tracking-wide mt-3 text-customPrimary md:px-20 lg:px-0">
                <span className="inline md:hidden">Te presentamos </span>
                <span className="hidden md:inline">Te presentamos </span>
              </div>
            </motion.div>
              
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1}}
            >
              <div className="p-0 text-5xl sm:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold tracking-wide text- px-8 sm:px-8 md:px-20 lg:px-0">
                <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <div className="flex p-6 mt-2 sm:flex-row justify-center lg:justify-center">
                  <div>
                    <img src={LogoPrincipal} alt="LogoPrincipal" className="w-24 h-24 sm:w-24 sm:h-24 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32"/>
                  </div>
                </div>
                </motion.div>
             </div>


            </motion.div>
            
          <div className="text-customNobuColor font-bold p-0 text-2xl sm:text2xl lg:text-3xl xl:text-3xl 2xl:text-4xl">
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
        </div>

            <div className="custom-shape-divider-top-1665696661 w-full">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="custom-bg-dark2"
              >
                <path
                  d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                  className="custom-bg-dark1"
                ></path>
              </svg>
            </div>

      </section>
  );
};
