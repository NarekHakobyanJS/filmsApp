
import { Provider, useDispatch } from 'react-redux'
import './style/style.css'
import store from '../store/store'
import { getGenres } from '../store/slices/genresSlice'

Provider
const App = () => {

  const dispatch = useDispatch()


  dispatch(getGenres)
  return (
    <>
        <Provider store={store}>
            <>Hello world</>
        </Provider>
    </>
  )
}

export default App