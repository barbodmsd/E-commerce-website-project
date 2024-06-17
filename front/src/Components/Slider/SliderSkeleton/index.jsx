import {
  Box,
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Stack,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Swiper from "swiper";
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
  const mobile = useMediaQuery("(min-width:300px) ,( max-width:600px)");
  const tablet = useMediaQuery("(min-width:600px)");
  const laptop = useMediaQuery("(min-width:900px)");
  console.log({ mobile }, { tablet }, { laptop });

  return (
    <>
      <Stack sx={{ px: "50px" }}>
        <Box>
          <Skeleton width={"100px"} height={"50px"} animation={'wave'} />
        </Box>
        <Stack
          direction={"row"}
          gap={"20px"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ py: "50px" }}>
            
          </Stack>
      </Stack>
    </>
  );
}
