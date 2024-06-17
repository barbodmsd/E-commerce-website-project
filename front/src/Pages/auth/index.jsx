import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { motion } from "framer-motion";
import { Stack } from "@mui/material";
export default function Auth({ theme }) {
  const [pageType, setPageType] = useState("signIn");
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
