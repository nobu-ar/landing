import React from 'react';
import { motion } from 'framer-motion';

export const ClubSectionMiddle = () => {
  return (
    <section 
      id="clubSectionMiddle" 
      className="w-full h-screen bg-transparent relative"
    >
      {/* SECTOR 2 - MIDDLE: Positioned elements according to image */}
      <div className="relative h-full w-full">
        
        {/* Right Panel - "Somos tus aliados" - Positioned in middle-right */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-1/3 right-12 w-80 z-30"
        >
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-customNobuColor/20">
            <p className="text-customNobuColor font-semibold text-center text-lg mb-8 leading-relaxed">
              Somos tus aliados para<br/>tener todo en orden y<br/>seguro
            </p>
            
            {/* Action Buttons */}
            <div className="space-y-3">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(32, 92, 250, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-customNobuGreen to-customNobuColor text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Cancha
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(32, 92, 250, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-customNobuGreen to-customNobuColor text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Mapa
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(32, 92, 250, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-customNobuGreen to-customNobuColor text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Calenda
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Center-Left Large Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-1/2 left-12 transform -translate-y-1/2 w-[420px] h-72 z-20"
        >
          <div className="w-full h-full bg-gradient-to-br from-customNobuGreen/15 to-customNobuColor/15 rounded-2xl border-2 border-dashed border-customNobuColor/40 flex items-center justify-center backdrop-blur-sm shadow-xl">
            <div className="text-center text-customNobuColor/70">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <p className="text-lg font-medium">Espacio para imagen principal</p>
            </div>
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/4 left-1/3 w-10 h-10 bg-gradient-to-br from-customNobuGreen to-customNobuColor rounded-full opacity-20 shadow-lg"
        />
        
        <motion.div 
          animate={{ 
            y: [0, 25, 0],
            rotate: [0, -10, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-gradient-to-br from-customNobuColor to-customNobuGreen rounded-full opacity-15 shadow-lg"
        />
      </div>
    </section>
  );
};
