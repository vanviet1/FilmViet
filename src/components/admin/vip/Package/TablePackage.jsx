import React, { useContext, useState } from 'react';
import { Table, TextField, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { ModalDelete, showDeleteModal } from '../../../../layouts/ModalDelete';
import { ContextPlans } from '../../../../context/PlansProvider';
import { getObjectById } from '../../../../utils/FunctionConvert';

function TablePackage ({page,setPackage, setOpen, filteredpackage}){
   
  const [productDelete,setProductDelete]= useState({});
  const plans = useContext(ContextPlans)
  //
        const handleDeleteClick = (id, nameTale) => {
                  if (showDeleteModal) {
                      setProductDelete({ nameTale, id }); // Truyền giá trị chính xác
                      showDeleteModal(); // Hiển thị modal
                  }
              };
         const handleEditClick = (row) => {
          setOpen(true);
          setPackage(row);
      };
      
      return (
          <div>
          <TableContainer component={Paper} style={{ marginTop: "20px" }}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                  <TableRow>
                      <TableCell sx={{ width: '9%' }}>#</TableCell>
                      <TableCell align="left" sx={{ width: '10%' }}>Plan</TableCell>
                      <TableCell align="left" sx={{ width: '27%' }}>Time</TableCell>
                      <TableCell align="left" sx={{ width: '27%' }}>Discount</TableCell>
                      <TableCell align="left" sx={{ width: '27%' }}>Action</TableCell>
  
                  </TableRow>
              </TableHead>
              <TableBody>
                  {filteredpackage?.map((row, index) => (
                      <TableRow
                          key={index}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                          <TableCell component="th" scope="row">
                          {page*5 + index + 1}
                          </TableCell>
                          <TableCell component="th" scope="row">
                              {getObjectById(plans,row.plan)?.title} 
                          </TableCell>
                          <TableCell component="th" scope="row">
                              {row.time}
                          </TableCell>
                          <TableCell scope="row">{row.discount}</TableCell>
                          <TableCell scope="row">
  
                              <Button variant="contained"   onClick={() => handleEditClick(row)}  color="info" style={{ marginRight: '8px' }}>
                                  <FaEdit />
                              </Button>

                              <Button variant="contained" color="error" className='ml-2' onClick={() => handleDeleteClick(row.id,"packages")}>
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
export default TablePackage;