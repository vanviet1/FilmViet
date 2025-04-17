import React, { createContext, useState, useEffect } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";

export const ContextAcount = createContext();

export const AcountProvider = ({ children }) => {
    const [acounts, setAcounts] = useState([]);
     const [users,setUsers] = useState([])
    //  useEffect(()=>{
    //   const userLogin = JSON.parse(localStorage.getItem('acounts'))
    //   setUsers(userLogin)
    //  },[])
     
    useEffect(() => {
      // Sử dụng fetchDocumentsRealtime để lắng nghe dữ liệu realtime
      const unsubscribe = fetchDocumentsRealtime("users", (acountsList) => {
        setAcounts(acountsList);
      });
  
      // Hủy lắng nghe khi component bị unmount
      return () => unsubscribe();
    }, []);
  
    return (
      <ContextAcount.Provider value={{acounts,users,setUsers}}>
        {children}
      </ContextAcount.Provider>
    );
  };