import React, { useState, useContext } from "react";
import {
  TextField,
  Button,
  Typography,
  Link,
  Checkbox,
  FormControlLabel,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle
} from "@mui/material";
import { ContextFormUi } from "../../../../context/FormUiContext";
import { ContextAcount } from "../../../../context/AcountProvider";
import { useNavigate } from "react-router-dom";

const inner = {
  email: "",
  password: "",
};

const Login = () => {
  const { setStatusUiRegisterForm, setStatusUiForm, statusUiForm } = useContext(ContextFormUi);
  const { acounts } = useContext(ContextAcount);
  const [formLogin, setFormLogin] = useState(inner);
  const [errors, setErrors] = useState(inner);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormLogin({ ...formLogin, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {
      email: formLogin.email ? "" : "Vui lòng nhập email.",
      password: formLogin.password ? "" : "Vui lòng nhập mật khẩu.",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleLogin = () => {
    if (!validateForm()) return;

    const user = acounts.find(
      (account) => account.email === formLogin.email && account.password === formLogin.password
    );

    if (!user) {
      setErrors({ ...errors, email: "Email hoặc mật khẩu không đúng." });
      return;
    }

    localStorage.setItem("acounts", JSON.stringify(user));
    setStatusUiForm(false);
    console.log(user);
    
    if (user.role) {
      navigate("/admin");
    } else {
      navigate("/");
    }

    window.location.reload();
  };

  return (
    <Dialog open={statusUiForm} PaperProps={{
      style: {
        backgroundImage: "url('https://leerit.com/media/blog/uploads/2016/10/09/tu-vung-tieng-anh-ve-dien-anh-movies-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        backdropFilter: "blur(10px)",
        borderRadius: "10px"
      }
    }}>
      <DialogTitle sx={{ textAlign: "center", color: "white" }}>Movie Login</DialogTitle>
      <DialogContent>
        <Typography variant="body2" align="center" sx={{ color: "gray", mb: 2 }}>
          Fill out the form below to login
        </Typography>
        <TextField
          fullWidth
          label="Email"
          type="email"
          name="email"
          variant="filled"
          value={formLogin.email}
          onChange={handleInputChange}
          error={!!errors.email}
          helperText={errors.email}
          sx={{ mb: 2, input: { color: 'white' }, label: { color: 'white' }, backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "5px" }}
        />
        <TextField
          fullWidth
          label="Mật khẩu"
          type="password"
          name="password"
          variant="filled"
          value={formLogin.password}
          onChange={handleInputChange}
          error={!!errors.password}
          helperText={errors.password}
          sx={{ mb: 2, input: { color: 'white' }, label: { color: 'white' }, backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "5px" }}
        />
      </DialogContent>
      <DialogActions>
        <Link to={"/"}>
        <Button color="secondary" onClick={() => setStatusUiForm(false)}>
          Hủy
        </Button>
        </Link>
        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.3)' }, color: "white" }}
          onClick={handleLogin}
        >
          Đăng nhập
        </Button>
      </DialogActions>
      <Typography variant="body2" align="center" sx={{ marginTop: 2,paddingBottom: 2, color: "white" }}>
          Chưa có tài khoản? {" "}
          <Link href="#" underline="hover" color="primary">
            <Button
              onClick={() => {
                setStatusUiRegisterForm(true);
                setStatusUiForm(false);
              }}
            >
              Đăng ký ngay
            </Button>
          </Link>
        </Typography>
    </Dialog>
  );
};

export default Login;
