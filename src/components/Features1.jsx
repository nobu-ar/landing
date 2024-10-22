import { motion } from "framer-motion";
import bio from "../assets/images/bio.jpg";
import scannerqr from "../assets/images/scannerqr.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import nobuPc from "../assets/images/nobuPc.png";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-customGray py-12 sm:py-16 md:py-20 lg:py-24 px-7 sm:px-6 md:px-8 lg:px-12"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col justify-center items-center lg:items-start">
            <span className="text-customNobuColor custom-block-subtitle text-justify sm:text-center lg:text-left">Un espacio adaptado a tus necesidades</span>

            <h2 className="text-customNobuColor mt-4 mb-6 text-3xl sm:text-4xl lg:text-5xl custom-block-big-title text-justify sm:text-center lg:text-left">Gestión Integral de tus espacios con NOBU</h2>

            <p className="text-customNobuColor mb-8 leading-relaxed text-justify sm:text-center lg:text-left max-w-xl">Ofrecemos una solución integral para la gestión de tu sistema, accesible de manera segura con tu usuario y contraseña. Desde un panel intuitivo, podrás organizar y controlar tu espacio de forma sencilla, asignando permisos a otros usuarios según tus necesidades. Gestiona todo con confianza y eficiencia en una plataforma diseñada para facilitar tu día a día.</p>
          </div>

          <div className="w-full lg:w-3/5 mt-8 lg:mt-0 flex justify-center items-center">
            <div className="border-hidden drop-shadow-2xl w-full h-full">
              <img
                src={nobuPc}
                alt="Módulos"
                className="w-full h-auto rounded custom-border-gray object-contain"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
