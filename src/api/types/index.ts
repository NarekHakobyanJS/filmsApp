interface IGenre {
  id : number
  name : string
}

export interface IGetGenresResponseType {
    genres : IGenre []
}