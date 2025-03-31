import { motion } from 'framer-motion';
import { useState } from 'react';
import Faltas from "../../assets/images/faltas.png";
import RegistryFalta from "../../assets/images/registryFalta.png";
import SlideAnimation from '../SlideAnimation';

export const FaltasSection = ({ setCurrentSection }) => {
  const [showRegistryInfo, setShowRegistryInfo] = useState(false);
  const [showDetailInfo, setShowDetailInfo] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  
  // Definimos los colores personalizados para la animación en esta sección
  const slideColors = {
    backgroundColor: "#7441A3", // Púrpura para faltas
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
    }
  };

  return (
    <section id="faltasSection" className="w-full h-screen bg-customGray relative overflow-hidden">
      <SlideAnimation 
        backgroundColor={slideColors.backgroundColor}
        textColor={slideColors.textColor}
        buttonBackgroundColor={slideColors.buttonBackgroundColor}
        buttonIconColor={slideColors.buttonIconColor}
        position="right"
        title="Tribunal de Faltas"
        description="Gestiona y controla todas las infracciones y contravenciones municipales y de tránsito en un sistema integrado."
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
                    Tribunal de Faltas
                  </h2>
                  
                  <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                    Nuestro módulo de Tribunal de Faltas te permite administrar de manera eficiente todas las infracciones y contravenciones, tanto de tránsito como municipales, en un sistema centralizado.
                  </p>
                  
                  <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                    Con nuestra interfaz intuitiva, podrás:
                  </p>
                  
                  <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                    <li className="mb-2">Registrar infracciones de personas físicas y jurídicas</li>
                    <li className="mb-2">Dar seguimiento a los procesos administrativos</li>
                    <li className="mb-2">Gestionar multas y sanciones</li>
                    <li className="mb-2">Generar reportes estadísticos de infracciones</li>
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  key="registryContent"
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0 }}
                >
                  <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-customNobuColor">
                    Registro Infracción
                  </h2>
                  
                  <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                    El proceso de registro de infracciones es completo y detallado, permitiéndote documentar toda la información necesaria para el seguimiento administrativo.
                  </p>
                  
                  <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                    <li className="mb-2">Identifica al infractor</li>
                    <li className="mb-2">Registra el tipo de contravención y circunstancias</li>
                    <li className="mb-2">Adjunta evidencias fotográficas o documentales</li>
                    <li className="mb-2">Establece la sanción correspondiente según normativa</li>
                    <li className="mb-2">Genera las notificaciones automáticas</li>
                  </ul>
                  
                  <div className="flex flex-wrap gap-3">
                    <button 
                      className="custom-button-colored rounded py-2 px-5 text-white transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex justify-center items-center"
                      onClick={() => handleViewChange('general')}
                    >
                      Volver al Inicio
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
            
            <div className="w-full lg:w-6/5 hove">
              {!showRegistryInfo ? (
                <motion.div
                  key="faltas"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0 }}
                  className="border-hidden drop-shadow-2xl overflow-hidden rounded-lg w-full"
                >
                  <div className="overflow-hidden rounded-lg w-full">
                    <img 
                      src={Faltas} 
                      alt="Tribunal de Faltas" 
                      className="w-full object-contain transform transition-transform duration-500"
                      style={{ maxHeight: '85vh', minWidth: '100%' }}
                    />
                  </div>
                  <button 
                    className="mt-6 bg-customNobuColor text-white py-3 px-4 rounded transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex justify-center items-center"
                    onClick={() => setShowRegistryInfo(true)}
                  >
                    Ver registro de infracciones
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="registryImage"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0 }}
                  className="border-hidden drop-shadow-2xl overflow-hidden rounded-lg w-full"
                >
                  <div className="overflow-hidden rounded-lg w-full">
                  <img 
                    src={RegistryFalta} 
                    alt="Registro de Infracciones" 
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