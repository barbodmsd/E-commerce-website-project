import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import fetchData from "../../Utils/fetchData";
import { Link, useParams } from "react-router-dom";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CardSkeleton from "../../Components/CardSkeleton";
import Slider from "@mui/material/Slider";
import { ProductCards } from "../Products";

export default function Search({ theme }) {
  const [products, setProducts] = useState();
  const [sortBy, setSortBy] = useState("createdAt:desc");
  const [open, setOpen] = useState(false);
  const [laptop, setLaptop] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [watch, setWatch] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [popular, setPopular] = useState(false);
  const { catId, catName } = useParams();
  const [filterPrice, setFilterPrice] = useState([0, 1500]);
  const { query } = useParams();
  console.log({query})
  // slider
  function valuetext(value) {
    return `$${value}`;
  }
  const minDistance = 10;
  // sort input
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setFilterPrice([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setFilterPrice([clamped - minDistance, clamped]);
      }
    } else {
      setFilterPrice(newValue);
    }
  };
  // get products from data
  useEffect(() => {
    (async () => {
      const res = await fetchData(
        `products?populate=*&sort=${sortBy}&${laptop && `filters[categories][id][$eq]=4`}&${
          mobile && `filters[categories][id][$eq]=2`
        }&${watch && `filters[categories][id][$eq]=3`}&${
          discount && `filters[discount][$gt]=0`
        }&${popular && `filters[popular][$eq]=true`}&filters[price][$lte]=${
          filterPrice[1]
        }&filters[price][$gte]=${
          filterPrice[0]
        }&filters[name][$containsi]=${query}&pagination[page]=1&pagination[pageSize]=50`
      );
      setProducts(res);
    })();
  }, [
    sortBy,
    laptop,
    mobile,
    watch,
    discount,
    popular,
    catName,
    catId,
    query,
    filterPrice,
  ]);
  const items = products?.map((e, index) => (
    <ProductCards
      key={index}
      name={e.attributes?.name}
      id={e.id}
      description={e.attributes?.description}
      price={e.attributes?.price}
      theme={theme}
      discount={e.attributes?.discount}
      img={
        import.meta.env.VITE_URL + e.attributes?.image?.data[0]?.attributes?.url
      }
    />
  ));
 
  return (
    <>
      {products ? (
        <Stack
          width={"100%"}
          justifyContent={"center"}
          gap={"50px"}
          sx={{
            m: "30px auto",
            px: "70px",
          }}>
          {/* titles */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"30px"}
            flexWrap={"wrap"}>
            {/* products text */}
            <Typography
              color={"txt.two"}
              fontSize={"2em"}
              fontWeight={"bolder"}>
              Result Search
            </Typography>
            {/* sort and filter */}
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={"50px"}
              flexWrap={"wrap"}>
              {/* sort */}
              <Box sx={{ width: 250 }}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>SortBy</InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={sortBy}
                    label='sortBy'
                    onChange={handleSortChange}>
                    <MenuItem value={"price:desc"}>Price (Hight-Low)</MenuItem>
                    <MenuItem value={"price:asc"}>Price (Low-Hight)</MenuItem>
                    <MenuItem value={"discount:desc"}>Most Discount</MenuItem>
                    <MenuItem value={"createdAt:desc"}>Newest</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {catName == "laptop" ? (
                ""
              ) : catName == "mobile" ? (
                ""
              ) : catName == "watch" ? (
                ""
              ) : (
                <>
                  {/* filter */}
                  <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    sx={{
                      width: "100px",
                      height: "50px",
                      borderRadius: "10px",
                      boxShadow:
                        theme == "light"
                          ? "0 0px 1px 1px rgba(0,0,0,0.3)"
                          : "0 0px 1px 1px rgba(255,255,255,0.2)",
                    }}>
                    <Button
                      onClick={() => setOpen(true)}
                      sx={{
                        py: "14px",
                        color: theme == "light" ? "#4f4f4f" : "txt.three",
                      }}
                      startIcon={
                        <FilterListRoundedIcon sx={{ color: "txt.one" }} />
                      }
                      color='inherit'>
                      Filters
                    </Button>
                  </Stack>
                  {/* drawer for filter */}
                  <Drawer
                    anchor={"top"}
                    open={open}
                    onClose={() => setOpen(false)}>
                    <Stack p={"30px 50px"} height={"400px"}>
                      <Stack>
                        <Typography fontSize={"2rem"} fontWeight='bolder'>
                          Filters
                        </Typography>
                        <Divider />
                        {/* categories chips */}
                        <Stack
                          direction={"row"}
                          gap={"20px"}
                          alignItems={"center"}
                          flexWrap={"wrap"}
                          py={"10px"}>
                          <Typography fontWeight={"bolder"}>
                            Categories:
                          </Typography>
                          <Chip
                            label='Laptop'
                            color={laptop ? "primary" : "error"}
                            onClick={() => setLaptop(!laptop)}
                            variant={laptop ? "filled" : "outlined"}
                          />
                          <Chip
                            label='Mobile'
                            color={mobile ? "primary" : "error"}
                            onClick={() => setMobile(!mobile)}
                            variant={mobile ? "filled" : "outlined"}
                          />
                          <Chip
                            label='watch'
                            color={watch ? "primary" : "error"}
                            onClick={() => setWatch(!watch)}
                            variant={watch ? "filled" : "outlined"}
                          />
                        </Stack>
                        <Divider />
                        {/* popular chips */}
                        <Stack
                          direction={"row"}
                          gap={"20px"}
                          alignItems={"center"}
                          py={"10px"}>
                          <Typography fontWeight={"bolder"}>
                            Popular:
                          </Typography>
                          <Chip
                            label={popular ? "Yes" : "No"}
                            color={popular ? "success" : "error"}
                            onClick={() => setPopular(!popular)}
                            variant={popular ? "filled" : "outlined"}
                          />
                        </Stack>
                        <Divider />
                        {/* discount chips */}
                        <Stack
                          direction={"row"}
                          gap={"20px"}
                          alignItems={"center"}
                          py={"10px"}>
                          <Typography fontWeight={"bolder"}>
                            Discount:
                          </Typography>
                          <Chip
                            label={discount ? "Yes" : "No"}
                            color={discount ? "success" : "error"}
                            onClick={() => setDiscount(!discount)}
                            variant={discount ? "filled" : "outlined"}
                          />
                        </Stack>
                        <Divider />
                        {/* slider */}
                        <Stack
                          direction={"row"}
                          gap={"20px"}
                          alignItems={"center"}
                          py={"10px"}>
                          <Typography fontWeight={"bolder"}>Price:</Typography>
                          <Box sx={{ width: 300 }}>
                            <Slider
                              getAriaLabel={() => "Minimum distance shift"}
                              value={filterPrice}
                              onChange={handleChange2}
                              valueLabelDisplay='auto'
                              getAriaValueText={valuetext}
                              disableSwap
                              step={100}
                              marks
                              min={0}
                              max={1500}
                            />
                          </Box>
                        </Stack>
                        <Divider />
                      </Stack>
                    </Stack>
                  </Drawer>
                </>
              )}
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            gap={"20px"}
            flexWrap={"wrap"}>
            {items}
          </Stack>
        </Stack>
      ) : (
        <CardSkeleton />
      )}
    </>
  );
}
