import { useEffect, useState } from "react";

export const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    
    // Cleanup del event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 2000) {
      setIsVisible(true);
    } else if (scrolled <= 3000) {
      setIsVisible(false);
    }
  };

  const scrollToFeatures2 = () => {
    // Buscar el elemento de Features2 y hacer scroll hacia él
    const features2Element = document.querySelector('section[id="modulos"]') || 
                            document.querySelector('section[id="features"]');
    
    if (features2Element) {
      features2Element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Si no encuentra el elemento específico, intentar redirigir a home
      const homeElement = document.getElementById('home');
      if (homeElement) {
        homeElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Si todo falla, volver al inicio de la página 
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-6 right-2 custom-button-colored rounded py-2 px-4 text-white transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex justify-center items-center z-10000000"
          onClick={scrollToFeatures2}
        >
          Visita más módulos
        </div>
      )}
    </>
  );
};
