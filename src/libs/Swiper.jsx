import { Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MySwiper = ({children, breakpoints }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={4}
      breakpoints={breakpoints}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
     {children}
    </Swiper>
  );
};

export default MySwiper;
