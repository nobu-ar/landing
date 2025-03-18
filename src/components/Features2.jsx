import { motion } from 'framer-motion';  
import Carrusel from "../components/Carrusel";

export const Features2 = () => (
  <section className="w-full bg-customGray mt-12 mb-10 lg:my-20 pt-4 pb-2">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="mt-10 mb-12 flex flex-col items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:px-4 xl:px-16">
      <span className="custom-block-subtitle justify-center text-center items-center">
              Módulos Especializados
            </span>
        <div className="w-full lg:w-2/3 mb-8 lg:mb-12">
          <div className="mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-full">
            <h2 className="mt-6 mb-8 text-2xl 2xl:text-5xl lg:text-5xl custom-block-big-title sm:w-auto">
              Contamos con módulos diseñados para cubrir todas tus necesidades
            </h2>
            <p className="mb-6 text-customNobuColor leading-relaxed text-justify sm:text-left">
            Estamos aquí para ayudarte a mantener todo en orden con un sistema modular que simplifica tu trabajo. Olvídate de perder tiempo archivando expedientes y comienza a disfrutar de una plataforma fácil de usar.
            </p>
          </div>
        </div>
        <div className="w-full lg:px-16 border-hidden drop-shadow-2xl">
          <Carrusel />
        </div>
      </div>
    </motion.div>
  </section>
);
