
import { Provider, useDispatch } from 'react-redux'
import './style/style.css'
import store from '../store/store'
import { getAsyncGenres, getGenres } from '../store/slices/genresSlice'
import { useEffect } from 'react'
import Header from '../components/organism/Header/Header'


const App = () => {


  return (
    <>
        <Provider store={store}>
            <Header />
        </Provider>
    </>
  )
}

export default App