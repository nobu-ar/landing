import { useState } from 'react';
import { Hero } from './components/Hero';
import { Features1 } from './components/Features1';
import { Features2 } from './components/Modulos';
import { FeaturesDiagonal } from './components/FeaturesDiagonal';
import { PersonalSection } from './components/sections/PersonalSection';
// ... importa otros componentes necesarios

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <>
      {currentSection === 'home' && (
        <>
          <Hero />
          <Features1 />
          <Features2 setCurrentSection={setCurrentSection} />
          <FeaturesDiagonal setCurrentSection={setCurrentSection} />
          {/* Otros componentes de la página principal */}
        </>
      )}
    </>
  );
}

export default App; 