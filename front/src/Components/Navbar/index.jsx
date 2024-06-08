import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import {
  Badge,
  Button,
  Card,
  Divider,
  Drawer,
  IconButton,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import { useSelector } from "react-redux";
import fetchData from "../../Utils/fetchData";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{ position: "fixed", bottom: 16, right: 16 }}>
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

// card for result search
export const ResultCard = ({ img, name, id, price }) => {
  return (
    <Card className={"result"} elevation={5}>
      <Link
        to={`/products/product-details/${id}/${name
          .toLowerCase()
          .replaceAll(" ", "-")}`}>
        <Stack
          width={"400px"}
          height={"200px"}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={"10px"}
          gap={"10px"}>
          {/* img */}
          <Stack width={"40%"} height={"100%"}>
            <img width={"100%"} height={"100%"} src={img} alt={name} />
          </Stack>
          {/* text */}
          <Stack
            width={"55%"}
            height={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"20px"}>
            <Typography
              color={"txt.two"}
              fontSize={"1.2rem"}
              fontWeight={"bolder"}>
              {name}
            </Typography>
            <Typography
              color={"txt.two"}
              fontSize={"1.1rem"}
              fontWeight={"bolder"}>
              Price : ${price}
            </Typography>
          </Stack>
        </Stack>
      </Link>
    </Card>
  );
};
export default function Navbar({ theme, handleTheme }) {
  const [top, setTop] = useState(false);
  const [inpValue, setInpValue] = useState();
  const [result, setResult] = useState([]);
  const listLength = useSelector((state) => state.cartSlice.list).length;

  // get all products in search input
  useEffect(() => {
    if (inpValue) {
      (async () => {
        const res = await fetchData(
          `products?populate=*&filters[name][$containsi]=${inpValue}&pagination[page]=1
          &pagination[pageSize]=2`
        );
        setResult(res);
      })();
    }
  }, [inpValue]);
  // result items
  const items = result?.map((e, index) => (
    <ResultCard
      id={e.id}
      name={e.attributes?.name}
      price={e.attributes?.price}
      img={
        import.meta.env.VITE_URL +
        e?.attributes?.image?.data[0]?.attributes?.url
      }
    />
  ));
  window.addEventListener("click", (e) => {
    if (e.target.closest(".result")) {
      setTop(false);
      setInpValue("");
    }
    if (!e.target.closest(".search-input")) {
      setInpValue("");
    }
  });
  // inpValue===''&&setTop(false)
  return (
    <>
      <AppBar
        sx={{
          bgcolor: "transparent",
          boxShadow: "none",
        }}>
        {/*  navbar */}
        <Stack
          direction={"row"}
          height={"60px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            px: "50px",
            backdropFilter: "blur(7px)",
          }}>
          {/* left navbar */}
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            gap={"12px"}
            direction={"row"}>
            {/* logo */}
            <Link to={"/"}>
              <Typography fontSize={"2rem"}>
                <img
                  height='90px'
                  width='120px'
                  src={"assets/logo.png"}
                  alt={"logo"}
                />
              </Typography>
            </Link>
            {/* products */}
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "10px",
                boxShadow:
                  theme == "light"
                    ? "0 0px 1px 1px rgba(0,0,0,0.3)"
                    : "0 0px 1px 1px rgba(255,255,255,0.2)",
              }}>
              <Link to={"/products/all-products/all-categories"}>
                <IconButton sx={{ color: "txt.one" }}>
                  <WidgetsRoundedIcon />
                </IconButton>
              </Link>
            </Stack>
            {/* search */}
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "10px",
                boxShadow:
                  theme == "light"
                    ? "0 0px 1px 1px rgba(0,0,0,0.3)"
                    : "0 0px 1px 1px rgba(255,255,255,0.2)",
              }}>
              <IconButton
                sx={{ color: "txt.one" }}
                onClick={() => setTop(true)}>
                <SearchRoundedIcon />
              </IconButton>
              {/* drawer for search result */}
              <Drawer
                transitionDuration={300}
                anchor={"top"}
                open={top}
                onClose={() => setTop(false)}>
                <Stack minHeight='400px' p={" 20px 50px"} gap={"30px"}>
                  {/* input */}
                  <Box width={"300px"}>
                    <Input
                      className={"search-input"}
                      value={inpValue}
                      onChange={(e) => setInpValue(e.target.value)}
                      fullWidth
                      autoFocus
                      placeholder='Search...'
                      sx={{
                        border: "1px solid rgba(255,255,255,0.2)",
                        padding: "10px",
                        borderRadius: "10px 10px 0 0 ",
                      }}
                    />
                  </Box>
                  {/*  */}
                  <IconButton
                    sx={{
                      position: "absolute",
                      right: "5%",
                    }}
                    onClick={() => setTop(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                  {/*  result products */}
                  <Stack
                    flexWrap={"wrap"}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"20px"}>
                    {result.length > 0 ? (
                      <>
                        {items}
                        {inpValue != "" && (
                          <Card className={"result"} elevation={5}>
                            <Link to={`/search/${inpValue}`}>
                              <Stack
                                width={"400px"}
                                height={"200px"}
                                direction={"row"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                p={"10px"}
                                gap={"10px"}>
                                <Button>view all results</Button>
                              </Stack>
                            </Link>
                          </Card>
                        )}
                      </>
                    ) : (
                      <Typography fontSize={"1.5rem"} fontWeight={"bolder"}>
                        Oops! No result :\
                      </Typography>
                    )}
                  </Stack>
                </Stack>
              </Drawer>
            </Stack>
          </Stack>
          {/* right navbar */}
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            gap={"12px"}
            direction={"row"}>
            {/* dark mode */}
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "10px",
                boxShadow:
                  theme == "light"
                    ? "0 0px 1px 1px rgba(0,0,0,0.3)"
                    : "0 0px 1px 1px rgba(255,255,255,0.2)",
              }}>
              <IconButton sx={{ color: "txt.one" }} onClick={handleTheme}>
                {theme == "dark" ? (
                  <WbSunnyRoundedIcon />
                ) : (
                  <NightsStayRoundedIcon />
                )}
              </IconButton>
            </Stack>
            {/* cart */}
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "10px",
                boxShadow:
                  theme == "light"
                    ? "0 0px 1px 1px rgba(0,0,0,0.3)"
                    : "0 0px 1px 1px rgba(255,255,255,0.2)",
              }}>
              <Link to={"/cart"}>
                <Badge color='primary' badgeContent={listLength}>
                  <ShoppingCartRoundedIcon sx={{ color: "txt.one" }} />
                </Badge>
              </Link>
            </Stack>
            {/* login */}
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "10px",
                boxShadow:
                  theme == "light"
                    ? "0 0px 1px 1px rgba(0,0,0,0.3)"
                    : "0 0px 1px 1px rgba(255,255,255,0.2)",
              }}>
              <Link to={"/auth"}>
                <IconButton sx={{ color: "txt.one" }}>
                  <LoginRoundedIcon />
                </IconButton>
              </Link>
            </Stack>
          </Stack>
        </Stack>
        <Divider />
      </AppBar>

      <Toolbar id='back-to-top-anchor' />
      <ScrollTop>
        <Stack
          component={Fab}
          size='small'
          aria-label='scroll back to top'
          sx={{ bgcolor: theme === "dark" && "#ABB0B5" }}>
          <KeyboardArrowUpIcon size={"large"} />
        </Stack>
      </ScrollTop>
    </>
  );
}
