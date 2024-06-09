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
export default function SignIn({ theme, handlePageType }) {
  const [signIn, setSignIn] = useState();
  const [isShow, setIsShow] = useState(false);
  const [field, handleChange] = useForm();
  //   get image for form
  useEffect(() => {
    (async () => {
      const resImg = await fetchData("auths?populate=*");
      setSignIn(resImg[0]);
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // axios.post('http://localhost:1337/api/auth/local/register',field).then(res=>{
    //     console.log(res.data)
    // }).catch(err=>err.response.data.error.message)
    try {
      const res = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(field),
      });
      message({ type: "success", message: `welcome ${field.username}` });
      console.log(res);
    } catch (error) {
      message({ type: "error", message: error.response.data.error.message });
    }
  };
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
                    {/* username */}
                    <Stack width={"250px"} height={"20px"}>
                      <Input
                        type={"text"}
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
                  SignIn
                </Button>
                {/* signIn */}
                <Stack alignItems={"center"} direction='row'>
                  <Typography>Already don't have an Account ? </Typography>
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
