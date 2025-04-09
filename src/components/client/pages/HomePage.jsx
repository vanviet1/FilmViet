import { useEffect, useState, useContext } from "react";
import MySwiper from "../../../libs/Swiper"; // Đảm bảo đường dẫn đúng
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { ContextMovies } from "../../../context/MovieProvider";
import { FaPlay, FaHeart } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ContextAcount } from "../../../context/AcountProvider";
import Section from "../layouts/Section";

import { Button } from "@mui/material";
import LandingOut1 from "./langdingOut/LandingOut1";
import LandingOut2 from "./langdingOut/LandingOut2";
import LandingOut3 from "./langdingOut/LandingOut3";
import LandingOut4 from "./langdingOut/LangdingOut4";
import LandingOut5 from "./langdingOut/LangdingOut5";
import LandingOut6 from "./langdingOut/LangdingOut6";
import LangdingOut7 from "./langdingOut/LangdingOut7";
import InSide from "./inSide/InSide";
const HomePage = () => {
  const movies = useContext(ContextMovies);
  console.log(movies);
  const { users, setUser } = useContext(ContextAcount);

  return (
    <div className="bg-black text-white">
      <Section />
      <div className="pt-[50px] px-10">
        {!users ? (
          <div>
            <LandingOut1 />
            <LandingOut2 />
            <LandingOut3 />
            <LandingOut4 />
            <LandingOut5 />
            <LandingOut6 />
            <LangdingOut7 />
          </div>
        ) : (
          <div className=" mx-auto">
            {movies?.length > 0 ? (
              < InSide />
            ) : (
              <p>Đang tải dữ liệu...</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
