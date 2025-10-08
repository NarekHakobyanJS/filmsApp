import axios from "axios";
import type { IGetGenresResponseType, IGetMoviesResponseType } from "./types";

class FilmsAPI {
    #baseUrl : undefined | string  = 'https://api.themoviedb.org/3'
    #apiKey : string = "f36f23edf6e10fd2ddcf939916b1f67a"
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
}

export const filmsApi = new FilmsAPI()


