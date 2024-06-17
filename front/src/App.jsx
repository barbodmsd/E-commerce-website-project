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
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "./Pages/Search";

export const message = ({ type, message }) => {
  toast[type](message);
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
// useMediaQuery('(prefers-color-scheme: dark)')
export default function App() {
  const [mode, setMode] = useState("light");
  // const token=localStorage.getItem('token')
  const { token } = useSelector((state) => state.authSlice);
  // forward mode to getMode Data
  const theme = createTheme(getTheme(mode));
  // toggle theme
  const handleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <Navbar handleTheme={handleMode} theme={mode} />
        <Box >
          {/* write routes */}
          <Routes>
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
            <Route path={"/products/watch"} element={<Watch theme={mode} />} />
            <Route
              path={"/cart"}
              element={
                token ? <Cart theme={mode} /> : <Navigate to={"/auth"} />
              }
            />
            <Route
              path={"/auth"}
              element={token ? <Navigate to={"/"} /> : <Auth theme={mode} />}
            />
            <Route path={"/search/:query"} element={<Search theme={mode} />} />
            <Route path={"*"} element={<Notfound />} />
          </Routes>
        </Box>
        <Footer theme={mode} />
      </ThemeProvider>

      {/* // toast */}

      <ToastContainer
        position='top-center'
        autoClose={2500}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
}
