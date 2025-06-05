import React from 'react';

const basePath = import.meta.env.BASE_URL;

const clients = [
  { name: 'Grupo Gala Catering', image: `${basePath}cliente1.jpeg` },
  { name: 'Easy Cook Servicios Gastronómicos', image: `${basePath}cliente2.png` },
  { name: 'Wüla Comida con Carácter', image: `${basePath}cliente3.png` },
  { name: 'TSD Catering', image: `${basePath}cliente4.jpeg` },
];

const Clients = () => {
  return (
    <section id="clientes" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Algunos de nuestros clientes</h2>
          <div className="w-24 h-1 bg-black mx-auto" />
        </div>

        {/* Carrusel infinito */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-8 animate-marquee min-w-fit">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-24 sm:h-28 min-w-[8rem] sm:min-w-[10rem] bg-gray-100 rounded-xl shadow-md px-4 py-2 transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="h-full max-h-20 w-auto object-contain"
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

      {/* Animación CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Clients;

