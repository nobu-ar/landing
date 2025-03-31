import { motion } from 'framer-motion';
import { useState } from 'react';
import Finance from "../../assets/images/finance.png";
import NewCreditFinance from "../../assets/images/newCreditFinance.png";
import CashRegistryFinance from "../../assets/images/cashRegistryFinance.png";
import ReportFinance from "../../assets/images/reportFinance.png";
import SlideAnimation from '../SlideAnimation';

export const FinanceSection = ({ setCurrentSection }) => {
  const [showRegistryInfo, setShowRegistryInfo] = useState(false);
  const [showDetailInfo, setShowDetailInfo] = useState(false);
  const [currentDetailView, setCurrentDetailView] = useState('credit');
  const [animationCompleted, setAnimationCompleted] = useState(false);
  
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

  // Función para cambiar entre vistas
  const handleViewChange = (view) => {
    if (view === 'general') {
      setShowRegistryInfo(false);
      setShowDetailInfo(false);
    } else if (view === 'credit') {
      setShowRegistryInfo(true);
      setShowDetailInfo(false);
      setCurrentDetailView('credit');
    } else if (view === 'cash') {
      setShowRegistryInfo(true);
      setShowDetailInfo(true);
      setCurrentDetailView('cash');
    } else if (view === 'report') {
      setShowRegistryInfo(true);
      setShowDetailInfo(true);
      setCurrentDetailView('report');
    }
  };

  return (
    <section id="financeSection" className="w-full h-screen bg-customGray relative overflow-hidden">
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
                    Gestión Financiera
                  </h2>
                  
                  <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                    Nuestro módulo de Finanzas te permite administrar de manera eficiente todos los aspectos económicos de tu empresa, desde transacciones diarias hasta reportes completos.
                  </p>
                  
                  <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                    Con nuestra interfaz intuitiva, podrás:
                  </p>
                  
                  <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                    <li className="mb-2">Gestionar créditos y préstamos</li>
                    <li className="mb-2">Controlar cajas y movimientos diarios</li>
                    <li className="mb-2">Generar reportes financieros detallados</li>
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
                        Nuevos Créditos
                      </h2>
                      
                      <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                        Administra todos los productos crediticios que ofreces a tus clientes de manera sencilla.
                      </p>
                      
                      <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                        <li className="mb-2">Configuración de líneas de crédito</li>
                        <li className="mb-2">Gestión de solicitudes y aprobaciones</li>
                        <li className="mb-2">Control de tasas de interés y plazos</li>
                      </ul>
                      
                      <div className="flex flex-wrap gap-3">
                        <button 
                          className="bg-customNobuColor rounded py-2 px-5 text-white transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex justify-center items-center"
                          onClick={() => handleViewChange('cash')}
                        >
                          Ver Registro de Caja
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      {currentDetailView === 'cash' ? (
                        <>
                          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-customNobuColor">
                            Registro de Caja
                          </h2>
                          
                          <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                            Mantén un control detallado de todos los movimientos de efectivo diarios en tu empresa.
                          </p>
                          
                          <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                            <li className="mb-2">Apertura y cierre de cajas</li>
                            <li className="mb-2">Registro de ingresos y egresos</li>
                            <li className="mb-2">Conciliación diaria de efectivo</li>
                          </ul>
                        </>
                      ) : (
                        <>
                          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-customNobuColor">
                            Reportes Financieros
                          </h2>
                          
                          <p className="text-lg mb-6 text-customNobuColor leading-relaxed">
                            Genera informes detallados sobre todos los aspectos financieros de tu negocio.
                          </p>
                          
                          <ul className="list-disc pl-6 mb-8 text-customNobuColor">
                            <li className="mb-2">Balance general y estado de resultados</li>
                            <li className="mb-2">Análisis de flujo de efectivo</li>
                            <li className="mb-2">Estadísticas de créditos y cobranzas</li>
                          </ul>
                        </>
                      )}
                      
                      <div className="flex flex-wrap gap-3">
                        <button 
                          className="custom-button-colored rounded py-2 px-5 text-white transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex justify-center items-center"
                          onClick={() => handleViewChange('general')}
                        >
Volver al Inicio                        </button>
                        {currentDetailView === 'cash' && (
                          <button 
                            className="bg-customNobuColor rounded py-2 px-5 text-white transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex justify-center items-center"
                            onClick={() => handleViewChange('report')}
                          >
                            Ver Reportes
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
                  key="finance"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0 }}
                  className="border-hidden drop-shadow-2xl overflow-hidden rounded-lg w-full"
                >
                  <div className="overflow-hidden rounded-lg w-full">
                    <img 
                      src={Finance} 
                      alt="Gestión Financiera" 
                      className="w-full object-contain transform transition-transform duration-500"
                      style={{ maxHeight: '85vh', minWidth: '100%' }}
                    />
                  </div>
                  <button 
                    className="mt-6 bg-customNobuColor text-white py-3 px-4 rounded transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex justify-center items-center"
                    onClick={() => setShowRegistryInfo(true)}
                  >
                    Ver gestión de créditos
                  </button>
                </motion.div>
              ) : !showDetailInfo ? (
                <motion.div
                  key="creditImage"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0 }}
                  className="border-hidden drop-shadow-2xl overflow-hidden rounded-lg w-full"
                >
                  <div className="overflow-hidden rounded-lg w-full">
                  <img 
                    src={NewCreditFinance} 
                    alt="Nuevos Créditos" 
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
                    src={currentDetailView === 'cash' ? CashRegistryFinance : ReportFinance} 
                    alt={currentDetailView === 'cash' ? "Registro de Caja" : "Reportes Financieros"} 
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