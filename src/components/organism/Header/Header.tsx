import React, { useEffect } from 'react'
import { getAsyncGenres } from '../../../store/slices/genresSlice'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { getAsyncMovies } from '../../../store/slices/moviesSlice'

const Header = () => {
  
    const disaptch = useAppDispatch()
    
    const {genres} = useAppSelector((state) => state.genresData)

   
    
    useEffect(() => {
        disaptch(getAsyncGenres())
        disaptch(getAsyncMovies())
    }, [])
  return (
    <div>Header</div>
  )
}

export default Header