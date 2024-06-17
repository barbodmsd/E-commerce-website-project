import { Stack, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";
import { scale } from "../../../App";
import { motion } from "framer-motion";

export default function BgAttachment() {
  const [bgImg, setImg] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData("banners?populate=*");
      setImg(res);
    })();
  }, []);
  return (
    <>
      {bgImg ? (
        <Stack component={motion.div} {...scale}>
          <Stack
            mt={"50px"}
            height={"400px"}
            sx={{
              backgroundImage: `url(${
                import.meta.env.VITE_URL +
                bgImg[0]?.attributes?.image?.data[0]?.attributes?.url
              })`,
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundSize: "cover",
              filter: { sm: "grayscale(30%)" },
              transition: "all 0.5s",
              "&:hover": {
                filter: "none",
              },
            }}
          />
        </Stack>
      ) : (
        <Stack mt={"50px"} height={"400px"}>
          <Skeleton
            width={"100%"}
            height={"100%"}
            variant={"rectangular"}
            animation={"wave"}
          />
        </Stack>
      )}
    </>
  );
}
