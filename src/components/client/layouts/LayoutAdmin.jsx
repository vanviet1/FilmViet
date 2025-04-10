import { Outlet } from "react-router-dom";
import Sidebar from '../../../layouts/Sidebar'
import Header from '../../../layouts/Header'
// import '../../../app.css'
const LayoutAdmin = () => {
    return (
    <div className="App">
    <div className="md:flex">
     <div>
     <Sidebar/>
     </div>
     <div className='flex-1'>
       <Header/>
       <Outlet/>
     </div>
     </div>
    </div>
    );
};

export default LayoutAdmin;