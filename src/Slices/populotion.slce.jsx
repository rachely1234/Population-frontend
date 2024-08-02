import { createSlice } from "@reduxjs/toolkit";
import { updateMone,updateItem,setData,addItem,deleteItem,updateLastFunction } from "../App/Action";

const initialState = {
    data: [],
    functionName:"",
    mone:0
};

const PopulotionSlice = createSlice({
    name: "Populotion",
    initialState,
    reducers: {
        DeletePopulation:deleteItem,
        AddCity: addItem,
        SortInAscendingOrder:setData,
        EditPopulation:updateItem,
       
        getAllPopolotion:setData,
        UpdateLastFunction:updateLastFunction,
        UpdateMone:updateMone


    }
});

export const { UpdateMone,UpdateLastFunction,DeletePopulation, AddCity,SortInAscendingOrder,EditPopulation ,getAllPopolotion} = PopulotionSlice.actions;
export default PopulotionSlice.reducer;