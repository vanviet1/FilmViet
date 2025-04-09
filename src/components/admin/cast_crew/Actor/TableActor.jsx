import React, { useContext, useState } from 'react';
import { Table, TextField, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { ModalDelete, showDeleteModal } from '../../../../layouts/ModalDelete';
import { ContextActors } from '../../../../context/ActorsProvider';
function TableActor({page, actor, setActor, setOpen, filteredactor}) { 
            const [productDelete,setProductDelete]= useState({});
            const actors = useContext(ContextActors);

            const handleDeleteClick = (id, nameTale) => {
                if (showDeleteModal) {
                    setProductDelete({ nameTale, id }); // Truyền giá trị chính xác
                    showDeleteModal(); // Hiển thị modal
                }
            };
            

            const handleEditClick = (row) => {
                setOpen(true);
                setActor(row);
            };
    return (
        <div>
             <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="left">Name_Actor</TableCell>
                                <TableCell align="left">Description</TableCell>
                                <TableCell align="left">Action</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredactor?.map((row, index) => (
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
                                    <TableCell scope="row">{row.description}</TableCell>
                                    <TableCell scope="row">

                                        <Button variant="contained" onClick={() => handleEditClick(row)} color="info" style={{ marginRight: '8px' }}>
                                            <FaEdit />
                                        </Button>
                                        <Button variant="contained" color="error" className='ml-2' onClick={()=>handleDeleteClick(row.id,"actors")}>
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

export default TableActor;