import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails'
import Laptop from './Pages/Laptop'
import Mobile from './Pages/Mobile'
import Watch from './Pages/Watch'
import Cart from './Pages/Cart'
import Auth from './Pages/auth'
import Notfound from './Pages/NotFound'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// to get mode 
const getTheme = (mode) => ({
  palette: {
    mode,
    ...(mode == 'dark' ? {
      txt: {
        one: '#007BFF',//blue
        two: '#ffffff', //white
        three: '#ABB0B5'//grey
      },

    } : {

      txt: {
        one: '#007BFF',//blue
        two: '#000000',//black
        three: '#ABB0B5'//grey
      }
    })
  }
})
// useMediaQuery('(prefers-color-scheme: dark)')
export default function App() {
  const [mode, setMode] = useState('dark')
  const { token } = useSelector(state => state.authSlice) //get token from redux
  // forward mode to getMode Data
  const theme = createTheme(getTheme(mode))
  // toggle theme
  const handleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar handleTheme={handleMode} theme={mode} />
        <Box minHeight={'80vh'}>
          {/* write routes */}
          <Routes>
            <Route exact path={'/'} element={<Home theme={mode} />} />
            <Route path={'/products/:catId/:catName'} element={<Products />} />
            <Route path={'/products/product-details/:id/:name'} element={<ProductDetails />} />
            <Route path={'/products/laptop'} element={<Laptop />} />
            <Route path={'/products/mobile'} element={<Mobile />} />
            <Route path={'/products/watch'} element={<Watch />} />
            <Route path={'/cart'} element={<Cart />} />
            <Route path={'/auth'} element={<Auth />} />
            <Route path={'/search/:query'} element={<Home />} />
            <Route path={'/*'} element={<Notfound />} />
          </Routes>
        </Box>
        <Footer theme={mode} />
      </ThemeProvider>



      {/* // toast */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />;
    </>
  )
}
