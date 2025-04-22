
import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Avatar,
  IconButton,
} from "@mui/material";
import { IoMdPhotos } from "react-icons/io";
import { updateDocument } from "../../../../services/firebaseService";


function ModalAccount({ open, handleClose, user, setUser, errors, setError }) {



 


  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Thông tin tài khoản</DialogTitle>
      <DialogContent>
        {/* Avatar + Upload */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 10 }}>
          <label htmlFor="upload-photo">
            <input
              style={{ display: "none" }}
              id="upload-photo"
              name="upload-photo"
              type="file"
              // onChange={handleImageChange}
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

        {/* Name Input */}
        <TextField
          margin="dense"
          name="name"
          label="Tên"
          type="text"
          fullWidth
          variant="outlined"
          value={user.name}
          // onChange={handleInput}
          error={!!errors.name}
          helperText={errors.name}
        />

        {/* Email Input (readonly) */}
        <TextField
          margin="dense"
          name="email"
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          value={user.email}
          InputProps={{
            readOnly: true,
          }}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Hủy
        </Button>
        <Button color="primary" >
          Lưu
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalAccount;

