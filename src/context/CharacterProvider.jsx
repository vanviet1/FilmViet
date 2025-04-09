import React, { createContext, useState, useEffect } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";

export const Contextcharacters = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Sử dụng fetchDocumentsRealtime để lắng nghe dữ liệu realtime
    const unsubscribe = fetchDocumentsRealtime("characters", (CharactersList) => {
        setCharacters(CharactersList);
    });

    // Hủy lắng nghe khi component bị unmount
    return () => unsubscribe();
  }, []);

  return (
    <Contextcharacters.Provider value={characters}>
      {children}
    </Contextcharacters.Provider>
  );
};