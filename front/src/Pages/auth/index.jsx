import React, { useState } from "react";
import SignIn from "./SignIn";
import SignIn from "./SignUp";
export default function Auth() {
  const [pageType, setPageType] = useState();
  // toggle pageType
  const handlePageType = () => {
    setPageType(pageType === "signIn" ? "signUp" : "signIn");
  };
  return (
    <>
      {pageType === "signIn" ? (
        <SignIn handlePageType={handlePageType} />
      ) : (
        <SignUp handlePageType={handlePageType} />
      )}
    </>
  );
}
