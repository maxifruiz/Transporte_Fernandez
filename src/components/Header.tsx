import React, { useState, useEffect } from 'react';

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
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Logo Transporte Fernandez"
            className="w-8 h-8 max-w-[32px] max-h-[32px] object-contain mr-2 shrink-0"
          />
          <span className={`text-xl font-bold ${scrolled ? 'text-black' : 'text-white'}`}>
            Transporte Fernandez
          </span>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {['inicio', 'nosotros', 'servicios', 'clientes', 'contacto'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`${scrolled ? 'text-black' : 'text-white'} hover:text-gray-300 transition-colors`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
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
              d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fadeIn">
          <ul className="py-2 px-4">
            {['inicio', 'nosotros', 'servicios', 'clientes', 'contacto'].map((item) => (
              <li key={item} className="py-2">
                <a
                  href={`#${item}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className="block text-black hover:text-gray-600 transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
