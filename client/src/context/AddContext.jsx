import { createContext, useContext } from "react";

const AddContext = createContext();

export const AddContextProvider = ({ children }) => {
  const value = {};
  return <AddContext.Provider value={value}>{children}</AddContext.Provider>;
};

export const useAddContext = () => useContext(AddContext);

export default AddContext;
