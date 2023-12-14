import { createSlice } from "@reduxjs/toolkit";


const langConfig = createSlice({
    name: "lang",
    initialState:{
        changeLangState : "English",
    },
    reducers:{
        changeLangFunction:(state,action)=>{
            state.changeLangState = action.payload
        }
    }
})


export const{ changeLangFunction }=langConfig.actions
export default langConfig.reducer;