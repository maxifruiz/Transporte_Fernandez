import React from 'react';

const basePath = import.meta.env.BASE_URL;

const clients = [
  { name: 'Grupo Gala Catering', image: `${basePath}cliente1.jpeg` },
  { name: 'Easy Cook Servicios Gastronómicos', image: `${basePath}cliente2.png` },
  { name: 'Wüla Comida con Carácter', image: `${basePath}cliente3.png` },
  { name: 'TSD Catering', image: `${basePath}cliente4.jpeg` }
];

// Triplicamos para que nunca se vea vacío
const duplicatedClients = [...clients, ...clients, ...clients];

const Clients = () => {
  return (
    <section id="clientes" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Algunos de nuestros clientes</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        {/* Carrusel continuo */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-6 items-center">
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-28 min-w-[120px] sm:min-w-[150px] md:min-w-[180px] bg-gray-100 rounded-lg shadow px-4"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="h-full max-h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Texto final y botón */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Confían en nosotros empresas líderes en la industria alimenticia y de productos congelados.
          </p>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            Únete a nuestros clientes
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clients;


