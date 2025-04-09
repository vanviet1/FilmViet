import React, { useContext, useState , useEffect} from 'react';
import { TablePagination, TextField, Button, duration} from '@mui/material';
import ModalMovie from './ModalMovie';
import TableMovie from './TableMovie';
import { logo } from '../../../../utils/Contants';
import { ContextPlans } from '../../../../context/PlansProvider';
import { ContextActors } from '../../../../context/ActorsProvider';
import { ContextCategories } from '../../../../context/CategoriesProvider';
import { Contextcharacters } from '../../../../context/CharacterProvider';
import ModalCon from './ModalCon';
import { ContextMovies } from '../../../../context/MovieProvider';



const inner = {name: "",
    description: "",
     duration: "",
     author: "",
     plan: "",
    urlMovie: "",
     listCate: [],
     listActor: [],
     listCharacter: [],
     rentalPrice: 0,
     likesCount: 0,
     viewsCount: 0,
     date: new Date(),
     imgUrl: logo

 }
 

function Movie(props) {


     const [movie, setMovie] = useState(inner);
        const [open, setOpen] = useState(false);
        const [dataChoose, setDataChoose] = useState([]);
        const [errors, setError] = useState(inner);
        const movies = useContext(ContextMovies)
        const [chooseType, setChooseType] = useState("");
        const  categories   = useContext(ContextCategories);
        const actors = useContext(ContextActors);
        const characters = useContext(Contextcharacters);
        const [openChoose, setOpenChoose] = useState(false)
         const [search, setSearch] = useState('');
        const [filteredMovies, setFilteredMovies] = useState(movies);
        // Pagination states
                const [page, setPage] = useState(0);
                const [rowsPerPage, setRowsPerPage] = useState(5);
        

     // Functions to handle opening and closing of the modal
     const handleClickOpen = () => {
        setOpen(true);
        setMovie(inner)
        setError(inner)
    };
    const handleClose = () => {
       setOpen(false);
    };

    const handleCloseChoose = () => {
        setOpenChoose(false)
    }
    const handleChoose = (type) => {
        setChooseType(type);
        setOpenChoose(true);
        switch (type) {
            case "categories":
                setDataChoose(categories);
                break;
            case "actors":
                setDataChoose(actors);
                break;
            case "characters":
                setDataChoose(characters);
                break;
            default:
                setDataChoose([]);
        }
      
    };

    const toggleSelection = (list, item) => {
        return list.includes(item) ? list.filter(i => i !== item) : [...list, item];
    };

    const getSelectedItems = () => {
        switch (chooseType) {
            case "categories":
                return movie.listCate;
            case "actors":
                return movie.listActor;
            case "characters":
                return movie.listCharacter;
            default:
                return [];
        }
    };

    const handleSelect = (item, type) => {
        setMovie(prevData => {
            let updatedList;
            switch (type) {
                case "categories":
                    updatedList = toggleSelection(prevData.listCate, item);
                    return { ...prevData, listCate: updatedList };
                case "actors":
                    updatedList = toggleSelection(prevData.listActor, item);
                    return { ...prevData, listActor: updatedList };
                case "characters":
                    updatedList = toggleSelection(prevData.listCharacter, item);
                    return { ...prevData, listCharacter: updatedList };
                default:
                    return prevData;
            }
        });
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleSearch = () => {
        if (!search) {
            setFilteredMovies(movies);
            return;
        }
        const filtered = movies.filter((cat) =>
            cat.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredMovies(filtered);
    };

    useEffect(() => {
        setFilteredMovies(movies);
            }, [movies]);

      // Get the character for the current page
      const paginatedMovies = filteredMovies.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );
 
    return (
        <div className='p-5'>
             <div className="flex justify-between items-center">
                <h1 className='text-[30px] text-black'> <b>List Movie</b></h1>
                <div className='flex items-center gap-3'>
                  <TextField onChange={(e) => setSearch(e.target.value)} className='w-[300px]' id="standard-basic" label="Standard" variant="standard" />
                                  <Button variant="contained"  onClick={handleSearch} >
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                      </svg>
                  
                                  </Button>
                  

                    <Button variant="contained" color="success" onClick={handleClickOpen}>
                        ADD Movie
                    </Button>
                </div>
            </div>
            <div>
           <TableMovie page={page}  movie={movie} actors={actors} categories={categories} characters={characters} setMovie={setMovie} movies={movies} setOpen={setOpen} paginatedMovies={paginatedMovies} />
            </div>
             {/* Pagination */}
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25]}
                                        component="div"
                                        count={filteredMovies.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                    />

            <ModalMovie handleSelect={handleSelect} open={open} movie={movie} handleClose={handleClose} handleChoose={handleChoose} setMovie={setMovie}  errors={errors} setError={setError} />
             <ModalCon selectedItem={getSelectedItems()} handleSelect={handleSelect} dataChoose={dataChoose} chooseType={chooseType} openChoose={openChoose} handleCloseChoose={handleCloseChoose}/>
        </div>
    );
}

export default Movie;