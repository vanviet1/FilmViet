import React, { useState, useContext } from 'react';
import { Table,IconButton,Avatar, TextField, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper ,Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
// import { Contextcharacters } from '../../../../context/CharacterProvider';
import { IoMdPhotos } from "react-icons/io";
import { ModalDelete, showDeleteModal } from '../../../../layouts/ModalDelete';
function Table_Character({page, setCharacter, setOpen, characters, filteredcharacters }) {
   const [productDelete,setProductDelete]= useState({});
//    const characters = useContext(Contextcharacters);

   
      const handleDeleteClick = (id, nameTale) => {
                if (showDeleteModal) {
                    setProductDelete({ nameTale, id }); // Truyền giá trị chính xác
                    showDeleteModal(); // Hiển thị modal
                }
            };
            

       const handleEditClick = (row) => {
        setOpen(true);
        setCharacter(row);
    };
    
    return (
        <div>
        <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                    <TableCell sx={{ width: '9%' }}>#</TableCell>
                    <TableCell align="left" sx={{ width: '10%' }}>Image</TableCell>
                    <TableCell align="left" sx={{ width: '27%' }}>Name_Character</TableCell>
                    <TableCell align="left" sx={{ width: '27%' }}>Description</TableCell>
                    <TableCell align="left" sx={{ width: '27%' }}>Action</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {filteredcharacters?.map((row, index) => (
                    <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                        {page*5 + index + 1}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <img className='w-10 h-10 rounded-full' src={row.imgUrl} alt="" />
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell scope="row">{row.description.length > 30 ? row.description.slice(0,30) + "..." : row.description  }</TableCell>
                        <TableCell scope="row">

                            <Button variant="contained"   onClick={() => handleEditClick(row)}  color="info" style={{ marginRight: '8px' }}>
                                <FaEdit />
                            </Button>
                            <Button variant="contained" color="error" className='ml-2'  onClick={()=>handleDeleteClick(row.id,"characters")}>
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
    );
}

export default Table_Character;