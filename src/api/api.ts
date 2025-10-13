import axios from "axios";
import type { IGetGenresResponseType, IGetMoviesResponseType } from "./types";

class FilmsAPI {
    #baseUrl : undefined | string  = 'https://api.themoviedb.org/3'
    #apiKey : string = import.meta.env.VITE_API_KEY
    constructor(){

    }

    // axiosConfig
    private axiosConfig(){
        return axios.create({baseURL : this.#baseUrl})
    }

    async getGenres(){
        const response = await this.axiosConfig().get<IGetGenresResponseType>(`/genre/movie/list?api_key=${this.#apiKey}&language=en-US`)

        return response.data
    }

    async getMovies(pageCount = 1){
        const response = await this.axiosConfig().get<IGetMoviesResponseType>(`discover/movie?api_key=${this.#apiKey}&language=en-US&page=${pageCount}`)

        return response.data
    }

    async getMovie(id : string | undefined){
        const response = await this.axiosConfig().get(`movie/${id}?api_key=${this.#apiKey}&language=en-US`)

        return response.data
    }

    async getMovieByGenre(){
        // /discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genreId}&page=${1}
    }
}

export const filmsApi = new FilmsAPI()


