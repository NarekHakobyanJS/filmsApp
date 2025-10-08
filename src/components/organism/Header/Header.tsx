import React, { useEffect } from 'react'
import { getAsyncGenres } from '../../../store/slices/genresSlice'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'

const Header = () => {
  
    const disaptch = useAppDispatch()
    
    const {genres} = useAppSelector((state) => state.genresData)

    console.log(genres);
    
    useEffect(() => {
        disaptch(getAsyncGenres())
    }, [])
  return (
    <div>Header</div>
  )
}

export default Header