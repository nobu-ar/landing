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
  const [showRegistryInfo, setShowRegistryInfo] = useState(false);
  const [showProvidersInfo, setShowProvidersInfo] = useState(false);
  const [showPlansInfo, setShowPlansInfo] = useState(false);
  const [showEventsInfo, setShowEventsInfo] = useState(false);
  const [showActivityInfo, setShowActivityInfo] = useState(false);
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

  // Función para cambiar entre vistas
  const handleViewChange = (view) => {
    if (view === 'general') {
      setShowRegistryInfo(false);
      setShowProvidersInfo(false);
      setShowPlansInfo(false);
      setShowEventsInfo(false);
      setShowActivityInfo(false);
    } else if (view === 'registry') {
      setShowRegistryInfo(true);
      setShowProvidersInfo(false);
      setShowPlansInfo(false);
      setShowEventsInfo(false);
      setShowActivityInfo(false);
    } else if (view === 'providers') {
      setShowRegistryInfo(true);
      setShowProvidersInfo(true);
      setShowPlansInfo(false);
      setShowEventsInfo(false);
      setShowActivityInfo(false);
    } else if (view === 'plans') {
      setShowRegistryInfo(true);
      setShowProvidersInfo(true);
      setShowPlansInfo(true);
      setShowEventsInfo(false);
      setShowActivityInfo(false);
    } else if (view === 'events') {
      setShowRegistryInfo(true);
      setShowProvidersInfo(true);
      setShowPlansInfo(true);
      setShowEventsInfo(true);
      setShowActivityInfo(false);
    } else if (view === 'activity') {
      setShowRegistryInfo(true);
      setShowProvidersInfo(true);
      setShowPlansInfo(true);
      setShowEventsInfo(true);
      setShowActivityInfo(true);
    }
  };

  return (
    <section id="clubSection" className="w-full h-screen bg-customGray relative overflow-hidden">
      {/* Botón para volver a la página principal */}
      

      <SlideAnimation 
        backgroundColor={slideColors.backgroundColor}
        textColor={slideColors.textColor}
        buttonBackgroundColor={slideColors.buttonBackgroundColor}
        buttonIconColor={slideColors.buttonIconColor}
        position="right" // Esta sección aparecerá desde la derecha
        title="Módulo de Clubes"
        description="Administra tus clubes y membresías de forma eficiente. Gestiona tus proveedores, planes, eventos y actividad del club."
        actionText="Haz click para conocer más →"
        onAnimationComplete={handleAnimationComplete}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-16"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-36">
              
            <div className="w-full lg:w-1/5">
              {!showRegistryInfo ? (
                <motion.div
                  key="initialContent"
                  initial={{ x: 0 }}
                  animate={{ x: -50 }}
                  exit={{ opacity: 0, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-customNobuColor">
                    <strong>Clubes</strong>
                  </h1>
                  
                  <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                    <h2>Nuestro módulo de Clubes te permite administrar de manera eficiente todas las operaciones y membresías de tus clubes en un solo lugar.</h2>
                  </p>
                  
                  <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                    Con nuestro modulo de clubes podrás:
                  </p>
                  
                  <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                    <li className="mb-2">Gestionar múltiples clubes desde un único panel</li>
                    <li className="mb-2">Controlar membresías y accesos</li>
                    <li className="mb-2">Centralizar toda la información importante</li>
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  key="contentInfo"
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0 }}
                >
                  {!showProvidersInfo ? (
                    <>
                    
                      <h3 className="text-3xl lg:text-5xl font-bold mb-6 text-customNobuColor">
                        Registro de Clubes
                      </h3>
                      
                      <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                        El proceso de registro de clubes es sencillo y eficiente con nuestro sistema.
                      </p>
                      
                      <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                        <li className="mb-2">Registra todos los datos esenciales del club</li>
                        <li className="mb-2">Configura permisos y niveles de acceso</li>
                        <li className="mb-2">Personaliza la información visible para los miembros</li>
                      </ul>
                      
                      <div className="flex flex-wrap gap-3">
                        <button 
                          className="bg-customNobuColor rounded py-2 px-5 text-white transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex justify-center items-center"
                          onClick={() => handleViewChange('providers')}
                        >
                          Ver Proveedores
                        </button>
                      </div>
                    </>
                  ) : !showPlansInfo ? (
                    <>
                      <h3 className="text-3xl lg:text-5xl font-bold mb-6 text-customNobuColor">
                        Proveedores del Club
                      </h3>
                      
                      <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                        Gestiona todos los proveedores asociados a tu club de manera eficiente.
                      </p>
                      
                      <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                        <li className="mb-2">Mantén un registro organizado de proveedores</li>
                        <li className="mb-2">Accede rápidamente a la información de contacto</li>
                        <li className="mb-2">Controla facturación y pagos a proveedores</li>
                      </ul>
                      
                      <div className="flex flex-wrap gap-3">
                        <button 
                          className="bg-customNobuColor rounded py-2 px-5 text-white transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex justify-center items-center"
                          onClick={() => handleViewChange('plans')}
                        >
                          Ver Planes
                        </button>
                      </div>
                    </>
                  ) : !showEventsInfo ? (
                    <>
                      <h3 className="text-3xl lg:text-5xl font-bold mb-6 text-customNobuColor">
                        Planes de Membresía
                      </h3>
                      
                      <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                        Configura diferentes niveles de membresía para tu club.
                      </p>
                      
                      <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                        <li className="mb-2">Crea planes personalizados con beneficios exclusivos</li>
                        <li className="mb-2">Establece precios y períodos de renovación</li>
                        <li className="mb-2">Monitorea la popularidad de cada plan</li>
                      </ul>
                      
                      <div className="flex flex-wrap gap-3">
                        <button 
                          className="bg-customNobuColor rounded py-2 px-5 text-white transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex justify-center items-center"
                          onClick={() => handleViewChange('events')}
                        >
                          Ver Eventos
                        </button>
                      </div>
                    </>
                  ) : !showActivityInfo ? (
                    <>
                      <h3 className="text-3xl lg:text-5xl font-bold mb-6 text-customNobuColor">
                        Eventos del Club
                      </h3>
                      
                      <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                        Organiza y promociona eventos exclusivos para miembros.
                      </p>
                      
                      <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                        <li className="mb-2">Programa eventos y actividades especiales</li>
                        <li className="mb-2">Gestiona inscripciones y asistencia</li>
                        <li className="mb-2">Envía notificaciones automáticas a los miembros</li>
                      </ul>
                      
                      <div className="flex flex-wrap gap-3">
                        <button 
                          className="bg-customNobuColor rounded py-2 px-5 text-white transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex justify-center items-center"
                          onClick={() => handleViewChange('activity')}
                        >
                          Ver Actividad
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="text-3xl lg:text-5xl font-bold mb-6 text-customNobuColor">
                        Actividad del Club
                      </h3>
                      
                      <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                        Supervisa toda la actividad y estadísticas del club.
                      </p>
                      
                      <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                        <li className="mb-2">Visualiza métricas de participación en tiempo real</li>
                        <li className="mb-2">Analiza tendencias de asistencia y uso</li>
                        <li className="mb-2">Identifica oportunidades de crecimiento</li>
                      </ul>
                      
                      <div className="flex flex-wrap gap-3">
                        <button 
                          className="custom-button-colored rounded py-3 px-6 text-white transition-all duration-300 shadow-lg"
                          onClick={() => handleViewChange('general')}
                        >
                          Volver al Inicio
                        </button>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </div>
            
            <div className="w-full lg:w-6/5 hove">
              {!showRegistryInfo ? (
                <motion.div
                  key="club"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0 }}
                  className="border-hidden drop-shadow-2xl overflow-hidden rounded-lg w-full"
                >
                  <div className="overflow-hidden rounded-lg w-full">
                    <img 
                      src={Club} 
                      alt="Clubes" 
                      className="w-full object-contain transform transition-transform duration-500"
                      style={{ maxHeight: '85vh', minWidth: '100%' }}
                    />
                  </div>
                  <button 
                    className="mt-6 bg-customNobuColor text-white py-3 px-4 rounded transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex justify-center items-center"
                    onClick={() => setShowRegistryInfo(true)}
                  >
                    Ver registro
                  </button>
                </motion.div>
              ) : !showProvidersInfo ? (
                <motion.div
                  key="registryImage"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0 }}
                  className="border-hidden drop-shadow-2xl overflow-hidden rounded-lg w-full"
                >
                  <div className="overflow-hidden rounded-lg w-full">
                    <img 
                      src={RegistryClub} 
                      alt="Registro de Clubes" 
                      className="w-full object-contain transform transition-transform duration-500"
                      style={{ maxHeight: '85vh', minWidth: '100%' }}
                    />
                  </div>
                </motion.div>
              ) : !showPlansInfo ? (
                <motion.div
                  key="providersImage"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0 }}
                  className="border-hidden drop-shadow-2xl overflow-hidden rounded-lg w-full"
                >
                  <div className="overflow-hidden rounded-lg w-full">
                    <img 
                      src={ProveedoresClub} 
                      alt="Proveedores del Club" 
                      className="w-full object-contain transform transition-transform duration-500"
                      style={{ maxHeight: '85vh', minWidth: '100%' }}
                    />
                  </div>
                </motion.div>
              ) : !showEventsInfo ? (
                <motion.div
                  key="plansImage"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0 }}
                  className="border-hidden drop-shadow-2xl overflow-hidden rounded-lg w-full"
                >
                  <div className="overflow-hidden rounded-lg w-full">
                    <img 
                      src={PlanesClub} 
                      alt="Planes de Membresía" 
                      className="w-full object-contain transform transition-transform duration-500"
                      style={{ maxHeight: '85vh', minWidth: '100%' }}
                    />
                  </div>
                </motion.div>
              ) : !showActivityInfo ? (
                <motion.div
                  key="eventsImage"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0 }}
                  className="border-hidden drop-shadow-2xl overflow-hidden rounded-lg w-full"
                >
                  <div className="overflow-hidden rounded-lg w-full">
                    <img 
                      src={EventosClub} 
                      alt="Eventos del Club" 
                      className="w-full object-contain transform transition-transform duration-500"
                      style={{ maxHeight: '85vh', minWidth: '100%' }}
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="activityImage"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0 }}
                  className="border-hidden drop-shadow-2xl overflow-hidden rounded-lg w-full"
                >
                  <div className="overflow-hidden rounded-lg w-full">
                    <img 
                      src={ActivityClub} 
                      alt="Actividad del Club" 
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