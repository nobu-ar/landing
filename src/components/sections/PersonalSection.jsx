import { motion } from 'framer-motion';
import { useState } from 'react';
import Personal from "../../assets/images/personal.png";
import RegistryPersonal from "../../assets/images/registryPersonal.png";
import EmployeeDetail from "../../assets/images/employeeDetail.png";
import PersonalAttendance from "../../assets/images/personalAttendance.png";
import EmployeeLicense from "../../assets/images/employeeLicense.png";
import SlideAnimation from '../SlideAnimation';

export const PersonalSection = () => {
  const [showRegistryInfo, setShowRegistryInfo] = useState(false);
  const [showDetailInfo, setShowDetailInfo] = useState(false);
  const [currentDetailView, setCurrentDetailView] = useState('detail');
  const [animationCompleted, setAnimationCompleted] = useState(false);
  
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

  // Función para cambiar entre vistas
  const handleViewChange = (view) => {
    if (view === 'general') {
      setShowRegistryInfo(false);
      setShowDetailInfo(false);
    } else if (view === 'registry') {
      setShowRegistryInfo(true);
      setShowDetailInfo(false);
    } else if (view === 'detail') {
      setShowRegistryInfo(true);
      setShowDetailInfo(true);
      setCurrentDetailView('detail');
    } else if (view === 'attendance') {
      setShowRegistryInfo(true);
      setShowDetailInfo(true);
      setCurrentDetailView('attendance');
    } else if (view === 'license') {
      setShowRegistryInfo(true);
      setShowDetailInfo(true);
      setCurrentDetailView('license');
    }
  };

  return (
    <section id="personalSection" className="w-full h-screen bg-customGray relative overflow-hidden">
      

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-36">
              
            <div className="w-full lg:w-1/5">
              {!showRegistryInfo ? (
                <motion.div
                  key="initialContent"
                  initial={{ x: 0 }}
                  animate={{ x: 0 }}
                  exit={{ opacity: 0, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-customNobuColor">
                    Gestión Personal
                  </h1>
                  
                  <h2 className="text-lg mb-6 text-customNobuColor leading-relaxed">
                    Nuestro módulo de Personal te permite administrar de manera eficiente toda la información de tus empleados. Mantén un registro completo de datos personales, roles y responsabilidades.
                  </h2>
                  
                  <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                    Con nuestra interfaz intuitiva, podrás:
                  </p>
                  
                  <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                    <li className="mb-2">Crear perfiles detallados para cada empleado</li>
                    <li className="mb-2">Asignar permisos y roles específicos</li>
                    <li className="mb-2">Mantener actualizada toda la documentación necesaria</li>
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  key="registryContent"
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0 }}
                >
                  {!showDetailInfo ? (
                    <>
                      <h3 className="text-3xl lg:text-5xl font-bold mb-6 text-customNobuColor">
                        Registro
                      </h3>
                      
                      <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                        El proceso de registro de personal es sencillo y eficiente con nuestro sistema.
                      </p>
                      
                      <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                        <li className="mb-2">Accede a la sección "Nuevo Empleado" en el panel principal</li>
                        <li className="mb-2">Completa los datos personales y de contacto requeridos</li>
                        <li className="mb-2">Adjunta la documentación necesaria (DNI, CV, etc.)</li>
                      </ul>
                      
                      <div className="flex flex-wrap gap-3">
                        <button 
                          className="bg-customNobuColor rounded py-2 px-5 text-white transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex justify-center items-center"
                          onClick={() => handleViewChange('detail')}
                        >
                          Ver Detalles
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      {currentDetailView === 'detail' && (
                        <>
                          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-customNobuColor">
                            Detalles del Empleado
                          </h2>
                          
                          <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                            Visualiza toda la información relevante de tus empleados en un solo lugar.
                          </p>
                          
                          <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                            <li className="mb-2">Datos personales y contacto</li>
                            <li className="mb-2">Historial laboral completo</li>
                            <li className="mb-2">Capacitaciones y certificaciones</li>
                          </ul>
                        </>
                      )}
                      
                      {currentDetailView === 'attendance' && (
                        <>
                          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-customNobuColor">
                            Control de Asistencia
                          </h2>
                          
                          <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                            Gestiona eficientemente la asistencia de todo tu personal.
                          </p>
                          
                          <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                            <li className="mb-2">Registro de entradas y salidas</li>
                            <li className="mb-2">Justificación de ausencias</li>
                            <li className="mb-2">Reportes de puntualidad</li>
                          </ul>
                        </>
                      )}
                      
                      {currentDetailView === 'license' && (
                        <>
                          <h3 className="text-3xl lg:text-5xl font-bold mb-6 text-customNobuColor">
                            Licencias
                          </h3>
                          
                          <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                            Administra todas las licencias y permisos de tu personal de forma organizada.
                          </p>
                          
                          <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                            <li className="mb-2">Solicitud y aprobación de vacaciones</li>
                            <li className="mb-2">Licencias médicas y especiales</li>
                            <li className="mb-2">Historial de ausencias justificadas</li>
                          </ul>
                        </>
                      )}
                      
                      <div className="flex flex-wrap gap-3">
                        {currentDetailView === 'license' && (
                          <button 
                            className="custom-button-colored rounded py-2 px-5 text-white transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex justify-center items-center"
                            onClick={() => handleViewChange('general')}
                          >
                            Volver al Inicio
                          </button>
                        )}
                        {currentDetailView === 'detail' && (
                          <button 
                            className="bg-customNobuColor rounded py-2 px-5 text-white transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex justify-center items-center"
                            onClick={() => handleViewChange('attendance')}
                          >
                            Ver Asistencia
                          </button>
                        )}
                        {currentDetailView === 'attendance' && (
                          <button 
                            className="bg-customNobuColor rounded py-2 px-5 text-white transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex justify-center items-center"
                            onClick={() => handleViewChange('license')}
                          >
                            Ver Licencias
                          </button>
                        )}
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </div>
            
            <div className="w-full lg:w-6/5 hove">
              {!showRegistryInfo ? (
                <motion.div
                  key="personal"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0 }}
                  className="border-hidden drop-shadow-2xl overflow-hidden rounded-lg w-full"
                >
                  <div className="overflow-hidden rounded-lg w-full">
                    <img 
                      src={Personal} 
                      alt="Gestión de Personal" 
                      className="w-full object-contain transform transition-transform duration-500"
                      style={{ maxHeight: '85vh', minWidth: '100%' }}
                    />
                  </div>
                  <button 
                    className="mt-6 bg-customNobuColor text-white py-3 px-4 rounded transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex justify-center items-center"
                    onClick={() => setShowRegistryInfo(true)}
                  >
                    Ver proceso de registro
                  </button>
                </motion.div>
              ) : !showDetailInfo ? (
                <motion.div
                  key="registryImage"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0 }}
                  className="border-hidden drop-shadow-2xl overflow-hidden rounded-lg w-full"
                >
                  <div className="overflow-hidden rounded-lg w-full">
                  <img 
                    src={RegistryPersonal} 
                    alt="Registro de Personal" 
                    className="w-full object-contain transform transition-transform duration-500"
                    style={{ maxHeight: '85vh', minWidth: '100%' }}
                  />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="detailImage"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0 }}
                  className="border-hidden drop-shadow-2xl overflow-hidden rounded-lg w-full"
                >
                  <div className="overflow-hidden rounded-lg w-full">
                  <img 
                    src={
                      currentDetailView === 'detail' 
                        ? EmployeeDetail 
                        : currentDetailView === 'attendance'
                          ? PersonalAttendance
                          : EmployeeLicense
                    } 
                    alt={
                      currentDetailView === 'detail'
                        ? "Detalles del Empleado"
                        : currentDetailView === 'attendance'
                          ? "Control de Asistencia"
                          : "Licencias y Permisos"
                    } 
                    className="w-full object-contain transform transition-transform duration-500"
                    style={{ maxHeight: '85vh', minWidth: '100%' }}
                  />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </SlideAnimation>
    </section>
  );
}; 