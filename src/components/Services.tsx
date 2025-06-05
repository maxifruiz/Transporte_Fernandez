import React from 'react';
import { Snowflake, Truck, Clock, ShieldCheck } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1">
      <div className="mb-6 inline-block bg-gray-100 p-4 rounded-lg transition-all duration-300 group-hover:bg-black group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones especializadas en el transporte de productos congelados, garantizando la integridad de su mercadería en todo momento.
          </p>
          <div className="w-20 h-1 bg-black mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Snowflake className="h-8 w-8" />}
            title="Transporte Refrigerado"
            description="Vehículos equipados con sistemas de refrigeración para mantener la cadena de frío de sus productos."
          />
          <ServiceCard
            icon={<Truck className="h-8 w-8" />}
            title="Logística Personalizada"
            description="Soluciones adaptadas a las necesidades específicas de cada cliente, optimizando rutas y tiempos."
          />
          <ServiceCard
            icon={<Clock className="h-8 w-8" />}
            title="Entregas Puntuales"
            description="Compromiso con los horarios establecidos, respetando los tiempos acordados."
          />
          <ServiceCard
            icon={<ShieldCheck className="h-8 w-8" />}
            title="Seguridad Garantizada"
            description="Sus productos están asegurados durante todo el trayecto, brindándole tranquilidad."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;