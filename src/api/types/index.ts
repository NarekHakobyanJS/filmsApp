interface IGenre {
  id : number
  name : string
}

export interface IGetGenresResponseType {
    genres : IGenre []
}

export interface IGetMoviesResponseType {
  page : number
  results : []
  total_pages : number,
  total_results : number
}