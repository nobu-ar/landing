import { motion } from 'framer-motion';

export const Modulos = () => {
  // Módulos para mostrar 
  const modules = [
    { 
      id: 'personal', 
      name: 'Personal', 
      color: '#4CAF50', 
      action: () => {
        document.getElementById('personalSection')?.scrollIntoView({ behavior: 'smooth' });
      } 
    },
    { id: 'mutual', name: 'Mutual', color: '#FF9800', action: () => {
      document.getElementById('mutualSection')?.scrollIntoView({ behavior: 'smooth' });
    }  },
    { id: 'comercios', name: 'Comercios', color: '#2196F3', action: () => {
      document.getElementById('commerceSection')?.scrollIntoView({ behavior: 'smooth' });
    } },
    { id: 'finanzas', name: 'Finanzas', color: '#3146F3', action: () => {
      document.getElementById('financeSection')?.scrollIntoView({ behavior: 'smooth' });
    } },
    { id: 'faltas', name: 'Faltas', color: '#7441A3', action: () => {
      document.getElementById('faltasSection')?.scrollIntoView({ behavior: 'smooth' });
    } },

  ];

  return (
    <section 
    className="w-full h-screen bg-customGray py-16 md:py-24 relative " 
    id="modulos"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12 mt-32">
          <span className="custom-block-subtitle text-center mb-2 text-customNobuColor">
            Módulos Especializados
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-customNobuColor">
            Contamos con módulos diseñados para cubrir todas tus necesidades
          </h2>
          <p className="max-w-2xl mx-auto text-center mb-12 text-customNobuColor">
            Estamos aquí para ayudarte a mantener todo en orden con un sistema modular que simplifica tu trabajo. Olvídate de perder tiempo archivando expedientes y comienza a disfrutar de una plataforma fácil de usar.
          </p>
        </div>
        
        {/* Contenedor de módulos adaptable */}
        <div className="w-full">
          {/* Grid responsivo con tamaños proporcionados */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {modules.map((module) => (
              <motion.div
                key={module.id}
                style={{ 
                  backgroundColor: module.color
                }}
                className="aspect-square w-full p-4 text-white text-center cursor-pointer shadow-lg flex flex-col justify-center items-center rounded"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                onClick={() => {
                  module.action();
                }}
              >
                {module.id === 'personal' ? (
                  <div className="text-white">
                    <h3 className="text-base sm:text-lg font-bold mb-1">{module.name}</h3>
                  </div>
                ) : (
                  <>
                    <h3 className="text-base sm:text-lg font-bold mb-1">{module.name}</h3>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
