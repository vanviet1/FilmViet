import  React ,{useContext, useEffect, useState} from 'react';
import { Table, TablePagination, TextField, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import ModalCategory from './ModalCategory';
import { ContextCategories } from "../../../context/CategoriesProvider";
import { ModalDelete, showDeleteModal } from '../../../layouts/ModalDelete';

const inner = {name:'', description: ""};
function Categories(props) {
    const categories = useContext(ContextCategories);
    const [open, setOpen] = useState(false);
    const [category,setCategory] = useState(inner);
    const [errors, setError] = useState(inner);
    const [idProduct,setIdProduct]= useState({})
    const [search, setSearch] = useState('')
    const [filteredCategories, setFilteredCategories] = useState(categories);
   
             // Pagination states
            const [page, setPage] = useState(0);
            const [rowsPerPage, setRowsPerPage] = useState(5);

    // Functions to handle opening and closing of the modal

    const handleClickOpen = () => {
        setOpen(true);
        setCategory(inner);
        setError(inner);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleInput = (e) => {
        const { name , value } = e.target ;
        setCategory({...category, [name] : value})
    }

 

    const handleDeleteClick = (id, nameTale) => {
        if (showDeleteModal) {
            setIdProduct({nameTale,id});
                showDeleteModal(); 
        }
    };
    const handleEditClick = (row) => {
        setOpen(true); 
        setCategory(row);
    };

    const handleSearch = () => {
        if (!search) {
            setFilteredCategories(categories);
            return;
        }
        const filtered = categories.filter((cat) =>
            cat.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredCategories(filtered);
    };

    useEffect(() => {
        setFilteredCategories(categories);
    }, [categories]);

            // Handle pagination
            const handleChangePage = (event, newPage) => {
                setPage(newPage);
            };
        
            const handleChangeRowsPerPage = (event) => {
                setRowsPerPage(parseInt(event.target.value, 10));
                setPage(0);
            };
              // Get the categories for the current page
              const paginatedCategories = filteredCategories.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            );

 

    
    return (
        <div className='p-5'>
            <div className="flex justify-between items-center">
                <h1 className='text-[30px] text-black'> <b>List Categories</b></h1>


                <div className='flex items-center gap-3'>
                    <TextField onChange={(e) => setSearch(e.target.value)} className='w-[300px]' id="standard-basic" label="Standard" variant="standard" />
                    <Button onClick={handleSearch} variant="contained" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </Button>


                    <Button variant="contained" color="success" onClick={handleClickOpen}>
                        ADD CATEGORY
                    </Button>
                </div>
            </div>


            <div>
                <TableContainer component={Paper} style={{ marginTop:"20px"}}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Description</TableCell>
                                <TableCell align="left">Action</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedCategories?.map((row,index) => (
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
                                       <Button variant="contained" color="error" className='ml-2' onClick={()=>handleDeleteClick(row.id, "categories")}>
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
                count={filteredCategories.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

            <ModalDelete idProduct={idProduct}/>
        <ModalCategory setCategory={setCategory} errors={errors} setError={setError} handleClose={handleClose} open={open} category={category} handleInput={handleInput} />
        </div>
    );
}

export default Categories;
