import  React ,{ useState } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { addDocument, updateDocument } from "../../../services/firebaseService"


function ModalPlan({handleClose, open, plan, handleInput, errors, setError}) {

  

    const validation = () => {
        const newErrors = {} ;
        newErrors.level  = plan.level ? "" : "Vui long nhap lai" ;
        newErrors.pricePerMonth = plan.pricePerMonth ? "" : "vui long nhap lai";
        newErrors.title = plan.title ? "" : "vui long nhap lai";
        setError(newErrors);
        return newErrors.level  || newErrors.pricePerMonth || newErrors.title ;
   }
    const handleSubmit = async (e) => {
        if(validation()) {
            return;
        }
        handleClose();
        if(plan.id) {
            await updateDocument("plans", plan)
        }else{
            await addDocument("plans", plan)
        }

        
   }

    return (

        <Dialog open={open} onClose={handleClose} >
            <DialogTitle> {plan.id ? "Edit Plan ":"Add New Plan "}</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    name="level"
                    label="Level"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={plan.level}
                    sx={{ marginBottom: 2 }}
                    onChange={handleInput}
                    error={!!errors.level}
                    helperText={errors.level}

                />
                <TextField
                    margin="dense"
                    name="pricePerMonth"
                    label="pricePerMonth"
                    type="text"
                    fullWidth
                    value={plan.pricePerMonth}
                    variant="outlined"
                    onChange={handleInput}
                    error={!!errors.pricePerMonth}
                    helperText={errors.pricePerMonth}

                />
                <TextField
                    margin="dense"
                    name="title"
                    label="title"
                    type="text"
                    fullWidth
                    value={plan.title}
                    variant="outlined"
                    onChange={handleInput}
                    error={!!errors.title}
                    helperText={errors.title}

                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button  color="primary" onClick={handleSubmit}>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ModalPlan;