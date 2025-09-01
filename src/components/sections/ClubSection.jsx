import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Club from "../../assets/images/club.png";
import RegistryClub from "../../assets/images/registryClub.png";
import ProveedoresClub from "../../assets/images/proveedoresClub.png";
import PlanesClub from "../../assets/images/planesClub.png";
import EventosClub from "../../assets/images/eventosClub.png";
import ActivityClub from "../../assets/images/activityClub.png";
import SlideAnimation from '../SlideAnimation';

export const ClubSection = () => {
  const [currentSection, setCurrentSection] = React.useState('overview');
  const [animationCompleted, setAnimationCompleted] = useState(false);
  
  // Definimos los colores personalizados para la animación en esta sección
  const slideColors = {
    backgroundColor: "#16005B", // Azul Nobu (customNobuColor)
    textColor: "#FFFFFF", // Texto blanco para contraste con fondo azul
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
      title: 'Módulo Clubes',
      subtitle: 'Visión General',
      description: 'Administra de forma eficiente en nuestro sistema.',
      image: Club,
      features: [
        'Gestionar múltiples clubes desde un único panel',
        'Controlar membresías y accesos',
        'Centralizar toda la información importante',
        'Interface intuitiva y fácil de usar'
      ]
    },
    {
      id: 'registry',
      title: 'Registro',
      subtitle: 'Gestión de Datos',
      description: 'El proceso de registro es sencillo y eficiente.',
      image: RegistryClub,
      features: [
        'Registra todos los datos esenciales del personal',
        'Configura permisos y niveles de acceso',
        'Personaliza la información visible para los miembros',
        'Validación automática de datos'
      ]
    },
    {
      id: 'providers',
      title: 'Proveedores',
      subtitle: 'Gestión de Proveedores',
      description: 'Gestiona todos los proveedores.',
      image: ProveedoresClub,
      features: [
        'Mantén un registro organizado',
        'Accede rápidamente a la información de contacto',
        'Controla facturación y pagos',
        'Historial completo de transacciones'
      ]
    },
    {
      id: 'plans',
      title: 'Planes y Membresías',
      subtitle: 'Configuración de Planes',
      description: 'Configura diferentes niveles de membresía.',
      image: PlanesClub,
      features: [
        'Crea planes personalizados con beneficios exclusivos',
        'Establece precios y períodos de renovación',
        'Monitorea la popularidad de cada plan',
        'Gestión automática de renovaciones'
      ]
    },
    {
      id: 'events',
      title: 'Eventos',
      subtitle: 'Organización de Eventos',
      description: 'Organiza y promociona eventos.',
      image: EventosClub,
      features: [
        'Programa eventos y actividades especiales',
        'Gestiona inscripciones y asistencia',
        'Envía notificaciones automáticas a los miembros',
        'Control de aforo y capacidad'
      ]
    },
    {
      id: 'activity',
      title: 'Actividades',
      subtitle: 'Análisis y Estadísticas',
      description: 'Supervisa toda la actividad y estadísticas.',
      image: ActivityClub,
      features: [
        'Visualiza métricas de participación en tiempo real',
        'Analiza tendencias de asistencia y uso',
        'Identifica oportunidades de crecimiento',
        'Reportes detallados y exportables'
      ]
    }
  ];

  const currentSectionData = sections.find(section => section.id === currentSection) || sections[0];

  return (
    <section 
      id="clubSection" 
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
        title="Módulo Clubes"
        description="Administra registros y membresías de forma eficiente. Gestiona tus proveedores, planes, eventos y actividad del club."
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
                  onClick={() => setCurrentSection(section.id)}
                  className={`flex-shrink-0 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    currentSection === section.id
                      ? 'bg-gradient-to-r from-customNobuGreen to-customNobuColor text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.title.replace('Módulo de ', '')}
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
              {/* Content Panel - 1/3 */}
              <div className="w-1/4 flex flex-col justify-center pr-8">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-customNobuColor to-customNobuGreen rounded-2xl flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
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
                            setCurrentSection(sections[currentIndex - 1].id);
                          }
                        }}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300 font-medium text-sm"
                      >
                        ← Anterior
                      </button>
                    )}
                    {currentSection !== 'activity' && (
                      <button
                        onClick={() => {
                          const currentIndex = sections.findIndex(s => s.id === currentSection);
                          if (currentIndex < sections.length - 1) {
                            setCurrentSection(sections[currentIndex + 1].id);
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

              {/* Image Panel - 2/3 */}
              <div className="w-2/3 flex items-center justify-center">
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