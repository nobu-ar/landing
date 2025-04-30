import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import spaces from '../assets/images/spaces.jpg';
import nobuPc from "../assets/images/nobuPc.png";
import userPermission from "../assets/images/userPermission.png";
export const Espacios = () => {
  // Estado para controlar la imagen activa en el carrusel
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Datos de las imágenes para el carrusel
  const imagenes = [
    { 
      src: spaces, 
      alt: 'Espacios'
    },
    {
      src: userPermission, 
      alt: 'Permisos de usuario'
    }
  ];
  
  // Efecto para cambiar automáticamente las imágenes cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 10000);
    
    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [imagenes.length]);
  
  // Función para calcular los estilos de cada imagen según su posición
  const getImageStyle = (index) => {
    // Determinar la posición relativa al índice activo
    const position = (index - activeIndex + imagenes.length) % imagenes.length;
    
    // Estilos base para todas las imágenes
    const baseStyle = {
      position: 'absolute',
      width: '100%',
      height: 'auto',
      transition: 'all 0.7s ease-in-out',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
      cursor: 'pointer',
      backgroundColor: 'white', // Fondo blanco para evitar transparencias
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
    
    // Definir estilos basados en la posición
    if (position === 0) { // Imagen frontal
      return {
        ...baseStyle,
        zIndex: 3,
        transform: 'scale(1) translateX(0)'
      };
    } else if (position === 1 || position === imagenes.length - 1) { // Imágenes laterales
      const xTranslate = position === 1 ? '15%' : '-15%';
      return {
        ...baseStyle,
        zIndex: 2,
        transform: `scale(0.9) translateX(${xTranslate})`
      };
    } else { // Imágenes traseras
      return {
        ...baseStyle,
        zIndex: 1,
        transform: 'scale(0.8) translateX(0)'
      };
    }
  };

  // Función para manejar clic en una imagen
  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      className="w-full bg-customGray py-32 sm:py-32 md:py-32 lg:py-32 px-7 sm:px-0 md:px-12 lg:px-12"
      id="espacios"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-full mx-0">
          <div className="w-full lg:w-2/5 mb-8 lg:mb-0 flex flex-col justify-center items-center lg:items-start lg:pl-16 lg:pr-12">
            <h2 className="text-customNobuColor custom-block-subtitle text-justify sm:text-center lg:text-left">Tu espacio digital adaptado a tus necesidades</h2>

            <h3 className="text-customNobuColor mt-4 mb-6 text-3xl sm:text-4xl lg:text-5xl custom-block-big-title text-justify sm:text-center lg:text-left">Te damos tu propio lugar</h3>

            <p className="text-customNobuColor mb-8 leading-relaxed text-justify sm:text-center lg:text-left max-w-xl">
              Con <strong>Nobu</strong> contaras con tu <strong>espacio </strong> para gestionar tu sistema de forma segura con usuario y contraseña. 
              Desde un panel intuitivo, podrás organizar y controlarlo todo, asignando permisos a otros usuarios para que puedan acceder y gestinando que es lo que puede hacer otorgandole un rol determinado. 
              Gestiona todo de forma segura y eficiente en una plataforma diseñada para simplificar tu trabajo.
            </p>
            <p className="text-customNobuColor mb-8 leading-relaxed text-justify sm:text-center lg:text-left max-w-xl">
              En cada uno de tus espacios podras contar con <strong>modulos diseñados para gestionar tu negocio de la mejor manera</strong>, 
              desde la gestión de clientes hasta la gestión de inventario, pasando por la gestión de ventas y facturación. Si tu empresa 
              es de tipo <strong>servicio</strong> podras contar con tu modulo de <strong>gestion de clientes </strong>y asi poder gestionar su información de la mejor manera. 
              Estos modulos pueden ser <strong>adaptados </strong> segun demandas especificas que tengas, asi como tambien podras contar con tu propio modulo totalmente personalizado si es que necesitas algo
              totalmente especifico para tu negocio.
            </p>
            <p className="text-customNobuColor mb-8 leading-relaxed text-justify sm:text-center lg:text-left max-w-xl">
              Ademas podras forma parte de otros espacios o invitar a otros usuarios a que formen parte de tu espacio, como tus empleados, proveedores, clientes, etc.
            </p>


          </div>

          {/* Carrusel de imágenes - ajustado a la derecha */}
          <div className="w-full lg:w-3/5 md:w-3/5 sm:w-3/5 mt-8 lg:mt-0 ">
            <div className="carousel-container relative h-auto aspect-video lg:mr-0">
              {/* Contenedor de imágenes */}
              <div className="relative w-full h-full flex justify-center items-center">
                {imagenes.map((imagen, index) => (
                  <div
                    key={index}
                    style={getImageStyle(index)}
                    className="carousel-image"
                    onClick={() => handleImageClick(index)}
                  >
                    <img 
                      src={imagen.src} 
                      alt={imagen.alt} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              
              {/* Indicadores de diapositiva sutiles - movidos más cerca del carrusel */}
              <div className="absolute bottom-[-20px] left-0 right-0 flex justify-center space-x-2">
                {imagenes.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-2 h-2 rounded transition-all duration-300 ${
                      index === activeIndex ? 'bg-customNobuGreen w-4' : 'bg-gray-300'
                    }`}
                    onClick={() => setActiveIndex(index)}
                    style={{ cursor: 'pointer' }}
                  />
                ))}
              </div>
              
              {/* Botones de navegación */}
              <button 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Botón para descubrir más */}
        <div className="flex justify-center mt-16">
          <motion.button
            className="bg-customNobuGreen text-white px-8 py-3 rounded font-medium shadow-lg hover:shadow-xl"
            onClick={() => {
              document.getElementById('modulos').scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Descubrelo por ti mismo
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};
