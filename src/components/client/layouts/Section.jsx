import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Section = () => {
  const images = [
    "https://assets.glxplay.io/web/images/Domino_1920x1080_S.max-1920x1080.jpg",
    "https://file.baothuathienhue.vn/data2/image/fckeditor/upload/2019/20190502/images/aven-ger.jpg?dpi=150&quality=100&w=1920",
    "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQinfRmYn8KuwYpK1-UPo1kn1QcPFwKZWTVJEe73N6Q_Ghb7zovxnro2lXTrKaRLhRenrC9rdTtdhTAXWuVEepMtui37rp0zJqOh.jpg?r=561",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqiN3OIx2sLCt5Ull5M_qj0S0nRiv82YDnPA&s",
  ];

  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

     
   
    </div>
  );
};

export default Section;

