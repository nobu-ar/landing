import React from 'react';
import { motion } from 'framer-motion';

export const ClubSection = () => {
  return (
    <section 
      id="clubSection" 
      className="w-full min-h-screen bg-white relative overflow-hidden"
    >
      {/* SECTOR 1 - TOP: Nobu Clubes + Image */}
      <div className="relative h-screen">
        
        {/* Top Section with diagonal cut */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-white via-customGray/30 to-customGray/60"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 85%)'
          }}
        >
          {/* Title - Top Left */}
          <div className="absolute top-12 left-12 z-20">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl font-bold text-customNobuColor"
            >
              Nobu Clubes
            </motion.h1>
          </div>

          {/* Image Placeholder - Top Right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-12 right-12 w-80 h-40 z-20"
          >
            <div className="w-full h-full bg-gradient-to-br from-customNobuGreen/20 to-customNobuColor/20 rounded-2xl border-2 border-dashed border-customNobuColor/40 flex items-center justify-center shadow-lg">
              <div className="text-center text-customNobuColor/70">
                <svg className="w-10 h-10 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <p className="text-sm font-medium">Imagen de futbol<br/>padel, hockey</p>
              </div>
            </div>
          </motion.div>

          {/* Subtitle in diagonal area */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-16 left-12 max-w-md"
          >
            <h2 className="text-2xl font-semibold text-customNobuColor leading-tight">
              La nueva forma de gestion<br/>de clubes y canchas
            </h2>
          </motion.div>
        </motion.div>

        {/* SECTOR 2 - MIDDLE RIGHT: Somos tus aliados */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute top-1/3 right-12 w-80 z-30"
        >
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-customNobuColor/20">
            <p className="text-customNobuColor font-semibold text-center text-lg mb-8 leading-relaxed">
              Somos tus aliados para<br/>tener todo en orden y<br/>seguro
            </p>
            
            {/* Action Buttons */}
            <div className="space-y-4">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(32, 92, 250, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-customNobuGreen to-customNobuColor text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg"
              >
                Cancha
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(32, 92, 250, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-customNobuGreen to-customNobuColor text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg"
              >
                Mapa
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(32, 92, 250, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-customNobuGreen to-customNobuColor text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg"
              >
                Calenda
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Center Large Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-1/2 left-12 transform -translate-y-1/2 w-[450px] h-80 z-10"
        >
          <div className="w-full h-full bg-gradient-to-br from-customNobuGreen/15 to-customNobuColor/15 rounded-3xl border-2 border-dashed border-customNobuColor/40 flex items-center justify-center backdrop-blur-sm shadow-xl">
            <div className="text-center text-customNobuColor/70">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <p className="text-lg font-medium">Espacio para imagen principal</p>
            </div>
          </div>
        </motion.div>

        {/* SECTOR 3 - BOTTOM: Features section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-tr from-customGray/60 via-customGray/30 to-white"
          style={{
            clipPath: 'polygon(15% 0, 100% 15%, 100% 100%, 0 100%)'
          }}
        >
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-12">
            
            {/* Features Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-customNobuColor/20"
            >
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-customNobuGreen to-customNobuColor text-white px-8 py-3 rounded-full font-semibold text-lg mb-2 shadow-lg">
                  Nuestro sistema ofrece
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Features List */}
                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-4 h-4 bg-customNobuGreen rounded-full shadow-md"></div>
                    <p className="text-customNobuColor font-semibold text-lg">Cobros por QR</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-4 h-4 bg-customNobuGreen rounded-full shadow-md"></div>
                    <p className="text-customNobuColor font-semibold text-lg">Back office para gestion</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-4 h-4 bg-customNobuGreen rounded-full shadow-md"></div>
                    <p className="text-customNobuColor font-semibold text-lg">App para socios</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.9 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-4 h-4 bg-customNobuGreen rounded-full shadow-md"></div>
                    <p className="text-customNobuColor font-semibold text-lg">Control de caja</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 2.0 }}
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
                  transition={{ duration: 0.8, delay: 2.1 }}
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
          className="absolute top-1/4 right-1/4 w-12 h-12 bg-gradient-to-br from-customNobuGreen to-customNobuColor rounded-full opacity-20 shadow-lg"
        />
        
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -8, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/3 left-1/5 w-8 h-8 bg-gradient-to-br from-customNobuColor to-customNobuGreen rounded-full opacity-15 shadow-lg"
        />

        <motion.div 
          animate={{ 
            y: [0, -12, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-2/3 right-1/3 w-6 h-6 bg-gradient-to-br from-customNobuGreen to-customNobuColor rounded-full opacity-25 shadow-lg"
        />
      </div>
    </section>
  );
}; 