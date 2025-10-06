import { useEffect } from 'react'
import './style/style.css'
import { filmsApi } from '../api/api'

const App = () => {

    useEffect(() => {
        filmsApi.getGenres()
    }, [])
  return (
    <div>App</div>
  )
}

export default App