import React from "react";
import { motion } from "framer-motion";

const CheckIcon = () => (
  <svg className="h-3.5 w-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const AnimatedCounter = ({ end, duration = 2 }) => {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);
  
  return <span>{count}+</span>;
};

const ProgressBar = ({ percentage, delay = 0 }) => (
  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${percentage}%` }}
      transition={{ delay, duration: 1.5, ease: "easeOut" }}
      className="h-full bg-gradient-to-r from-customNobuGreen to-customPrimary rounded-full relative"
    >
      <motion.div
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-white/30 rounded-full"
      />
    </motion.div>
  </div>
);

const features = [
  {
    title: "Reservas Online",
    subtitle: "24/7 desde nuestra app",
    pillBg: "bg-customNobuGreen",
    icon: (
      <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
  },
  {
    title: "Gestión de Pagos",
    subtitle: "Paga con tu celular",
    pillBg: "bg-customNobuColor",
    icon: (
      <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
      </svg>
    ),
  },
  {
    title: "Base de Socios",
    subtitle: "Control completo de membresías",
    pillBg: "bg-customNobuGreen",
    icon: (
      <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
  },
];

const whyUs = [
  {
    t: "Aumenta tus ingresos",
    s: "Optimiza la ocupación de canchas y reduce cancelaciones",
    metric: "30%",
    metricLabel: "más ingresos",
    icon: "💰",
  },
  {
    t: "Ahorra tiempo",
    s: "Automatiza procesos y reduce trabajo administrativo",
    metric: "5h",
    metricLabel: "por semana",
    icon: "⏰",
  },
  {
    t: "Mejora la experiencia",
    s: "Socios más satisfechos con reservas fáciles y rápidas",
    metric: "95%",
    metricLabel: "satisfacción",
    icon: "⭐",
  },
];

export const ClubSectionMiddle = () => {
  return (
    <section id="clubSectionMiddle" className="relative w-full bg-transparent overflow-hidden">
      {/* Contenedor principal en grilla (sin absolute para layout) */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center min-h-[85vh]">
          {/* Columna izquierda: ¿Por qué elegir Nobu? */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full"
          >
            <div className="rounded-2xl border border-customGrayBorder bg-white/95 backdrop-blur-sm shadow-xl p-6 sm:p-8 relative overflow-hidden">
              {/* Header con icono animado */}
              <div className="flex items-center mb-6">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-customNobuColor text-center">
                  ¿Por qué elegir Nobu?
                </h3>
              </div>

              <div className="space-y-6">
                {whyUs.map((item, i) => (
                  <motion.div
                    key={item.t}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="group relative"
                  >
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-customNobuGreen/5 to-customPrimary/5 border border-customGrayBorder/50 hover:border-customNobuGreen/30 transition-all duration-300">
                      {/* Icono con animación */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-customNobuGreen to-customPrimary shadow-lg group-hover:shadow-xl transition-all duration-300"
                      >
                        <span className="text-white text-sm">{item.icon}</span>
                      </motion.div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm sm:text-base font-semibold text-customNobuColor group-hover:text-customNobuGreen transition-colors">
                            {item.t}
                          </h4>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.6 + i * 0.2, type: "spring", stiffness: 200 }}
                            className="text-right"
                          >
                            <div className="text-lg font-bold text-customNobuGreen">
                              {item.metric}
                            </div>
                            <div className="text-xs text-customGrayText">
                              {item.metricLabel}
                            </div>
                          </motion.div>
                        </div>
                        <p className="text-xs sm:text-sm text-customGrayText mb-3">
                          {item.s}
                        </p>
                        
                        {/* Barra de progreso animada */}
                        <ProgressBar 
                          percentage={item.metric === "30%" ? 85 : item.metric === "5h" ? 70 : 95} 
                          delay={0.8 + i * 0.2}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Columna derecha: Características principales */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="w-full"
          >
            <div className="rounded-2xl border border-customGrayBorder bg-white/95 backdrop-blur-sm shadow-2xl p-6 sm:p-8 relative overflow-hidden">
              {/* Header con efecto de partículas */}
              <div className="flex items-center justify-center mb-8">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-customNobuColor">
                  Características Principales
                </h3>
              </div>

              <div className="space-y-6">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                    whileHover={{ 
                      scale: 1.03,
                      y: -2,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className="group relative"
                  >
                    <div className="rounded-xl border border-customGrayBorder/50 bg-gradient-to-r from-customNobuGreen/5 to-customPrimary/5 p-5 hover:border-customNobuGreen/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                      {/* Efecto de brillo en hover */}
                      <motion.div
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                      
                      <div className="flex items-center gap-4 relative z-10">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${f.pillBg} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        >
                          {f.icon}
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm sm:text-base font-semibold text-customNobuColor group-hover:text-customNobuGreen transition-colors">
                              {f.title}
                            </h4>
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.7 + i * 0.2, type: "spring", stiffness: 200 }}
                              className="flex items-center space-x-1"
                            >
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                className="w-2 h-2 rounded-full bg-customNobuGreen"
                              />
                              <span className="text-xs text-customGrayText">Activo</span>
                            </motion.div>
                          </div>
                          <p className="text-xs sm:text-sm text-customGrayText">
                            {f.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer con estadísticas en tiempo real */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-8 p-4 rounded-lg bg-gradient-to-r from-customPrimary/10 to-customNobuGreen/10 border border-customPrimary/20"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.7, type: "spring", stiffness: 200 }}
                      className="text-lg font-bold text-customPrimary"
                    >
                      <AnimatedCounter end={24} />
                    </motion.div>
                    <div className="text-xs text-customGrayText">horas/día</div>
                  </div>
                  <div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.9, type: "spring", stiffness: 200 }}
                      className="text-lg font-bold text-customNobuGreen"
                    >
                      <AnimatedCounter end={7} />
                    </motion.div>
                    <div className="text-xs text-customGrayText">días/semana</div>
                  </div>
                  <div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.1, type: "spring", stiffness: 200 }}
                      className="text-lg font-bold text-customNobuColor"
                    >
                      <AnimatedCounter end={365} />
                    </motion.div>
                    <div className="text-xs text-customGrayText">días/año</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Elementos decorativos flotantes (sí absolute, con valores válidos) */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 12, 0], scale: [1, 1.18, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute left-[32%] top-[24%] h-10 w-10 rounded-full bg-gradient-to-br from-customNobuGreen to-customPrimary opacity-20 shadow-lg"
      />
      <motion.div
        animate={{ y: [0, 24, 0], rotate: [0, -10, 0], scale: [1, 1.28, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
        className="absolute right-[22%] bottom-[22%] h-6 w-6 rounded-full bg-gradient-to-br from-customPrimary to-customNobuGreen opacity-15 shadow-lg"
      />
    </section>
  );
};
