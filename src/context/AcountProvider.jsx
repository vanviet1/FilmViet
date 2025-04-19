import React, { createContext, useState, useEffect } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";

export const ContextAcount = createContext();

export const AcountProvider = ({ children }) => {
    const [acounts, setAcounts] = useState([]);
    useEffect(() => {
      // Sử dụng fetchDocumentsRealtime để lắng nghe dữ liệu realtime
      const unsubscribe = fetchDocumentsRealtime("users", (acountsList) => {
        setAcounts(acountsList);
      });
  
      // Hủy lắng nghe khi component bị unmount
      return () => unsubscribe();
    }, []);
  
    return (
      <ContextAcount.Provider value={{acounts}}>
        {children}
      </ContextAcount.Provider>
    );
  };