import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState:{
        gptPageState: false,
    },
    reducers:{
        toggleGptPageState:(state)=>{
            state.gptPageState =!state.gptPageState
        }
    }
})

export const{toggleGptPageState}=gptSlice.actions
export default gptSlice.reducer