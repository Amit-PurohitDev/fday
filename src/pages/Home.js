import React from "react";
import { Section } from "../style/LayoutSt";
import Banner from "../components/common/Banner";
import Slider from "../components/global/Slider";
import Library from "../components/Library";
import Social from "../components/Social";
import { Homecontent } from "../style/HomeSt";

function Home() {
  return (
    <>
    <Homecontent>
      <Section>
        <Banner />
      </Section>
      <Section>
        <Slider />
      </Section>
      <Section>
        <Library />
      </Section>
    </Homecontent>
    <Social />
    </>
  );
}

export default Home;
