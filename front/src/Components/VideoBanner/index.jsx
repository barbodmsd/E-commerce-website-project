import { Fab, Skeleton, Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import fetchData from "../../Utils/fetchData";
import { motion } from "framer-motion";
import { y } from "../../App";

export default function VideoBanner({ theme, model }) {
  const [video, setVideo] = useState();
  const [isPlay, setIsPlay] = useState(false);
  // get video
  const videoRef = useRef();
  const { current } = videoRef;
  useEffect(() => {
    (async () => {
      const res = await fetchData(`${model}/1?populate=*`);
      setVideo(res);
    })();
  }, []);
  const handleClick = () => {
    if (!isPlay) {
      setIsPlay(!isPlay);
      current.play();
    } else {
      setIsPlay(!isPlay);
      current.pause();
    }
  };
  return (
    <>
      <Stack justifyContent={"center"}>
        {video ? (
          <Stack component={motion.div} {...y}>
            <Stack
            sx={{
              borderRadius: "20px",
              overflow: "hidden",
              width: "100%",
              height: { xs: "60vh", sm: "80vh" },
              my: { xs: "15px", sm: "10px" },
              px: "30px",
              position: "relative",
            }}>
            <video
              width='100%'
              height='100%'
              // loop
              autoPlay
              onClick={handleClick}
              ref={videoRef}
              src={
                import.meta.env.VITE_URL +
                video?.attributes?.media?.data[0]?.attributes?.url
              }
              style={{
                objectFit: "fill",
                borderRadius: "20px",
                display: "inline-block",
              }}
            />
          </Stack>
          </Stack>
        ) : (
          <Stack
            sx={{
              borderRadius: "20px",
              overflow: "hidden",
              width: "100%",
              height: { xs: "60vh", sm: "80vh" },
              my: { xs: "15px", sm: "10px" },
              px: "30px",
            }}>
            <Skeleton
              width={"100%"}
              height={"100%"}
              animation={"wave"}
              variant={"rounded"}
            />
          </Stack>
        )}
      </Stack>
    </>
  );
}
