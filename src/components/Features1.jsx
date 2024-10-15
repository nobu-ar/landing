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
      className="w-full bg-customGray lg:my-20"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mt-20 flex flex-wrap items-center justify-between 2xl:w-[1450px] xl:w-[1300px] md:w-[1200px] w-11/12 mx-auto xl:pr-16 md-pr-16 xl:pl-16 md-pl-16 md:w-auto">
          <div className="w-full lg:w-1/3 mb-12 lg:mb-0 mt-20 md:w-auto ">
            <span className="text-customNobuColor custom-block-subtitle">Un espacio adaptado a tus necesidades</span>

            <h2 className="text-customNobuColor mt-8 mb-8 text-4xl lg:text-5xl custom-block-big-title">Gestión Integral de tus espacios con NOBU</h2>

            <p className="text-customNobuColor mb-10 leading-loose md:w-auto">Ofrecemos una solución completa para la gestión de socios, empleados, proveedores y lo que necesites. Ideal para municipalidades, clubes y mutuales, nuestro sistema optimiza todas tus operaciones administrativas.</p>
          
          
            <ul className=" text-customNobuColor">
              <li className="md:mt-10 mb-4 flex mt-20">
                <CheckArrowIcon />
                  <span>Cobranza: Facilita el proceso de pagos y cuotas.</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                  <span>Administración de Espacios Públicos: Optimiza el uso y mantenimiento de tus instalaciones.</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                  <span>Gestión de Servicios e Impuestos: Simplifica el pago y control de servicios e impuestos.</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                  <span>Accesos a Eventos: Gestiona entradas y controla el acceso.</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                  <span>Manejo de Personal: Administra el personal de manera eficiente.</span>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-2/3 flex justify-end md:w-auto">
            <div className="mb-10 lg:px-0 border-hidden drop-shadow-2xl md:ml-20 md:w-auto sm:w-auto">
              <img
                src={nobuPc}
                alt="Módulos"
                className="w-full h-auto rounded custom-border-gray md:w-auto"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
