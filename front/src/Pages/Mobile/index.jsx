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
        <VideoBanner model={"mobiles"} theme={theme} />
        {/* popular laptops */}
        <SliderProducts
          route={"/products/2/mobile"}
          title={"Popular Mobiles"}
          theme={theme}
          model={"products"}
          field={"categories"}
          secondField={"id"}
          operator={"$eq"}
          value={"2"}
        />
        {/* get to know */}
        <SliderGetKnow
          model={"mobiles"}
          theme={theme}
          title={"Get to know Mobile"}
        />
        {/* cards details */}
        <CardDetail id={2} theme={theme} />
        {/* explore  */}
        <SliderProducts
          model={"products"}
          field={"categories"}
          secondField={"id"}
          title={"Explore Mobiles"}
          operator={"$eq"}
          value={2}
          route={"/products/2/mobile"}
          theme={theme}
        />
      </Stack>
    </>
  );
}
