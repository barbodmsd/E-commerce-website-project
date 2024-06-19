import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import {
  Button,
  Card,
  IconButton,
  Input,
  InputAdornment,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { message } from "../../../App";
import fetchData from "../../../Utils/fetchData";
import useForm from "../../../Utils/useForm";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../Store/Slices/authSlice";
import { motion } from "framer-motion";
export default function SignIn({ theme, handlePageType }) {
  const [signIn, setSignIn] = useState();
  const [isShow, setIsShow] = useState(false);
  const [field, handleChange] = useForm();
  const { token, user } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  //   get image for form
  useEffect(() => {
    (async () => {
      const resImg = await fetchData("auths?populate=*");
      setSignIn(resImg[0]);
    })();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(import.meta.env.VITE_API + "auth/local", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(field),
      });
      const data = await res.json();
      
      if (data?.jwt) {
        message({
          type: "success",
          message: `welcome ${data.user.username}`,
        });
        dispatch(login({ user: data.user, token: data.jwt }));
        JSON.parse(localStorage.setItem("token", data.jwt));
      } else if(data.error.details.errors) {
        data.error.details.errors.map((e) =>
          message({ type: "info", message: e.message })
        );
      }else{
        message({
          type:'info',
          message:data.error.message
        })
      }
    } catch (error) {
      message({
        type: "error",
        message: error.response,
      });
    }
  };

  return (
    <>
      <Stack>
        {signIn ? (
          <Stack
            component={motion.div}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{
              x: window.innerWidth,
              transition: {
                duration: 0.1,
                type: "spring",
              },
            }}>
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}
              minHeight={"100vh"}>
              {/* form */}
              <Stack
                sx={{
                  height: { xs: 400, md: 500 },
                  width: { xs: "90%", md: "85%" },
                }}
                direction='row'
                component={Card}
                overflow='hidden'
                elevation={5}>
                {/* img */}
                <Stack
                  sx={{ display: { xs: "none", md: "flex" } }}
                  width={"55%"}
                  height={"100%"}>
                  <img
                    width={"100%"}
                    height={"100%"}
                    alt={signIn?.attributes?.name}
                    src={
                      import.meta.env.VITE_URL +
                      signIn?.attributes?.image?.data[0]?.attributes?.url
                    }
                  />
                </Stack>
                {/* signIn */}
                <Stack
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"20px"}
                  sx={{ width: { xs: "100%", md: "40%" } }}
                  height={"100%"}
                  component={"form"}
                  onSubmit={handleSubmit}
                  noValidate>
                  <Stack alignItems={"center"} gap={"30px"}>
                    <Typography fontSize={"2em"} fontWeight={"bolder"}>
                      Welcome to SignIn
                    </Typography>
                    {/* form */}
                    <Stack
                      p={"10px"}
                      alignItems={"center"}
                      justifyContent={"center"}>
                      <Stack
                        gap={"40px"}
                        p={"10px"}
                        alignItems={"center"}
                        justifyContent={"center"}>
                        {/* identifier */}
                        <Stack
                          sx={{
                            width: { xs: 250 },
                            height: { xs: 20, sm: 30 },
                          }}>
                          <Input
                            type={"text"}
                            name={"identifier"}
                            id={"identifier"}
                            onChange={handleChange}
                            placeholder={"Username"}
                            required
                            autoFocus={true}
                            fullWidth
                            sx={{
                              p: "13px 10px",
                              borderRadius: "5px",
                              boxShadow:
                                theme == "light"
                                  ? "0 0px 1px 1px rgba(0,0,0,0.3)"
                                  : "0 0px 1px 1px rgba(255,255,255,0.2)",
                            }}
                            disableUnderline
                            startAdornment={
                              <InputAdornment position='start'>
                                <PersonRoundedIcon
                                  sx={{ color: "grey", fontSize: "1.2em" }}
                                />
                              </InputAdornment>
                            }
                          />
                        </Stack>
                        {/* password */}
                        <Stack
                          sx={{
                            width: { xs: 250 },
                            height: { xs: 20, sm: 30 },
                          }}>
                          <Input
                            name={"password"}
                            onChange={handleChange}
                            placeholder={"Password"}
                            id={"password"}
                            fullWidth
                            required
                            sx={{
                              p: "13px 10px",
                              borderRadius: "5px",
                              boxShadow:
                                theme == "light"
                                  ? "0 0px 1px 1px rgba(0,0,0,0.3)"
                                  : "0 0px 1px 1px rgba(255,255,255,0.2)",
                            }}
                            type={!isShow ? "password" : "text"}
                            disableUnderline
                            startAdornment={
                              <InputAdornment position='start'>
                                <VpnKeyRoundedIcon
                                  sx={{ color: "grey", fontSize: "1.2em" }}
                                />
                              </InputAdornment>
                            }
                            endAdornment={
                              <InputAdornment position='end'>
                                <IconButton onClick={() => setIsShow(!isShow)}>
                                  {isShow ? (
                                    <VisibilityOffRoundedIcon
                                      sx={{ color: "grey", fontSize: "1.1em" }}
                                    />
                                  ) : (
                                    <VisibilityRoundedIcon
                                      sx={{ color: "grey", fontSize: "1.1em" }}
                                    />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </Stack>
                      </Stack>
                    </Stack>
                    {/* submit button */}
                    <Button variant={"contained"} type={"submit"}>
                      SignIn
                    </Button>
                    {/* signIn */}
                    <Stack
                      flexWrap={"wrap"}
                      alignItems={"center"}
                      direction='row'>
                      <Typography>Don't have an Account ? </Typography>
                      <Button onClick={handlePageType}>Sign Up</Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        ) : (
          // skeleton
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            minHeight={"100vh"}>
            {/* form */}
            <Stack
              sx={{
                height: { xs: 400, md: 500 },
                width: { xs: "90%", md: "85%" },
              }}
              direction='row'
              component={Card}
              elevation={5}>
              {/* img */}
              <Stack
                width={"55%"}
                sx={{ display: { xs: "none", md: "flex" } }}
                height={"100%"}>
                <Skeleton
                  width={"100%"}
                  height={"100%"}
                  variant={"rounded"}
                  animation={"wave"}
                />
              </Stack>
              {/* signIn */}
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                gap={"20px"}
                sx={{ width: { xs: "100%", md: "40%" } }}
                height={"100%"}
                component={"form"}
                noValidate>
                <Stack alignItems={"center"} gap={"10px"}>
                  <Typography fontSize={"2em"} fontWeight={"bolder"}>
                    <Skeleton
                      sx={{
                        width: { xs: 200, sm: 250 },
                        height: { xs: 30, sm: 50 },
                      }}
                      animation={"wave"}
                    />
                  </Typography>
                  {/* form */}
                  <Stack
                    p={"10px"}
                    alignItems={"center"}
                    justifyContent={"center"}>
                    <Stack
                      gap={"5px"}
                      p={"10px"}
                      alignItems={"center"}
                      justifyContent={"center"}>
                      {/* identifier */}
                      <Stack>
                        <Skeleton
                          variant={"rounded"}
                          animation={"wave"}
                          sx={{
                            width: { xs: 250 },
                            height: { xs: 20, sm: 30 },
                          }}
                        />
                      </Stack>
                      {/* password */}
                      <Stack>
                        <Skeleton
                          variant={"rounded"}
                          sx={{
                            width: { xs: 250 },
                            height: { xs: 20, sm: 30 },
                          }}
                          animation={"wave"}
                        />
                      </Stack>
                    </Stack>
                  </Stack>
                  {/* submit button */}
                  <Skeleton
                    sx={{
                      width: { xs: 50, sm: 100 },
                      height: { xs: 35, sm: 75 },
                    }}
                    animation={"wave"}
                  />
                  {/* signIn */}
                  <Stack alignItems={"center"} direction='row'>
                    <Typography>
                      <Skeleton
                        sx={{
                          width: { xs: 200, sm: 250 },
                          height: { xs: 30, sm: 50 },
                        }}
                        animation={"wave"}
                      />{" "}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        )}
      </Stack>
    </>
  );
}
