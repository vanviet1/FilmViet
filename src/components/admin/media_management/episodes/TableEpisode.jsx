import React, { useContext, useState } from 'react';
import { Table, TextField, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { ModalDelete, showDeleteModal } from '../../../../layouts/ModalDelete';
import { ContextMovies } from '../../../../context/MovieProvider';
import { getObjectById } from '../../../../utils/FunctionConvert';
function TableEpisode({page, episode, setEpisode, setOpen, filteredEpisode}) {
     const [productDelete,setProductDelete]= useState({});
     const movies = useContext(ContextMovies);
      const handleDeleteClick = (id, nameTale) => {
                     if (showDeleteModal) {
                         setProductDelete({ nameTale, id }); // Truyền giá trị chính xác
                         showDeleteModal(); // Hiển thị modal
                     }
                 };
                 
     
                 const handleEditClick = (row) => {
                     setOpen(true);
                     setEpisode(row);
                 };
  return (
    <div>
                 <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell align="left">Movie Name</TableCell>
                                    <TableCell align="left">Episode Number</TableCell>
                                    <TableCell align="left">Movie Url</TableCell>
                                   
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredEpisode?.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                        {page*5 + index + 1}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                         {getObjectById(movies,row.movie)?.name} 
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                                
                                        {row.numberEpisode}     
                                        </TableCell>
                                        <TableCell scope="row">
                                        {row.urlEpisode.length > 30 ? row.urlEpisode.slice(0,30) + "..." : row.urlEpisode}               
                                        </TableCell>
                                        <TableCell scope="row">
    
                                            <Button variant="contained" onClick={() => handleEditClick(row)} color="info" style={{ marginRight: '8px' }}>
                                                <FaEdit />
                                            </Button>
                                            <Button variant="contained" color="error" className='ml-2' onClick={()=>handleDeleteClick(row.id,"episodes")}>
                                                <MdDeleteForever />
                                            </Button>
    
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <ModalDelete idProduct={productDelete}/>
            </div>
  )
}

export default TableEpisode