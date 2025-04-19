import { React, useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Avatar, Button, List, ListItem, ListItemText, Paper, TextField, Typography } from "@mui/material";
import MySwiper from "../../../libs/Swiper";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaPlay, FaHeart } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ContextMovies } from "../../../context/MovieProvider";
import { ContextEpisodes } from "../../../context/EpisodeProvider";
import { filterByid, formatCommentTime, getObjectById } from "../../../utils/FunctionConvert";
import { ContextAuthen } from "../../../context/AuthenProvider";
import { addDocument } from "../../../services/firebaseService";
import { ContextComments } from "../../../context/CommentProvider";
import { ContextAcount } from "../../../context/AcountProvider";

function PlayFlim() {
  const { id } = useParams();
  const { acounts } = useContext(ContextAcount);
  const comments = useContext(ContextComments);
  const movies = useContext(ContextMovies);
  const episodes = useContext(ContextEpisodes);
  const [episodesByMovie, setEpisodesByMovie] = useState([]);
  const [playMovie, setPlayMovie] = useState({});
  const [currentMovie, setCurrentMovie] = useState({});
  const { accountLogin } = useContext(ContextAuthen);
  const [newComment, setNewComment] = useState('');
  const [commentByMovie,setCommentByMovie] = useState([]);
  useEffect(() => {
    const listEpisodes = filterByid(episodes, id, "movie").sort(
      (a, b) => a.numberEpisode - b.numberEpisode
    );
    setEpisodesByMovie(listEpisodes);
    setPlayMovie(listEpisodes[0]);

    const movie = movies.find((m) => m.id === id);
    setCurrentMovie(movie || {});
  }, [id, episodes, movies]);

  useEffect(() => {
    setCommentByMovie(filterByid(comments,id,"idMovie"));
  },[id,comments]);

  const handleAddComment = async () => {
      const content = {
        content : newComment,
        createdAt : new Date(),
        isUser : accountLogin.id ,
        idMovie : id,
      }
      setNewComment("");
    await addDocument("comments", content);
  };
  return (
    <div className="bg-black text-white min-h-screen items-center p-8 pt-20">
      {/* Phần Video */}
      <div className="w-full flex justify-center">
        <iframe
          src={playMovie?.urlEpisode}
          width="800"
          height="450"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      {/* Chọn tập phim */}
      <div className="mt-6 p-5 bg-gray-900 rounded-lg shadow-lg w-4/5 mx-auto">
        <h2 className="text-xl font-bold mb-4 text-start">Chọn tập phim</h2>
        <div className="grid grid-cols-8 gap-2 justify-center">
          {episodesByMovie?.map((e) => (
            <Button
              key={e.id}
              onClick={() => setPlayMovie(e)}
              variant="contained"
              color={e.id === playMovie.id ? "error" : "primary"}
            >
              {e.numberEpisode}
            </Button>
          ))}
        </div>
      </div>

      {/* Mô tả phim */}
      <div className="mt-6 p-5 bg-gray-900 rounded-lg shadow-lg w-4/5 mx-auto">
        <h2 className="text-xl font-bold mb-2">
          {currentMovie.name || "Đang cập nhật..."}
        </h2>
        <p className="text-gray-300">
          {currentMovie.description || "Chưa có mô tả cho bộ phim này."}
        </p>
      </div>
      {/* Phần bình luận */}
      <div className="w-4/5 mx-auto mt-3">
        <Typography variant="h6" gutterBottom>
          Bình luận
        </Typography>

        {/* Ô nhập bình luận */}
        <TextField
          label="Nhập bình luận"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          sx={{
            marginBottom: 2,
            backgroundColor: 'white', // Đặt nền trắng
            '& .MuiInputBase-root': {
              color: 'black', // Đặt màu chữ đen
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ccc', // Đặt màu viền nếu cần
            }
          }}
        />

        {/* Nút gửi bình luận */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddComment}
          disabled={newComment.trim() === ''}
        >
          Gửi bình luận
        </Button>

        {/* Hiển thị danh sách bình luận */}
        <Paper sx={{ marginTop: 2, padding: 2 }}>
          <List>
            {commentByMovie.length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                Chưa có bình luận nào.
              </Typography>
            ) : (
              commentByMovie.map((comment, index) => (
                <ListItem key={index} alignItems="flex-start">
                {/* Avatar người bình luận */}
                <Avatar alt="#" src={getObjectById(acounts,comment.isUser)?.imgUrl} sx={{ marginRight: 2 }} />
  
                {/* Nội dung bình luận và thời gian */}
                <ListItemText
                  primary={<Typography variant="body1">{comment.content}</Typography>}
                  secondary={
                    <>
                      {/* Thời gian bình luận */}
                      <Typography variant="body2" color="text.secondary">
                      {formatCommentTime(comment.createdAt)}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              ))
            )}
          </List>
        </Paper>
      </div>

      {/* Danh sách phim liên quan */}
      <div className="mx-auto p-[30px] bg-black">
        <h2 className="text-2xl text-white font-bold mb-4 flex items-center gap-2">
          Phim liên quan <MdKeyboardArrowRight className="text-3xl" />
        </h2>
        <MySwiper>
          {movies?.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={`/movies/${item.id}`}>
                <div className="relative group p-2 bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="w-full h-60 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center gap-2 transition-opacity duration-300">
                    <div className="flex gap-4">
                      <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <FaPlay size={20} className="text-black" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center">
                        <FaHeart size={20} className="text-white" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
                        <BiBookmark size={20} className="text-white" />
                      </button>
                    </div>
                    <span className="text-white text-sm bg-gray-800 px-2 py-1 rounded-lg mt-5">
                      {item.description.length > 50
                        ? item.description.slice(0, 50) + "..."
                        : item.description}
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </MySwiper>
      </div>
    </div>
  );
}

export default PlayFlim;
