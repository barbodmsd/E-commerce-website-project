import React, { useEffect, useState } from "react";
import fetchData from "../../Utils/fetchData";
import { Stack, Typography } from "@mui/material";

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
      {img && (
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          height={"100vh"}
          width={"100%"}
          sx={{
            position: "relative",
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
            }}
            fontSize={"17em"}
            fontWeight={"bolder"}>
            4 0 4
          </Typography>
          {/* logo img */}
          <img
            style={{
              width: "350px",
              height: "300px",
              position: "absolute",
              left: "50%",
              top: "40%",
              whiteSpace: "nowrap",
              transform: "translate(-50%,-40%)",
            }}
            src={"assets/logo.png"}
            alt={"barbod logo"}
          />
          {/* page not found text*/}
          <Typography
            sx={{
              position: "absolute",
              color: "black",
              left: "50%",
              top: "58%",
              whiteSpace: "nowrap",
              transform: "translate(-50%,-58%)",
            }}
            fontSize={"1.8em"}
            fontWeight={"bolder"}>
            Opss! Page Not Found
          </Typography>
          {/* long text */}
          <Typography
            sx={{
              position: "absolute",
              color: "black",
              left: "50%",
              top: "70%",
              whiteSpace: "nowrap",
              transform: "translate(-50%,-70%)",
            }}
            fontSize={"1.2rem"}>
            The page you are looking for has been deleted or moved to another
            page
          </Typography>
        </Stack>
      )}
    </>
  );
}

