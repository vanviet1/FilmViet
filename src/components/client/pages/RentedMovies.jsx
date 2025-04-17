import React, { useContext } from "react";
import { ContextMovies } from "../../../context/MovieProvider";
import { ContextCategories } from "../../../context/CategoriesProvider";
import { FaPlay, FaHeart } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function RentedMovies() {
  const movies = useContext(ContextMovies);
  const categories = useContext(ContextCategories);

  // Lấy ID danh mục "Phim thuê"
  const seriesCategory = categories?.find((cate) => cate.name === "Phim thuê");
  const seriesCategoryId = seriesCategory?.id;

  // Lọc danh sách phim
  const seriesMovies = movies?.filter((movie) =>
    movie.listCate.includes(seriesCategoryId)
  );

  return (
    <div className="min-h-screen bg-gray-800 text-white px-6 sm:px-4 md:px-8 pt-20 pb-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    {seriesMovies?.map((item) => (
    <Link key={item.id} to={`/movies/${item.id}`}>
    <div className="relative flex flex-col justify-between h-[400px] w-full max-w-[90%] sm:max-w-full mx-auto rounded-2xl shadow-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.03] bg-gray-700">
      <img
        src={item.imgUrl}
        alt={item.name}
        className="w-full h-[320px] object-cover object-top"
        style={{
          imageRendering: "-webkit-optimize-contrast",
        }}
      />
  
      <div className="flex justify-center items-center h-[80px]">
        <span className="text-white hover:text-[#15B088] font-semibold text-sm sm:text-base text-center transition-colors duration-300">
          {item.name}
        </span>
      </div>
  
      {/* Overlay hover */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center gap-4 transition-opacity duration-300">
        <div className="flex gap-4">
          <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition">
            <FaPlay size={16} className="text-black" />
          </button>
          <button className="w-9 h-9 rounded-full bg-pink-500 flex items-center justify-center shadow-md hover:scale-110 transition">
            <FaHeart size={16} className="text-white" />
          </button>
          <button className="w-9 h-9 rounded-full bg-yellow-500 flex items-center justify-center shadow-md hover:scale-110 transition">
            <BiBookmark size={16} className="text-white" />
          </button>
        </div>
  
        <span className="text-white text-xs sm:text-sm bg-gray-800/80 px-3 py-3 rounded-lg max-w-[90%] text-center">
          {item.description.length > 50
            ? `${item.description.slice(0, 50)}...`
            : item.description}
        </span>
      </div>
    </div>
  </Link>
  
    ))}
  </div>
</div>

  
  );
}
