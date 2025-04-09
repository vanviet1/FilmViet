import React, { useState } from "react";
import {
  IconButton,
  Avatar,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import {
  addDocument,
  updateDocument,
} from "../../../../services/firebaseService";
import { IoMdPhotos } from "react-icons/io";

function Modal_Character({
  open,
  handleClose,
  character,
  setCharacter,
  errors,
  setError,
}) {
  const validation = () => {
    const newErrors = {};
    newErrors.name = character.name ? "" : "Vui long nhap name";
    newErrors.description = character.description
      ? ""
      : "vui long nhap description";
    setError(newErrors);
    return newErrors.name || newErrors.description;
  };
  const handleSubmit = async (e) => {
    if (validation()) {
      return;
    }
    handleClose();
    if (character.id) {
      await updateDocument("characters", character);
    } else {
      await addDocument("characters", character);
    }
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCharacter({ ...character, imgUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setCharacter({ ...character, [name]: value });
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle> {character.id ? "Edit character ":"Add New Character "}</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          variant="outlined"
          value={character.name}
          sx={{ marginBottom: 2 }}
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
          value={character.description}
          variant="outlined"
          onChange={handleInput}
          error={!!errors.description}
          helperText={errors.description}
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
            <IoMdPhotos />
          </IconButton>
        </label>
        <Avatar
          src={character?.imgUrl}
          alt="Actor Image"
          sx={{ width: 150, height: 150, margin: "10px auto" }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Modal_Character;
