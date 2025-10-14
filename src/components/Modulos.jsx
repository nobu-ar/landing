import React from 'react';
import { motion } from 'framer-motion';
import iaImage from '../assets/images/ia.png';

export const Modulos = () => {
  return (
    <section 
      className="w-full h-auto sm:h-auto lg:h-auto py-16 md:py-12 bg-customGray relative mt-52" 
      id="modulos"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Sección de IA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 md:mb-20"
        >
          <div className="text-center mb-12">
    <div class="absolute  w-64 h-64 bg-customNobuGreen opacity-50  -translate-x-32 -translate-y-42"></div>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-customNobuColor">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                El Futuro es Inteligente
              </span>
            </h2>
            <p className="text-lg md:text-xl text-customNobuColor max-w-4xl mx-auto leading-relaxed">
              En Nobu, la inteligencia artificial no es solo una característica, es el corazón de nuestro sistema. 
              Transformamos datos en decisiones inteligentes que impulsan tu negocio hacia el futuro.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Imagen de IA */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                <img 
                  src={iaImage} 
                  alt="Inteligencia Artificial Nobu" 
                  className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/10"
                />
              </div>
            </motion.div>

            {/* Contenido de IA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-customNobuColor">
                  IA que Aprende y Evoluciona
                </h3>
                <p className="text-customNobuColor leading-relaxed">
                  Nuestro sistema de IA analiza patrones y optimiza 
                  cada aspecto de tu operación. Desde la gestión de inventario hasta el analisis de tus clientes, 
                  crea esquemas, filtros y analisis de datos para tomar decisiones inteligentes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-customNobuColor mb-2">Predicción Inteligente</h4>
                  <p className="text-sm text-customNobuColor/80">
                    Anticipa demandas y optimiza recursos con algoritmos avanzados
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-customNobuColor mb-2">Automatización Total</h4>
                  <p className="text-sm text-customNobuColor/80">
                    Reduce tareas manuales y enfócate en lo que realmente importa
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
