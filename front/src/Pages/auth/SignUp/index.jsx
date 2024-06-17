import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
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
import { motion } from "framer-motion";
export default function SignUp({ theme, handlePageType }) {
  const [signUp, setSignUp] = useState();
  const [isShow, setIsShow] = useState(false);
  const [field, handleChange] = useForm();
  //   get image for form
  useEffect(() => {
    (async () => {
      const resImg = await fetchData("auths?populate=*");
      setSignUp(resImg[1]);
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        import.meta.env.VITE_API + "auth/local/register",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(field),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data?.jwt) {
        message({ type: "success", message: `SignUp successful` });
        handlePageType();
      } else {
        message({ type: "info", message: data?.error?.message });
      }
    } catch (error) {
      message({ type: "error", message: error.response.data.error });
    }
  };
  return (
    <>
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
        {signUp ? (
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            minHeight={"100vh"}>
            {/* form */}
            <Stack
              sx={{
                height: { xs: 400, sm: 500 },
                width: { xs: "90%", md: "85%" },
              }}
              direction='row'
              component={Card}
              overflow='hidden'
              elevation={5}>
              {/* signUp */}
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
                    Welcome to SignUp
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
                      {/* username */}
                      <Stack
                        sx={{ width: { xs: 250 }, height: { xs: 20, sm: 30 } }}>
                        <Input
                          type={"text"}
                          name={"username"}
                          id={"username"}
                          onChange={handleChange}
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
                          placeholder={"Username"}
                          required
                          autoFocus={true}
                          fullWidth
                        />
                      </Stack>
                      {/* email */}
                      <Stack
                        sx={{ width: { xs: 250 }, height: { xs: 20, sm: 30 } }}>
                        <Input
                          type={"email"}
                          name={"email"}
                          id={"email"}
                          onChange={handleChange}
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
                              <EmailRoundedIcon
                                sx={{ color: "grey", fontSize: "1.2em" }}
                              />
                            </InputAdornment>
                          }
                          placeholder={"Email"}
                          required
                          fullWidth
                        />
                      </Stack>
                      {/* password */}
                      <Stack
                        sx={{ width: { xs: 250 }, height: { xs: 20, sm: 30 } }}>
                        <Input
                          name={"password"}
                          id={"password"}
                          onChange={handleChange}
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
                          placeholder={"Password"}
                          fullWidth
                        />
                      </Stack>
                    </Stack>
                  </Stack>
                  {/* submit button */}
                  <Button variant={"contained"} type={"submit"}>
                    SignUp
                  </Button>
                  {/* signIn */}
                  <Stack alignItems={"center"} direction='row'>
                    <Typography>Already have an Account ? </Typography>
                    <Button onClick={handlePageType}>Sign In</Button>
                  </Stack>
                </Stack>
              </Stack>
              {/* img */}
              <Stack
                sx={{ display: { xs: "none", md: "flex" } }}
                width={"60%"}
                height={"100%"}>
                <img
                  width={"100%"}
                  height={"100%"}
                  alt={signUp?.attributes?.name}
                  src={
                    import.meta.env.VITE_URL +
                    signUp?.attributes?.image?.data[0]?.attributes?.url
                  }
                />
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
              elevation={5}
              // overflow='hidden'
            >
              {/* signUp */}
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
                      {/* username */}
                      <Stack
                        sx={{ width: { xs: 250 }, height: { xs: 20, sm: 30 } }}>
                        <Skeleton
                          width={"100%"}
                          variant={"rounded"}
                          height={"100%"}
                          animation={"wave"}
                        />
                      </Stack>
                      {/* email */}
                      <Stack
                        sx={{ width: { xs: 250 }, height: { xs: 20, sm: 30 } }}>
                        <Skeleton
                          width={"100%"}
                          variant={"rounded"}
                          height={"100%"}
                          animation={"wave"}
                        />
                      </Stack>
                      {/* password */}
                      <Stack
                        sx={{ width: { xs: 250 }, height: { xs: 20, sm: 30 } }}>
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
                  <Skeleton
                    width={"100px"}
                    height={"70px"}
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
              {/* img */}
              <Stack
                sx={{ display: { xs: "none", md: "flex" } }}
                width={"60%"}
                height={"100%"}>
                <Skeleton
                  width={"100%"}
                  height={"100%"}
                  variant={"rounded"}
                  animation={"wave"}
                />
              </Stack>
            </Stack>
          </Stack>
        )}
      </Stack>
    </>
  );
}
