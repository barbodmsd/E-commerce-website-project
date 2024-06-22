import React, { useEffect, useState } from "react";
import fetchData from "../../Utils/fetchData";
import { Skeleton, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { y } from "../../App";
import logo from './../../../public/assets/logo.png'

export default function Notfound() {
  const [img, setImg] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData("notfounds?populate=*");
      setImg(res);
    })();
  }, []);
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
        {img ? (
          <Stack
          component={motion.div}
          {...y}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            sx={{
              position: "relative",
              height: { xs: "60vh", sm: "90vh" },
            }}>
            {/* laptop img */}
            <img
              width={"100%"}
              height={"100%"}
              style={{
                filter: "contrast(30%)",
              }}
              src={
                import.meta.env.VITE_URL +
                img[0]?.attributes?.image?.data[0]?.attributes?.formats?.medium
                  ?.url
              }
              alt={img[0].attributes?.name}
            />
            {/* 404 text */}
            <Typography
              sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                opacity: "0.5",
                whiteSpace: "nowrap",
                transform: "translate(-50%,-50%)",
                fontSize: { xs: "10em", sm: "13em", md: "17em" },
              }}
              fontWeight={"bolder"}>
              4 0 4
            </Typography>
            {/* logo img */}
            <Stack
              sx={{
                width: { xs: 150, sm: 300, md: 350 },
                height: { xs: 150, sm: 300 },
                position: "absolute",
                left: "50%",
                top: "45%",
                whiteSpace: "nowrap",
                transform: "translate(-50%,-45%)",
              }}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                }}
                src={logo}
                alt={"barbod logo"}
              />
            </Stack>
            {/* page not found text*/}
            <Stack
              sx={{
                position: "absolute",
                left: "50%",
                top: { xs: "60%", sm: "63%", md: "65%" },
                transform: {
                  xs: "translate(-50%,-60%)",
                  sm: "translate(-50%,-63%)",
                  md: "translate(-50%,-65%)",
                },
              }}>
              <Typography
                sx={{
                  color: "black",
                  whiteSpace: "nowrap",
                  fontSize: { xs: "1.2em", sm: "1.5em", md: "1.8em" },
                }}
                fontWeight={"bolder"}>
                Opss! Page Not Found
              </Typography>
            </Stack>
            {/* long text */}
            <Stack
              sx={{
                position: "absolute",
                left: "50%",
                top: "70%",
                top: { xs: "70%", sm: "73%", md: "75%" },
                transform: {
                  xs: "translate(-50%,-70%)",
                  sm: "translate(-50%,-73%)",
                  md: "translate(-50%,-75%)",
                },
                transform: "translate(-50%,-70%)",
              }}>
              <Typography
                sx={{
                  color: "black",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                  fontSize: { xs: "0.9em", sm: "1.1em", md: "1.2em" },
                }}>
                The page you are looking for <br /> has been deleted or moved to
                another page
              </Typography>
            </Stack>
          </Stack>
        ) : (
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            sx={{
              position: "relative",
              height: { xs: "80vh", sm: "90vh" },
            }}>
            <Skeleton width={"100%"} variant={'rounded'} height={"100%"} animation={"wave"} />
          </Stack>
        )}
      </Stack>
    </>
  );
}
