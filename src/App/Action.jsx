import { PayloadAction } from "@reduxjs/toolkit";



export const deleteItem = (state, action) => {
    return {
      ...state,
      data: state.data.filter((item) => item.id !== action.payload),
    };
  };

  export const addItem = (state, action) => {  
    console.log("add item");
    debugger
    return {
        
      ...state,
      data: [...state.data, action.payload],
    };
  };
  
  export const setData =(state, action) => {
    return {
      ...state,
      data: action.payload,
    };
  };
  
  export const updateItem =(state, action) => {
    const updatedState = { ...state };
    const updatedIndex = updatedState.data.findIndex((item) => item.id === action.payload.id);
    if (updatedIndex !== -1) {
      const updatedData = [...updatedState.data];
      updatedData[updatedIndex] = action.payload;
      updatedState.data = updatedData;
    }
    return updatedState;
  };

  export const updateLastFunction=(state,action)=>{

  
   const updateState={...state};
   console.log(updateState);
   if(updateState.functionName!=action.payload.functionName){
    updateState.mone=0;
   }
  
    updateState.functionName=action.payload.functionName

  return updateState

  }
  
  export const updateMone=(state,action)=>{

    console.log("from update mone");
    console.log(state);
    console.log(action.payload.functionName);
    const updateState={...state};
  
     updateState.mone++;
    
   
     
 
   return updateState
 
   }