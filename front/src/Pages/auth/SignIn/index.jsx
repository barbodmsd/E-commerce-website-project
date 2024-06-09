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
      console.log(res.data);
      if (res.data.jwt) {
        dispatch(login({ user: res.data.user, token: res.data.token }));
        message({
          type: "success",
          message: `welcome ${res.data.user.username}`,
        });
      }
    } catch (error) {
      alert(error);
      message({
        type: "error",
        message: error,
      });
    }
  };
  console.log(field)
  return (
    <>
      {signIn ? (
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          minHeight={"100vh"}>
          {/* form */}
          <Stack
            width={"85%"}
            height={"500px"}
            direction='row'
            component={Card}
            overflow='hidden'
            elevation={5}>
            {/* img */}
            <Stack width={"55%"} height={"100%"}>
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
              width={"45%"}
              height={"100%"}
              component={"form"}
              onSubmit={handleSubmit}
              noValidate>
              <Stack alignItems={"center"} gap={"30px"}>
                <Typography fontSize={"2rem"} fontWeight={"bolder"}>
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
                    <Stack width={"250px"} height={"20px"}>
                      <Input
                        type={"text"}
                        name={"identifier"}
                        id={'identifier'}
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
                            <PersonRoundedIcon sx={{ color: "grey" }} />
                          </InputAdornment>
                        }
                        
                      />
                    </Stack>
                    {/* password */}
                    <Stack width={"250px"} height={"30px"}>
                      <Input
                        name={"password"}
                        onChange={handleChange}
                        placeholder={"Password"}
                        id={'password'}
                        fullWidth
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
                            <VpnKeyRoundedIcon sx={{ color: "grey" }} />
                          </InputAdornment>
                        }
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton onClick={() => setIsShow(!isShow)}>
                              {isShow ? (
                                <VisibilityOffRoundedIcon
                                  sx={{ color: "grey" }}
                                />
                              ) : (
                                <VisibilityRoundedIcon sx={{ color: "grey" }} />
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
                <Stack alignItems={"center"} direction='row'>
                  <Typography>Don't have an Account ? </Typography>
                  <Button onClick={handlePageType}>Sign Up</Button>
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
            width={"85%"}
            height={"500px"}
            direction='row'
            component={Card}
            elevation={5}>
            {/* img */}
            <Stack width={"55%"} height={"100%"}>
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
              width={"45%"}
              height={"100%"}
              component={"form"}
              noValidate>
              <Stack alignItems={"center"} gap={"10px"}>
                <Typography fontSize={"2rem"} fontWeight={"bolder"}>
                  <Skeleton
                    width={"260px"}
                    height={"50px"}
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
                    {/* username */}
                    <Stack width={"250px"} height={"40px"}>
                      <Skeleton
                        width={"100%"}
                        variant={"rounded"}
                        height={"100%"}
                        animation={"wave"}
                      />
                    </Stack>
                    {/* email */}
                    <Stack width={"250px"} height={"40px"}>
                      <Skeleton
                        width={"100%"}
                        variant={"rounded"}
                        height={"100%"}
                        animation={"wave"}
                      />
                    </Stack>
                    {/* password */}
                    <Stack width={"250px"} height={"40px"}>
                      <Skeleton
                        width={"100%"}
                        variant={"rounded"}
                        height={"100%"}
                        animation={"wave"}
                      />
                    </Stack>
                  </Stack>
                </Stack>
                {/* submit button */}
                <Skeleton width={"100px"} height={"70px"} animation={"wave"} />
                {/* signIn */}
                <Stack alignItems={"center"} direction='row'>
                  <Typography>
                    <Skeleton
                      width={"250px"}
                      height={"50px"}
                      animation={"wave"}
                    />{" "}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      )}
    </>
  );
}
