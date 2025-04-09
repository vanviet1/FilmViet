import  React ,{useState , useContext, useEffect} from 'react';
import { Table, TablePagination, TextField, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import ModalPlan from './ModalPlan';
import { ContextPlans } from '../../../context/PlansProvider';
import { ModalDelete, showDeleteModal } from '../../../layouts/ModalDelete';

const inner = {level:'',
     pricePerMonth: "", 
     title:""};
function Plans(props) {
    const plans =  useContext(ContextPlans);
    const [open, setOpen] = useState(false);
    const [plan,setplan] = useState(inner);
    const [errors, setError] = useState(inner);
    const [productDelete,setProductDelete]= useState({});
    const [search, setSearch] = useState('');
    const [filteredPlans, setFilteredPlans] = useState(plans);

       // Pagination states
        const [page, setPage] = useState(0);
        const [rowsPerPage, setRowsPerPage] = useState(5);

    // Functions to handle opening and closing of the modal
    const handleClickOpen = () => {
        setOpen(true);
        setplan(inner);
        setError(inner);
        
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleInput = (e) => {
        const { name , value } = e.target ;
        setplan({...plan, [name] : value})
    }
    const handleDeleteClick = (id,nameTale) => {
        
        if (showDeleteModal) {
            setProductDelete({nameTale,id});

            showDeleteModal(); 
        }
    };

    const handleEditClick = (row) => {
        setOpen(true);
        setplan(row);
    }

    const handleSearch = () => {
        if (!search) {
            setFilteredPlans(plans);
            return;
        }
        const filtered = plans.filter((cat) =>
            cat.level.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredPlans(filtered);
    };

   useEffect(() => {
        setFilteredPlans(plans);
    }, [plans]);

              // Handle pagination
              const handleChangePage = (event, newPage) => {
                setPage(newPage);
            };
        
            const handleChangeRowsPerPage = (event) => {
                setRowsPerPage(parseInt(event.target.value, 10));
                setPage(0);
            };
              // Get the plans  for the current page
              const paginatedPlans = filteredPlans.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            );
         

    return (
        <div className='p-5'>
            <div className="flex justify-between items-center">
                <h1 className='text-[30px] text-black'> <b>List Plans</b></h1>


                <div className='flex items-center gap-3'>
                    <TextField  onChange={(e) => setSearch(e.target.value)} className='w-[300px]' id="standard-basic" label="Standard" variant="standard" />
                    <Button onClick={handleSearch} variant="contained" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </Button>


                    <Button variant="contained" color="success" onClick={handleClickOpen} >
                        ADD PLANS
                    </Button>
                </div>
            </div>

            <div>
                <TableContainer component={Paper} style={{ marginTop:"20px"}}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell align="left">Level</TableCell>
                                <TableCell align="left">pricePerMonth</TableCell>
                                <TableCell align="left">title</TableCell>
                                <TableCell align="left">Action</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedPlans?.map((row,index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                    {page*5 + index + 1}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.level}
                                    </TableCell>
                                    <TableCell scope="row">{row.pricePerMonth}</TableCell>
                                    <TableCell scope="row">{row.title}</TableCell>
                                    <TableCell scope="row">
                                       
                                       <Button onClick={() => handleEditClick(row)} variant="contained" color="info" style={{ marginRight: '8px' }}>
                                       <FaEdit />
                                       </Button>
                                       <Button variant="contained" color="error" className='ml-2'  onClick={()=>handleDeleteClick(row.id,"plans")}> 
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
                            count={filteredPlans.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
            <ModalDelete idProduct={productDelete} />
           <ModalPlan errors={errors} setError={setError} handleClose={handleClose} open={open} plan={plan} handleInput={handleInput} />

        </div>
    );
}

export default Plans;