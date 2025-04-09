import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { deleteDocument } from '../services/firebaseService';
// Khai báo một biến lưu trữ hàm hiển thị modal để sử dụng bên ngoài
let showDeleteModal = null;


function ModalDelete({idProduct}) { 
    console.log(idProduct);
    
    const [open, setOpen] = useState(false);
     
    const handleOpen = () => {
        setOpen(true);
    };

    

    const handleClose = () => {
        setOpen(false);
    };
    const handleDelete  = async () => { 
        setOpen(false); 
        // await deleteDocument("categories", idProduct);
        await deleteDocument(idProduct.nameTale, idProduct.id);

        // await deleteDocument("plans", idProduct);
     
    }

    showDeleteModal = handleOpen;

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>DELETE</DialogTitle>
            <DialogContent>
                <h5>Are you sure you want to delete?</h5>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    NO!
                </Button>
                <Button color="primary" onClick={handleDelete}>
                    YES!
                </Button>
            </DialogActions>
        </Dialog>
    );
}


export { ModalDelete, showDeleteModal };
