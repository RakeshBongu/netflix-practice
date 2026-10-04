import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        moviesCategory: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addMoviesCategory: (state, action) => {
           state.moviesCategory = action.payload 
        }
    }
})

export const {addNowPlayingMovies, addMoviesCategory} = moviesSlice.actions

export default moviesSlice.reducer