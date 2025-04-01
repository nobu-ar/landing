import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import spaces from '../assets/images/spaces.jpg';
// Importa las imágenes
import faltas from '../assets/images/faltas.png';
import Legajo from "../assets/images/legajo.png";
import registry from '../assets/images/registry.png';

export const Carrusel = () => {
  const imagenes = [
    { 
      src: spaces, 
      alt: 'Spaces', 
      caption: 'Ten ordenado tus servicios en un solo lugar' 
    },
    { 
      src: faltas, 
      alt: 'Faltas', 
      caption: 'Podrás gestionar tu sistema de multas' 
    },
    { 
      src: Legajo, 
      alt: 'Legajo', 
      caption: 'Obtén un registro de tus empleados'
    },
    { 
      src: registry, 
      alt: 'Registry', 
      caption: 'Da de alta al personal'
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 7000 }}
      loop={true}
      style={{ paddingBottom: '40px' }}
    >
      {imagenes.map((imagen, index) => (
        <SwiperSlide key={index}>
          <div style={{ position: 'relative' }}>
            <img src={imagen.src} alt={imagen.alt} style={{ width: '100%', height: 'auto' }} />
            {imagen.caption && (
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgb(11 219 144 / var(--tw-bg-opacity))',
                color: 'white',
                padding: '10px',
                textAlign: 'center'
              }}>
                {imagen.caption}
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrusel;
