import React, { createContext, useState, useEffect } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";

export const ContextTrailers = createContext();

export const TrailersProvider = ({ children }) => {
    const [trailers, setTrailers] = useState([]);
  
    useEffect(() => {
      // Lắng nghe dữ liệu realtime từ collection "trailers"
      const unsubscribe = fetchDocumentsRealtime("trailers", (trailersList) => {
        setTrailers(trailersList);
      });
  
      // Hủy lắng nghe khi component bị unmount
      return () => unsubscribe();
    }, []);
  
    return (
      <ContextTrailers.Provider value={trailers}>
        {children}
      </ContextTrailers.Provider>
    );
  };


