import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAsyncGenres } from '../../../store/slices/genresSlice'

const Header = () => {
    const disaptch = useDispatch<any>()
    // useSelector((state) => state.)
    
    useEffect(() => {
        disaptch(getAsyncGenres())
    }, [])
  return (
    <div>Header</div>
  )
}

export default Header