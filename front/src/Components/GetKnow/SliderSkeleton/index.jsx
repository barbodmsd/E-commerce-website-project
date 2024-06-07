import {
  Box,
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Stack,
} from "@mui/material";
import React from "react";
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
  return (
    <>
      <Stack sx={{ px: "50px" }}>
        <Box>
          <Skeleton width={"200px"} height={"50px"} />
        </Box>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          gap={"100px"}
          sx={{ py: "50px" }}>
          <GetKnowSkeletonCard />
          <GetKnowSkeletonCard />
          <GetKnowSkeletonCard />
        </Stack>
      </Stack>
    </>
  );
}
