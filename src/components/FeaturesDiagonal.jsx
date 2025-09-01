import { motion } from "framer-motion";
import React from "react";
import { InvitationModal } from "./InvitationModal";
import inicioNobu from "../assets/images/map.png";

export const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const features = [
    {
      icon: "🏔️",
      title: "Raíces Tucumanas",
      description: "Nacimos en el corazón del norte argentino, con la pasión y calidad que caracteriza a nuestra tierra"
    },
    {
      icon: "🚀",
      title: "Te acercamos al Futuro",
      description: "Nuestros sistemas se basan en la implementacion de  IA  y Big Data  logrando transformar la manera de gestionar y escalar tus negocios"
    },
    {
      icon: "⚡",
      title: "Menos Burocracia",
      description: "Simplificamos procesos complejos para que puedas enfocarte en lo que realmente importa: tu negocio"
    }
  ];

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
            <div className="lg:w-1/2 flex justify-center items-center">
              <img 
                src={inicioNobu} 
                alt="Inicio Nobu" 
                className="max-w-xs lg:max-w-sm xl:max-w-md h-auto opacity-90 mix-blend-multiply" 
                style={{
                  filter: 'contrast(1.1) brightness(1.05)',
                  backgroundColor: 'transparent'
                }}
              />
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
              <span className="justify-center items-center text-center custom-block-subtitle mb-4">  
                Sobre Nosotros
              </span>
              <h2 className="2xl:text-5xl sm:text-2xl mt-6 mb-8 text-2xl lg:text-4xl custom-block-big-title sm:w-auto mx-auto xs:justify-center">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Innovación Argentina para el Futuro Digital
                </span>
              </h2>
              <p className="text-lg leading-relaxed mb-16 font-bold text-customNobuColor">
                Somos la empresa que vino a revolucionar la gestión empresarial. 
                <br />
                Nuestro compromiso es eliminar la burocracia innecesaria y brindarte 
                soluciones que impulsen el crecimiento de tu negocio.
                <br />
              </p>
              
              <div className="space-y-6 mb-8 fond">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="text-3xl flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-customNobuColor mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-customNobuColor">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>


      <div className="justify-between flex flex-col tex-center items-center mx-auto">
        {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        )}
      </div>

      {/*<div className="flex custom-shape-divider-top-1665696661 2xl:w-full sm:w-auto mx-auto">
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
      </div>*/}
    </section>
  );
};
