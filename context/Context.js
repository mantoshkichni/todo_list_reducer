import { createContext, useReducer } from "react"
const intialstate=[];
const TodilidtContext=createContext()
const reducer=(state,action)={
  switch (action.type) {  
    case "ADD_TODO_LIST":
      return (

      )
    default:
      return state;
  }
}
export const Context=({children})=>{
  
  const [state,dispatch]=useReducer(reducer,intialstate)
  return (
<TodilidtContext.Provider value={{intialstate,dispatch}}>{children}</TodilidtContext.Provider>
  )
}
