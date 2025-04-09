import React, { useContext, useState } from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormControlLabel,
    RadioGroup,
    Radio, 
   
  } from "@mui/material";
import {
  addDocument,
  updateDocument,
} from "../../../../services/firebaseService";
import { ContextPlans } from "../../../../context/PlansProvider";

function ModalFeature({open, handleClose,  feature, setFeature, errors, setError}) {
   
  const plans = useContext(ContextPlans)

    const validation = () => {
    const newErrors = {};
    newErrors.plan = feature.plan ? "" : "Vui lòng chọn gói";
    newErrors.text = feature.text ? "" : "Vui lòng nhập nội dung";
    newErrors.available = feature.available !== undefined ? "" : "Vui lòng chọn trạng thái";
    setError(newErrors);
    return newErrors.plan || newErrors.text || newErrors.available;
  };

      const handleSubmit = async (e) => {
        if (validation()) {
          return;
        }
        handleClose();
        if (feature.id) {
          await updateDocument("feature", feature);
        } else {
          await addDocument("feature", feature);
        }
      };
      const handleInput = (e) => {
        const { name, value } = e.target;
        setFeature({ ...feature, [name]: value });
      };
  return (
    <Dialog open={open} onClose={handleClose}>
          <DialogTitle> {feature.id ? "Edit feature ":"Add New feature "}</DialogTitle>
          <DialogContent>
            <FormControl 
            fullWidth margin="dense" 
        error={!!errors.plan}>
        <InputLabel>Plan</InputLabel>
          <Select
            name="plan"
            value={feature.plan}
            onChange={handleInput}
          >
            {plans.map((plan) => (
              <MenuItem key={plan} value={plan.id}>
                {plan.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
            <TextField
              margin="dense"
              name="text"
              label="text"
              type="text"
              fullWidth
              value={feature.text}
              variant="outlined"
              onChange={handleInput}
              error={!!errors.text} 
              helperText={errors.text}
            />
             {/* Radio Button for Available */}
        <FormControl component="fieldset" margin="dense" error={!!errors.available}>
          <RadioGroup
            row
            name="available"
            value={feature.available || ""}
            onChange={handleInput}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
         
            
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
  )
}


export default ModalFeature;




 


 






    
  
    
