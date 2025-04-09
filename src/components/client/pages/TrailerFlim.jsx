import { React, useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { ContextTrailers } from "../../../context/TrailersProvider";
import { filterByid } from "../../../utils/FunctionConvert";


function TrailerFlim() {
    const { id } = useParams();

        const trailers = useContext(ContextTrailers);
        const [trailerMovie, setTrailerMovie] = useState({});
        useEffect(() => {
                
                const listTrailer = filterByid(trailers, id, "movie");
                setTrailerMovie(listTrailer[0]);   
            }, [id, trailers]);
    
  return (
    <div className="bg-black text-white min-h-screen items-center p-8 pt-20">
                {/* Phần Video */}
                <div className="w-full flex justify-center">
                    <ReactPlayer
                        url={trailerMovie?.urlTrailer}
                        controls
                        width="80%"
                        height="500px"
                        className="rounded-lg shadow-lg"
                    />
                </div>
    </div>
  )
}

export default TrailerFlim