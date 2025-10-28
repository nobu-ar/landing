import React from 'react';
import { motion } from 'framer-motion';
import Personal from "../../assets/images/personal.png";
import RegistryPersonal from "../../assets/images/registryPersonal.png";
import EmployeeDetail from "../../assets/images/employeeDetail.png";
import PersonalAttendance from "../../assets/images/personalAttendance.png";
import EmployeeLicense from "../../assets/images/employeeLicense.png";
import SlideAnimation from '../SlideAnimation';
import { CalendarModal } from '../CalendarModal';

export const PersonalSection = () => {
  const [currentSection, setCurrentSection] = React.useState('overview');
  const [animationCompleted, setAnimationCompleted] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
  // Definimos los colores personalizados para la animación en esta sección
  const slideColors = {
    backgroundColor: "rgb(76, 175, 80)", // Verde Nobu (customNobuGreen)
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
      title: 'Módulo Personal',
      subtitle: 'Gestión de Personal',
      description: 'Gestiona toda la información de tus empleados en un solo lugar.',
      image: Personal,
      features: [
        'Crear perfiles detallados para cada empleado',
        'Asignar permisos y roles específicos',
        'Mantener actualizada toda la documentación necesaria',
        'Interface intuitiva y fácil de usar'
      ]
    },
    {
      id: 'registry',
      title: 'Registro Personal',
      subtitle: 'Registro de Empleados',
      description: 'El proceso de registro de personal es sencillo y eficiente.',
      image: RegistryPersonal,
      features: [
        'Accede a la sección "Nuevo Empleado" en el panel principal',
        'Completa los datos personales y de contacto requeridos',
        'Adjunta la documentación necesaria (DNI, CV, etc.)',
        'Validación automática de datos'
      ]
    },
    {
      id: 'detail',
      title: 'Detalles Empleado',
      subtitle: 'Información Personal',
      description: 'Visualiza toda la información relevante de tus empleados.',
      image: EmployeeDetail,
      features: [
        'Datos personales y contacto',
        'Historial laboral completo',
        'Capacitaciones y certificaciones',
        'Documentación digitalizada'
      ]
    },
    {
      id: 'attendance',
      title: 'Control Asistencia',
      subtitle: 'Seguimiento de Horarios',
      description: 'Gestiona eficientemente la asistencia de todo tu personal.',
      image: PersonalAttendance,
      features: [
        'Registro de entradas y salidas',
        'Justificación de ausencias',
        'Reportes de puntualidad',
        'Control de horas trabajadas'
      ]
    },
    {
      id: 'license',
      title: 'Licencias',
      subtitle: 'Gestión de Permisos',
      description: 'Administra todas las licencias y permisos de tu personal.',
      image: EmployeeLicense,
      features: [
        'Solicitud y aprobación de vacaciones',
        'Licencias médicas y especiales',
        'Historial de ausencias justificadas',
        'Calendario de disponibilidad'
      ]
    }
  ];

  const currentSectionData = sections.find(section => section.id === currentSection) || sections[0];

  return (
    <section 
      id="personalSection" 
      className="w-full bg-customGray relative mt-16 sm:mt-20"
    >
      <SlideAnimation 
        backgroundColor={slideColors.backgroundColor}
        textColor={slideColors.textColor}
        buttonBackgroundColor={slideColors.buttonBackgroundColor}
        buttonIconColor={slideColors.buttonIconColor}
        position="right"
        title="Módulo de Personal"
        description="Gestiona toda la información de tus empleados en un solo lugar. Mantén un registro completo de datos personales, información de contacto, roles y responsabilidades."
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
                  {section.title.replace('Módulo ', '')}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section - Full Screen */}
        <div className="bg-customGray flex items-start pt-28 pb-8">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row h-full max-h-full gap-8"
            >
              {/* Content Panel - 1/4 */}
              <div className="w-full lg:w-1/3 flex flex-col justify-center lg:pr-8 order-1 lg:order-none">
                <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
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
                    {currentSection !== 'license' && (
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
              <div className="w-full lg:w-2/3 flex items-center justify-center order-2 lg:order-none">
                <motion.div
                  key={currentSectionData.image}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-auto flex items-center justify-center"
                >
                  <img 
                    src={currentSectionData.image} 
                    alt={currentSectionData.title} 
                    className="w-full max-w-full h-auto object-contain"
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