import React, { useContext, useEffect, useState } from 'react';
import { TablePagination, TextField, Button} from '@mui/material';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { logoUsers } from '../../../utils/Contants';
import { ContextAcount } from '../../../context/AcountProvider';
import ModalUserPages from './ModalUserPages';
import TableUserPages from './TableUserPages';


const inner = {name: "", email: "",password: "",confirmPassword: "", imgUrl: logoUsers,role: "" }
function UserPages(props) {
    const [user, setUser] = useState(inner);
    const [open, setOpen] = useState(false);
    const [errors, setError] = useState(inner);
    const {acounts} =  useContext(ContextAcount);
    const [search, setSearch] = useState('');
    const [filteredUser, setFilteredUser] = useState(acounts);
    
    
            // Pagination states
        const [page, setPage] = useState(0);
        const [rowsPerPage, setRowsPerPage] = useState(5);
    

    const handleClickOpen = () => {
        setOpen(true);
        setUser(inner);
        setError(inner);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSearch = () => {
        if (!search) {
            setFilteredUser(acounts);
            return;
        }
        const filtered = acounts.filter((cat) =>
            cat.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredUser(filtered);
    };

          useEffect(() => {
            setFilteredUser(acounts);
                   }, [acounts]);
       
                       // Handle pagination
           const handleChangePage = (event, newPage) => {
               setPage(newPage);
           };
       
           const handleChangeRowsPerPage = (event) => {
               setRowsPerPage(parseInt(event.target.value, 10));
               setPage(0);
           };
             // Get the acounts for the current page
             const paginatedUsers = filteredUser.slice(
               page * rowsPerPage,
               page * rowsPerPage + rowsPerPage
           );

    
       
    return (
        <div className='p-5'>
        <div className="flex justify-between items-center">
            <h1 className='text-[30px] text-black'> <b>List Feature</b></h1>
            <div className='flex items-center gap-3'>
             <TextField className='w-[300px]' onChange={(e) => setSearch(e.target.value)} id="standard-basic" label="Standard" variant="standard" />
                                 <Button variant="contained" onClick={handleSearch}>
                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                         <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                     </svg>
             
                                 </Button>


                <Button variant="contained" color="success" onClick={handleClickOpen}>
               ADD Feature
                </Button>
            </div>
        </div>
            <div>
            <TableUserPages page={page} user={user} setUser={setUser} setOpen={setOpen} filteredUser={paginatedUsers} />
            </div>
     

                 {/* Pagination */}
                          <TablePagination
                                       rowsPerPageOptions={[5, 10, 25]}
                                       component="div"
                                       count={filteredUser.length}
                                       rowsPerPage={rowsPerPage}
                                       page={page}
                                       onPageChange={handleChangePage}
                                       onRowsPerPageChange={handleChangeRowsPerPage}
                                   />
            

          
             <ModalUserPages open={open} handleClose={handleClose}  user={user} setUser={setUser} errors={errors} setError={setError}/>
                         

    </div>
    );
}

export default UserPages;