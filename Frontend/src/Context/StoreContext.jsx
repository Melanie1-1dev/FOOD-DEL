import { createContext } from "react";
import { food_list } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const StoreContextProvider = (props)=>{

  const contextValue={
    food_list

  }
  return(
    <StoreContext.Provider value={contextValue}>
      {props.children}
      <FoodDisplay/>
    </StoreContext.Provider>
  )
}

export default Context