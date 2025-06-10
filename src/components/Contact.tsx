import React, { useState } from 'react';
import { Phone, Mail, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Gracias por tu mensaje. Te contactaremos pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos listos para atender tus necesidades de transporte. Contáctanos para recibir una cotización personalizada.
          </p>
          <div className="w-20 h-1 bg-black mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center transform hover:scale-[1.02]"
                >
                  <span>Enviar consulta</span>
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md h-full transition-transform duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-gray-100 p-3 rounded-lg mr-4 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/5491172226999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      01172226999
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gray-100 p-3 rounded-lg mr-4 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:Transportefernandez2021@gmail.com"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Transportefernandez2021@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gray-100 p-3 rounded-lg mr-4 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ubicación</h4>
                    <p className="text-gray-600">Morón, Zona Oeste</p>
                    <p className="text-gray-600">Cobertura: AMBA</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/5491172226999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 text-center transform hover:scale-[1.02]"
                >
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
