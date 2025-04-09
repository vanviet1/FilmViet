import React, { createContext, useState, useEffect } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";

export const ContextAuthors= createContext();

export const AuthorsProvider = ({ children }) => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    // Sử dụng fetchDocumentsRealtime để lắng nghe dữ liệu realtime
    const unsubscribe = fetchDocumentsRealtime("authors", (authorsList) => {
        setAuthors(authorsList);
    });

    // Hủy lắng nghe khi component bị unmount
    return () => unsubscribe();
  }, []);

  return (
    <ContextAuthors.Provider value={{authors, setAuthors}}>
      {children}
    </ContextAuthors.Provider>
  );
};