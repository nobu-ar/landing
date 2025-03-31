import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa"; // Importamos el icono de flecha

/**
 * Componente de animación tipo slide que inicialmente ocupa la mitad de la pantalla,
 * se expande al hacer clic y después desaparece automáticamente.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {ReactNode} props.children - Contenido que estará debajo del slide
 * @param {string} props.backgroundColor - Color de fondo del slide (opcional)
 * @param {string} props.textColor - Color del texto dentro del slide (opcional)
 * @param {string} props.buttonBackgroundColor - Color de fondo del botón (opcional)
 * @param {string} props.buttonIconColor - Color del ícono dentro del botón (opcional)
 * @param {string} props.position - Posición desde donde aparece ('left' o 'right', por defecto 'left')
 * @param {number} props.autoHideDelay - Tiempo en ms antes de que desaparezca (por defecto 4000ms)
 * @param {Function} props.onAnimationComplete - Callback cuando la animación termina
 * @param {ReactNode} props.content - Contenido personalizado para el slide
 * @param {string} props.title - Título del slide (usado si no se proporciona content)
 * @param {string} props.description - Descripción del slide (usado si no se proporciona content)
 * @param {string} props.actionText - Texto para la acción de clic (usado si no se proporciona content)
 */
export const SlideAnimation = ({ 
  children, 
  backgroundColor = "#4A55A2", // Color por defecto, similar a customNobuColor
  textColor = "#FFFFFF", // Color de texto por defecto (blanco)
  buttonBackgroundColor = "#FFFFFF", // Color de fondo del botón por defecto
  buttonIconColor = "#4A55A2", // Color del ícono por defecto
  position = "left",
  autoHideDelay = 1500,
  content,
  onAnimationComplete = () => {},
  // Nuevas props para personalizar el texto sin necesidad de pasar content completo
  title = "¡Bienvenido a nuestro sistema!",
  description = "Estamos preparando todo para ofrecerte la mejor experiencia. En unos momentos podrás ver todo nuestro contenido.",
  actionText = "Haz clic en la flecha para continuar"
}) => {
  // Estado para controlar si el slide está expandido o no
  const [expanded, setExpanded] = useState(false);
  
  // Estado para controlar si el slide es visible o no
  const [visible, setVisible] = useState(true);
  
  // Estado para controlar si ya mostró el contenido
  const [showContent, setShowContent] = useState(false);

  // Efecto para ocultar el slide después de un tiempo cuando está expandido
  useEffect(() => {
    let timerId;
    
    if (expanded) {
      // Configurar temporizador para ocultar el slide después del tiempo definido
      timerId = setTimeout(() => {
        setVisible(false);
        // Notificar que la animación ha terminado
        onAnimationComplete();
        // Mostrar el contenido
        setShowContent(true);
      }, autoHideDelay);
    }
    
    // Limpiar el temporizador cuando el componente se desmonta o cuando expanded cambia
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [expanded, autoHideDelay, onAnimationComplete]);

  // Función para manejar el clic en la flecha
  const handleExpandClick = () => {
    setExpanded(true);
  };

  // Variantes para las animaciones con framer-motion
  const slideVariants = {
    // Estado inicial: ocupa la mitad de la pantalla
    initial: {
      width: "50%",
      height: "screen",
      [position]: 0,
      opacity: 1,
      zIndex: 100
    },
    // Estado expandido: ocupa toda la pantalla
    expanded: {
      width: "100%",
      height: "screen",
      [position]: 0,
      opacity: 1,
      zIndex: 100
    },
    // Estado para desaparecer
    exit: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* Contenido principal que solo se muestra cuando termina la animación */}
      {showContent && (
        <div className="w-full h-screen absolute top-0 left-0 right-0 bottom-0 overflow-auto">
          {children}
        </div>
      )}
      
      {/* Slide animado con framer-motion */}
      <AnimatePresence>
        {visible && (
          <motion.div
            className="absolute top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center overflow-hidden"
            style={{ 
              backgroundColor,
              width: expanded ? '100%' : '50%'
            }}
            initial="initial"
            animate={expanded ? "expanded" : "initial"}
            exit="exit"
            variants={slideVariants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center p-8" style={{ color: textColor }}>
              {/* Contenido del slide - Puede ser personalizado o usar valores por defecto */}
              <div className="max-w-3xl">
                {content || (
                  <>
                    <motion.h2 
                      className="text-3xl lg:text-5xl font-bold mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {title}
                    </motion.h2>
                    <motion.p 
                      className="text-lg mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {description}
                    </motion.p>
                    <motion.p 
                      className="text-lg italic"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      {actionText}
                    </motion.p>
                  </>
                )}
              </div>
              
              {/* Botón de expansión (solo visible cuando no está expandido) */}
              {!expanded && (
                <motion.button
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
                  style={{ backgroundColor: buttonBackgroundColor, color: buttonIconColor }}
                  onClick={handleExpandClick}
                 
                >
                  <FaArrowRight className="text-2xl" />
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SlideAnimation; 