import React, { useState } from 'react';
import {  IconButton, Avatar, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoMdPhotos } from "react-icons/io";

import { addDocument,updateDocument  } from "../../../../services/firebaseService";

function ModalActor({ actor, open, handleClose, errors, setError, setActor,  }) {

    const validation = () => {
        const newErrors = {};
        newErrors.name = actor.name ? "" : "Vui long nhap name";
        newErrors.description = actor.description
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
          if (actor.id) {
            await updateDocument("actors", actor);
          } else {
            await addDocument("actors", actor);
          }
        };

        const handleImageChange = (event) => {
            const file = event.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = () => {
                setActor({ ...actor, imgUrl: reader.result });
              };
              reader.readAsDataURL(file);
            }
          };

          const handleInput = (e) => {
            const { name, value } = e.target;
            setActor({ ...actor, [name]: value });
          };
    return (
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle> {actor.id ? "Edit actor ":"Add New actor "}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            value={actor.name}
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
            value={actor.description}
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
            src={actor?.imgUrl}
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

export default ModalActor;