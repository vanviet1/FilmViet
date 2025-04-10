import { useContext } from 'react';
import './App.css';
import Admin from './components/admin/Admin';
import LayoutDefault from "./components/client/layouts/LayoutDefault";
import { ContextAuthen } from './context/AuthenProvider';
const App = () => {
    const { accountLogin } = useContext(ContextAuthen);

  return (
    <>
    { accountLogin?.role == "admin" ? <Admin />  : <LayoutDefault /> }
    </>
  );
};

export default App;
