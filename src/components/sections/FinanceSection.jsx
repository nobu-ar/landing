import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Finance from "../../assets/images/finance.png";
import NewCreditFinance from "../../assets/images/newCreditFinance.png";
import CashRegistryFinance from "../../assets/images/cashRegistryFinance.png";
import ReportFinance from "../../assets/images/reportFinance.png";
import SlideAnimation from '../SlideAnimation';
import { CalendarModal } from '../CalendarModal';

export const FinanceSection = ({ setCurrentSection }) => {
  const [currentSection, setCurrentSectionState] = React.useState('overview');
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Definimos los colores personalizados para la animación en esta sección
  const slideColors = {
    backgroundColor: "#3146F3", // Azul para finanzas
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
      title: 'Módulo Finanzas',
      subtitle: 'Gestión Financiera',
      description: 'Controla y gestiona todas las transacciones financieras.',
      image: Finance,
      features: [
        'Gestionar créditos y préstamos',
        'Controlar cajas y movimientos diarios',
        'Generar reportes financieros detallados',
        'Interface intuitiva y fácil de usar'
      ]
    },
    {
      id: 'credit',
      title: 'Nuevos Créditos',
      subtitle: 'Gestión de Créditos',
      description: 'Administra todos los productos crediticios de manera sencilla.',
      image: NewCreditFinance,
      features: [
        'Configuración de líneas de crédito',
        'Gestión de solicitudes y aprobaciones',
        'Control de tasas de interés y plazos',
        'Seguimiento de pagos automático'
      ]
    },
    {
      id: 'cash',
      title: 'Registro de Caja',
      subtitle: 'Control de Efectivo',
      description: 'Mantén un control detallado de todos los movimientos de efectivo.',
      image: CashRegistryFinance,
      features: [
        'Apertura y cierre de cajas',
        'Registro de ingresos y egresos',
        'Conciliación diaria de efectivo',
        'Control de diferencias'
      ]
    },
    {
      id: 'report',
      title: 'Reportes Financieros',
      subtitle: 'Análisis y Reportes',
      description: 'Genera informes detallados sobre todos los aspectos financieros.',
      image: ReportFinance,
      features: [
        'Balance general y estado de resultados',
        'Análisis de flujo de efectivo',
        'Estadísticas de créditos y cobranzas',
        'Exportación a diferentes formatos'
      ]
    }
  ];

  const currentSectionData = sections.find(section => section.id === currentSection) || sections[0];

  return (
    <section 
      id="financeSection" 
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
        title="Módulo de Finanzas"
        description="Controla y gestiona todas las transacciones, operaciones y movimientos financieros de tu empresa en un solo lugar."
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
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
                    {currentSection !== 'report' && (
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

                  {/* Demo and Contact Buttons */}
                  <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-gray-200">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="px-6 py-3 bg-gradient-to-r from-customNobuGreen to-customNobuColor text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium text-sm flex items-center space-x-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span>Agendar demo</span>
                    </button>
                    <button
                      onClick={() => window.location.href = '/contact'}
                      className="px-6 py-3 bg-white border-2 border-customNobuColor text-customNobuColor rounded-xl hover:bg-customNobuColor hover:text-white transition-all duration-300 font-medium text-sm flex items-center space-x-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <span>Contáctanos</span>
                    </button>
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
      
      {/* Calendar Modal */}
      <CalendarModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}; 