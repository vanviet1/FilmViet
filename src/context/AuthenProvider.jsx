import React, { createContext, useState, useEffect } from "react";
export const ContextAuthen = createContext();

export const AuThenProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState({});

  useEffect(() => {
 
  }, []);

  const saveLocal = (account) => {
        setIsLogin(account);
       localStorage.setItem("isLogin", JSON.stringify(account));
  }

  return (
    <ContextAuthen.Provider value={{saveLocal, isLogin }}>
      {children}
    </ContextAuthen.Provider>
  );
};