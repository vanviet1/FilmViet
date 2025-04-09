
// import { RouterProvider} from 'react-router-dom';
// import GlobalContextProvider from './context/GlobalContext';
// import router from './routes/ClientRouters';

// import './App.css';
// const App = () => {


//   return (
//     <>
//     <GlobalContextProvider>
//       <RouterProvider router={router}></RouterProvider>
//     </GlobalContextProvider>
//     </>
//   );
// };

// export default App;



import { useContext } from 'react';
import './App.css';
import { ContextAuthen } from './context/AuthenProvider';
import Admin from './components/admin/Admin';
import LayoutAdmin from './components/client/layouts/LayoutAdmin';
import LayoutDefault from "./components/client/layouts/LayoutDefault";
const App = () => {
  

  return (
    <>
    { false ? <Admin />  : <LayoutDefault /> }
    </>
  );
};

export default App;
