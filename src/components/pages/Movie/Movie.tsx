import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../../../store/hooks'
import { getOneMovie } from '../../../store/slices/moviesSlice'

const Movie = () => {
    const dispatch = useAppDispatch()
     const {id} = useParams()

     useEffect(() => {
        dispatch(getOneMovie(id))
     }, [id])
  return (
    <div>Movie</div>
  )
}

export default Movie