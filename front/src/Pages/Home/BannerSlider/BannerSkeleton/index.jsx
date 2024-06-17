import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";

export default function BannerSkeleton() {
  return (
    <Stack
      sx={{
        transform: "translateY(-100px)",
        p: '120px 20px 0 20px ',
      }}>
      <Skeleton
        sx={{
          width: "100%",
          height: {xs:350,sm:500},
        }}
        variant={'rounded'}
        animation={"wave"}
      />
    </Stack>
  );
}
