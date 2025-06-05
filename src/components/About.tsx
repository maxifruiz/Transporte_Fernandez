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
                {/* Placeholder for customer image */}
                <img
                  src="/src/assets/1000695413.jpg"
                  alt="Vehículo de transporte de Transporte Fernandez"
                  className="w-full h-auto object-cover max-h-[400px]"
                  style={{ filter: 'none' }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-black text-white p-4 rounded-lg transform transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                <p className="font-bold text-xl">+4 años</p>
                <p>de experiencia</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Nuestra Historia</h3>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Transporte Fernandez cuenta con más de 4 años de experiencia transportando todo tipo de productos congelados. 
              Estamos comprometidos a entregar con puntualidad, cuidado y confiabilidad para satisfacer las necesidades 
              tanto de vendedores como de compradores en Capital y GBA.
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
                  <p className="text-gray-600">Capital y GBA</p>
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
