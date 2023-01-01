import React, { useEffect, useRef, useState } from "react";
import expAsset from "../../constants";
import {
  SliderWrapper,
  Slidbar,
  SliderBtn,
  PrevSlide,
  NextSlide,
} from "../../style/SliderSt";
import {Cards} from "../common/Card";
import { ImageWrap } from "../common/Cta";
import { SubTitle } from "../common/Title";

const slideData = [
  {
    img: expAsset.images.image1,
    title: "Some random text",
    time: "10h",
  },
  {
    img: expAsset.images.image2,
    title: "Some expAsset",
    time: "10h",
  },
  {
    img: expAsset.images.image3,
    title: "Some constants",
    time: "10h",
  },
  {
    img: expAsset.images.Calendar,
    title: "Some Calendar",
    time: "10h",
  },
  {
    img: expAsset.images.pg2,
    title: "Some PageLayout",
    time: "10h",
  },
  {
    img: expAsset.images.pg3,
    title: "Some Faq text",
    time: "10h",
  },
  {
    img: expAsset.images.pg4,
    title: "Some Library",
    time: "10h",
  },
  {
    img: expAsset.images.pg5,
    title: "Social text",
    time: "10h",
  },
];

const Slider = () => {
  var x = 0;
  var y = 0;
  const [cardWidth, setCardWidth] = useState(0);
  const slidebar = useRef();
  const slidewrap = useRef();

  const onPrev = (e) => {
    let itemWidth = slidebar.current.children[0].getBoundingClientRect().width;
    let itemSlid = slidebar.current;
    itemSlid.style.transform = `translateX( ${-(x += itemWidth + 20)}px)`;
    y = x;
    console.log(slidebar.current.children[0].offsetLeft);
  };

  const onNext = () => {
    let itemWidth = slidebar.current.children[0].getBoundingClientRect().width;
    let itemSlid = slidebar.current;
    itemSlid.style.transform = `translateX( ${-(y -= itemWidth + 20)}px)`;
    x = y;
  };

  useEffect(() => {
    setCardWidth(
      Math.floor(slidewrap.current.getBoundingClientRect().width / 3 - 20)
    );
  }, []);

  return (
    <>
      <SliderBtn>
        <PrevSlide onClick={onPrev}><ImageWrap icon={true} img={expAsset.icons.Arrow} wid="25" height="50" /></PrevSlide>
        <NextSlide onClick={onNext}><ImageWrap icon={true} img={expAsset.icons.Arrow} wid="25" height="50" /></NextSlide>
      </SliderBtn>
      <SubTitle SubTitle="Most viewed channel"/>
      <SliderWrapper
            ref={slidewrap}>
        <Slidbar ref={slidebar}>
          {slideData.map((items, idx) => {
            return (
              <Cards
                wid={cardWidth}
                key={idx}
                img={items.img}
                title={items.title}
                time={items.time}
              />
            );
          })}
        </Slidbar>
      </SliderWrapper>
    </>
  );
};

export default Slider;
