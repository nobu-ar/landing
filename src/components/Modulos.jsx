import { motion } from 'framer-motion';

export const Modulos = () => {
  // Módulos para mostrar 
  const modules = [
    { id: 'club', name: 'Club', color: '#16005B', path: '/club' },
    { id: 'personal', name: 'Personal', color: '#4CAF50', path: '/personal' },
    { id: 'mutual', name: 'Mutual', color: '#FF9800', path: '/mutual' },
    { id: 'comercios', name: 'Comercios', color: '#2196F3', path: '/comercios' },
    { id: 'finanzas', name: 'Finanzas', color: '#3146F3', path: '/finanzas' },
    { id: 'faltas', name: 'Faltas', color: '#7441A3', path: '/faltas' },
  ];

  return (
    <section 
      className="w-full h-auto sm:h-auto lg:h-screen md:h-auto py-16 md:py-12 bg-customGray relative mt-20" 
      id="modulos"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-8 md:mb-12 pt-4 md:pt-8">
          <h2 className="custom-block-subtitle text-center mb-2 text-customNobuColor text-sm md:text-base">
            Módulos Especializados
          </h2>
          <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-6 text-customNobuColor">
            <strong>Contamos con módulos diseñados para cubrir todas tus necesidades</strong>
          </h2>
          <strong className="max-w-2xl mx-auto text-center mb-8 md:mb-12 text-sm md:text-base text-customNobuColor px-2">
            Estamos aquí para ayudarte a mantener todo en orden con un sistema modular que simplifica tu trabajo. Es un forma facil de tener todo organizado y accesible para ti y para tus empleados. 
          </strong>
        </div>
        
        {/* Contenedor de módulos adaptable */}
        <div className="w-full mb-8 md:mb-12">
          {/* Grid responsivo mejorado */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
            {modules.map((module) => (
              <a href={module.path} key={module.id} style={{ textDecoration: 'none' }}>
                <motion.div
                  style={{ 
                    backgroundColor: module.color
                  }}
                  className="aspect-square w-full p-2 sm:p-3 md:p-4 text-white text-center cursor-pointer shadow-lg flex flex-col justify-center items-center rounded"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  {module.id === 'personal' ? (
                    <div className="text-white">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold">{module.name}</h3>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-sm sm:text-base md:text-lg font-bold">{module.name}</h3>
                    </>
                  )}
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
