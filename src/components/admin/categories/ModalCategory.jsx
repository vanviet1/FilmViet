import  React ,{ useState } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { addDocument, updateDocument } from "../../../services/firebaseService";

function ModalCategory({handleClose, open, category, handleInput, errors, setError, setCategory}) {
   
    const validation = () => {
         const newErrors = {} ;
         newErrors.name = category.name ? "" : "Vui long nhap name" ;
         newErrors.description = category.description ? "" : "vui long nhap description";
         setError(newErrors);
         return newErrors.name || newErrors.description ;
    }

    const handleSubmit = async (e) => {
        if(validation()) {   
            return;
        }
        handleClose();
        if(category.id) {
            await updateDocument("categories", category);
        }else{
            await addDocument("categories", category);
        }
    }

    return (
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
            {category.id ? "Edit Category ":"Add New Category "}
             
             </DialogTitle>
        <DialogContent>
            <TextField
                margin="dense"
                name="name"
                label="Name"
                type="text"
                fullWidth
                variant="outlined"
                value={category.name}
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
              
                value={category.description}

                variant="outlined"
                onChange={handleInput}
                error={!!errors.description}
                helperText={errors.description}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleSubmit}  color="primary">
                Confirm
            </Button>
        </DialogActions>
    </Dialog>
    );
}

export default ModalCategory;