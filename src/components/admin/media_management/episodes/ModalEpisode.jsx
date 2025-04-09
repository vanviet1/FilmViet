import { useContext, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Autocomplete,
} from "@mui/material";
import {
  addDocument,
  updateDocument,
} from "../../../../services/firebaseService";
import { ContextMovies } from "../../../../context/MovieProvider";
function ModalEpisode({
  open,
  onClose,
  errors,
  setError,
  episode,
  setEpisode,
}) {
  const movies = useContext(ContextMovies);
  const validation = () => {
    const newErrors = {};
    newErrors.movie = episode.movie ? "" : "Vui long nhap movie ";
    newErrors.numberEpisode = episode.numberEpisode
      ? ""
      : "vui long nhap numberEpisode";
    newErrors.urlEpisode = episode.urlEpisode ? "" : "vui long nhap urlEpisode";
    setError(newErrors);
    return newErrors.movie || newErrors.numberEpisode || newErrors.urlEpisode;
  };

  const handleSubmit = async (e) => {
    if (validation()) {
      return;
    }
    onClose();
    if (episode.id) {
      await updateDocument("episodes", episode);
    } else {
      await addDocument("episodes", episode);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setEpisode({ ...episode, [name]: value });
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Episode</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="numberEpisode"
          label="Episode Number"
          type="number"
          fullWidth
          variant="outlined"
          value={episode.numberEpisode}
          sx={{ marginBottom: 2 }}
          onChange={handleInput}
          error={!!errors.numberEpisode}
          helperText={errors.numberEpisode}
        />
        <Autocomplete
          options={movies} // Sử dụng danh sách phim gốc
          getOptionLabel={(option) => option?.name || ""} // Hiển thị tên phim
          value={movies.find((movie) => movie.id === episode.movie) || null} // Tìm phim theo ID để hiển thị đúng tên
          onChange={
            (_, newValue) =>
              setEpisode({ ...episode, movie: newValue ? newValue.id : "" }) // Chỉ lưu ID phim
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
          name="urlEpisode"
          label="Episode URL"
          type="text"
          fullWidth
          variant="outlined"
          value={episode.urlEpisode}
          sx={{ marginBottom: 2 }}
          onChange={handleInput}
          error={!!errors.urlEpisode}
          helperText={errors.urlEpisode}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalEpisode;
