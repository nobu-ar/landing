import { motion } from "framer-motion";
import { useState } from "react";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { InvitationModal } from "./InvitationModal";


export const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 flex-col stify-center items-center bg-customGray 2xl:w-full xl:w-auto md:w-auto sm:w-auto mx-auto"
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
          <div className=" bg-customGray lg:pt-22  lg:pb-12lg:flex-row flex-col  mx-auto p-3">
            <div className="lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
              <span className="justify-center items-center text-center custom-block-subtitle ">
              Nuestros Valores
              </span>
              <h2 className="2xl:text-5xl sm:text-2xl mt-10 mb-8 text-2xl lg:text-5xl custom-block-big-title sm:w-auto mx-auto ">En NOBU, nos guiamos por nuestros principios y nos comprometemos a darte un sistema:</h2>
    
              <ul className="mb-6 mt-12= text-customNobuColor">
                <li className="mb-4 flex">
                  <CheckArrowIcon/>
                  <span>Transparente: Operaciones claras y accesibles para todos.</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Seguridad con  sus Datos: Protegemos tu información con los más altos estándares de seguridad.</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Trazable: Seguimiento detallado de cada operación para garantizar la precisión y responsabilidad.</span>
                </li>
              </ul>

            </div>
            <span className="flex bottom-10 p-8 justify-center text-center text-4xl lg:text-5xl custom-block-big-title">¿Queres saber más?</span>
          </div>
        </motion.div>

        <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="2xl:w-96 xl:w-96 md:w-auto sm:w-auto mt-1 mb-24 drop-shadow-2xl items-center mx-auto">
                <div
                  className=" custom-button-colored rounded text-xl 2xl:w-92 text-center h-16"
                  onClick={() => setIsModalOpen(true)}
                >
                  Comienza a mejorar tu operatoria
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
