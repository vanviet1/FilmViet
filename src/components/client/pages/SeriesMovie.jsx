import { useContext } from "react";
import { ContextMovies } from "../../../context/MovieProvider";
import { ContextCategories } from "../../../context/CategoriesProvider";
import { FaPlay, FaHeart } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { Link } from "react-router-dom";
const SeriesMovie = () => {
  const movies = useContext(ContextMovies);
  const categories = useContext(ContextCategories);

  // Tìm ID của danh mục "Phim bộ"
  const seriesCategory = categories?.find((cate) => cate.name === "Phim bộ");
  const seriesCategoryId = seriesCategory?.id;

  // Lọc phim có danh mục "Phim bộ"
  const seriesMovies = movies?.filter((movie) =>
    movie.listCate.includes(seriesCategoryId)
  );

  return (
    <div className="min-h-screen bg-black text-white px-6 sm:px-4 md:px-8 pt-20 pb-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {seriesMovies?.map((item) => (
        <Link to={`/movies/${item.id}`} key={item.id}>
          <div className="relative w-full max-w-[95%] sm:max-w-full mx-auto rounded-2xl shadow-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.03]">
            {/* Poster phim */}
            <img
              src={item.imgUrl}
              alt={item.name}
              className="w-full h-[420px] sm:h-[350px] object-cover object-top rounded-2xl"
              style={{
                imageRendering: "-webkit-optimize-contrast",
              }}
            />
  
            {/* Tên phim */}
            <div className="text-center pt-3 px-2">
              <span className="text-white hover:text-[#15B088] font-semibold text-base sm:text-lg md:text-xl transition-colors duration-300">
                {item.name}
              </span>
            </div>
  
            {/* Overlay hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center gap-4 transition-opacity duration-300">
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
  
              <span className="text-white text-xs sm:text-sm bg-gray-800/80 px-3 py-2 rounded-lg max-w-[90%] text-center">
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
};

export default SeriesMovie;
