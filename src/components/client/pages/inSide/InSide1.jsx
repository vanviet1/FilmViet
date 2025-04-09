import React, { useContext } from "react";
import { ContextMovies } from "../../../../context/MovieProvider";
import { ContextCategories } from "../../../../context/CategoriesProvider";
import { FaPlay, FaHeart } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import MySwiper from "../../../../libs/Swiper";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const InSide1 = () => {
  const movies = useContext(ContextMovies);
  const categories = useContext(ContextCategories);

  // Lấy ID danh mục "Drama"
  const seriesCategory = categories?.find((cate) => cate.name === "Drama" && "Gia đình");
  const seriesCategoryId = seriesCategory?.id;

  // Lọc danh sách phim
  const seriesMovies = movies?.filter((movie) =>
    movie.listCate.includes(seriesCategoryId)
  );

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        Gia đình <MdKeyboardArrowRight className="text-3xl" />
      </h2>

      <MySwiper
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 10 },      // mobile
          768: { slidesPerView: 3, spaceBetween: 15 },    // tablet (md)
          1024: { slidesPerView: 4, spaceBetween: 20 },   // desktop
        }}
      >
        {seriesMovies.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/movies/${item.id}`}>
              <div className="relative max-w-[280px]  rounded-2xl shadow-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.03]">
                {/* Ảnh poster phim */}
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="w-full h-[350px] object-cover object-top rounded-2xl"
                  style={{
                    imageRendering: "-webkit-optimize-contrast",
                  }}
                />

                {/* Tiêu đề phim */}
                <div className="text-center pt-3">
                  <span className="text-white hover:text-[#15B088] font-semibold text-lg md:text-xl transition-colors duration-300">
                    {item.name}
                  </span>
                </div>

                {/* Overlay hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center gap-4 transition-opacity duration-300">
                  {/* Nút điều khiển */}
                  <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition">
                      <FaPlay size={18} className="text-black" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center shadow-md hover:scale-110 transition">
                      <FaHeart size={18} className="text-white" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center shadow-md hover:scale-110 transition">
                      <BiBookmark size={18} className="text-white" />
                    </button>
                  </div>

                  {/* Mô tả ngắn */}
                  <span className="text-white text-sm bg-gray-800/80 px-3 py-2 rounded-lg max-w-[85%] text-center">
                    {item.description.length > 50
                      ? `${item.description.slice(0, 50)}...`
                      : item.description}
                  </span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </MySwiper>
    </div>
  );
};

export default InSide1;
