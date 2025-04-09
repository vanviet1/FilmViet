import Header from "./Header";
import Footer from  "./Footer";
import Login from "../components/form/Login";
import Register from "../components/form/Register";
import { Outlet } from 'react-router-dom';
import { ContextFormUi } from "../../../context/FormUiContext"; 
import { useContext } from "react";

const LayoutDefault = () => {
    const {statusUiForm,statusUiRegisterForm} = useContext(ContextFormUi)

    return (
        <div className="relative">
        <Header />
        <div className='w-full h-auto'>
            <Outlet />
        </div>
        <Footer />
        
        {/* Modal form */}
        {statusUiForm && <div className="fixed inset-0 z-50"><Login /></div>}
        {statusUiRegisterForm && <div className="fixed inset-0 z-50"><Register /></div>}
    </div>
    
    );
};

export default LayoutDefault;