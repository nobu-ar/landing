import React from "react";
import { motion } from "framer-motion";
import spaces from '../assets/images/spaces.jpg';

export const Espacios = () => {
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
          <div className="w-full lg:w-2/5 mb-8 lg:mb-0 flex flex-col justify-left items-left lg:items-start lg:pl-16 lg:pr-12">
            <h2 className="text-customNobuColor mt-4 mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-5xl custom-block-big-title text-justify sm:text-center lg:text-left">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Tu propio espacio digital a tu medida.
              </span>
            </h2>
            <p className="text-customNobuColor mb-8 leading-relaxed text-justify sm:text-center lg:text-left max-w-xl">
            Creamos un panel seguro e intuitivo para gestionar todo tu negocio: usuarios, roles y permisos, ventas, clientes, inventario y facturación. <br />Podés sumar a empleados, proveedores o clientes, y decidir qué pueden ver o hacer. <br />Además, adaptamos los módulos a tus necesidades o incluso creamos uno exclusivo para vos.
            <br />
            <br />
            <h3 className="text-customNobuColor mb-8 leading-relaxed text-justify sm:text-center lg:text-left max-w-xl"><strong>Organizá, controlá y hacé crecer tu empresa desde un solo lugar, de manera simple y eficiente.</strong></h3>
            </p>
          </div>
          <div class="absolute right-0 w-96 h-96 bg-customNobuColor opacity-50 rotate-45  translate-x-48 translate-y-48"></div>

          {/* Imagen única de spaces - ajustada a la derecha */}
          <div className="w-full lg:w-3/5 md:w-3/5 sm:w-3/5 mt-8 lg:mt-0">
            <div className="relative h-auto lg:mr-0">
              <div className="relative w-full flex justify-center items-center">
                <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl transform rotate-3 hover:rotate-0 transition-transform duration-300 ease-in-out">
                  <img 
                    src={spaces} 
                    alt="Espacios" 
                    className="w-full h-auto object-contain rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Botón para descubrir más */}
        <div className="flex justify-center mt-16">
        </div>
      </motion.div>
    </section>
  );
};
