import React, { useContext, useState } from "react";
import {
  Table,
  TextField,
  Button,
  Avatar,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { PiSquaresFourFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { ModalDelete, showDeleteModal } from "../../../../layouts/ModalDelete";
import { getObjectById } from "../../../../utils/FunctionConvert";
import { ContextAuthors } from "../../../../context/AuthorsProvider";
const TableMovie = ({
  page,
  movie,
  setMovie,
  movies,
  setOpen,
  paginatedMovies,
  actors,
  characters,
  categories,
}) => {
  const [productDelete, setProductDelete] = useState({});
  //    const characters = useContext(Contextcharacters);
    const {authors} = useContext(ContextAuthors)

  const handleDeleteClick = (id, nameTale) => {
    if (showDeleteModal) {
      setProductDelete({ nameTale, id }); // Truyền giá trị chính xác
      showDeleteModal(); // Hiển thị modal
    }
  };

  const handleEditClick = (row) => {
    setOpen(true);
    setMovie(row);
  };
  return (
    <div>
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Categories</TableCell>
              <TableCell>Entities</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedMovies?.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                {page*5 + index + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={row.imgUrl}
                    alt=""
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell scope="row">{row.description.length > 30 ? row.description.slice(0,30) + "..." : row.description  }</TableCell>
                <TableCell scope="row">{row.duration}</TableCell>
                <TableCell scope="row">
                {getObjectById(authors,row.author)?.name?.length > 30 ? getObjectById(authors,row.author)?.name.slice(0,30) + "..." : getObjectById(authors,row.author)?.name  }
               </TableCell>
                <TableCell scope="row" className="relative group">
                  {/* Div chứa hình ảnh diễn viên */}

                  <Tooltip
                    title={row.listCate.map((e, index) =>
                      index < row.listCate.length - 1
                        ? getObjectById(categories, e)?.name + ","
                        : getObjectById(categories, e)?.name
                    )}
                  >
                    <Button
                      variant="contained"
                      color="info"
                      style={{ marginRight: "8px" }}
                    >
                      <PiSquaresFourFill />
                    </Button>
                  </Tooltip>
                </TableCell>
                <TableCell scope="row" className="relative group">
                  <Tooltip
                    title={
                      <div className="flex gap-2">
                        {row.listActor.map((e, index) => (
                          <img
                            key={index} // Thêm key để tránh lỗi React
                            className="w-10 h-10 rounded-full"
                            src={
                              getObjectById(actors, e)?.imgUrl ||
                              "default-image.jpg"
                            } // Đảm bảo có giá trị ảnh
                            alt={`Actor ${index}`}
                          />
                        ))}
                      </div>
                    }
                  >
                    <Button
                      variant="contained"
                      color="info"
                      style={{ marginRight: "8px" }}
                    >
                      <FaUser />
                    </Button>
                  </Tooltip>
                </TableCell>
                <TableCell scope="row">
                  <Box display="flex" gap={1}>
                  <Button
                    variant="contained"
                    color="info"
                    style={{ marginRight: "8px" }}
                    onClick={() => handleEditClick(row)}
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDeleteClick(row.id, "movies")}
                  >
                    <MdDeleteForever />
                  </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalDelete idProduct={productDelete} />
    </div>
  );
};

export default TableMovie;
