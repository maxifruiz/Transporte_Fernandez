import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const Hero = () => {
  const basePath = import.meta.env.BASE_URL;
  const images = [
    `${basePath}1000695415.jpg`,
    `${basePath}1000695416.jpg`,
    `${basePath}1000695418.jpg`,
    `${basePath}1000695419.jpg`
  ];

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 transform scale-105"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-60" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 leading-tight animate-fadeIn">
          Transporte Fernandez
        </h1>
        <p className="text-white text-xl md:text-2xl mb-8 max-w-3xl animate-fadeInUp">
          Conservamos la frescura, entregamos puntualidad
        </p>
        <a
          href="#contacto"
          onClick={handleContactClick}
          className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
          style={{ animationDelay: '0.2s' }}
        >
          Contáctanos
        </a>
      </div>
    </section>
  );
};

export default Hero;
