import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { filmsApi } from "../../api/api";


export const getAsyncGenres = createAsyncThunk(
    'getAsyncGenres',
    async () => {

        const response = await filmsApi.getGenres()

        return response.genres
    }
)


const genresSlice = createSlice({
    name : 'genresSlice',
    initialState : {
        genres : [],
        isLodaing : false
    },
    reducers : {
        getGenres(state, action){
            state.genres = action.payload
        },
        changeIsLoading(state, action){
            state.isLodaing = action.payload
        }
    }, 
    extraReducers : (builder) => {
        builder.addCase(getAsyncGenres.pending, (state, action) => {
            state.isLodaing = true;
        })

        builder.addCase(getAsyncGenres.fulfilled, (state : any, action) => {
            state.isLodaing = false 
            state.genres = action.payload
        })
    }
})


export const {getGenres, changeIsLoading} = genresSlice.actions
export default genresSlice.reducer



