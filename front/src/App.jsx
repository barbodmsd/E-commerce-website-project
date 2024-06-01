import React from 'react'
import Products from './Components/Products'
import { CssBaseline, createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'

const theme=createTheme({
  palette:{
    mode:'dark'
  }
})
export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <Products/>
    </ThemeProvider>
    </>
  )
}
