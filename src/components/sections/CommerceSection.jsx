import { motion } from 'framer-motion';
import { useState } from 'react';
import Commerce from "../../assets/images/commerce.webp";
import RegistryCommerce from "../../assets/images/registryCommerce.png";
import MapCommerce from "../../assets/images/mapCommerce.png";
import SlideAnimation from '../SlideAnimation';

export const CommerceSection = ({ setCurrentSection }) => {
  const [showRegistryInfo, setShowRegistryInfo] = useState(false);
  const [showMapInfo, setShowMapInfo] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  
  // Definimos los colores personalizados para la animación en esta sección
  const slideColors = {
    backgroundColor: "#2196F3", // Azul Nobu (customNobuColor)
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
      setShowMapInfo(false);
    } else if (view === 'registry') {
      setShowRegistryInfo(true);
      setShowMapInfo(false);
    } else if (view === 'map') {
      setShowRegistryInfo(true);
      setShowMapInfo(true);
    }
  };

  return (
    <section id="commerceSection" className="w-full h-screen bg-customGray relative overflow-hidden">
      <SlideAnimation 
        backgroundColor={slideColors.backgroundColor}
        textColor={slideColors.textColor}
        buttonBackgroundColor={slideColors.buttonBackgroundColor}
        buttonIconColor={slideColors.buttonIconColor}
        position="right" // Esta sección aparecerá desde la derecha
        // Usando las nuevas propiedades de texto personalizado
        title="Módulo de Comercios"
        description="Crea y ordena todos tus comercios en un solo lugar."
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
                  <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-customNobuColor">
                    Comercios
                  </h2>
                  
                  <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                    Nuestro módulo de Comercios te permite administrar de manera eficiente todas las transacciones y operaciones de tus comercios en un solo lugar.
                  </p>
                  
                  <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                    Con nuestra interfaz intuitiva, podrás:
                  </p>
                  
                  <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                    <li className="mb-2">Crear perfiles detallados para cada comercio</li>
                    <li className="mb-2">Tener una lista ordenada de todos tus negocios</li>
                    <li className="mb-2">Visualizar la ubicación de cada comercio</li>
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  key="registryContent"
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0 }}
                >
                  {!showMapInfo ? (
                    <>
                      <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-customNobuColor">
                        Registrar Comercio
                      </h2>
                      
                      <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                        El proceso de registro de personal es sencillo y eficiente con nuestro sistema.
                      </p>
                      
                      <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                        <li className="mb-2">Accede a la sección "Registrar Comercio"</li>
                        <li className="mb-2">Completa los datos requeridos</li>
                        <li className="mb-2">Guarda los cambios para finalizar el registro</li>
                      </ul>
                      
                      <div className="flex flex-wrap gap-3">
                        <button 
                          className="bg-customNobuColor rounded py-2 px-5 text-white transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex justify-center items-center"
                          onClick={() => handleViewChange('map')}
                        >
                          Ver Mapa
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-customNobuColor">
                        Mapa
                      </h2>
                      
                      <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                        Localiza y visualiza todos tus comercios desde una interfaz intuitiva.
                      </p>
                      
                      <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                        Con nuestro sistema de mapas podrás:
                      </p>
                      
                      <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                        <li className="mb-2">Ubicar geográficamente todos tus comercios</li>
                        <li className="mb-2">Ver información detallada con un solo clic</li>
                      </ul>
                      
                      <div className="flex flex-wrap gap-3">
                        <button 
                          className="custom-button-colored rounded py-3 px-6 text-white transition-all duration-300 shadow-lg"
                          onClick={() => handleViewChange('general')}
                        >
Volver al Inicio                        </button>
                        
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </div>
            
            <div className="w-full lg:w-6/5 hove">
              {!showRegistryInfo ? (
                <motion.div
                  key="commerce"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0 }}
                  className="border-hidden drop-shadow-2xl overflow-hidden rounded-lg w-full"
                >
                  <div className="overflow-hidden rounded-lg w-full">
                    <img 
                      src={Commerce} 
                      alt="Comercios" 
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
              ) : !showMapInfo ? (
                <motion.div
                  key="registryImage"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0 }}
                  className="border-hidden drop-shadow-2xl overflow-hidden rounded-lg w-full"
                >
                  <div className="overflow-hidden rounded-lg w-full">
                  <img 
                    src={RegistryCommerce} 
                    alt="Registro de Personal" 
                    className="w-full object-contain transform transition-transform duration-500"
                    style={{ maxHeight: '85vh', minWidth: '100%' }}
                  />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="mapImage"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0 }}
                  className="border-hidden drop-shadow-2xl overflow-hidden rounded-lg w-full"
                >
                  <div className="overflow-hidden rounded-lg w-full">
                  <img 
                    src={MapCommerce} 
                    alt="Mapa de Comercios" 
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