import React, { useEffect, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { motion } from "framer-motion";
import { Stack, useMediaQuery } from "@mui/material";
import fetchData from "../../Utils/fetchData";
export default function Auth({ theme }) {
  const [pageType, setPageType] = useState("signIn");
  const mobile = useMediaQuery("(max-width:600px)");
  const [bg, setBg] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData("auths?populate=*");
      setBg(res[1]);
    })();
  }, []);
 
  // toggle pageType
  const handlePageType = () => {
    setPageType(pageType === "signIn" ? "signUp" : "signIn");
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
        }}
        sx={{
          backgroundImage: `url(${
            import.meta.env.VITE_URL +
            bg?.attributes?.image?.data[0]?.attributes?.url
          })`,
          backgroundPosition:'center',
          backgroundSize:'cover',
        }}>
        {pageType === "signIn" ? (
          <SignIn theme={theme} handlePageType={handlePageType} />
        ) : (
          <SignUp theme={theme} handlePageType={handlePageType} />
        )}
      </Stack>
    </>
  );
}
