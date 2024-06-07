import React, { useEffect, useState } from "react";
import fetchData from "../../Utils/fetchData";
import { Button, Stack, Typography } from "@mui/material";

export const ProductCard = ({ img, description, name, isLeft }) => {
  return (
    // <Stack gap={"30px"} alignItems={"center"} justifyContent={"center"}>
    <>
      {/* box */}
      <Stack
        direction={"row"}
        gap={"20px"}
        sx={{
          width: "400px",
          height: "250px",
          borderRadius: "20px",
        }}>
        {isLeft == 1 ? (
          <>
            {/* text */}
            <Stack width={"55%"} height={"100%"} p='15px'>
              <Typography>{name}</Typography>
              <Typography>{description}</Typography>
              <Button>Details</Button>
            </Stack>
            {/* img */}
            <Stack width={"40%"} height={"100%"}>
              <img width={"100%"} height={"100%"} alt={name} src={img} />
            </Stack>
          </>
        ) : (
          <>
            {/* img */}
            <Stack width={"40%"} height={"100%"}>
              <img width={"100%"} height={"100%"} alt={name} src={img} />
            </Stack>
            {/* text */}
            <Stack width={"55%"} height={"100%"} p='15px'>
              <Typography>{name}</Typography>
              <Typography>{description}</Typography>
              <Button>Details</Button>
            </Stack>
          </>
        )}
      </Stack>
    </>
    // </Stack>
  );
};
export default function CardDetail({ id }) {
  const [product, setProduct] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData(
        `products?populate=*&filters[categories][id]=4&pagination[page]=1&pagination[pageSize]=3`
      );
      setProduct(res);
    })();
  }, []);
  console.log(product);
  const items = product?.map((e, index) => (
    <ProductCard
      key={index}
      description={product?.attributes?.description}
      name={product?.attributes?.name}
      isLeft={index}
      img={
        import.meta.env.VITE_URL +
        product.attributes?.image?.data[0].attributes?.url
      }
    />
  ));
  return (
    <>
      <Stack gap='20px' justifyContent={"center"} alignItems={"center"}>
        {items}
      </Stack>
    </>
  );
}
