import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField, 
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Avatar,
  IconButton,
} from "@mui/material";
import { IoMdPhotos } from "react-icons/io";
import { addDocument, updateDocument } from "../../../services/firebaseService";

function ModalUserPages({ open, handleClose, user, setUser, errors, setError }) {
  const validation = () => {
    const newErrors = {};
    newErrors.name = user.name ? "" : "Vui lòng nhập tên";
    newErrors.email = user.email ? "" : "Vui lòng nhập email";
    newErrors.password = user.password ? "" : "Vui lòng nhập mật khẩu";
    newErrors.confirmPassword = user.confirmPassword ? "" : "Vui lòng nhập xác nhận mật khẩu";

    // Kiểm tra mật khẩu và xác nhận mật khẩu có trùng nhau không
    if (user.password && user.confirmPassword && user.password !== user.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu không trùng khớp, vui lòng nhập lại!";
    }

    newErrors.role = user.role !== undefined ? "" : "Vui lòng chọn trạng thái";
    setError(newErrors);

    return Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async () => {
    if (validation()) return;
    handleClose();
    if (user.id) {
      await updateDocument("users", user);
    } else {
      await addDocument("users", user);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUser({ ...user, imgUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{user.id ? "Edit User" : "Add New User"}</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          variant="outlined"
          value={user.name}
          onChange={handleInput}
          error={!!errors.name}
          helperText={errors.name}
        />

        <TextField
          margin="dense"
          name="email"
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          value={user.email}
          onChange={handleInput}
          error={!!errors.email}
          helperText={errors.email}
        />
       

        <TextField
          margin="dense"
          name="password"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          value={user.password}
          onChange={handleInput}
          error={!!errors.password}
          helperText={errors.password}
        />
         {user.id ? " " : 
          <TextField
          margin="dense"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          fullWidth
          variant="outlined"
          value={user.confirmPassword}
          onChange={handleInput}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
        />
         }

       

        {/* Radio Group + Avatar */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 10 }}>
          <FormControl component="fieldset" error={!!errors.role}>
            <RadioGroup row name="role" value={user.role || ""} onChange={handleInput}>
              <FormControlLabel value="true" control={<Radio />} label="True" />
              <FormControlLabel value="false" control={<Radio />} label="False" />
            </RadioGroup>
          </FormControl>

          <label htmlFor="upload-photo">
            <input
              style={{ display: "none" }}
              id="upload-photo"
              name="upload-photo"
              type="file"
              onChange={handleImageChange}
            />
            <IconButton color="primary" component="span">
              <IoMdPhotos size={24} />
            </IconButton>
          </label>
          <Avatar
            src={user?.imgUrl}
            alt="User Image"
            sx={{ width: 150, height: 150, margin: "10px auto" }}
          />
        </div>
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

export default ModalUserPages;
