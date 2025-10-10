import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { changePage, getAsyncMovies } from '../../../store/slices/moviesSlice'
import { NavLink } from 'react-router-dom'

const Home = () => {
  const dispatch = useAppDispatch()
  const {movies, page} = useAppSelector((state) => state.moviesData)

  useEffect(() => {
    dispatch(getAsyncMovies(page))

  }, [page])


  const changePageAction = () => {
    dispatch(changePage())
  }
  return (
    <div>

      {
        movies.map((movie) => (
          <NavLink to={`/${movie.id}`} key={movie.id}>{movie.title}</NavLink>
        ))
      }

      <button onClick={changePageAction}>next Page</button>
    </div>
  )
}

export default Home