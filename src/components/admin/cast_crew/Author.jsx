import React, { useContext, useEffect, useState } from 'react';
import { Table, TablePagination, TextField, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import ModalAuthor from './modal_cast_crew/ModalAuthor';
import { ContextAuthors } from '../../../context/AuthorsProvider';
import { ModalDelete, showDeleteModal } from '../../../layouts/ModalDelete';

const inner = {name:'', description: ""};
function Author(props) {
    const {authors, setAuthors} = useContext(ContextAuthors);
    const [open, setOpen] = useState(false);
    const [author,setAuthor] = useState(inner);
    const [errors, setError] = useState(inner);
    const [productDelete,setProductDelete]= useState({});
    const [search, setSearch] = useState('');
    const [filteredAuthors, setFilteredAuthors] = useState(authors);

    
            // Pagination states
        const [page, setPage] = useState(0);
        const [rowsPerPage, setRowsPerPage] = useState(5);

    // Functions to handle opening and closing of the modal
    const handleClickOpen = () => {
        setOpen(true);
        setAuthor(inner);
        setError(inner);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleInput = (e) => {
        const { name , value } = e.target ;
        setAuthor({...author, [name] : value})
    }

    const handleDeleteClick = (id, nameTale) => {
        if (showDeleteModal) {
            setProductDelete({nameTale,id});

            showDeleteModal(); 
        }
    };
    const handleEditClick = (row) => {
        setOpen(true);
        setAuthor(row);
    }


    

    const handleSearch = () => {
        if (!search) {
            setFilteredAuthors(authors);
            return;
        }
        const filtered = authors.filter((cat) =>
            cat.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredAuthors(filtered);
    };

    useEffect(() => {
        setFilteredAuthors(authors);
    }, [authors]);

              // Handle pagination
              const handleChangePage = (event, newPage) => {
                setPage(newPage);
            };
        
            const handleChangeRowsPerPage = (event) => {
                setRowsPerPage(parseInt(event.target.value, 10));
                setPage(0);
            };
              // Get the author for the current page
              const paginatedAuthors = filteredAuthors.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            );

    return (
        <div className='p-5'>
            <div className="flex justify-between items-center">
                <h1 className='text-[30px] text-black'> <b>List Author</b></h1>
                <div className='flex items-center gap-3'>
                    <TextField  onChange={(e) => setSearch(e.target.value)} className='w-[300px]' id="standard-basic" label="Standard" variant="standard" />
                    <Button onClick={handleSearch} variant="contained" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </Button>


                    <Button variant="contained" color="success" onClick={handleClickOpen}>
                        ADD Author
                    </Button>
                </div>
            </div>

            <div>
                <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ width: '10%' }}>#</TableCell>
                                <TableCell align="left" sx={{ width: '30%' }}>Name</TableCell>
                                <TableCell align="left" sx={{ width: '30%' }}>Description</TableCell>
                                <TableCell align="left" sx={{ width: '30%' }}>Action</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedAuthors?.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                    {page*5 + index + 1}
                                    </TableCell>

                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell scope="row">{row.description}</TableCell>
                                    <TableCell scope="row">

                                        <Button  onClick={() => handleEditClick(row)} variant="contained" color="info" style={{ marginRight: '8px' }}>
                                            <FaEdit />
                                        </Button>
                                        <Button variant="contained" color="error" className='ml-2' onClick={()=>handleDeleteClick(row.id,"authors")}>
                                            <MdDeleteForever />
                                        </Button>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
                  {/* Pagination */}
                  <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredAuthors.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <ModalDelete idProduct={productDelete}/>
    <ModalAuthor errors={errors} setError={setError} handleClose={handleClose} open={open} author={author} handleInput={handleInput}/>
        </div>
    );
}

export default Author;