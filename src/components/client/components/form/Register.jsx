import React, { useState, useContext } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import { IoMdPhotos } from "react-icons/io";
import { ContextAcount } from "../../../../context/AcountProvider";
import { ContextFormUi } from "../../../../context/FormUiContext";
import { logoUsers } from "../../../../utils/Contants";
import { addDocument } from "../../../../services/firebaseService";
import { ContextAuthen } from "../../../../context/AuthenProvider";

const inner = {
  name: "",
  email: "",
  password: "",
  imgUrl: logoUsers,
  role: "user",
};

const Register = () => {
  const { acounts } = useContext(ContextAcount);
  const { statusUiRegisterForm, setStatusUiRegisterForm, setStatusUiForm } = useContext(ContextFormUi);
  const [user, setUser] = useState(inner);
  const [confirmPassword, setConfirmPassword] = useState(""); // Thêm confirmPassword ở ngoài state chính
  const [errors, setErrors] = useState(inner);
const { saveLocal } = useContext(ContextAuthen);

  const handleClose = () => {
    setStatusUiRegisterForm(false);
  };

  const validation = () => {
    const newErrors = {};
    newErrors.name = user.name ? "" : "Vui lòng nhập tên";
    newErrors.email = user.email ? "" : "Vui lòng nhập email";
    newErrors.password = user.password ? "" : "Vui lòng nhập mật khẩu";
    newErrors.confirmPassword = confirmPassword ? "" : "Vui lòng nhập xác nhận mật khẩu";

    if (user.password && confirmPassword && user.password !== confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu không trùng khớp, vui lòng nhập lại!";
    }
    
    if (acounts.some((account) => account.email === user.email)) {
      newErrors.email = "Email đã được sử dụng. Vui lòng chọn email khác!";
    }

    setErrors(newErrors);
    return Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async () => {
    if (validation()) return;
    const userData = { ...user }; 
  const newAccount =  await addDocument("users", userData);
    saveLocal(newAccount);
    setStatusUiRegisterForm(false); // Đóng form đăng ký
    setStatusUiForm(true); // Mở form đăng nhập
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

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value); // Lưu confirmPassword tạm thời
  };

  return (
    <Dialog open={statusUiRegisterForm} PaperProps={{
      style: {
        backgroundImage: "url('https://leerit.com/media/blog/uploads/2016/10/09/tu-vung-tieng-anh-ve-dien-anh-movies-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center", 
        color: "white",
        backdropFilter: "blur(10px)",
        borderRadius: "10px"
      }
    }}>
      <DialogTitle sx={{ textAlign: "center", color: "white" }}>Movie Register</DialogTitle>
      <DialogContent>
        <Typography variant="body2" align="center" sx={{ color: "gray", mb: 2 }}>
          Điền thông tin để đăng ký tài khoản
        </Typography>
        <TextField
          fullWidth
          label="Tên"
          name="name"
          variant="filled"
          value={user.name}
          onChange={handleInput}
          error={!!errors.name}
          helperText={errors.name}
          sx={{ mb: 2, input: { color: 'white' }, label: { color: 'white' }, backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "5px" }}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          variant="filled"
          value={user.email}
          onChange={handleInput}
          error={!!errors.email}
          helperText={errors.email}
          sx={{ mb: 2, input: { color: 'white' }, label: { color: 'white' }, backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "5px" }}
        />
        <TextField
          fullWidth
          label="Mật khẩu"
          name="password"
          type="password"
          variant="filled"
          value={user.password}
          onChange={handleInput}
          error={!!errors.password}
          helperText={errors.password}
          sx={{ mb: 2, input: { color: 'white' }, label: { color: 'white' }, backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "5px" }}
        />
        <TextField
          fullWidth
          label="Xác nhận mật khẩu"
          name="confirmPassword"
          type="password"
          variant="filled"
          value={confirmPassword}
          onChange={handleConfirmPassword} // Sử dụng hàm mới cho confirmPassword
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          sx={{ mb: 2, input: { color: 'white' }, label: { color: 'white' }, backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "5px" }}
        />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 10 }}>
          <label htmlFor="upload-photo">
            <input style={{ display: "none" }} id="upload-photo" name="upload-photo" type="file" onChange={handleImageChange} />
            <IconButton color="primary" component="span">
              <IoMdPhotos size={24} />
            </IconButton>
          </label>
          <Avatar src={user?.imgUrl} alt="User Avatar" sx={{ width: 100, height: 100, margin: "10px auto" }} />
        </div>
      </DialogContent>
      <DialogActions sx={{ padding: 3 }}>
        <Button color="secondary" onClick={handleClose}>Hủy</Button>
        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.3)' }, color: "white", }}
          onClick={handleSubmit}
        >
          Đăng ký
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Register;
