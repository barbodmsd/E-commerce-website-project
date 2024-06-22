import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Laptop from "./Pages/Laptop";
import Mobile from "./Pages/Mobile";
import Watch from "./Pages/Watch";
import Cart from "./Pages/Cart";
import Auth from "./Pages/auth";
import Notfound from "./Pages/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "./Pages/Search";
import { AnimatePresence, easeInOut } from "framer-motion";
import { toggleTheme } from "./Store/Slices/themeSlice";

export const message = ({ type, message }) => {
  toast[type](message);
};
// animation
export const scale = {
  initial: { scale: 0 },
  whileInView: { scale: 1 },
  exit: { scale: 0 },
  transition: {
    duration: 0.5,
    type: "spring",
  },
};
export const translate = {
  initial: { width: 0 },
  whileInView: { width: "100%" },
  exit: { width: 0 },
  transition: {
    duration: 0.5,
    type: "spring",
  },
};
export const y = {
  initial: { scaleY: 0 },
  whileInView: { scaleY: 1 },
  exit: { scaleY: 0 },
  transition: {
    duration: 0.5,
    type: "spring",
  },
};
// to get mode
const getTheme = (mode) => ({
  palette: {
    mode,
    ...(mode == "dark"
      ? {
        primary: {
          main: "#007BFF",
        },
        txt: {
          one: "#007BFF", //blue
          two: "#ffffff", //white
          three: "#ABB0B5", //grey
        },
      }
      : {
        txt: {
          one: "#007BFF", //blue
          two: "#000000", //black
          three: "#ABB0B5", //grey
        },
      }),
  },
});

export default function App() {
  const { token } = useSelector((state) => state.persistedReducer.authSlice);
  const { theme: mode } = useSelector((state) => state.persistedReducer.themeSlice);
  const theme = createTheme(getTheme(mode)); // forward mode to getMode Data

  const dispatch = useDispatch();
  // toggle theme
  const handleMode = () => {
    dispatch(toggleTheme());
  };

  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Navbar handleTheme={handleMode} theme={mode} />
          <Box>
            {/* write routes */}
            <Routes location={location} key={location.pathname}>
              <Route exact path={"/"} element={<Home theme={mode} />} />
              <Route
                path={"/products/:catId/:catName"}
                element={<Products theme={mode} />}
              />
              <Route
                path={"/products/product-details/:id/:name"}
                element={<ProductDetails theme={mode} />}
              />
              <Route
                path={"/products/laptop"}
                element={<Laptop theme={mode} />}
              />
              <Route
                path={"/products/mobile"}
                element={<Mobile theme={mode} />}
              />
              <Route
                path={"/products/watch"}
                element={<Watch theme={mode} />}
              />
              <Route
                path={"/cart"}
                element={
                  token ? (
                    <Cart theme={mode} />
                  ) : (
                    <Navigate to='/auth' replace={true} />
                  )
                }
              />

              <Route
                path={"/auth"}
                element={token ? <Navigate to={"/"} /> : <Auth theme={mode} />}
              />
              <Route
                path={"/search/:query"}
                element={<Search theme={mode} />}
              />
              <Route path={"*"} element={<Notfound />} />
            </Routes>
          </Box>
          <Footer theme={mode} />
        </ThemeProvider>
      </AnimatePresence>
      {/* // toast */}

      <ToastContainer
        position='top-center'
        autoClose={4000}
        limit={4}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </>
  );
}
