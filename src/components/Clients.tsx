import React from 'react';

const basePath = import.meta.env.BASE_URL;

const clients = [
  { name: 'Grupo Gala Catering', image: `${basePath}cliente1.jpg` },
  { name: 'Easy Cook Servicios Gastronómicos', image: `${basePath}cliente2.jpg` },
  { name: 'Wüla Comida con Carácter', image: `${basePath}cliente3.jpg` },
  { name: 'TSD Catering', image: `${basePath}cliente4.jpg` },
];

// Triplicamos para lograr efecto de carrusel infinito
const duplicatedClients = [...clients, ...clients, ...clients];

const Clients = () => {
  return (
    <section id="clientes" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Algunos de nuestros clientes</h2>
          <div className="w-24 h-1 bg-black mx-auto" />
        </div>

        {/* Carrusel scroll infinito */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-8 items-center animate-scroll whitespace-nowrap">
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-28 w-44 sm:w-48 md:w-52 bg-gray-100 rounded-xl shadow-md px-4 py-2 transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-h-20 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Texto final y botón */}
        <div className="text-center mt-14">
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Confían en nosotros empresas líderes en la industria alimenticia y de productos congelados.
          </p>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-transform duration-300 hover:scale-105"
          >
            Únete a nuestros clientes
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clients;



