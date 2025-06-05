import React, { useState, useEffect } from 'react';
import { Truck } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Truck className={`h-8 w-8 mr-2 ${scrolled ? 'text-black' : 'text-white'}`} />
          <span className={`text-xl font-bold ${scrolled ? 'text-black' : 'text-white'}`}>
            Transporte Fernández
          </span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#inicio"
                onClick={(e) => handleNavClick(e, 'inicio')}
                className={`${scrolled ? 'text-black' : 'text-white'} hover:text-gray-300 transition-colors`}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#nosotros"
                onClick={(e) => handleNavClick(e, 'nosotros')}
                className={`${scrolled ? 'text-black' : 'text-white'} hover:text-gray-300 transition-colors`}
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                onClick={(e) => handleNavClick(e, 'servicios')}
                className={`${scrolled ? 'text-black' : 'text-white'} hover:text-gray-300 transition-colors`}
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#clientes"
                onClick={(e) => handleNavClick(e, 'clientes')}
                className={`${scrolled ? 'text-black' : 'text-white'} hover:text-gray-300 transition-colors`}
              >
                Clientes
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, 'contacto')}
                className={`${scrolled ? 'text-black' : 'text-white'} hover:text-gray-300 transition-colors`}
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <button 
          className={`md:hidden ${scrolled ? 'text-black' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fadeIn">
          <ul className="py-2 px-4">
            <li className="py-2">
              <a
                href="#inicio"
                onClick={(e) => handleNavClick(e, 'inicio')}
                className="block text-black hover:text-gray-600 transition-colors"
              >
                Inicio
              </a>
            </li>
            <li className="py-2">
              <a
                href="#nosotros"
                onClick={(e) => handleNavClick(e, 'nosotros')}
                className="block text-black hover:text-gray-600 transition-colors"
              >
                Nosotros
              </a>
            </li>
            <li className="py-2">
              <a
                href="#servicios"
                onClick={(e) => handleNavClick(e, 'servicios')}
                className="block text-black hover:text-gray-600 transition-colors"
              >
                Servicios
              </a>
            </li>
            <li className="py-2">
              <a
                href="#clientes"
                onClick={(e) => handleNavClick(e, 'clientes')}
                className="block text-black hover:text-gray-600 transition-colors"
              >
                Clientes
              </a>
            </li>
            <li className="py-2">
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, 'contacto')}
                className="block text-black hover:text-gray-600 transition-colors"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;