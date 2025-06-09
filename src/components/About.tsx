import React from 'react';
import { Truck, Shield, Clock, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Nosotros</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="relative group">
              <div className="bg-gray-200 rounded-lg overflow-hidden transition-transform duration-500 transform group-hover:scale-[1.02]">
                {/* ✅ Usar ruta dinámica compatible con Vite y GitHub Pages */}
                <img
                  src={`${import.meta.env.BASE_URL}1000695413.jpg`}
                  alt="Vehículo de transporte de Transporte Fernandez"
                  className="w-full h-auto object-cover max-h-[400px]"
                  style={{ filter: 'none' }}
                />
              </div>
              {/* 🔴 Cartel "+4 años" eliminado */}
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Nuestra Historia</h3>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Desde 2021 en Transporte Fernandez nos dedicamos a transportar todo tipo
              de productos congelados. Estamos comprometidos a entregar con puntualidad,
              cuidado y confiabilidad para satisfacer las necesidades de nuestros
              clientes en zona del AMBA.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start group">
                <div className="bg-gray-100 p-3 rounded-lg mr-4 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Confiabilidad</h4>
                  <p className="text-gray-600">Servicio seguro y responsable</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-gray-100 p-3 rounded-lg mr-4 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Puntualidad</h4>
                  <p className="text-gray-600">Entregas a tiempo</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-gray-100 p-3 rounded-lg mr-4 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Equipamiento</h4>
                  <p className="text-gray-600">Vehículos adecuados</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-gray-100 p-3 rounded-lg mr-4 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Cobertura</h4>
                  <p className="text-gray-600">AMBA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


