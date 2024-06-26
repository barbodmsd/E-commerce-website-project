import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Fab, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import fetchData from "../../Utils/fetchData";
import "./Slider.css";
import ProductsSkelton from "./SliderSkeleton";
import { motion } from "framer-motion";
import { translate } from "../../App";
// card in slider
export const ProductsCard = ({ img, name, price, description, id, theme }) => {
  return (
    <Card elevation={5} sx={{ width: 300, height: 400 }}>
      <CardMedia sx={{ height: 200 }} image={img} title={name} />
      <CardContent
        sx={{
          textAlign: "left",
        }}>
        <Typography gutterBottom variant='h5' color={"txt.two"} component='div'>
          Price: ${price}
        </Typography>
        <Typography
          variant='body2'
          sx={{ color: theme == "light" ? "#4f4f4f" : "txt.three" }}>
          {description.slice(0, 90)}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "end",
        }}>
        <Link
          sx={{ color: "txt.white" }}
          to={`/products/product-details/${id}/${name
            .toLowerCase()
            .replaceAll(" ", "-")}`}>
          <Button variant='contained'>details</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
// create costume card slider its very helpful
export default function SliderProducts({
  theme,
  title,
  route,
  model,
  field,
  secondField,
  operator,
  value,
}) {
  const [products, setProducts] = useState();
  // get data from  products
  useEffect(() => {
    (async () => {
      const res = await fetchData(
        `${model}?populate=*&${
          field &&
          `filters[${field}]${
            secondField && `[${secondField}]`
          }[${operator}]=${value}`
        }&pagination[page]=1&pagination[pageSize]=10`
      );
      setProducts(res);
    })();
  }, [title, route, model, field, secondField, operator, value]);
  const items = products?.map((e, index) => (
    <SwiperSlide key={index}>
      <ProductsCard
        id={e.id}
        theme={theme}
        name={e?.attributes?.name}
        price={e.attributes?.price}
        description={e?.attributes?.description}
        img={
          import.meta.env.VITE_URL +
          e?.attributes?.image?.data[0]?.attributes?.url
        }
      />
    </SwiperSlide>
  ));
  return (
    <>
      {products ? (
        <Stack component={motion.div} {...translate}>
          <Stack
            sx={{ px: { xs: "20px", sm: "30px", md: "50px" }, gap: "30px" }}>
            <Box>
              <Typography
                sx={{
                  color: "txt.two",
                  fontSize: "2em",
                  fontWeight: "bolder",
                }}>
                {title}
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
              scrollbar={{
                hide: true,
              }}
              navigation={{
                nextEl: ".next-chev",
                prevEl: ".prev-chev",
              }}
              autoplay={{
                delay: 2500,
              }}
              slidesPerView={4}
              modules={[Scrollbar, Navigation, Autoplay]}
              className='products-swiper'>
              <Stack component={Fab} className={"prev-chev"} size={"small"}>
                <ChevronLeftIcon />
              </Stack>
              {items}
              <SwiperSlide>
                <Card sx={{ width: 300, height: 400 }}>
                  <Stack
                    width={"100%"}
                    height={"100%"}
                    justifyContent={"center"}
                    alignItems={"center"}>
                    <Link to={route}>
                      <Button>View All </Button>
                    </Link>
                  </Stack>
                </Card>
              </SwiperSlide>
              <Stack component={Fab} className={"next-chev"} size={"small"}>
                <ChevronRightIcon />
              </Stack>
            </Swiper>
          </Stack>
        </Stack>
      ) : (
        <ProductsSkelton />
      )}
    </>
  );
}
