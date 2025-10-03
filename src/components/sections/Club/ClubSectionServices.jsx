import React from "react";
import { motion } from "framer-motion";
import { CalendarModal } from "../../CalendarModal";

export const ClubSectionServices = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      id="clubSectionServices"
      className="relative w-full bg-customWhite"
    >
      {/* Fondo con corte diagonal */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="h-[60vh] sm:h-[55vh] md:h-[50vh] w-full bg-gradient-to-tr from-customSecondary via-customPrimary to-customWhite"
          style={{
            clipPath: "polygon(30% 0, 100% 18%, 100% 100%, 0 100%)",
          }}
        />
      </motion.div>

      {/* Contenido */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        {/* Header comprimido y elegante */}
        <div className="mb-8 sm:mb-10 text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block rounded-full bg-gradient-to-r from-customNobuGreen to-customPrimary px-6 py-2 text-sm sm:text-base font-bold text-white shadow-lg"
          >
            Sistema de Gestión Completo
          </motion.span>
          <p className="mt-4 text-sm sm:text-lg text-customGrayText">
            Todo lo que necesitas para administrar tu club deportivo
          </p>
        </div>

        {/* Tarjeta principal */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="rounded-3xl border border-customGrayBorder bg-white/95 backdrop-blur-md shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-12">
            {/* Columna izquierda: features */}
            <div className="space-y-5">
              {[
                { t: "Paga por la app", s: "Pagos instantáneos y seguros" },
                { t: "Panel de Administración", s: "Control total desde un solo lugar" },
                { t: "App Móvil para Socios", s: "Reservas y pagos desde el celular" },
                { t: "Control de Caja", s: "Reportes financieros automáticos" },
                { t: "Calendario de Eventos", s: "Organiza torneos y actividades" },
                { t: "Gestión de Socios", s: "Base de datos completa y segura" },
              ].map((item, i) => (
                <motion.div
                  key={item.t}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.55 + i * 0.08 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-customNobuGreen shadow-md">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-base sm:text-lg font-semibold text-customNobuColor">
                      {item.t}
                    </p>
                    <p className="text-xs sm:text-sm text-customGrayText">{item.s}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Columna derecha: métricas + CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center justify-center"
            >
              <div className="w-full rounded-2xl border border-customGrayBorder bg-white p-6 sm:p-8 shadow-xl">
                <h3 className="mb-6 text-center text-xl font-bold text-customNobuColor">
                  Beneficios del Sistema
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { v: "+40%", l: "Aumento en ocupación" },
                    { v: "-60%", l: "Menos trabajo administrativo" },
                    { v: "24/7", l: "Disponibilidad de reservas" },
                    { v: "95%", l: "Satisfacción de socios" },
                  ].map((m) => (
                    <div key={m.l} className="text-center">
                      <div className="mb-1 text-3xl font-extrabold leading-none text-customNobuGreen">
                        {m.v}
                      </div>
                      <div className="text-xs sm:text-sm text-customGrayText">{m.l}</div>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={openModal}
                  className="mt-8 w-full rounded-lg bg-custom-gradient px-6 py-3 font-semibold text-white shadow-lg"
                >
                  Solicitar Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Elementos flotantes decorativos (arbitrary values válidos) */}
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 12, 0], scale: [1, 1.18, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[18%] top-[22%] h-14 w-14 rounded-full bg-gradient-to-br from-customNobuGreen to-customPrimary opacity-20 shadow-lg"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -12, 0], scale: [1, 1.35, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute left-[16%] bottom-[22%] h-10 w-10 rounded-full bg-gradient-to-br from-customPrimary to-customNobuGreen opacity-15 shadow-lg"
      />
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 8, 0], scale: [1, 1.22, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
        className="absolute left-[33%] top-1/2 h-8 w-8 rounded-full bg-gradient-to-br from-customNobuGreen to-customPrimary opacity-25 shadow-lg"
      />

      {/* Modal del calendario */}
      <CalendarModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};
