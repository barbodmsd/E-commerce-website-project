import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { Box, Button, Stack, TableFooter, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem, clear, removeItem } from "../../Store/Slices/cartSlice";
import { CartIcon } from "../ProductDetails";
import TableSkeleton from "./TableSkeleton";
import { motion } from "framer-motion";
export default function Cart({ theme }) {
  
    const dispatch = useDispatch();
  const { list } = useSelector((state) => state.persistedReducer.cartSlice)
  let totalPrice = 0;
  const items = list?.map((e, index) => {
    totalPrice += e.quantity * e.attributes.price;
    return (
      <TableRow key={index}>
        {/* id */}
        <TableCell
          sx={{
            color: theme == "light" ? "#4f4f4f" : "txt.three",
            fontSize: "1.2em",
          }}
          align={"center"}>
          {index + 1}
        </TableCell>
        {/* img */}
        <TableCell
          sx={{
            color: theme == "light" ? "#4f4f4f" : "txt.three",
            fontSize: "1.2em",
          }}
          align={"center"}>
          <Link
            to={`/products/product-details/${e.id}/${e.attributes.name
              .toLowerCase()
              .replaceAll(" ", "-")}`}>
            <img
              width={"100px"}
              height={"100%"}
              src={
                import.meta.env.VITE_URL +
                e?.attributes?.image?.data[0]?.attributes?.url
              }
            />
          </Link>
        </TableCell>
        {/* name */}
        <TableCell
          sx={{
            color: theme == "light" ? "#4f4f4f" : "txt.three",
            fontSize: "1.2em",
          }}
          align={"center"}>
          {e.attributes?.name}
        </TableCell>
        {/* quantity */}
        <TableCell
          sx={{
            color: theme == "light" ? "#4f4f4f" : "txt.three",
            fontSize: "1.2em",
          }}
          align={"center"}>
          {e.quantity}
        </TableCell>
        {/* price */}
        <TableCell
          sx={{
            color: theme == "light" ? "#4f4f4f" : "txt.three",
            fontSize: "1.2em",
          }}
          align={"center"}>
          ${e.attributes?.price}
        </TableCell>
        {/* total price */}
        <TableCell
          sx={{
            color: theme == "light" ? "#4f4f4f" : "txt.three",
            fontSize: "1.2em",
          }}
          align={"center"}>
          ${e.quantity * e.attributes.price}
        </TableCell>
        {/* add or remove */}
        <TableCell
          sx={{ color: theme == "light" ? "#4f4f4f" : "txt.three" }}
          align={"center"}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"10px"}>
            {e.quantity && (
              <CartIcon
                click={() => dispatch(removeItem(e.id))}
                icon={
                  e.quantity == 1 ? (
                    <DeleteRoundedIcon sx={{
                      fontSize: { xs: "1em", sm: "1.5em" },
                    }} />
                  ) : (
                    -1
                  )
                }
                theme={theme}
              />
            )}

            <CartIcon
              click={() => dispatch(addItem(e))}
              icon={"+1"}
              theme={theme}
            />
          </Stack>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <>
      <Stack
        component={motion.div}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{
          x: window.innerWidth,
          transition: {
            duration: 0.1,
            type: "spring",
          },
        }}
      >
        {list.length > 0 ? (
          <Stack width={"100%"} height={"120vh"} p={" 30px"} gap={"50px"}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>
                      <Typography fontSize={"1.2em"}>#</Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography fontSize={"1.2em"}>Image</Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography fontSize={"1.2em"}>Name</Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography fontSize={"1.2em"}>Quantity</Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography fontSize={"1.2em"}>Price</Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography fontSize={"1.2em"}>Total Price</Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography fontSize={"1.2em"}>Add/remove</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{items}</TableBody>
              </Table>
              <TableFooter sx={{ height: "100px" }}>
                <TableCell sx={{ fontSize: "1.2em" }} align={"center"}>
                  Total Cart :{" "}
                </TableCell>
                <TableCell sx={{ fontSize: "1.2em" }} align={"center"}>
                  ${totalPrice}
                </TableCell>
              </TableFooter>
            </TableContainer>
            <Box>
              <Button
                onClick={() => dispatch(clear())}
                size={"large"}
                variant={"contained"}
                startIcon={
                  <DeleteRoundedIcon

                  />
                }>
                Delete Cart
              </Button>
            </Box>
          </Stack>
        ) : (
          <TableSkeleton />
        )}
      </Stack>
    </>
  );
}
