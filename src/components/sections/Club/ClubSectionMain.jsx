import React from 'react';
import { motion } from 'framer-motion';

export const ClubSectionMain = () => {
  return (
    <section 
      id="clubSectionMain" 
      className="w-full h-screen bg-white relative overflow-hidden"
    >
      {/* SECTOR 1 - TOP: Diagonal section with content */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-customGray/20 to-customGray/40"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0 80%)'
        }}
      >
        {/* Title - Top Left Corner */}
        <div className="absolute top-8 left-8 z-20">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold text-customNobuColor"
          >
            Nobu Clubes
          </motion.h1>
        </div>

        {/* Image Placeholder - Top Right Corner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-8 right-8 w-72 h-36 z-20"
        >
          <div className="w-full h-full bg-gradient-to-br from-customNobuGreen/20 to-customNobuColor/20 rounded-xl border-2 border-dashed border-customNobuColor/40 flex items-center justify-center shadow-lg">
            <div className="text-center text-customNobuColor/70">
              <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <p className="text-sm font-medium">Imagen de futbol<br/>padel, hockey</p>
            </div>
          </div>
        </motion.div>

        {/* Subtitle in middle diagonal area */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute top-1/2 left-8 transform -translate-y-1/2 max-w-md"
        >
          <h2 className="text-2xl font-semibold text-customNobuColor leading-tight">
            La nueva forma de gestion<br/>de clubes y canchas
          </h2>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-customNobuGreen to-customNobuColor rounded-full opacity-20 shadow-lg"
        />
        
        <motion.div 
          animate={{ 
            y: [0, 12, 0],
            rotate: [0, -5, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-gradient-to-br from-customNobuColor to-customNobuGreen rounded-full opacity-25 shadow-lg"
        />
      </motion.div>
    </section>
  );
};
