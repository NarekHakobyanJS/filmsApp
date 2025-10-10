import type { IMovie } from "../../shared/types/movie.types"

interface IGenre {
  id : number
  name : string
}

export interface IGetGenresResponseType {
    genres : IGenre []
}

export interface IGetMoviesResponseType {
  page : number
  results : IMovie []
  total_pages : number,
  total_results : number
}