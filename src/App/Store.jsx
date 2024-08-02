import { configureStore } from "@reduxjs/toolkit";

import populotionSlce from "../Slices/populotion.slce";
export const store = configureStore({
    reducer: {
        Population: populotionSlce,
        
    }   
});
export default store;