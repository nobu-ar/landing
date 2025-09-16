import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoColorVersion2 from '/Logo_Color_Version_1.svg';
import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { GithubIcon } from "../assets/icons/GithubIcon";

const navbarLinks = [
  { label: "Inicio", href: "/#inicio", ariaLabel: "Inicio" },
  { label: "Lo que te ofrecemos", href: "/#espacios", ariaLabel: "Espacios", hasDropdown: true },
  { label: "Impulsate con IA", href: "/#modulos", ariaLabel: "Modulos" },
  { label: "Nosotros", href: "/#aboutus", ariaLabel: "Nosotros" },
  { label: "Contactanos", href: "/contact", ariaLabel: "Contact" },
];

const dropdownItems = [
  {
    category: "Gestion administrativa",
    items: [
      { label: "Clubes", href: "/club" },
      { label: "Personal", href: "/personal" },
      //{ label: "Cupones", href: "/cupones" },
      { label: "Comercios", href: "/comercios" },
      { label: "Finanzas", href: "/finanzas" },
      { label: "Mutuales", href: "/mutual" },
    { label: "Tribunales de Falta", href: "/faltas" }
    ]
  },
  {
    category: "Data Analytics",
    items: [
      { label: "Redes Sociales", href: "/media" }
    ]
  }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  React.useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-full h-16 flex flex-col justify-center items-center fixed top-0 left-0 bg-customPrimary z-[9999] lg:backdrop-blur-xl shadow-lg">
        <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <a className="navbar-link" href="#inicio" aria-label="Inicio">
              <div className="flex justify-start grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <img src={LogoColorVersion2} alt="Nobu" className="w-10 h-10 navbar-place" />
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div className="hidden lg:flex h-full items-center pb-2  justify-end">
              {navbarLinks.map(({ href, label, ariaLabel, hasDropdown }) => (
                <div key={label} className="relative flex items-center">
                  {hasDropdown ? (
                    <div
                      className="navbar-link cursor-pointer flex items-center "
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      {label}
                    </div>
                  ) : (
                    <a
                      className="navbar-link flex items-center "
                      href={href}
                      aria-label={ariaLabel}
                    >
                      {label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <div
            className="lg:hidden flex flex-col border-solid border border-white rounded-md cursor-pointer hover:bg-customNobuGreen"
            onClick={toggleMenu}
          >
            <div className="w-5 h-0.5 bg-white  mb-1"></div>
            <div className="w-5 h-0.5 bg-white mb-1"></div>
            <div className="w-5 h-0.5 bg-white "></div>
          </div>
        </div>
        {/* Mobile navbar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 3, duration: 0.9 }}
              animate={{ opacity: 1, duration: 0.3 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 3, duration: 5 }}
            >
              <div
                className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customTercery z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-customDarkBg3
        "
              >
                {navbarLinks.map(({ label, href, ariaLabel }) => (
                  <a
                    key={href}
                    className="navbar-link"
                    href={href}
                    onClick={() => setIsOpen(false)}
                    aria-label={ariaLabel}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Dropdown Menu - Fixed positioning outside nav */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, duration: 2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, duration: 2 }}
            transition={{ duration: 0.4 }}
            className="fixed top-16 w-full bg-customWhite border-gray-700 shadow-lg z-[9999]"
            style={{ minHeight: '5rem' }}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="max-w-7xl mx-auto py-6  top-0 z-[9999]">
              <div className="flex justify-end space-x-16 z-[9999]">
                {dropdownItems.map((category) => (
                  <div key={category.category} className="flex flex-col items-left">
                    <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent ">
                      {category.category}
                    </h3>
                    {category.category === "Gestion administrativa" ? (
                      // Para módulos, organizar en 2 columnas
                      <div className="grid grid-cols-3 gap-x-2 gap-y-5">
                        {category.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="text-sm text-gray-600 hover:text-customNobuGreen transition-colors duration-200 whitespace-nowrap flex items-center"
                          >
                            <span className="w-1.5 h-1.5 bg-customNobuGreen rounded-full mr-2 flex-shrink-0"></span>
                            {item.label}
                          </a>
                        ))}
                      </div>
                    ) : (
                      // Para servicios, lista simple
                      <div className="flex flex-col items-left space-y-10">
                        {category.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="text-sm text-gray-600 hover:text-customNobuGreen transition-colors duration-200 flex items-center"
                          >
                            <span className="w-1.5 h-1.5 bg-customNobuGreen rounded-full mr-2 flex-shrink-0"></span>
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
