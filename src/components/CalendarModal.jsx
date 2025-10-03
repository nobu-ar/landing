import React from "react";
import { motion } from "framer-motion";

export const CalendarModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-full max-w-4xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header del modal */}
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-customNobuGreen to-customPrimary">
          <h3 className="text-xl font-bold text-white">
            Agenda tu Demo
          </h3>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </div>

        {/* Iframe del calendario */}
        <div className="p-6">
          <iframe 
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2zSqgVFcuVzptWhs23heY0yUMqGW6kaNdeq4kkdwBveXI5npTpSoHFoMm655n9AESoHodN4UGZ?gv=true" 
            style={{ border: 0 }} 
            width="100%" 
            height="600" 
            frameBorder="0"
            className="rounded-lg"
            title="Calendario de citas"
          />
        </div>

        {/* Footer del modal */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-center space-x-2 text-sm text-customGrayText">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Selecciona una fecha y hora que te convenga</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
