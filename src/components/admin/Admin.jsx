import Sidebar from '../../layouts/Sidebar';
import Header from '../../layouts/Header';
import AdminRouters from '../../routes/AdminRouters';


function Admin() {
  return (
    <div className="App">
    <div className="md:flex">
      <div>
      <Sidebar/>
      </div>
      <div className='flex-1'>
         <Header/>
        <AdminRouters/>
      </div>
    </div>
    </div>
  );
}

export default Admin;
