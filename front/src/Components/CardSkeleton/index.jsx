import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Stack,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const loading = [];
for (let i = 0; i < 8; i++) {
  loading.push(
    <Stack component={Card} key={i} sx={{ width: 280, height: 400 }} gap='10px'>
      <Skeleton
        width={"100%"}
        variant={"rounded"}
        animation={"wave"}
        height={"200px"}
      />
      <Stack p={"15px"}>
        <Skeleton width={"80px"} height={"50px"} animation={"wave"} />
        <Skeleton
          width={"150px"}
          height={"70px"}
          variant={"rounded"}
          animation={"wave"}
        />
        <Stack justifyContent={"end"} direction={"row"}>
          <Skeleton
            width={"70px"}
            height={"40px"}
            variant={"rounded"}
            animation={"wave"}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default function CardSkeleton() {
  const { catName } = useParams();
  return (
    <>
      <Stack
        width={"100%"}
        justifyContent={"center"}
        gap={"50px"}
        sx={{
          m: "30px auto",
          p: { xs: "15px 30px", sm: "15px 70px" },
        }}>
        {/* titles */}
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={"30px"}
          flexWrap={"wrap"}>
          {/* text */}
          <Skeleton width={"100px"} height={"50px"} animation={"wave"} />
          {/* sort and filter */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ gap: { xs: "10px", sm: "30px" } }}
            flexWrap={"wrap"}>
            <Skeleton
              sx={{width:{ xs: 120, sm: 250 } }}
              height={"50px"}
              variant={"rounded"}
              animation={"wave"}
            />
            {catName == "laptop" ? (
              ""
            ) : catName == "mobile" ? (
              ""
            ) : catName == "watch" ? (
              ""
            ) : (
              <Skeleton
                width={"80px"}
                height={"50px"}
                variant={"rounded"}
                animation={"wave"}
              />
            )}
          </Stack>
        </Stack>
        {/* all cards */}
        <Stack
          direction={"row"}
          justifyContent={"center"}
          gap={"20px"}
          flexWrap={"wrap"}>
          {loading}
        </Stack>
      </Stack>
    </>
  );
}
