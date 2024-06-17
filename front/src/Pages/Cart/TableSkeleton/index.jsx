import {
  Button,
  Skeleton,
  Stack,
  TableFooter,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { Link } from "react-router-dom";
export default function TableSkeleton({ theme }) {
  return (
    <>
      <Stack width={"100%"} p={'30px'} gap={"50px"}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            {/* header */}
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
          </Table>
          {/* footer */}
          <TableFooter sx={{ height: "100px" }}>
            <TableCell sx={{ fontSize: "1.2em" }} align={"center"}>
              <Skeleton width={"100px"} animation={"wave"} />
            </TableCell>
            <TableCell sx={{ fontSize: "1.2em" }} align={"center"}>
              <Skeleton width={"100px"} animation={"wave"} />
            </TableCell>
          </TableFooter>
        </TableContainer>
        <Stack justifyContent={"center"} alignItems={"center"} gap={"30px"}>
          <Typography
            textAlign={"center"}
            sx={{fontSize:{xs:'1.2em',sm:"2em"}}}
            fontWeight={"bolder"}>
            Oops! Your cart is empty, go buy something and back here.
            <br />I wait for you...
          </Typography>
          <Link to={"/products/all-products/all-categories"}>
            <Button>View some products here</Button>
          </Link>
        </Stack>
      </Stack>
    </>
  );
}
