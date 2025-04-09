import { useContext, useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Autocomplete } from "@mui/material";
import { addDocument,updateDocument  } from "../../../../services/firebaseService";
import { ContextMovies } from "../../../../context/MovieProvider";

function ModalTrailer({trailer, setTrailer, open, onClose, errors, setError}) {
    const movies = useContext(ContextMovies)
 
      const validation = () => {
        const newErrors = {};
        newErrors.movie = trailer.movie ? "" : "Vui lòng nhập movie";
        newErrors.urlTrailer = trailer.urlTrailer ? "" : "Vui lòng nhập urlTrailer";

        setError(newErrors);
        return newErrors.movie || newErrors.urlTrailer;
    };
       const handleSubmit = async (e) => {
                if (validation()) {
                  return;
                }
                onClose();
                if (trailer.id) {
                  await updateDocument("trailers", trailer);
                } else {
                  await addDocument("trailers", trailer);
                }
              };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setTrailer({ ...trailer, [name]: value });
      };
  return (
    <Dialog open={open} onClose={onClose}>
    <DialogTitle>Add Episode</DialogTitle>
    <DialogContent>
    
    <Autocomplete
  options={movies} // Sử dụng danh sách phim gốc
  getOptionLabel={(option) => option?.name || ""} // Hiển thị tên phim
  value={movies.find((movie) => movie.id === trailer.movie) || null} // Tìm phim theo ID để hiển thị
  onChange={(_, newValue) => 
    setTrailer({ ...trailer, movie: newValue ? newValue.id : "" }) // Chỉ lưu ID phim
  }
  isOptionEqualToValue={(option, value) => option.id === value?.id} // So sánh bằng ID
  renderInput={(params) => (
    <TextField
      {...params}
      margin="dense"
      name="movie"
      label="Movie"
      fullWidth
      variant="outlined"
      sx={{ marginBottom: 2 }}
      error={!!errors.movie}
      helperText={errors.movie}
    />
  )}
/>

      <TextField
        margin="dense"
        name="urlTrailer"
        label="Episode URL"
        type="text"
        fullWidth
        variant="outlined"
        value={trailer.urlTrailer}
        sx={{ marginBottom: 2 }}
        onChange={handleInput}
        error={!!errors.urlTrailer}
        helperText={errors.urlTrailer}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Save
      </Button>
    </DialogActions>
  </Dialog>
  )
}

export default ModalTrailer