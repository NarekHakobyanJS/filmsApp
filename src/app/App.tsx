import { Provider } from 'react-redux'

import AppRouter from './routes/AppRouter'
import store from '../store/store'

import './style/style.css'

import { ThemeProvider, createTheme } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const App = () => {




  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <Provider store={store}>
           <AppRouter />
        </Provider>
    </ThemeProvider>
       
    </>
  )
}



{/* <ThemeProvider theme={theme} disableTransitionOnChange>
  ...
</ThemeProvider> */}
export default App