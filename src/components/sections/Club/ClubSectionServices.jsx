import React from 'react';
import { motion } from 'framer-motion';

export const ClubSectionServices = () => {
  return (
    <section 
      id="clubSectionServices" 
      className="w-full h-screen bg-white relative overflow-hidden"
    >
      {/* SECTOR 3 - BOTTOM: Features section with diagonal cut */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-customGray/40 via-customGray/20 to-white"
        style={{
          clipPath: 'polygon(30% 0, 100% 20%, 100% 100%, 0 100%)'
        }}
      >
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-12">
          
          {/* Features Section - Positioned at bottom */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-customNobuColor/20"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="inline-block bg-gradient-to-r from-customNobuGreen to-customNobuColor text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg"
              >
                Nuestro sistema ofrece
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Features List */}
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-4 h-4 bg-customNobuGreen rounded-full shadow-md"></div>
                  <p className="text-customNobuColor font-semibold text-lg">Cobros por QR</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-4 h-4 bg-customNobuGreen rounded-full shadow-md"></div>
                  <p className="text-customNobuColor font-semibold text-lg">Back office para gestion</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-4 h-4 bg-customNobuGreen rounded-full shadow-md"></div>
                  <p className="text-customNobuColor font-semibold text-lg">App para socios</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-4 h-4 bg-customNobuGreen rounded-full shadow-md"></div>
                  <p className="text-customNobuColor font-semibold text-lg">Control de caja</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-4 h-4 bg-customNobuColor rounded-full shadow-md"></div>
                  <p className="text-customNobuColor font-semibold text-lg">Calendario de eventos</p>
                </motion.div>
              </div>

              {/* Right Column - Image Placeholder */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="flex items-center justify-center"
              >
                <div className="w-full h-48 bg-gradient-to-br from-customNobuGreen/20 to-customNobuColor/20 rounded-2xl border-2 border-dashed border-customNobuColor/40 flex items-center justify-center shadow-lg">
                  <div className="text-center text-customNobuColor/70">
                    <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                    <p className="text-sm font-medium">Espacio para gráfico<br/>o imagen del sistema</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Floating decorative elements */}
        <motion.div 
          animate={{ 
            y: [0, -18, 0],
            rotate: [0, 12, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/5 w-14 h-14 bg-gradient-to-br from-customNobuGreen to-customNobuColor rounded-full opacity-20 shadow-lg"
        />
        
        <motion.div 
          animate={{ 
            y: [0, 22, 0],
            rotate: [0, -15, 0],
            scale: [1, 1.4, 1]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute bottom-1/4 left-1/5 w-10 h-10 bg-gradient-to-br from-customNobuColor to-customNobuGreen rounded-full opacity-15 shadow-lg"
        />

        <motion.div 
          animate={{ 
            y: [0, -14, 0],
            rotate: [0, 8, 0],
            scale: [1, 1.25, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-1/2 left-1/3 w-8 h-8 bg-gradient-to-br from-customNobuGreen to-customNobuColor rounded-full opacity-25 shadow-lg"
        />
      </motion.div>
    </section>
  );
};
