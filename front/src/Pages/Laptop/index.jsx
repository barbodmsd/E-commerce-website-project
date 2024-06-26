import React from "react";
import CardDetail from "../../Components/CardDetail";
import SliderGetKnow from "../../Components/GetKnow";
import SliderProducts from "../../Components/Slider";
import VideoBanner from "../../Components/VideoBanner";
import About from "./About";
import { Stack } from "@mui/material";
import { motion } from "framer-motion";

export default function Laptop({ theme }) {
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
        }}>
        {/* video banner */}
        <VideoBanner model={"laptops"} theme={theme} />
        {/* popular laptops */}
        <SliderProducts
          route={"/products/4/laptop"}
          title={"Popular Laptops"}
          theme={theme}
          model={"products"}
          field={"categories"}
          secondField={"id"}
          operator={"$eq"}
          value={"4"}
        />
        {/* get to know */}
        <SliderGetKnow
          model={"laptops"}
          theme={theme}
          title={"Get to know Laptop"}
        />
        {/* about laptop */}
        <About theme={theme} />
        {/* cards details */}
        <CardDetail id={4} theme={theme} />
        {/* explore Laptops */}
        <SliderProducts
          model={"products"}
          field={"categories"}
          secondField={"id"}
          title={"Explore Laptops"}
          operator={"$eq"}
          value={4}
          route={"/products/4/laptop"}
          theme={theme}
        />
      </Stack>
    </>
  );
}
