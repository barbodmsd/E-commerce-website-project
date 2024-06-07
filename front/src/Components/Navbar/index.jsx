import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import {
  Badge,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import { useSelector } from "react-redux";
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

export default function Navbar({ theme, handleTheme }) {
  const [top, setTop] = useState(false);
  const listLength = useSelector((state) => state.cartSlice.list).length;
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
                <Box height='400px'></Box>
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
