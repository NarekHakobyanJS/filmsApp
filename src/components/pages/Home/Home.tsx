import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { changePage, getAsyncMovies } from '../../../store/slices/moviesSlice'
import { NavLink } from 'react-router-dom'
import FilmCard from '../../organism/FilmCard/FilmCard'
import { Box, Pagination } from '@mui/material'

const Home = () => {
  const dispatch = useAppDispatch()
  const { movies, page } = useAppSelector((state) => state.moviesData)

  useEffect(() => {
    dispatch(getAsyncMovies(page))

  }, [page])


  const changePageAction = (e : any, newPage : number) => {

    
    dispatch(changePage(newPage))
  }
  return (
    <>

      <Pagination 
      page={page} 
      onChange={changePageAction}
      count={100} 
      color="secondary" />
      <Box sx={{
        display : 'flex', 
        justifyContent : 'space-between',
        alignItems : 'center',
        flexWrap : 'wrap',
        gap : '10px'
        }}>
        {
          movies.map((movie) => <FilmCard key={movie.id} movie={movie} />)
        }
      </Box>
    </>
  )
}

export default Home