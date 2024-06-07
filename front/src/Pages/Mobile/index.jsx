import React from "react";
import CardDetail from "../../Components/CardDetail";
import SliderGetKnow from "../../Components/GetKnow";
import SliderProducts from "../../Components/Slider";
import VideoBanner from "../../Components/VideoBanner";

export default function Mobile({ theme }) {
  return (
    <>
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
    </>
  );
}
