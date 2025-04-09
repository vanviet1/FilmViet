import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ContextMovies } from "../../../context/MovieProvider";
import { Button, Chip, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { ContextActors } from "../../../context/ActorsProvider";
import { Contextcharacters } from "../../../context/CharacterProvider";
import { ContextCategories } from "../../../context/CategoriesProvider";
import { ContextAuthors } from "../../../context/AuthorsProvider";
import { getObjectById } from "../../../utils/FunctionConvert";

function MovieDetail() {
  const { id } = useParams();
  const movies = useContext(ContextMovies);
  const actors = useContext(ContextActors);
  const characters = useContext(Contextcharacters);
  const categories = useContext(ContextCategories);
  const authors = useContext(ContextAuthors);
  const [movieDetail, setMovieDetail] = useState(null);
  const [listActor,setListActor] = useState([])
  const [listCharacter, setListCharacter] = useState([])
  const [listCate, setListCate] = useState([])
 

 



  useEffect(() => {
    const data = movies.find((item) => item.id === id);
    setMovieDetail(data);
    const dataActor = actors.filter((actor)=> data?.listActor.includes(actor.id))
    setListActor(dataActor)
    const dataCharacter = characters.filter((character)=> data?.listCharacter.includes(character.id))
    setListCharacter(dataCharacter);
    const dataCategories = categories.filter((categorie)=> data?.listCate.includes(categorie.id))
    setListCate(dataCategories)
  }, [id, movies]);

  if (!movieDetail) {
    return <div className="min-h-screen bg-black text-white flex justify-center p-6 pt-20">
      <div className="text-center text-gray-500">Loading...</div>
      </div>;
  }
console.log(movieDetail);

  return (
    <>
    
      <div className="min-h-screen bg-black text-white flex justify-center p-6 pt-20">
      <div className="max-w-5xl w-full bg-gray-900 shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6">
        {/* Hình ảnh phim */}
        <div className="w-full md:w-1/3 flex justify-center">{/*  */}
          <img
            src={movieDetail.imgUrl}
            alt={movieDetail.title}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Nội dung chi tiết */}
        <div className="w-full md:w-2/3 space-y-4">
          <h1 className="text-3xl font-bold text-orange-400">{movieDetail.name}</h1>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="mb-2">
              <span className="font-semibold">Thời lượng: </span>
             
              {movieDetail.duration} phút
            </p>
            <p className="mb-2">
              <span className="font-semibold">Thể loại: </span>
              <div className=" flex gap-3">
              {listCate ? listCate.map((categorie)=>(
                <>
                  <div className="border border-red-500 p-3 rounded-[10px]">
                    <span>{categorie?.name}</span>
                  </div>
                </>
              )):(<><span>Hiện tại phim này chưa có thể loại</span></>)}
              </div>
            </p>
            
            {/* <p className="mb-2">
              <span className="font-semibold">Đạo diễn </span>
                  <div className="border border-red-500 p-3 rounded-[10px]">
                  <span>{getObjectById(authors,movieDetail.author)?.name}</span>
               </div>

             
            </p> */}
         
   
          
           
            <p className="mb-2">
              <span className="font-semibold">Nhân vật: </span>
              <div className="flex gap-3">
              {listCharacter ? listCharacter.map((character)=>(
                <>
                  <div>
                    <span class="block">{character?.name}</span>
                  <div className="flex justify-center">
                  <img className="w-[60px] h-[60px] rounded-full" src={character.imgUrl} alt="" />
                  </div>
                  </div>
                </>
              )):(<><span>Hiện tại phim này chưa có đạo diễn</span></>)}
              </div>
            </p>
            <p className="mb-2">
              <span className="font-semibold">Diễn viên: </span>
                <div className="flex gap-3">
              {listActor ? listActor.map((actor)=>(
                <>
                  <div>
                    <span class="block">{actor?.name}</span>
                  <div className="flex justify-center">
                  <img className="w-[60px] h-[60px] rounded-full" src={actor.imgUrl} alt="" />
                  </div>
                  </div>
                </>
              )):(<><span>Hiện tại phim này chưa có diễn viên</span></>)}
                 </div>
            </p>

            <p className="mb-2">
              <span className="font-semibold">Nội dung: </span>
             
              {movieDetail.description.length > 200 ? movieDetail.description.slice(0,200) + "..." : movieDetail.description  }
            </p>


            
            {/* <div className="flex items-center gap-2 mt-2">
              <Rating value={movieDetail.rating} precision={0.5} readOnly />
              <span>({movieDetail.rating} điểm / {movieDetail.reviews} lượt)</span>
            </div> */}
          </div>

          {/* Nút xem phim */}
          <div className="flex flex-wrap gap-4 items-center">
            <Link to={`/play/${movieDetail.id}`}>
            <Button variant="contained" className="bg-blue-600 hover:bg-red-700 w-full md:w-auto">
            {movieDetail.rentalPrice > 0 ? `Thuê phim ${movieDetail.rentalPrice}đ` : "Xem phim"}
            </Button>
            </Link>
            <Link to={`/trailer/${movieDetail.id}`}>
            <Button variant="contained" className="bg-yellow-600 hover:bg-red-600 w-full md:w-auto ">
              XEM TRAILER
            </Button>
            </Link>

           
           {/* Nút hình tròn: Yêu thích */}
           <div className="relative group">
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-pink-600 text-white rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
                Yêu thích
              </span>
              <button className="w-12 h-12 rounded-full bg-pink-500 group-hover:bg-pink-700 flex items-center justify-center transition duration-300">
                <FaHeart size={24} className="text-white" />
              </button>
            </div>

            {/* Nút hình tròn: Thêm vào danh sách */}
            <div className="relative group">
              <span className="absolute  bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-yellow-600 text-white rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
                Thêm vào danh sách
              </span>
              <button className="w-12 h-12 rounded-full bg-yellow-500 group-hover:bg-yellow-700 flex items-center justify-center transition duration-300">
                <BiBookmark size={24} className="text-white" />
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  
 

    </>
    
  );
}

export default MovieDetail;
