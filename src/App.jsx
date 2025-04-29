import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Espacios } from './components/Espaces';
import { Modulos } from './components/Modulos';
import { FeaturesDiagonal } from './components/FeaturesDiagonal';
import { ClubSection } from './components/sections/ClubSection';
import { PersonalSection } from './components/sections/PersonalSection';
// Importa otros componentes de secciones según sea necesario

// Este componente será renderizado sólo en el cliente (browser)
export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Espacios />
            <Modulos />
            <FeaturesDiagonal />
            {/* Otros componentes de la página principal */}
          </>
        } />
        
        <Route path="/club" element={<ClubSection />} />
        <Route path="/personal" element={<PersonalSection />} />
        {/* Agrega rutas para otros módulos */}
      </Routes>
    </Router>
  );
};

// Este componente es para renderizado estático sin enrutamiento
export const HomePage = () => {
  return (
    <>
      <Hero />
      <Espacios />
      <Modulos />
      <FeaturesDiagonal />
      {/* Otros componentes de la página principal */}
    </>
  );
};

function App() {
  // Verificamos si estamos en el navegador
  const isBrowser = typeof window !== 'undefined';
  
  if (isBrowser) {
    return <AppRouter />;
  } else {
    // Renderizado del lado del servidor
    return <HomePage />;
  }
}

export default App; 