import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Mutual from "../../assets/images/mutual.png";
import AffiliateDetail from "../../assets/images/affiliateDetail.png";
import RegistryMutual from "../../assets/images/registryMutual.png";
import SlideAnimation from '../SlideAnimation';

export const MutualSection = ({ setCurrentSection }) => {
  const [currentSection, setCurrentSectionState] = React.useState('overview');
  const [animationCompleted, setAnimationCompleted] = useState(false);
  
  // Definimos los colores personalizados para la animación en esta sección
  const slideColors = {
    backgroundColor: "#FF9800", // Naranjo para mutuales
    textColor: "#FFFFFF", // Texto blanco para contraste con fondo
    buttonBackgroundColor: "#FFFFFF", // Botón blanco
    buttonIconColor: "#4A55A2" // Ícono azul
  };

  // Callback para cuando la animación termina
  const handleAnimationComplete = () => {
    setAnimationCompleted(true);
  };

  // Configuración de las secciones
  const sections = [
    {
      id: 'overview',
      title: 'Módulo Mutuales',
      subtitle: 'Gestión de Mutuales',
      description: 'Gestiona todos los beneficios y coberturas de salud para tus afiliados.',
      image: Mutual,
      features: [
        'Gestionar planes de cobertura médica',
        'Administrar afiliaciones de empleados',
        'Controlar prestaciones y reintegros',
        'Interface intuitiva y fácil de usar'
      ]
    },
    {
      id: 'registry',
      title: 'Registro Afiliaciones',
      subtitle: 'Gestión de Afiliados',
      description: 'Gestiona las afiliaciones de tus empleados de manera sencilla.',
      image: RegistryMutual,
      features: [
        'Registro de nuevos afiliados',
        'Actualización de datos de los beneficiarios',
        'Gestión documental médica',
        'Control de estados de afiliación'
      ]
    },
    {
      id: 'affiliate',
      title: 'Detalles Afiliado',
      subtitle: 'Información Detallada',
      description: 'Visualiza toda la información de los afiliados y sus beneficios.',
      image: AffiliateDetail,
      features: [
        'Historial médico completo',
        'Reintegros y prestaciones',
        'Coberturas disponibles',
        'Estado de cuenta detallado'
      ]
    }
  ];

  const currentSectionData = sections.find(section => section.id === currentSection) || sections[0];

  return (
    <section 
      id="mutualSection" 
      className="w-full h-full bg-customGray relative"
      style={{ 
        overflowY: 'hidden',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      <SlideAnimation 
        backgroundColor={slideColors.backgroundColor}
        textColor={slideColors.textColor}
        buttonBackgroundColor={slideColors.buttonBackgroundColor}
        buttonIconColor={slideColors.buttonIconColor}
        position="right" 
        title="Módulo de Mutuales"
        description="Gestiona todos los beneficios, coberturas de salud, pagos y deudas para tus afiliados con nuestro sistema integrado de mutuales."
        actionText="Haz click para conocer más →"
        onAnimationComplete={handleAnimationComplete}
      >
        {/* Navigation Tabs */}
        <div className="bg-white shadow-lg absolute top-0 left-0 right-0 z-20">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto py-4 space-x-2">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  onClick={() => setCurrentSectionState(section.id)}
                  className={`flex-shrink-0 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    currentSection === section.id
                      ? 'bg-gradient-to-r from-customNobuGreen to-customNobuColor text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.title.replace('Módulo ', '')}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section - Full Screen */}
        <div className="h-full bg-customGray flex items-center pt-20" style={{ maxHeight: 'calc(100vh - 5rem)' }}>
          <div className="w-full h-full px-8">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex h-full max-h-full"
            >
              {/* Content Panel - 1/4 */}
              <div className="w-1/4 flex flex-col justify-center pr-8">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-customNobuColor to-customNobuGreen rounded-2xl flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-customNobuColor mb-3">
                      {currentSectionData.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {currentSectionData.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    <h3 className="text-lg font-semibold text-customNobuColor mb-3">
                      Características principales:
                    </h3>
                    {currentSectionData.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-5 h-5 bg-customNobuGreen rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {currentSection !== 'overview' && (
                      <button
                        onClick={() => {
                          const currentIndex = sections.findIndex(s => s.id === currentSection);
                          if (currentIndex > 0) {
                            setCurrentSectionState(sections[currentIndex - 1].id);
                          }
                        }}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300 font-medium text-sm"
                      >
                        ← Anterior
                      </button>
                    )}
                    {currentSection !== 'affiliate' && (
                      <button
                        onClick={() => {
                          const currentIndex = sections.findIndex(s => s.id === currentSection);
                          if (currentIndex < sections.length - 1) {
                            setCurrentSectionState(sections[currentIndex + 1].id);
                          }
                        }}
                        className="px-4 py-2 bg-gradient-to-r from-customNobuGreen to-customNobuColor text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium text-sm"
                      >
                        Siguiente →
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Image Panel - 3/4 */}
              <div className="w-3/4 flex items-center justify-center">
                <motion.div
                  key={currentSectionData.image}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <img 
                    src={currentSectionData.image} 
                    alt={currentSectionData.title} 
                    className="w-full h-auto max-h-full object-contain"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </SlideAnimation>
    </section>
  );
}; 