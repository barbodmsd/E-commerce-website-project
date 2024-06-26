import { Box, Skeleton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import fetchData from "../../../Utils/fetchData";
import "./Category.css";
import { motion } from "framer-motion";
import { scale } from "../../../App";

// card for category slider
export const CatCard = ({ img, name, id, description }) => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
      }}>
      <Box
        sx={{
          position: "absolute",
          left: "5%",
          top: "20%",
          width: "200px",
        }}>
        <Typography fontSize='0.9em' color={"txt.three"}>
          {description.slice(0, 100)}
        </Typography>
      </Box>
      <Link to={`/products/${name}`}>
        <img
          style={{ objectFit: "cover", borderRadius: "20px" }}
          width='100%'
          height='100%'
          src={img}
          alt={name}
        />
      </Link>
    </Stack>
  );
};

export default function CategorySlider() {
  const [cat, setCat] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData(
        "categories?populate=*&pagination[page]=1&pagination[pageSize]=3"
      );
      setCat(res);
    })();
  }, []);
  const items = cat?.map((e, index) => (
    <SwiperSlide key={index}>
      <CatCard
        name={e.attributes?.name}
        id={e.id}
        description={e.attributes?.description}
        img={
          import.meta.env.VITE_URL +
          e?.attributes?.image?.data[0]?.attributes?.url
        }
      />
    </SwiperSlide>
  ));
  return (
    <>
      {cat ? (
        <Stack component={motion.div} {...scale}>
          <Stack
            sx={{
              width: "100%",
              height: { xs: 300, sm: 500, md: 600 },
              p: { xs: "20px", sm: "40px" },
            }}>
            <Swiper
              direction={"vertical"}
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              mousewheel={true}
              pagination={{
                clickable: true,
              }}
              modules={[Mousewheel, Pagination]}
              className='category-slider'>
              {items}
            </Swiper>
          </Stack>
        </Stack>
      ) : (
        <Stack
          sx={{
            width: "100%",
            height: { xs: 300, sm: 500, md: 600 },
            p: { xs: "20px", sm: "40px" },
          }}>
          <Skeleton
            width={"100%"}
            height={"100%"}
            animation={"wave"}
            variant={"rounded"}
          />
        </Stack>
      )}
    </>
  );
}
