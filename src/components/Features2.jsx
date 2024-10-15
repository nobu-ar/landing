import { motion } from 'framer-motion';  
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import spaces from "../assets/images/spaces.jpg";

export const Features2 = () => (
  <section className="w-full bg-customGray mt-12 mb-10 lg:my-20 pt-4 pb-2">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="mt-10 mb-40 flex flex-col items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:px-4 xl:px-16">
      <span className="custom-block-subtitle justify-center text-center items-center">
              Módulos Especializados
            </span>
        <div className="w-full lg:w-2/3 mb-8 lg:mb-12">
          <div className="mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-full">
            <h2 className="mt-6 mb-8 text-2xl 2xl:text-5xl lg:text-5xl custom-block-big-title sm:w-auto">
              Contamos con módulos diseñados para cubrir todas tus necesidades
            </h2>
            <p className="mb-6 text-customNobuColor leading-loose">
              Estamos aquí para ayudarte a tener todo en orden con un sistema modular, ya no pierdas tu tiempo en archivar expedientes. Te brindamos un
              servicio de calidad con una plataforma fácil de utilizar.
            </p>
          </div>
        </div>
        {/* Lista de características */}
        <div className="w-full mb-12 flex justify-center">
          <ul className="text-customNobuColor grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="flex items-center">
              <CheckArrowIcon />
              <span className="ml-2">Con una interfaz amigable</span>
            </li>
            <li className="flex items-center">
              <CheckArrowIcon />
              <span className="ml-2">Ágil y segura</span>
            </li>
            <li className="flex items-center">
              <CheckArrowIcon />
              <span className="ml-2">Tus servicios ordenados</span>
            </li>
            <li className="flex items-center">
              <CheckArrowIcon />
              <span className="ml-2">Intuitiva</span>
            </li>
          </ul>
        </div>

        <div className="w-full px-2 lg:px-16 border-hidden drop-shadow-2xl">
          <img
            src={spaces}
            alt="Espacios"
            className="w-full h-auto rounded custom-border-gray"
          />
        </div>
      </div>
    </motion.div>
  </section>
);
