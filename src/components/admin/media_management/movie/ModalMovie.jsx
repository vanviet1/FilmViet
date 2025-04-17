import React, { useContext, useState } from "react";
import {
  IconButton,
  Avatar,
  Select,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  Typography,
  ListItem,
  Autocomplete,
} from "@mui/material";
import { FaFileUpload } from "react-icons/fa";

import { TiDeleteOutline } from "react-icons/ti";
import ModalCon from "./ModalCon";
import { FaImages } from "react-icons/fa";
import { getObjectById } from "../../../../utils/FunctionConvert";
import { TbTriangleSquareCircleFilled } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { ContextAuthors } from "../../../../context/AuthorsProvider";
import { ContextPlans } from "../../../../context/PlansProvider";
import { ContextCategories } from "../../../../context/CategoriesProvider";
import { ContextActors } from "../../../../context/ActorsProvider";
import { Contextcharacters } from "../../../../context/CharacterProvider";
import { RiMovieFill } from "react-icons/ri";
import {
  addDocument,
  updateDocument,
} from "../../../../services/firebaseService";
const ModalMovie = ({
  open,
  movie,
  handleClose,
  handleChoose,
  setMovie,
  errors,
  setError,
  handleSelect,
}) => {
  const [openModalcon, SetopenModalcon] = useState(false);

  const handleClickOpen = () => {
    SetopenModalcon(true);
  };
  const handleCloseModalcon = () => {
    SetopenModalcon(false);
  };
  const plans = useContext(ContextPlans);
  const {authors}= useContext(ContextAuthors)
  const categories = useContext(ContextCategories);
  const actors = useContext(ContextActors);
  const characters = useContext(Contextcharacters);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setMovie({ ...movie, imgUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const validation = () => {
    const newErrors = {};
    newErrors.name = movie.name ? "" : "Vui long nhap name";
    newErrors.description = movie.description
      ? ""
      : "vui long nhap description";
    newErrors.duration = movie.duration ? "" : "vui long nhap Duration";
    newErrors.author = movie.author ? "" : "vui long nhap Duration";
    newErrors.rent = movie.rent ? "" : "vui long nhap Rent";
    setError(newErrors);
    return (
      newErrors.name ||
      newErrors.description ||
      newErrors.duration ||
      newErrors.rent ||
      newErrors.author
    );
  };
  const handleSubmit = async (e) => {
    if (validation()) {
      return;
    }
    handleClose();
    if (movie.id) {
      await updateDocument("movies", movie);
    } else {
      await addDocument("movies", movie);
    }
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{ "& .MuiDialog-paper": { width: "80%", maxWidth: "none" } }}
    >
      <DialogTitle> Add New actor </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          {/* Dòng 1 */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              style={{
                padding: 20,
                textAlign: "center",
                backgroundColor: "#f5f5f5",
              }}
            >
              <TextField
                margin="dense"
                name="name"
                label="Name"
                type="text"
                fullWidth
                variant="outlined"
                sx={{ marginBottom: 2 }}
                value={movie.name}
                onChange={handleInput}
                error={!!errors.name}
                helperText={errors.name}
              />
              <TextField
                margin="dense"
                name="description"
                label="Description"
                type="text"
                fullWidth
                variant="outlined"
                value={movie.description}
                onChange={handleInput}
                error={!!errors.description}
                helperText={errors.description}
              />
              <TextField
                margin="dense"
                name="duration"
                label="Duration (in minutes)"
                type="number"
                fullWidth
                variant="outlined"
                value={movie.duration}
                onChange={handleInput}
                error={!!errors.duration}
                helperText={errors.duration}
              />

             
<FormControl fullWidth style={{ marginTop: 20 }}>
  <Autocomplete
    options={authors}
    getOptionLabel={(option) => option?.name || ""}
    value={authors.find((author) => author.id === movie.author)}
    onChange={(_, newValue) => {
      setMovie((prev) => ({
        ...prev,
        author: newValue ? newValue.id : "", // Chỉ lưu ID của author
      }));
    }}
    isOptionEqualToValue={(option, value) => option.id === value?.id}
    renderInput={(params) => (
      <TextField
        {...params}
        margin="dense"
        name="author"
        label="Author"
        fullWidth
        variant="outlined"
        sx={{ marginBottom: 2 }}
        error={!!errors.author}
        helperText={errors.author}
      />
    )}
  />
</FormControl>

<FormControl fullWidth style={{ marginTop: 20 }}>
  <Autocomplete
    options={plans}
    getOptionLabel={(option) => option?.level || ""}
    value={plans.find((plan) => plan.id === movie.plan) || null}
    onChange={(_, newValue) => {
      setMovie((prev) => ({
        ...prev,
        plan: newValue ? newValue.id : "", // Chỉ lưu ID của plan
      }));
    }}
    isOptionEqualToValue={(option, value) => option.id === value?.id}
    renderInput={(params) => (
      <TextField
        {...params}
        margin="dense"
        name="plan"
        label="Plan"
        fullWidth
        variant="outlined"
        sx={{ marginBottom: 2 }}
        error={!!errors.plan}
        helperText={errors.plan}
      />
    )}
  />
</FormControl>

              <TextField
                margin="dense"
                name="rent"
                label="Rent"
                type="number"
                fullWidth
                variant="outlined"
                value={movie.rent}
                onChange={handleInput}
                error={!!errors.rent}
                helperText={errors.rent}
              />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              style={{
                padding: 20,
                textAlign: "center",
                backgroundColor: "#f5f5f5",
              }}
            >
              <Typography
                variant="p"
                className="flex items-center text-start gap-2"
              >
                <span>Categories</span>{" "}
                <TbTriangleSquareCircleFilled
                  onClick={() => handleChoose("categories")}
                />
              </Typography>
              <div className="flex gap-2 flex-wrap">
                {movie.listCate?.map((item, i) => (
                  <div  className="relative">
                  <Button key={i} variant="contained" size="small">
                    {getObjectById(categories, item)?.name}
                  </Button>
                  <button className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition">
                    <TiDeleteOutline
                      onClick={() => handleSelect(item, "categories")}
                      size={16}
                    />
                  </button>
                </div>
                ))}
              </div>

              <Typography
                variant="p"
                className="flex items-center text-start gap-2 "
              >
                <span>Actor</span>{" "}
                <FaUser onClick={() => handleChoose("actors")} />
              </Typography>
              <div className="flex items-center gap-2 my-3">
                {movie.listActor?.map((actor, i) => (
                  <div key={i} className="relative w-16 h-16">
                    <img
                      className="w-full h-full rounded-full"
                      src={getObjectById(actors, actor)?.imgUrl}
                      alt={getObjectById(actors, actor)?.name}
                    />
                    <button className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition">
                      <TiDeleteOutline
                        onClick={() => handleSelect(actor, "actors")}
                        size={16}
                      />
                    </button>
                  </div>
                ))}
              </div>

              <Typography
                variant="p"
                className="flex items-center text-start gap-2 "
              >
                <span>Character</span>{" "}
                <FaUser onClick={() => handleChoose("characters")} />
              </Typography>
              <div className="flex items-center gap-2 my-3">
                {movie.listCharacter?.map((char, i) => (
                  <div key={i} className="relative w-16 h-16">
                    <img
                      className="w-full h-full rounded-full"
                      src={getObjectById(characters, char)?.imgUrl}
                      alt={getObjectById(characters, char)?.name}
                    />
                    <button className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition">
                      <TiDeleteOutline
                        onClick={() => handleSelect(char, "characters")}
                        size={16}
                      />
                    </button>
                  </div>
                ))}
              </div>

              <Typography
                variant="p"
                className=" flex items-center justify-start  "
              >
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="file-upload"
                  type="file"
                />
                <label htmlFor="upload-photo">
                  <input
                    style={{ display: "none" }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                    onChange={handleImageChange}
                  />
                  <IconButton color="primary" component="span">
                    <FaFileUpload />
                  </IconButton>
                </label>
                <Avatar
                  src={movie.imgUrl}
                  alt="logo Image"
                  sx={{ width: 150, height: 150, margin: "10px auto" }}
                />
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          Confirm
        </Button>
      </DialogActions>
      <ModalCon open={openModalcon} handleClose={handleCloseModalcon} />
    </Dialog>
  );
};

export default ModalMovie;
