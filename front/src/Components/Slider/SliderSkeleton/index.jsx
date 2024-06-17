import {
  Box,
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export const ProductsSkeletonCard = () => {
  return (
    <Card sx={{ width: 300, height: 400 }}>
      <Skeleton
        width={"100%"}
        height={"150px"}
        variant={"rectangular"}
        animation={"wave"}
      />
      <CardContent
        sx={{
          textAlign: "left",
        }}>
        <Skeleton width={"100px"} height={"50px"} animation={"wave"} />
        <Skeleton
          width={"200px"}
          height={"80px"}
          animation={"wave"}
          variant={"rounded"}
        />
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "end",
        }}>
        <Skeleton
          width={"100px"}
          height={"50px"}
          animation={"wave"}
          variant={"rounded"}
        />
      </CardActions>
    </Card>
  );
};
export default function ProductsSkelton() {
  const items = [];
  for (let i = 0; i < 4; i++) {
    items.push(
      <SwiperSlide key={i}>
        <ProductsSkeletonCard />
      </SwiperSlide>
    );
  }

  return (
    <>
      <Stack sx={{ px: { xs: "20px", sm: "30px", md: "50px" }, gap: "30px" }}>
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
          breakpoints={{
            1250: {
              slidesPerView: 4,
            },
            900: {
              slidesPerView: 3,
            },
            600: {
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
          className='products-swiper'>
          {items}
        </Swiper>
      </Stack>
    </>
  );
}
