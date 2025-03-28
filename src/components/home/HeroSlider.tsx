import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "@styles/slider.css";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Bienvenidos a Cofradía",
    description: "Donde cada taza cuenta una historia",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Café de Origen",
    description: "Cultivado en las montañas de Suchitlán",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ven a Descubrirlo",
    description: "Un rincón de tradición y aroma",
  },
];

const HeroSlider: React.FC = () => {
  return (
    <section className="relative min-h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        effect="fade"
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative min-h-screen">
              <img
                src={slide.image}
                alt={`Imagen del café: ${slide.title}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <div className="max-w-3xl">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 drop-shadow">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
