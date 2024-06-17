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
  useMediaQuery,
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
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../../Utils/fetchData";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { logout } from "../../Store/Slices/authSlice";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
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
export const ResultCard = ({ img, name, id, price, mobileQuery }) => {
  return (
    <Card className={"result"} elevation={5}>
      <Link
        to={`/products/product-details/${id}/${name
          .toLowerCase()
          .replaceAll(" ", "-")}`}>
        <Stack
          direction={mobileQuery ? "row" : "column"}
          sx={{
            width: { xs: "200px", sm: "400px" },
            height: { xs: "250px", sm: "200px" },
          }}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={"10px"}
          gap={"10px"}>
          {/* img */}
          <Stack
            sx={{
              width: { xs: "100%", sm: "60%" },
              height: { xs: "60%", sm: "100%" },
            }}>
            <img width={"100%"} height={"100%"} src={img} alt={name} />
          </Stack>
          {/* text */}
          <Stack
            sx={{
              width: { xs: "100%", sm: "40%" },
              height: { xs: "40%", sm: "100%" },
            }}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"10px"}>
            <Typography
              color={"txt.two"}
              fontSize={"1.2em"}
              fontWeight={"bolder"}>
              {name}
            </Typography>
            <Typography
              color={"txt.two"}
              fontSize={"1.1em"}
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
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.authSlice);
  const mobileQuery = useMediaQuery("(min-width:600px)");
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
      mobileQuery={mobileQuery}
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
            px: {xs:'10px',sm:'35px',md:'50px'},
            backdropFilter: "blur(20px)",
          }}>
          {/* left navbar */}
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            gap={"12px"}
            direction={"row"}>
            {/* logo */}
            <Link to={"/"}>
              <Typography fontSize={"2em"}>
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
                display: { xs: "none", sm: "flex" },
                boxShadow:
                  theme == "light"
                    ? "0 0px 1px 1px rgba(0,0,0,0.3)"
                    : "0 0px 1px 1px rgba(255,255,255,0.2)",
              }}>
              <Link to={"/products/all-products/all-categories"}>
                <IconButton title={"Products"} sx={{ color: "txt.one" }}>
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
                display: { xs: "none", sm: "flex" },
                height: "30px",
                borderRadius: "10px",
                boxShadow:
                  theme == "light"
                    ? "0 0px 1px 1px rgba(0,0,0,0.3)"
                    : "0 0px 1px 1px rgba(255,255,255,0.2)",
              }}>
              <IconButton
                title={"Search"}
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
                  <Box
                    sx={{
                      width: { xs: 150, sm: 300 },
                    }}>
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
                    pb='10px'
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
                                sx={{
                                  width: { xs: 200, sm: 400 },
                                  height: { xs: 250, sm: 200 },
                                }}
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
                      <Typography fontSize={"1.5em"} fontWeight={"bolder"}>
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
                display: { xs: "none", sm: "flex" },
                height: "30px",
                borderRadius: "10px",
                boxShadow:
                  theme == "light"
                    ? "0 0px 1px 1px rgba(0,0,0,0.3)"
                    : "0 0px 1px 1px rgba(255,255,255,0.2)",
              }}>
              <IconButton
                title={theme === "dark" ? "Light" : "Dark"}
                sx={{ color: "txt.one" }}
                onClick={handleTheme}>
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
                display: { xs: "none", sm: "flex" },
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
            {/* auth  */}
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                width: "30px",
                height: "30px",
                display: { xs: "none", sm: "flex" },
                borderRadius: "10px",
                boxShadow:
                  theme == "light"
                    ? "0 0px 1px 1px rgba(0,0,0,0.3)"
                    : "0 0px 1px 1px rgba(255,255,255,0.2)",
              }}>
              {token ? (
                <>
                  <IconButton
                    title={"LogOut"}
                    sx={{ color: "txt.one" }}
                    onClick={() => setOpen(true)}>
                    <LogoutRoundedIcon />
                  </IconButton>
                  <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby='alert-dialog-title'
                    aria-describedby='alert-dialog-description'>
                    <DialogTitle id='alert-dialog-title'>
                      Are you sure want to Logout?
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id='alert-dialog-description'>
                        If you log out of your account, your access will be
                        limited. To unlock the restrictions, you need to log in
                        to your account again.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => setOpen(false)}>Cancel</Button>
                      <Button
                        color='error'
                        onClick={() => {
                          setOpen(false);
                          dispatch(logout());
                          localStorage.removeItem("token");
                        }}
                        autoFocus>
                        Log out
                      </Button>
                    </DialogActions>
                  </Dialog>
                </>
              ) : (
                <Link to={"/auth"}>
                  <IconButton title={"Login"} sx={{ color: "txt.one" }}>
                    <LoginRoundedIcon />
                  </IconButton>
                </Link>
              )}
            </Stack>
            {/* menu */}
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                width: "30px",
                display: { xs: "flex", sm: "none" },
                height: "30px",
                borderRadius: "10px",
                boxShadow:
                  theme == "light"
                    ? "0 0px 1px 1px rgba(0,0,0,0.3)"
                    : "0 0px 1px 1px rgba(255,255,255,0.2)",
              }}>
              <Badge
                color='primary'
                badgeContent={listLength}
                onClick={() => setMenu(true)}>
                <MenuRoundedIcon sx={{ color: "txt.one" }} />
              </Badge>
              <Drawer open={menu} anchor='right' onClose={() => setMenu(false)}>
                <Box
                  height={"100%"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "30px",
                    flexDirection: "column",
                    p: "50px 5px",
                  }}
                  width={"80px"}>
                  {/* product */}
                  <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    direction={"row"}
                    sx={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "10px",
                      boxShadow:
                        theme == "light"
                          ? "0 0px 1px 1px rgba(0,0,0,0.3)"
                          : "0 0px 1px 1px rgba(255,255,255,0.2)",
                    }}>
                    <Link to={"/products/all-products/all-categories"}>
                      <IconButton
                        title={"Products"}
                        sx={{ color: "txt.one", p: "20px" }}>
                        <WidgetsRoundedIcon sx={{ fontSize: "30px" }} />
                      </IconButton>
                    </Link>
                  </Stack>
                  {/* search */}
                  <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    direction={"row"}
                    sx={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "10px",
                      boxShadow:
                        theme == "light"
                          ? "0 0px 1px 1px rgba(0,0,0,0.3)"
                          : "0 0px 1px 1px rgba(255,255,255,0.2)",
                    }}>
                    <IconButton
                      title={"Search"}
                      sx={{ color: "txt.one", p: "20px" }}
                      onClick={() => setTop(true)}>
                      <SearchRoundedIcon sx={{ fontSize: "30px" }} />
                    </IconButton>
                  </Stack>
                  {/* cart */}
                  <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    direction={"row"}
                    sx={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "10px",
                      boxShadow:
                        theme == "light"
                          ? "0 0px 1px 1px rgba(0,0,0,0.3)"
                          : "0 0px 1px 1px rgba(255,255,255,0.2)",
                    }}>
                    <Link to={"/cart"}>
                      <Badge
                        color='primary'
                        
                        badgeContent={listLength}>
                        <ShoppingCartRoundedIcon
                          sx={{ color: "txt.one", fontSize: "30px" }}
                        />
                      </Badge>
                    </Link>
                  </Stack>
                  {/* auth */}
                  <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    direction={"row"}
                    sx={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "10px",
                      boxShadow:
                        theme == "light"
                          ? "0 0px 1px 1px rgba(0,0,0,0.3)"
                          : "0 0px 1px 1px rgba(255,255,255,0.2)",
                    }}>
                    {token ? (
                      <>
                        <IconButton
                          title={"LogOut"}
                          sx={{ color: "txt.one", p: "20px" }}
                          onClick={() => setOpen(true)}>
                          <LogoutRoundedIcon sx={{ fontSize: "30px" }} />
                        </IconButton>
                        <Dialog
                          open={open}
                          onClose={() => setOpen(false)}
                          aria-labelledby='alert-dialog-title'
                          aria-describedby='alert-dialog-description'>
                          <Stack width={"250px"}>
                            <DialogTitle id='alert-dialog-title'>
                              Are you sure want to Logout?
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText id='alert-dialog-description'>
                                If you log out of your account, your access will
                                be limited. To unlock the restrictions, you need
                                to log in to your account again.
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={() => setOpen(false)}>
                                Cancel
                              </Button>
                              <Button
                                color='error'
                                onClick={() => {
                                  setOpen(false);
                                  dispatch(logout());
                                  localStorage.removeItem("token");
                                }}
                                autoFocus>
                                Log out
                              </Button>
                            </DialogActions>
                          </Stack>
                        </Dialog>
                      </>
                    ) : (
                      <Link to={"/auth"}>
                        <IconButton
                          title={"Login"}
                          sx={{ color: "txt.one", p: "20px" }}>
                          <LoginRoundedIcon sx={{ fontSize: "30px" }} />
                        </IconButton>
                      </Link>
                    )}
                  </Stack>
                  {/* dark mode */}
                  <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    direction={"row"}
                    sx={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "10px",
                      boxShadow:
                        theme == "light"
                          ? "0 0px 1px 1px rgba(0,0,0,0.3)"
                          : "0 0px 1px 1px rgba(255,255,255,0.2)",
                    }}>
                    <IconButton
                      title={theme === "dark" ? "Light" : "Dark"}
                      sx={{ color: "txt.one", p: "20px" }}
                      onClick={handleTheme}>
                      {theme == "dark" ? (
                        <WbSunnyRoundedIcon sx={{ fontSize: "30px" }} />
                      ) : (
                        <NightsStayRoundedIcon sx={{ fontSize: "30px" }} />
                      )}
                    </IconButton>
                  </Stack>
                </Box>
              </Drawer>
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
          sx={{ bgcolor: theme === "dark" && "#ABB0B5", zIndex: 100000 }}>
          <KeyboardArrowUpIcon size={"large"} />
        </Stack>
      </ScrollTop>
    </>
  );
}
