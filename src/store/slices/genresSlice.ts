import { createSlice } from "@reduxjs/toolkit";
import { filmsApi } from "../../api/api";


/// Side Effect 

const genresSlice = createSlice({
    name : 'genresSlice',
    initialState : {
        genres : []
    },
    reducers : {
        getGenres(state, action){
            // filmsApi.getGenres()
            state.genres = []
        }
    }
})


export const {getGenres} = genresSlice.actions
export default genresSlice.reducer