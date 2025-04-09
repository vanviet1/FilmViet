import React, { createContext, useState } from "react";
export const ContextFormUi  = createContext();

export const FormUiProvider = ({ children }) => {
  const [statusUiForm, setStatusUiForm] = useState(false);
  const [statusUiRegisterForm, setStatusUiRegisterForm] = useState(false);

  return (
    <ContextFormUi.Provider value={{statusUiForm ,setStatusUiForm,statusUiRegisterForm, setStatusUiRegisterForm}}>
      {children}
    </ContextFormUi.Provider>
  );
};