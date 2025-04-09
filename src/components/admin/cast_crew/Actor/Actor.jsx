import React, { useContext, useState , useEffect} from 'react';
import { TablePagination, TextField, Button} from '@mui/material';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import  { logo }  from "../../../../utils/Contants";
import { ModalDelete, showDeleteModal } from '../../../../layouts/ModalDelete';
import { ContextActors } from '../../../../context/ActorsProvider';
import ModalActor from "./ModalActor"
import TableActor from './TableActor';

const inner = {name: "",description: "", imgUrl : logo }
function Actor(props) {

    const [actor, setActor] = useState(inner);
    const [open, setOpen] = useState(false);
    const [errors, setError] = useState(inner);
    const actors = useContext(ContextActors);
     const [search, setSearch] = useState('');
     const [filteredactor, setFilteredActor] = useState(actors);

        // Pagination states
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // Functions to handle opening and closing of the modal
    const handleClickOpen = () => {
        setOpen(true);
        setActor(inner);
        setError(inner)
    };

    const handleClose = () => {
        setOpen(false);
    };
    
       const handleSearch = () => {
                if (!search) {
                    setFilteredActor(actors);
                    return;
                }
                const filtered = actors.filter((cat) =>
                    cat.name.toLowerCase().includes(search.toLowerCase())
                );
                setFilteredActor(filtered);
            };
        
            useEffect(() => {
                setFilteredActor(actors);
            }, [actors]);

                // Handle pagination
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
      // Get the actors for the current page
      const paginatedActors = filteredactor.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );
 
    return (
        <div className='p-5'>
            <div className="flex justify-between items-center">
                <h1 className='text-[30px] text-black'> <b>List Actor</b></h1>
                <div className='flex items-center gap-3'>
                    <TextField className='w-[300px]' onChange={(e) => setSearch(e.target.value)} id="standard-basic" label="Standard" variant="standard" />
                    <Button variant="contained" onClick={handleSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </Button>

                    <Button variant="contained" color="success" onClick={handleClickOpen}>
                        ADD Actor
                    </Button>
                </div>
            </div>

            <div>
            <TableActor page={page} actor={actor} setActor={setActor} setOpen={setOpen} filteredactor={paginatedActors} />
            </div>
      
                  {/* Pagination */}
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredactor.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

         <ModalActor actor={actor} open={open} handleClose={handleClose} errors={errors} setError={setError} setActor={setActor} />

        </div>
    );
}

export default Actor;
