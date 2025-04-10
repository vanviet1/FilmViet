import Header from "./Header";
import Footer from  "./Footer";
import Login from "../components/form/Login";
import Register from "../components/form/Register";
import { ContextFormUi } from "../../../context/FormUiContext"; 
import { useContext } from "react";
import ClientRouters from "../../../routes/ClientRouters";

const LayoutDefault = () => {
    const {statusUiForm,statusUiRegisterForm} = useContext(ContextFormUi)

    return (
        <div className="relative">
        <Header />
        <div className='w-full h-auto'>
        <ClientRouters />
        </div>
        <Footer />
        
        {/* Modal form */}
        {statusUiForm && <div className="fixed inset-0 z-50"><Login /></div>}
        {statusUiRegisterForm && <div className="fixed inset-0 z-50"><Register /></div>}
    </div>
    
    );
};

export default LayoutDefault;