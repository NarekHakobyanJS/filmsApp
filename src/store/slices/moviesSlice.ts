import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { filmsApi } from "../../api/api";

////// ThunkCreator 
export const getAsyncMovies = createAsyncThunk(
    'getAsyncMovies',
    async () => {
        const response = await filmsApi.getMovies()

        return response
    }
)


const moviesSlice = createSlice({
    name : 'moviesSlice',
    initialState : {
        movies : []
    }, 
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(getAsyncMovies.fulfilled, (state : any, action) => {
            state.movies = action.payload
        })
    }
})

export default moviesSlice.reducer