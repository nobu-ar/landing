import { motion } from 'framer-motion';
import { useState } from 'react';
import Mutual from "../../assets/images/mutual.png";
import AffiliateDetail from "../../assets/images/affiliateDetail.png";
import RegistryMutual from "../../assets/images/registryMutual.png";
import SlideAnimation from '../SlideAnimation';

export const MutualSection = ({ setCurrentSection }) => {
  const [showRegistryInfo, setShowRegistryInfo] = useState(false);
  const [showDetailInfo, setShowDetailInfo] = useState(false);
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

  // Función para cambiar entre vistas
  const handleViewChange = (view) => {
    if (view === 'general') {
      setShowRegistryInfo(false);
      setShowDetailInfo(false);
    } else if (view === 'registry') {
      setShowRegistryInfo(true);
      setShowDetailInfo(false);
    } else if (view === 'affiliate') {
      setShowRegistryInfo(true);
      setShowDetailInfo(true);
    }
  };

  return (
    <section id="mutualSection" className="w-full h-screen bg-customGray relative overflow-hidden">
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
                    Gestión Mutuales
                  </h2>
                  
                  <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                    Nuestro módulo de Mutuales te permite administrar de manera eficiente todos tus afiliados, sus coberturas médicas, beneficios de salud, pagos y deudas.
                  </p>
                  
                  <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                    Con nuestra interfaz intuitiva, podrás:
                  </p>
                  
                  <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                    <li className="mb-2">Gestionar planes de cobertura médica</li>
                    <li className="mb-2">Administrar afiliaciones de empleados</li>
                    <li className="mb-2">Controlar prestaciones y reintegros</li>
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
                      <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-customNobuColor">
                        Registro de Afiliaciones
                      </h2>
                      
                      <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                        Gestiona las afiliaciones de tus empleados a las mutuales disponibles de manera sencilla y rápida.
                      </p>
                      
                      <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                        <li className="mb-2">Registro de nuevos afiliados</li>
                        <li className="mb-2">Actualización de datos de los beneficiarios</li>
                        <li className="mb-2">Gestión documental médica</li>
                      </ul>
                      
                      <div className="flex flex-wrap gap-3">
                        <button 
                          className="bg-customNobuColor rounded py-2 px-5 text-white transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex justify-center items-center"
                          onClick={() => handleViewChange('affiliate')}
                        >
                          Ver Detalles de Afiliado
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-customNobuColor">
                        Detalles del Afiliado
                      </h2>
                      
                      <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                        Visualiza toda la información de los afiliados y sus beneficios activos en un solo lugar.
                      </p>
                      
                      <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                        <li className="mb-2">Historial médico completo</li>
                        <li className="mb-2">Reintegros y prestaciones</li>
                        <li className="mb-2">Coberturas disponibles</li>
                      </ul>
                      
                      <div className="flex flex-wrap gap-3">
                        <button 
                          className="custom-button-colored rounded py-2 px-5 text-white transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex justify-center items-center"
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
                  key="mutual"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0 }}
                  className="border-hidden drop-shadow-2xl overflow-hidden rounded-lg w-full"
                >
                  <div className="overflow-hidden rounded-lg w-full">
                    <img 
                      src={Mutual} 
                      alt="Gestión de Mutuales" 
                      className="w-full object-contain transform transition-transform duration-500"
                      style={{ maxHeight: '85vh', minWidth: '100%' }}
                    />
                  </div>
                  <button 
                    className="mt-6 bg-customNobuColor text-white py-3 px-4 rounded transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex justify-center items-center"
                    onClick={() => setShowRegistryInfo(true)}
                  >
                    Ver registro de afiliaciones
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
                    src={RegistryMutual} 
                    alt="Registro de Afiliaciones" 
                    className="w-full object-contain transform transition-transform duration-500"
                    style={{ maxHeight: '85vh', minWidth: '100%' }}
                  />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="affiliateImage"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0 }}
                  className="border-hidden drop-shadow-2xl overflow-hidden rounded-lg w-full"
                >
                  <div className="overflow-hidden rounded-lg w-full">
                  <img 
                    src={AffiliateDetail} 
                    alt="Detalles del Afiliado" 
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