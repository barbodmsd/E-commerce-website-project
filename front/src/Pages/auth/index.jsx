import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
export default function Auth({theme}) {
  const [pageType, setPageType] = useState();
  // toggle pageType
  const handlePageType = () => {
    setPageType(pageType === "signIn" ? "signUp" : "signIn");
  };
  return (
    <>
      {pageType === "signIn" ? (
        <SignIn theme={theme} handlePageType={handlePageType} />
      ) : (
        <SignUp theme={theme} handlePageType={handlePageType} />
      )}
    </>
  );
}
