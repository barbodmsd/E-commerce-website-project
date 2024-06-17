import React from "react";
import CardDetail from "../../Components/CardDetail";
import SliderGetKnow from "../../Components/GetKnow";
import SliderProducts from "../../Components/Slider";
import VideoBanner from "../../Components/VideoBanner";
import { motion } from "framer-motion";

export default function Mobile({ theme }) {
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
        <VideoBanner model={"watches"} theme={theme} />
        {/* popular laptops */}
        <SliderProducts
          route={"/products/3/watch"}
          title={"Popular Watches"}
          theme={theme}
          model={"products"}
          field={"categories"}
          secondField={"id"}
          operator={"$eq"}
          value={"3"}
        />
        {/* get to know */}
        <SliderGetKnow
          model={"watches"}
          theme={theme}
          title={"Get to know Watches"}
        />
        {/* cards details */}
        <CardDetail id={3} theme={theme} />
        {/* explore  */}
        <SliderProducts
          model={"products"}
          field={"categories"}
          secondField={"id"}
          title={"Explore Watches"}
          operator={"$eq"}
          value={3}
          route={"/products/3/watch"}
          theme={theme}
        />
      </Stack>
    </>
  );
}
