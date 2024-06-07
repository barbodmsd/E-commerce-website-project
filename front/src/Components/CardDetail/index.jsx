import React, { useEffect, useState } from "react";
import fetchData from "../../Utils/fetchData";
import { Typography } from "@mui/material";

export const ProductCard = ({ img, description, name, dir }) => {
  return (
    <Stack gap={"30px"} alignItems={"center"} justifyContent={"center"}>
      {/* box */}
      <Stack
        direction={"row"}
        gap={"20px"}
        sx={{
          width: "400px",
          height: "250px",
          borderRadius: "20px",
        }}>
        {/* img */}
        <Stack width={"40%"} height={"100%"}>
          <img width={"100%"} height={"100%"} alt={name} src={img} />
        </Stack>
        {/* text */}
        <Stack width={"55%"} height={"100%"} p='15px'>
          <Typography>{name}</Typography>
          <Typography>{description.slice(0, 80)}</Typography>
          <Button>Details</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default function CardDetail({ theme, model, dir }) {
  const [product, setProduct] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData(`laptops?populate=*`);
      setProduct(res);
    })();
  }, [model]);
  console.log({ product });
  return (
    <>
      <ProductCard
        img={
          import.meta.env.VITE_URL +
          product.attributes?.image?.data[0]?.attributes?.url
        }
        name={product.attributes?.name}
        description={products.attributes?.description}
      />
    </>
  );
}
