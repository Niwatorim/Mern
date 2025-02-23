import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material'
import {BrowserRouter} from 'react-router-dom'

//set ur theme for the main objects using material-ui
const theme = createTheme({
  palette:{
    mode: 'light',
    primary:{
      main: "#013e87"
    },
    secondary:{
      main:'#2e74c9'
    }
  },
  typography:{
    h1:{
      fontSize:'3rem',
      fontWeight:600,
    },
    h2:{
      fontSize:'1.75rem',
      fontWeight:600,
    },
    h3:{
      fontSize:'1.5rem',
      fontWeight:600
    },
  },
})

//wrap in a material-ui wrapper
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>  
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </BrowserRouter>
  </StrictMode>,
)
