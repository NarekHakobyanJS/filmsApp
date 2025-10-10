import { createSlice, createAsyncThunk, type PayloadAction} from "@reduxjs/toolkit";
import { filmsApi } from "../../api/api";
import type { IGetMoviesResponseType } from "../../api/types";
import type { IMovie } from "../../shared/types/movie.types";

////// ThunkCreator 
export const getAsyncMovies = createAsyncThunk<IGetMoviesResponseType, number | undefined >(
    'getAsyncMovies',
    async (page) => {
        const response = await filmsApi.getMovies(page)

        return response
    }
)

export const getOneMovie = createAsyncThunk<IMovie, string | undefined>(
    'getOneMovie',
    async (id) => {
        const response = await filmsApi.getMovie(id)

        return response
    }
)
type MoviesSliceActionType = {
    movies : IMovie[]
    page : number
    oneMovie : null | IMovie
}

const initialState : MoviesSliceActionType  = {
    movies : [],
    oneMovie : null,
    page : 1
}

const moviesSlice = createSlice({
    name : 'moviesSlice',
    initialState, 
    reducers : {
        changePage(state){
            state.page = state.page + 1
        }
    },
    extraReducers : (builder) => {
        builder.addCase(getAsyncMovies.fulfilled, (state, action : PayloadAction<IGetMoviesResponseType>) => {
            state.movies = action.payload.results
        })

        builder.addCase(getOneMovie.fulfilled, (state, action) => {
            state.oneMovie = action.payload
        })
    }
})
export const {changePage} = moviesSlice.actions
export default moviesSlice.reducer