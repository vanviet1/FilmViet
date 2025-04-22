import React from 'react'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    TextField,
  } from "@mui/material";
function ModalAccountPassword({ open, handleClose, user, setUser, errors, setError }) {
  return (
    <div>
         <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Đổi mật khẩu</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="currentPassword"
          label="currentpassword"
          type="password"
          fullWidth
          variant="outlined"
        //   value={formData.currentPassword}
        //   onChange={handleInput}
          error={!!errors.currentPassword}
          helperText={errors.currentPassword}
        />
        <TextField
          margin="dense"
          name="newPassword"
          label="newpassword"
          type="password"
          fullWidth
          variant="outlined"
        //   value={formData.newPassword}
        //   onChange={handleInput}
          error={!!errors.newPassword}
          helperText={errors.newPassword}
        />
        <TextField
          margin="dense"
          name="confirmNewPassword"
          label="confirmNewpassword"
          type="password"
          fullWidth
          variant="outlined"
        //   value={formData.confirmNewPassword}
        //   onChange={handleInput}
          error={!!errors.confirmNewPassword}
          helperText={errors.confirmNewPassword}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Hủy
        </Button>
        <Button color="primary">
          Lưu
        </Button>
      </DialogActions>
    </Dialog>
      
    </div>
  )
}

export default ModalAccountPassword
