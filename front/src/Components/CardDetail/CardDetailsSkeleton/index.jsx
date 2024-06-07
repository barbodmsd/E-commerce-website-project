import { Button, Card, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const loading = [];
for (let i = 0; i < 3; i++) {
  loading.push(
    <Card elevation={5} key={i}>
      <Stack direction={'row'}>
        {/*  */}
        <Stack></Stack>
        <Stack></Stack>
      </Stack>
    </Card>
  );
}
export default function CardDetailsSkeleton() {
  return <>{loading}</>;
}
