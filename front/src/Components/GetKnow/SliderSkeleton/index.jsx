import { Box, Card, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const GetKnowSkeletonCard = () => {
  return (
    <Card elevation={5} sx={{ width: 300, height: 400, borderRadius: "20px" }}>
      <Skeleton
        width='100%'
        height={"100%"}
        animation={"wave"}
        variant='rounded'
      />
    </Card>
  );
};

export default function GetKnowSkelton() {
  const items = [];
  for (let i = 0; i < 4; i++) {
    items.push(
      <SwiperSlide key={i}>
        <GetKnowSkeletonCard />
      </SwiperSlide>
    );
  }
  return (
    <>
      <Stack sx={{ px: { xs: "20px", sm: "50px" }, gap: "30px", my: "50px" }}>
        <Box>
          <Typography
            sx={{
              color: "txt.two",
              fontSize: "2em",
              fontWeight: "bolder",
            }}>
            <Skeleton width={"200px"} height={"40px"} animation={"wave"} />
          </Typography>
        </Box>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          breakpoints={{
            750: {
              slidesPerView: 3,
            },
            500: {
              slidesPerView: 2,
            },
            300: {
              slidesPerView: 1,
            },
          }}
          autoplay={{
            delay: 2500,
          }}
          modules={[Scrollbar, Autoplay]}
          className='GetKnow-swiper'>
          {items}
        </Swiper>
      </Stack>
    </>
  );
}
