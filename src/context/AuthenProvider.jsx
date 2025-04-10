import React, { createContext, useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import { SECRET_KEY } from "../utils/Contants";
export const ContextAuthen = createContext();

export const AuThenProvider = ({ children }) => {
  const [accountLogin, setAccountLogin] = useState(null);

  useEffect(() => {
   setAccountLogin(getLocal("accountLogin"));
  },[]);

  const saveLocal = (key, value) => {
      try {
         // Mã hóa bằng AES
          const encryptedValue = CryptoJS.AES.encrypt(JSON.stringify(value), SECRET_KEY).toString();
          localStorage.setItem(key, encryptedValue);
          setAccountLogin(value);
      } catch (error) {
          console.error("Error saving to localStorage:", error);
      }
  };
  // Hàm giải mã để lấy lại dữ liệu từ localStorage
 const getLocal = (key) => {
  try {
    const encryptedValue = localStorage.getItem(key);
    if (!encryptedValue) return null;

    // Giải mã AES
    const bytes = CryptoJS.AES.decrypt(encryptedValue, SECRET_KEY);
    const decryptedValue = bytes.toString(CryptoJS.enc.Utf8);

    return JSON.parse(decryptedValue);
  } catch (error) {
    console.error("Error retrieving from localStorage:", error);
    return null;
  }
};
const logout = () => {
   setAccountLogin(null);
   localStorage.removeItem("accountLogin");
}
  return (
    <ContextAuthen.Provider value={{saveLocal, accountLogin, logout }}>
      {children}
    </ContextAuthen.Provider>
  );
};