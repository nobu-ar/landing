import { motion } from "framer-motion";
import { useState } from "react";
import { InvitationModal } from "./InvitationModal";
import inicioNobu from "../assets/images/inicioNobu.png";


export const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 flex-col justify-center items-center bg-customGray 2xl:w-full xl:w-auto md:w-auto sm:w-auto mx-auto"
      id="aboutus">
        <div className="custom-shape-divider-bottom-1665696614">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="custom-bg-dark2"
            >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="custom-bg-dark1"
              >
            </path>
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-customGray lg:pt-22 lg:pb-12 lg:flex-row flex flex-col mx-auto mt-20 p-3 px-8">
            <div className="lg:w-1/2 flex justify-center items-center filter-bottom-shadow">
              <img src={inicioNobu} alt="Inicio Nobu" className="max-w-full h-auto" />
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
              {/* <span className="justify-center items-center text-center custom-block-subtitle">  
                Nuestros Valores
              </span>*/}
              <h2 className="2xl:text-5xl sm:text-2xl mt-10 mb-8 text-2xl lg:text-5xl custom-block-big-title sm:w-auto mx-auto xs:justify-center">
                Nos comprometemos a ofrecerte un sistema seguro y fácil de usar. Tu tranquilidad y eficiencia son nuestra prioridad
              </h2>
              <span className="flex justify-center text-center text-4xl lg:text-5xl custom-block-big-title mb-8">
                ¿Queres saber más?
              </span>
              <div className="w-full max-w-md mx-auto">
                <button
                  className="custom-button-colored rounded w-full py-4 text-base sm:text-lg md:text-xl lg:text-2xl transition-all duration-300 ease-in-out hover:scale-105 shadow-lg shadow-gray-500/50 mb-16"
                  onClick={() => setIsModalOpen(true)}
                >
                  Comienza a mejorar tu operatoria
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      <div className="justify-between flex flex-col tex-center items-center mx-auto">
        {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        )}
      </div>

      <div className="flex custom-shape-divider-top-1665696661 2xl:w-full sm:w-auto mx-auto">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
    </section>
  );
};
