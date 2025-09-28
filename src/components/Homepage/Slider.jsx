import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import LazyImage from "../LazyImage/LazyImage";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    img: "/slider/auto.jpg",
    title: "Automotive",
  },
  {
    img: "/slider/oil.jpg",
    title: "Oil Field Equipment",
  },
  {
    img: "/slider/tools.jpg",
    title: "Machine Tools",
  },
  {
    img: "/slider/construction.jpg",
    title: "Construction & Mining Equipment",
  },
  {
    img: "/slider/electric.jpg",
    title: "Electric Power Generation Equipment",
  },
];

const Slider = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="px-5 my-10 py-10">
        <p className='text-md tracking-wider text-center text-[var(--blue)]'>INDUSTRY</p>
        <h2 className="text-4xl font-light text-center py-4 mb-10 pb-10">
          WE SERVE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.map((item, index) => (
            <div key={index} className="relative group rounded-lg overflow-hidden shadow-lg">
              <LazyImage
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/60 p-3">
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-5 my-10 py-10">
      <p className='text-md tracking-wider text-center text-[var(--blue)]'>INDUSTRY</p>
      <h2 className="text-4xl font-light text-center py-4 mb-10 pb-10">
        WE SERVE
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative group rounded-lg overflow-hidden shadow-lg">
              <LazyImage
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/60 p-3">
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
