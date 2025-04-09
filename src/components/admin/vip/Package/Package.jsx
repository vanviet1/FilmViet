import React, { useContext, useEffect, useState } from 'react';
import { TablePagination, TextField, Button} from '@mui/material';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { ModalDelete, showDeleteModal } from '../../../../layouts/ModalDelete';
import  { logo }  from "../../../../utils/Contants";

import { ContextPackages } from '../../../../context/PackagesProvider';
import ModalPackage from './ModalPackage';
import TablePackage from './TablePackage';


const inner = {plan: "",time: "",discount: "" }
function Package(props) {
      const packages = useContext(ContextPackages);
   
    const [packa,setPacka] = useState(inner);
    const [open, setOpen] = useState(false);
    const [errors, setError] = useState(inner);
     const [search, setSearch] = useState('');
     const [filteredpackage, setFilteredPackage] = useState(packages);
   

            // Pagination states
        const [page, setPage] = useState(0);
        const [rowsPerPage, setRowsPerPage] = useState(5);

    // Functions to handle opening and closing of the modal
    const handleClickOpen = () => {
        setOpen(true);
        setPacka(inner);
        setError(inner);
    };

    const handleClose = () => {
        setOpen(false);
    };
     const handleSearch = () => {
            if (!search) {
                setFilteredPackage(packages);
                return;
            }
            const filtered = packages.filter((cat) =>
                cat.plan.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredPackage(filtered);
        };
    
        useEffect(() => {
            setFilteredPackage(packages);
        }, [packages]);
  
                    // Handle pagination
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
      // Get the character for the current page
      const paginatedPackages = filteredpackage.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );
 


    return (
        <div className='p-5'>
        <div className="flex justify-between items-center">
            <h1 className='text-[30px] text-black'> <b>List Package</b></h1>
            <div className='flex items-center gap-3'>
                <TextField onChange={(e) => setSearch(e.target.value)} className='w-[300px]' id="standard-basic" label="Standard" variant="standard" />
                <Button variant="contained"  onClick={handleSearch} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                </Button>


                <Button variant="contained" color="success" onClick={handleClickOpen}>
               ADD Package
                </Button>
            </div>
        </div>

        <div>
                <TablePackage page={page} filteredpackage={paginatedPackages} packa={packa} packages={packages} setPackage={setPacka} setOpen = {setOpen}  />
            </div>

                 {/* Pagination */}
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={filteredpackage.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
            

            
             <ModalPackage open={open} handleClose={handleClose}  packa={packa} setPacka={setPacka} errors={errors} setError={setError}/>
        

    </div>

    

    
    );
}


export default Package;