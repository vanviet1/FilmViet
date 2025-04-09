import { TablePagination, TextField, Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ContextTrailers } from "../../../../context/TrailersProvider";
import { ContextMovies } from "../../../../context/MovieProvider";
import ModalTrailer from "./ModalTrailer";
import TableTrailer from "./TableTrailer";
const inner = { movie: "", urlTrailer: "" };

function Trailer(props) {
  const [trailer, setTrailer] = useState(inner);
  const [open, setOpen] = useState(false);
  const trailers = useContext(ContextTrailers)
  const [search, setSearch] = useState('');
  const [filteredTrailer, setFilteredTrailer] = useState(trailers);
  const movies = useContext(ContextMovies); // Lấy danh sách phim

  // Pagination states
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);


  const [errors, setError] = useState(inner);
  const handleClickOpen = () => {
    setOpen(true);
    setTrailer(inner);
    setError(inner);
  };
  const onClose = () => setOpen(false);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
   
 
  const handleSearch = () => {
    if (!search) {
      setFilteredTrailer(trailers);
      return;
    }
  
    // Chuyển đổi ID phim thành tên phim trước khi lọc
    const filtered = trailers.filter((trailer) => {
      const movieName = movies.find((movie) => movie.id === trailer.movie)?.name || ""; // Tìm tên phim theo ID
      return movieName.toLowerCase().includes(search.toLowerCase()); // So sánh tên phim
    });
  
    setFilteredTrailer(filtered);
  };
  
  useEffect(() => {
    setFilteredTrailer(trailers);
  }, [trailers]);


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // Get the trailers for the current page
  const paginatedTrailer = filteredTrailer.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-[30px] text-black">
          {" "}
          <b>List Trailer</b>
        </h1>
        <div className="flex items-center gap-3">
          <TextField
            className="w-[300px]"
            id="standard-basic"
            label="Standard"
            variant="standard"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="contained" onClick={handleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </Button>

          <Button variant="contained" color="success" onClick={handleClickOpen}>
            ADD Episode
          </Button>
        </div>
      </div>

      <div>
        <TableTrailer
        page={page}
        trailer={trailer}
        setTrailer={setTrailer}
          setOpen={setOpen} 
          filteredTrailer={paginatedTrailer}
        />
      </div>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredTrailer.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <ModalTrailer
        trailer={trailer}
        setTrailer={setTrailer}
        open={open}
        onClose={onClose}
        errors={errors}
        setError={setError}
      />
    </div>
  );
}

export default Trailer;
