import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <img src="/logo-blanco.png" alt="Logo Transporte Fernández" className="h-10 w-auto mr-2" />
            <span className="text-xl font-bold">Transporte Fernández</span>
          </div>

          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="mb-2">Morón, Zona Oeste</p>
            <p>Servicios de transporte para productos congelados</p>
          </div>

          <button
            onClick={scrollToTop}
            className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
            aria-label="Volver arriba"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Transporte Fernández. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
