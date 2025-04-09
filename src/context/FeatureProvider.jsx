import React, { createContext, useState, useEffect } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";

export const ContextFeatures = createContext();

export const FeaturesProvider = ({ children }) => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    // Sử dụng fetchDocumentsRealtime để lắng nghe dữ liệu realtime
    const unsubscribe = fetchDocumentsRealtime("feature", (featuresList) => {
        setFeatures(featuresList);
    });

    // Hủy lắng nghe khi component bị unmount
    return () => unsubscribe();
  }, []);

  return (
    <ContextFeatures.Provider value = {features}>
      {children}
    </ContextFeatures.Provider>
  );
};