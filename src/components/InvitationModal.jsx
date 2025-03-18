import { useState, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';
import { CloseIcon } from "../assets/icons/CloseIcon";




export const InvitationModal = ({ setIsOpen }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const form = useRef();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage(''); // Limpiar el mensaje de error cuando el usuario escribe
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setErrorMessage(''); // Limpiar el mensaje de error cuando el usuario escribe
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const canSubmit = () => {
    const lastSubmitted = localStorage.getItem('lastSubmitted');
    if (!lastSubmitted) return true;

    const now = new Date().getTime();
    const diff = now - lastSubmitted;
    const oneHour = 60 * 60 * 1000; // Una hora en milisegundos

    return diff > oneHour;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !name) {
      setErrorMessage('Por favor, ingresa tu nombre y email.');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Por favor, ingresa un email válido.');
      return;
    }

    if (!canSubmit()) {
      setErrorMessage('Ya recibimos tu mensaje. Te estaremos contestando lo antes posible.');
      return;
    }

    try {
      await emailjs.sendForm('service_2m9s84d', 'template_bphuiwl', form.current, 'IHu5ZgpQHTOJPtnP_');
      setName('');
      setEmail('');
      setErrorMessage('');
      setConfirmationMessage('¡Gracias! Nos pondremos en contacto a la brevedad.');
      localStorage.setItem('lastSubmitted', new Date().getTime());
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Error al enviar el email.');
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, zIndex: 50 }}
        animate={{ opacity: 1, zIndex: 50 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="w-full h-full bg-customDarkBgTransparentDarker fixed top-0 left-0 flex z-50 justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full h-screen item-center justify-center text-center sm:h-auto sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 rounded py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 mx-auto z-50"
            style={{
              background: 'linear-gradient(135deg, rgb(32, 92, 250), rgb(11, 219, 144))',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex relative text-center">
          
              
            

              <div className="w-full flex items-center tex-center flex-col justify-center pt-24 sm:pt-0">

                {confirmationMessage ? (
                  <div className="text-center text-white text-2xl font-bold">
                    {confirmationMessage}
                  </div>
                ) : (
                  <>
                    <h3 className="mb-7 text-2xl text-white font-bold leading-snug text-center items-center justify-center">
                      Te enviaremos un mail para ponernos en contacto
                    </h3>
                    <form ref={form} onSubmit={handleSubmit} className="flex flex-wrap -m-2">
                      <div className="w-full sm:w-4/5 p-2 mx-auto">
                        <input
                          className="px-4 py-4 w-full text-customNobuColor font-medium text-center placeholder-customNobuColor outline-none border bg-customWhite border-gray-300 rounded-lg focus:ring focus:ring-customNobuGreen focus:placeholder-transparent"
                          id="nameInput"
                          type="text"
                          name="user_name"
                          placeholder="Nombre y Apellido"
                          value={name}
                          onChange={handleNameChange}
                        />
                      </div>
                      <div className="w-full sm:w-4/5 p-2 mx-auto">
                        <input
                          className="px-4 py-4 w-full text-customNobuColor font-medium text-center placeholder-customNobuColor outline-none border bg-customWhite border-gray-300 rounded-lg focus:ring focus:ring-customNobuGreen focus:placeholder-transparent"
                          id="newsletterInput3-1"
                          type="email"
                          name="user_email"
                          placeholder="Email"
                          value={email}
                          onChange={handleEmailChange}
                        />
                      </div>
                      {errorMessage && (
                        <div className="w-full sm:w-4/5 p-2 mx-auto text-red-500 text-center">
                          {errorMessage}
                        </div>
                      )}
                      <div className="w-full sm:w-4/5 p-2 mt-4 mx-auto">
                        <button
                          className="py-4 px-6 w-full text-white font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-customNobuColor hover:bg-customNobuGreen transition ease-in-out duration-200"
                          type="submit"
                        >
                          Enviar
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
              <div
                className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
