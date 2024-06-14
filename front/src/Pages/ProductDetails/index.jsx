import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import fetchData from "../../Utils/fetchData";
import {
  Box,
  Button,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import "atropos/atropos.css";
import Atropos from "atropos/react";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../Store/Slices/cartSlice";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import SliderProducts from "../../Components/Slider";
// cart icon
export const CartIcon = ({ theme, icon, click }) => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        width: "50px",
        height: "50px",
        borderRadius: "10px",
        boxShadow:
          theme == "light"
            ? "0 0px 1px 1px rgba(0,0,0,0.3)"
            : "0 0px 1px 1px rgba(255,255,255,0.2)",
      }}>
      <IconButton sx={{ color: "txt.one", p: "15px" }} onClick={click}>
        {icon}
      </IconButton>
    </Stack>
  );
};
// for dialog
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});
export default function ProductDetails({ theme }) {
  const [product, setProduct] = useState();
  const [open, setOpen] = useState(false);
  const images = product?.attributes?.image?.data;
  const { id } = useParams();
  const quantity = useSelector((state) => state.cartSlice.list)?.filter(
    (e) => e.id == id
  )[0]?.quantity;
  const dispatch = useDispatch();
  const catId = product?.attributes?.categories?.data[0]?.id;
  const catName = product?.attributes?.categories?.data[0]?.attributes?.name;
  const navigate=useNavigate()

  useEffect(() => {
    (async () => {
      const res = await fetchData(`products/${id}?populate=*`);
      res?setProduct(res):navigate('/not-found')
    })();
  }, [id]);
  const imageGallery = images?.map((e, index) => (
    <Stack width={"150px"} height={"150px"} key={index}>
      <img
        width={"100%"}
        height={"100%"}
        alt={e.attributes.name}
        src={import.meta.env.VITE_URL + e?.attributes?.url}
      />
    </Stack>
  ));

  return (
    <>
      {/* product details */}
      {product ? (
        <Stack justifyContent={"center"} gap={"30px"} sx={{ p: "20px 70px" }}>
          {/* name */}
          <Box>
            <Typography fontSize={"2em"} fontWeight={"bolder"}>
              {product?.attributes?.name}
            </Typography>
          </Box>
          {/* description */}
          <Box>
            <Typography
              sx={{ color: theme == "light" ? "#4f4f4f" : "txt.three" }}>
              {product?.attributes?.description}
            </Typography>
          </Box>
          {/* 3d card  */}
          <Stack alignItems={"center"} height={700}>
            {/* image atropos */}
            <Stack
              component={Atropos}
              className={"atropos"}
              sx={{
                width: "700px",
                height: "500px",
              }}>
              <Stack className={"atropos-scale"}>
                <Stack className={"atropos-rotate"}>
                  <Stack className={"atropos-inner"}>
                    <img
                      data-atropos-offset='-5'
                      style={{ borderRadius: 15 }}
                      src={
                        import.meta.env.VITE_URL +
                        product?.attributes?.image?.data[0]?.attributes?.url
                      }
                      width={"100%"}
                      height={"100%"}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "12%",
                        left: "7%",
                      }}>
                      <Typography
                        data-atropos-offset='0'
                        data-atropos-opacity='0.2;0.9'
                        sx={{
                          color: "grey",
                          fontSize: "1.5em",
                          fontWeight: "bolder",
                        }}>
                        LOREM
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "8%",
                        left: "7%",
                      }}>
                      <Typography
                        data-atropos-offset='8'
                        sx={{
                          color: "grey",
                          fontSize: "1.5em",
                          fontWeight: "bolder",
                        }}>
                        IPSUM PLACEHOLDER
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            {/* box below the atropos img */}
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              width='100%'
              gap={"400px"}
              sx={{ p: "20px 50px" }}>
              <>
                {/* gallery */}
                <Button
                  sx={{ color: "txt.one" }}
                  size={"large"}
                  onClick={() => setOpen(true)}>
                  GALLERY
                </Button>
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setOpen(false)}
                  aria-describedby='alert-dialog-slide-description'>
                  <DialogTitle>Gallery</DialogTitle>
                  <DialogContent>
                    <DialogContentText id='alert-dialog-slide-description'>
                      <Stack
                        justifyContent={"center"}
                        direction={'roe'}
                        p={"5px"}
                        gap={"10px"}
                        flexWrap={'wrap'}
                        >
                        {imageGallery}
                      </Stack>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setOpen(false)}>Thanks</Button>
                  </DialogActions>
                </Dialog>
              </>
              {/* add/remove from cart */}
              <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
                {quantity && (
                  <CartIcon
                    click={() => dispatch(removeItem(product.id))}
                    icon={
                      quantity == 1 ? (
                        <DeleteRoundedIcon sx={{ fontSize: "2em" }} />
                      ) : (
                        -1
                      )
                    }
                    theme={theme}
                  />
                )}
                {quantity && (
                  <Typography component={"span"} fontSize={"2em"}>
                    {quantity}
                  </Typography>
                )}
                <CartIcon
                  click={() => dispatch(addItem(product))}
                  icon={
                    !quantity == 0 ? (
                      "+1"
                    ) : (
                      <ShoppingCartRoundedIcon sx={{ fontSize: "2em" }} />
                    )
                  }
                  theme={theme}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      ) : (
        // skeleton
        <Stack justifyContent={"center"} gap={"30px"} sx={{ p: "20px 70px" }}>
          {/* name */}
          <Box>
            <Skeleton
              width={"100px"}
              height={"30px"}
              variant={"rounded"}
              animation={"wave"}
            />
          </Box>
          {/* description */}
          <Stack gap={"5px"}>
            <Skeleton
              width={"100%"}
              height={"30px"}
              variant={"rounded"}
              animation={"wave"}
            />
            <Skeleton
              width={"100%"}
              height={"30px"}
              variant={"rounded"}
              animation={"wave"}
            />
            <Skeleton
              width={"100%"}
              height={"30px"}
              variant={"rounded"}
              animation={"wave"}
            />
          </Stack>
          {/* 3d card  */}
          <Stack alignItems={"center"} height={700}>
            {/* image atropos */}
            <Stack
              sx={{
                width: "700px",
                height: "500px",
              }}>
              <Skeleton
                width={"100%"}
                height={"100%"}
                variant={"rounded"}
                animation={"wave"}
              />
            </Stack>
            {/* box below the atropos img */}
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              width='100%'
              gap={"400px"}
              sx={{ p: "20px 50px" }}>
              <Skeleton
                width={"100px"}
                height={"30px"}
                variant={"rounded"}
                animation={"wave"}
              />
              {/* add/remove from cart */}
              <Skeleton
                width={"60px"}
                height={"50px"}
                variant={"rounded"}
                animation={"wave"}
              />
            </Stack>
          </Stack>
        </Stack>
      )}
      {/* explore */}
      <SliderProducts
        model={"products"}
        title={"Similar Products"}
        field={"categories"}
        route={`/products/${catId}/${catName}`}
        secondField={"id"}
        value={catId}
        theme={theme}
        operator={"$eq"}
      />
    </>
  );
}
