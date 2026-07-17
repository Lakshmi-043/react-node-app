import React, { createContext } from "react";
const AppContext = createContext();
export const AppProvider = ({ children, value }) => {
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;