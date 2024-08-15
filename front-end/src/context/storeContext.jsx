import { createContext } from "react";
import { food_List } from "../assets/assets";

export const storeContext = createContext(null);

const StoreContextProvider = (props) => {
  const contextValue = { food_List };
  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  );
};

export default StoreContextProvider;
