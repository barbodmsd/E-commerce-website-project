import {
    Box,
    Skeleton,
    Stack,
    TableFooter
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { useSelector } from "react-redux";
export default function TableSkeleton({ theme }) {
  const { list } = useSelector((state) => state.cartSlice);
  const items = list?.map((e, index) => {
    return (
      <TableRow key={index}>
        {/* id */}
        <TableCell>
          <Skeleton width={"30px"} animation={"wave"} />
        </TableCell>
        {/* img */}
        <TableCell>
          <Skeleton
            width={"100px"}
            height={"100px"}
            variant={"rounded"}
            animation={"wave"}
          />
        </TableCell>
        {/* name */}
        <TableCell>
          <Skeleton width={"100px"} animation={"wave"} />
        </TableCell>
        {/* quantity */}
        <TableCell>
          <Skeleton width={"30px"} animation={"wave"} />
        </TableCell>
        {/* price */}
        <TableCell>
          <Skeleton width={"30px"} animation={"wave"} />
        </TableCell>
        {/* total price */}
        <TableCell>
          <Skeleton width={"30px"} animation={"wave"} />
        </TableCell>
        {/* add or remove */}
        <TableCell>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"10px"}>
            <Skeleton
              width={"50px"}
              height={"50px"}
              variant={"rounded"}
              animation={"wave"}
            />
            <Skeleton
              width={"50px"}
              height={"50px"}
              variant={"rounded"}
              animation={"wave"}
            />
          </Stack>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <>
      <Stack width={"100%"} height={"120vh"} p={" 100px 50px"} gap={"50px"}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                {/* id */}
                <TableCell align='center'>
                  <Skeleton width={"30px"} animation={"wave"} />
                </TableCell>
                {/* img */}
                <TableCell align='center'>
                  <Skeleton width={"50px"} animation={"wave"} />
                </TableCell>
                {/* name */}
                <TableCell align='center'>
                  <Skeleton width={"50px"} animation={"wave"} />
                </TableCell>
                {/* quantity */}
                <TableCell align='center'>
                  <Skeleton width={"50px"} animation={"wave"} />
                </TableCell>
                {/* price */}
                <TableCell align='center'>
                  <Skeleton width={"50px"} animation={"wave"} />
                </TableCell>
                {/* total price */}
                <TableCell align='center'>
                  <Skeleton width={"100px"} animation={"wave"} />
                </TableCell>
                {/* add /remove */}
                <TableCell align='center'>
                  <Skeleton width={"100px"} animation={"wave"} />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{items}</TableBody>
          </Table>
          <TableFooter sx={{ height: "100px" }}>
            <TableCell sx={{ fontSize: "1.2rem" }} align={"center"}>
            <Skeleton width={"100px"} animation={"wave"} />
            </TableCell>
            <TableCell sx={{ fontSize: "1.2rem" }} align={"center"}>
            <Skeleton width={"100px"} animation={"wave"} />
            </TableCell>
          </TableFooter>
        </TableContainer>
        <Box>
        <Skeleton width={"200px"} height={'50px'} variant={'rounded'} animation={"wave"} />
        </Box>
      </Stack>
    </>
  );
}
