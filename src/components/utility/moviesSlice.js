import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingmovies: null,
        trailerVideo: null,
        suggestedMovie:null,
        SuggestedMovieName:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingmovies=action.payload
         },
         addTrailerVideo:(state,action)=>{
            state.trailerVideo= action.payload
         },
         addSuggestedMovie:(state,action)=>{
            state.suggestedMovie = action.payload
          },
          addSuggestedMovieName:(state,action)=>{
            state.SuggestedMovieName= action.payload

          }
    }
})

export const{ addNowPlayingMovies,addTrailerVideo,addSuggestedMovie,addSuggestedMovieName }=moviesSlice.actions;
export default moviesSlice.reducer;