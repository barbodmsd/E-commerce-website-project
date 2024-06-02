import { Box } from '@mui/material'
import React from 'react'
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

export default function App() {
  const { token } = useSelector(state => state.authSlice) //get token from redux
  return (
    <>
      <Navbar />
      <Box>
        {/* write routes */}
        <Routes>
          <Route exact path={'/'} element={<Home />} />
          <Route path={'/products/:catId/:catName'} element={<Products />} />
          <Route path={'/products/product-details/:id/:name'} element={<ProductDetails />} />
          <Route path={'/products/laptop'} element={<Laptop />} />
          <Route path={'/products/mobile'} element={<Mobile />} />
          <Route path={'/products/watch'} element={<Watch />} />
          <Route path={'/cart'} element={token ? <Cart /> : <Navigate to={<Auth />} />} />
          <Route path={'/auth'} element={token ? <Navigate to={<Home />} /> : <Auth />} />
          <Route path={'/search/:query'} element={<Home />} />
          <Route path={'/*'} element={<Notfound />} />
        </Routes>
      </Box>
      <Footer />
    </>
  )
}
