import { createSlice, createAsyncThunk, type PayloadAction} from "@reduxjs/toolkit";
import { filmsApi } from "../../api/api";
import type { IGetMoviesResponseType } from "../../api/types";
import type { IMovie } from "../../shared/types/movie.types";

////// ThunkCreator 
export const getAsyncMovies = createAsyncThunk<IGetMoviesResponseType >(
    'getAsyncMovies',
    async () => {
        const response = await filmsApi.getMovies()

        return response
    }
)

type MoviesSliceActionType = {
    movies : IMovie[]
}

const initialState : MoviesSliceActionType  = {
    movies : []
}

const moviesSlice = createSlice({
    name : 'moviesSlice',
    initialState, 
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(getAsyncMovies.fulfilled, (state, action : PayloadAction<IGetMoviesResponseType>) => {
            state.movies = action.payload.results
        })
    }
})

export default moviesSlice.reducer