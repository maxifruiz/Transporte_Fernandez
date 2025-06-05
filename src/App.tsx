import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WavesSeparator from './components/WavesSeparator';

function App() {
  return (
    <div className="font-sans text-gray-900">
      <div className="bg-white">
        <Header />
        <Hero />
        <WavesSeparator position="bottom" variant="wave" color="#f9f9f9" />
      </div>

      <div className="bg-[#f9f9f9]">
        <About />
        <WavesSeparator position="bottom" variant="curved" color="white" />
      </div>

      <div className="bg-white">
        <Services />
        <WavesSeparator position="bottom" variant="diagonal" color="#f9f9f9" />
      </div>

      <div className="bg-[#f9f9f9]">
        <Clients />
        <WavesSeparator position="bottom" variant="wave" color="white" />
      </div>

      <div className="bg-white">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
