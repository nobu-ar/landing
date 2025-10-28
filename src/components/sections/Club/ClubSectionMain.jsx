import React from "react";
import { motion } from "framer-motion";
import { CalendarModal } from "../../CalendarModal";

export const ClubSectionMain = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      id="clubSectionMain"
      className="relative w-full bg-customWhite overflow-hidden mt-16 sm:mt-20"
    >
      {/* Fondo sutil en degradé usando tu paleta */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-customWhite via-customGray/30 to-customSecondary/10" />

      {/* Contenido: layout fluido y responsivo */}
      <div className="mx-auto flex min-h-[90vh] flex-col lg:flex-row items-center lg:items-stretch max-w-7xl px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24 relative z-10">
        {/* Izquierda: Título + CTA */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Eyebrow + Subtítulo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-6"
          >
            <span className="inline-block rounded-full bg-gradient-to-r from-customNobuGreen to-customPrimary px-4 py-1.5 text-white text-xs sm:text-sm font-semibold shadow-lg">
              Gestión Integral de Clubes
            </span>
            <p className="mt-3 text-sm sm:text-base lg:text-lg text-customGrayText">
              Todo lo que necesitas para administrar tu club deportivo
            </p>
          </motion.div>

          {/* Título principal + descripción */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-customNobuColor">
              Revoluciona la gestión
              <br className="hidden sm:block" />
              de tu club deportivo
            </h1>
            <p className="mt-5 text-base sm:text-lg lg:text-xl text-customGrayText leading-relaxed">
              Administra canchas, socios, reservas y pagos desde una sola
              plataforma. Optimiza tu club con tecnología de vanguardia.
            </p>

            {/* Botones */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={openModal}
                className="rounded-xl bg-custom-gradient text-white px-8 py-4 font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                Solicitar Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                onClick={() => window.location.href = "/contact"}
                whileTap={{ scale: 0.97 }}
                className="rounded-xl border-2 border-customPrimary text-customPrimary px-8 py-4 font-semibold hover:bg-customPrimary hover:text-white transition-all hover:shadow-lg"
              >
                Contactar
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Derecha: Dashboard de métricas interactivo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex items-center justify-center mt-12 lg:mt-0 lg:ml-8 w-full lg:w-1/2"
        >
          <div className="w-full max-w-md sm:max-w-lg">
            <div className="rounded-3xl border border-customGrayBorder bg-white/95 backdrop-blur-sm shadow-2xl p-6 sm:p-8 relative overflow-hidden">
              {/* Header con icono animado */}
              <div className="flex items-center justify-center mb-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  
                </motion.div>
                <h3 className="text-xl font-bold text-customNobuColor">
                  Informe Diario
                </h3>
              </div>

              {/* Métricas principales con animaciones */}
              <div className="space-y-6">
                {/* Métrica 1: Socios con gráfico de barras */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="relative"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-customGrayText">Socios Activos</span>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                      className="text-2xl font-bold text-customNobuGreen"
                    >
                      150+
                    </motion.span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-customNobuGreen to-customPrimary rounded-full relative"
                    >
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-white/30 rounded-full"
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Métrica 2: Canchas con iconos */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="relative"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-customGrayText">Canchas Disponibles</span>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1, type: "spring", stiffness: 200 }}
                      className="text-2xl font-bold text-customPrimary"
                    >
                      8
                    </motion.span>
                  </div>
                  
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="relative"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-customGrayText">Eventos Programados en el dia</span>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1, type: "spring", stiffness: 200 }}
                      className="text-2xl font-bold text-customNobuGreen"
                    >
                      3
                    </motion.span>
                  </div>
                  
                </motion.div>

                {/* Métrica 3: Disponibilidad con pulso */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="relative"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-customGrayText">Disponibilidad</span>
                    <div className="flex items-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-3 h-3 rounded-full bg-green-500 mr-2"
                      />
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                        className="text-2xl font-bold text-customNobuGreen"
                      >
                        Moderada
                      </motion.span>
                    </div>
                  </div>
                </motion.div>

                {/* Métrica 4: Satisfacción con gráfico circular */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="relative"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-customGrayText">Ocupación</span>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                      className="text-2xl font-bold text-customNobuGreen"
                    >
                      65%
                    </motion.span>
                  </div>
                  <div className="relative w-16 h-16 mx-auto">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-gray-200"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <motion.path
                        initial={{ strokeDasharray: "0 100" }}
                        animate={{ strokeDasharray: "95 100" }}
                        transition={{ delay: 1.6, duration: 2, ease: "easeOut" }}
                        className="text-customNobuGreen"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.5 }}
                      className="absolute inset-0 flex items-center justify-center text-xs font-bold text-customNobuGreen"
                    >
                      ★
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Indicador de actividad en tiempo real */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="mt-6 flex items-center justify-center space-x-2 text-xs text-customGrayText"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-green-500"
                />
                <span>Datos en tiempo real</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Elementos decorativos flotantes (valores arbitrarios válidos) */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[20%] top-[22%] w-12 h-12 rounded-full bg-gradient-to-br from-customNobuGreen to-customPrimary opacity-20 shadow-lg"
      />
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -6, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
        className="absolute left-[18%] bottom-[22%] w-9 h-9 rounded-full bg-gradient-to-br from-customPrimary to-customNobuGreen opacity-25 shadow-lg"
      />

      {/* Modal del calendario */}
      <CalendarModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};
