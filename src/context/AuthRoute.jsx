import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
    const user = JSON.parse(localStorage.getItem("acounts"));
    if (!user || user.role !== true) {    
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default AuthRoute;
