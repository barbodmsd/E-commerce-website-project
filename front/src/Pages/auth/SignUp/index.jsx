import {
  Box,
  Button,
  Card,
  IconButton,
  Input,
  InputAdornment,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import useForm from "../../../Utils/useForm";
export default function SignUp({ theme, handlePageType }) {
  const [signUp, setSignUp] = useState();
  const [isShow, setIsShow] = useState(false);
  const [field, handleChange] = useForm();
  useEffect(() => {
    (async () => {
      const resImg = await fetchData("aths?populate=*");
      setSignUp(resImg[1]);
    })();
  }, []);
  console.log(field);
  return (
    <>
      {signUp ? (
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
            {/* signUp */}
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              gap={"20px"}
              width={"45%"}
              height={"100%"}
              component={"form"}
              noValidate>
              <Stack alignItems={"center"} gap={"30px"}>
                <Typography fontSize={"2rem"} fontWeight={"bolder"}>
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
                    <Stack width={"250px"} height={"20px"}>
                      <Input
                        name={"username"}
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
                            <PersonRoundedIcon sx={{ color: "grey" }} />
                          </InputAdornment>
                        }
                        placeholder={"Username"}
                        required
                        autoFocus={true}
                        fullWidth
                      />
                    </Stack>
                    {/* email */}
                    <Stack width={"250px"} height={"20px"}>
                      <Input
                        name={"email"}
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
                            <EmailRoundedIcon sx={{ color: "grey" }} />
                          </InputAdornment>
                        }
                        placeholder={"Email"}
                        required
                        autoFocus={true}
                        fullWidth
                      />
                    </Stack>
                    {/* password */}
                    <Stack width={"250px"} height={"30px"}>
                      <Input
                        name={"password"}
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
                  <Typography>Are you have an Account ? </Typography>
                  <Button onClick={handlePageType}>Sign In</Button>
                </Stack>
              </Stack>
            </Stack>
            {/* img */}
            <Stack width={"55%"} height={"100%"}>
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
          {/* signUp */}
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            gap={"20px"}
            width={"45%"}
            height={"100%"}
            component={"form"}
            noValidate>
            <Stack alignItems={"center"} gap={"30px"}>
              <Typography fontSize={"2rem"} fontWeight={"bolder"}>
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
                  <Stack width={"250px"} height={"20px"}>
                    <Input
                      name={"username"}
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
                          <PersonRoundedIcon sx={{ color: "grey" }} />
                        </InputAdornment>
                      }
                      placeholder={"Username"}
                      required
                      autoFocus={true}
                      fullWidth
                    />
                  </Stack>
                  {/* email */}
                  <Stack width={"250px"} height={"20px"}>
                    <Input
                      name={"email"}
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
                          <EmailRoundedIcon sx={{ color: "grey" }} />
                        </InputAdornment>
                      }
                      placeholder={"Email"}
                      required
                      autoFocus={true}
                      fullWidth
                    />
                  </Stack>
                  {/* password */}
                  <Stack width={"250px"} height={"30px"}>
                    <Input
                      name={"password"}
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
                      placeholder={"Password"}
                      fullWidth
                    />
                  </Stack>
                </Stack>
              </Stack>
              {/* submit button */}
              <Skeleton width={'100px'} height={'30px'} animation={'wave'}/> 
              {/* signIn */}
              <Stack alignItems={"center"} direction='row'>
                <Typography><Skeleton width={'250px'} height={'50px'} animation={'wave'}/> </Typography>
               
              </Stack>
            </Stack>
          </Stack>
          {/* img */}
          <Stack width={"55%"} height={"100%"}>
            <Skeleton width={'100%'} height={'100%'}/>
          </Stack>
        </Stack>
      </Stack>
      )}
    </>
  );
}
