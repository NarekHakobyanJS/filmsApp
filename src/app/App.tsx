
import { Provider } from 'react-redux'
import './style/style.css'
import store from '../store/store'

Provider
const App = () => {


  return (
    <>
        <Provider store={store}>
            <>Hello world</>
        </Provider>
    </>
  )
}

export default App