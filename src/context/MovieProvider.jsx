import React, { createContext, useState, useEffect } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";

export const ContextMovies = createContext();

export const    MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Sử dụng fetchDocumentsRealtime để lắng nghe dữ liệu realtime
    const unsubscribe = fetchDocumentsRealtime("movies", (moviesList) => {
        setMovies(moviesList);
    });

    // Hủy lắng nghe khi component bị unmount
    return () => unsubscribe();
  }, []);

  return (
    <ContextMovies.Provider value = {movies}>
      {children}
    </ContextMovies.Provider>
  );
};


