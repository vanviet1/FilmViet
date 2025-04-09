import React from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

import { addDocument, updateDocument } from '../../../../services/firebaseService';


function ModalAuthor({handleClose, open, author, handleInput, errors, setError}) {



    const validation = () => {
        const newErrors = {} ;
        newErrors.name = author.name ? "" : "Vui long nhap name" ;
        newErrors.description = author.description ? "" : "vui long nhap description";
        setError(newErrors);
        return newErrors.name || newErrors.description ;
   }


   const handleSubmit = async (e) => {
    if(validation()) {   
        return;
    }
    handleClose();
    if(author.id) {
        await updateDocument("authors", author);
    }else{
        await addDocument("authors", author);
    }
}

    return (
       
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle> {author.id ? "Edit Author ":"Add New Author "}</DialogTitle>
        <DialogContent>
            
        
             <TextField
                margin="dense"
                name="name"
                label="Name"
                type="text"
                fullWidth
                variant="outlined"
                value={author.name}
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
                value={author.description}
               
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
            <Button onClick={handleSubmit} color="primary">
                Confirm
            </Button>
        </DialogActions>
    </Dialog>
    );
}

export default ModalAuthor;