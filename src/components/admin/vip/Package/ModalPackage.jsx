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
  Radio
} from "@mui/material";
import {
  addDocument,
  updateDocument,
} from "../../../../services/firebaseService";
import { IoMdPhotos } from "react-icons/io";
import { ContextPlans } from "../../../../context/PlansProvider";


function ModalPackage({packa,open, handleClose, errors, setError, setPacka}) {
  const plans = useContext(ContextPlans)
  
      const validation = () => {
        const newErrors = {};
        newErrors.plan = packa.plan ? "" : "Vui long nhap plan";
        newErrors.time = packa.time ? "" : "vui long nhap time";
          newErrors.discount = packa.discount
          ? ""
          : "vui long nhap discount";
        setError(newErrors);
        return newErrors.plan || newErrors.time || newErrors.discount;
      };
      const handleSubmit = async (e) => {
        if (validation()) {
          return;
        }
        handleClose();
        if (packa.id) {
          await updateDocument("packages", packa);
        } else {
          await addDocument("packages", packa);
        }
      };
      const handleInput = (e) => {
        const { name, value } = e.target;
        setPacka({ ...packa, [name]: value });
      };
  return (
    <Dialog open={open} onClose={handleClose}>
          <DialogTitle> {packa.id ? "Edit package ":"Add New package "}</DialogTitle>
          <DialogContent>
          <FormControl 
            fullWidth margin="dense" 
        error={!!errors.plan}>
        <InputLabel>Plan</InputLabel>
          <Select
            name="plan"
            value={packa.plan}
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
              name="time"
              label="Time"
              type="text"
              fullWidth
              value={packa.time}
              variant="outlined"
              onChange={handleInput}
              error={!!errors.time}
              helperText={errors.time}
            />
             <TextField
              margin="dense"
              name="discount"
              label="Discount"
              type="text"
              fullWidth
              value={packa.discount}
              variant="outlined"
              onChange={handleInput}
              error={!!errors.discount}
              helperText={errors.discount}
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
  )
}

export default ModalPackage;