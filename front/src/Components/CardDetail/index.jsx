import React, { useEffect, useState } from "react";
import fetchData from "../../Utils/fetchData";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CardDetailsSkeleton from "./CardDetailsSkeleton";

export const ProductCard = ({ img, description, name, isLeft, id, theme }) => {
  return (
    <>
      {/* box */}
      <Card elevation={5}>
        <Stack
          justifyContent={"space-between"}
          gap={"20px"}
          sx={{
            width: "100%",
            minHeight: { xs: 600, sm: 350 },
            direction: { xs: "column", sm: "row" },
          }}>
          {isLeft == 1 ? (
            <>
              {/* text */}
              <Stack
                sx={{
                  width:{xs:'100%',sm:'55%'}
                }}
                gap={"20px"}
                p='20px'
                height={"100%"}
                justifyContent={"center"}>
                <Typography
                  textAlign={"center"}
                  fontWeight={"bolder"}
                  fontSize={"2em"}>
                  {name}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "justify",
                    color: theme == "light" ? "#4f4f4f" : "txt.three",
                  }}>
                  {description}
                </Typography>
                <Stack mt={"20px"}>
                  <Link to={`/products/product-details/${id}/${name}`}>
                    <Button variant={"contained"}>Details</Button>
                  </Link>
                </Stack>
              </Stack>
              {/* img */}
              <Stack sx={{xs:'100%',sm:'40%'}}>
                <img
                  style={{ objectFit: "cover" }}
                  width={"100%"}
                  height={"100%"}
                  alt={name}
                  src={img}
                />
              </Stack>
            </>
          ) : (
            <>
              {/* img */}
              <Stack sx={{xs:'100%',sm:'40%'}}>
                <img width={"100%"} height={"100%"} alt={name} src={img} />
              </Stack>
              {/* text */}
              <Stack
               sx={{
                width:{xs:'100%',sm:'55%'}
              }}
                gap={"20px"}
                p='20px'
                justifyContent={"center"}
                height={"100%"}>
                <Typography
                  textAlign={"center"}
                  fontWeight={"bolder"}
                  fontSize={"2em"}>
                  {name}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "justify",
                    color: theme == "light" ? "#4f4f4f" : "txt.three",
                  }}>
                  {description}
                </Typography>
                <Stack mt={"20px"} alignItems={"end"}>
                  <Link to={`/products/product-details/${id}/${name}`}>
                    <Button variant={"contained"}>Details</Button>
                  </Link>
                </Stack>
              </Stack>
            </>
          )}
        </Stack>
      </Card>
    </>
  );
};
export default function CardDetail({ id, theme }) {
  const [product, setProduct] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData(
        `products?populate=*&filters[categories][id]=${id}&pagination[page]=1&pagination[pageSize]=3`
      );
      setProduct(res);
    })();
  }, [id]);

  const items = product?.map((e, index) => (
    <ProductCard
      key={index}
      id={e.id}
      description={e?.attributes?.description.slice(0, 300)}
      name={e?.attributes?.name}
      isLeft={index}
      theme={theme}
      img={
        import.meta.env.VITE_URL + e?.attributes?.image?.data[0].attributes?.url
      }
    />
  ));
  return (
    <>
      {product ? (
        <Stack
          gap='50px'
          my='30px'
          p='50px'
          justifyContent={"center"}
          alignItems={"center"}>
          {items}
        </Stack>
      ) : (
        <CardDetailsSkeleton />
      )}
    </>
  );
}
