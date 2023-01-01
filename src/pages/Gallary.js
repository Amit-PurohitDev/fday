import React from "react";
import ShowCard from "../components/common/ShowCard";
import { Title } from "../components/common/Title";
import expAsset from "../constants";
import { Maincontent } from "../style/Common";
import { ShowCardWrap } from "../style/ShowCardSt";

const CardData = [
  {
    date: "4 days ago",
    title: "Post One",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus, maiores adipisci commodi",
    value1: 4,
    type1: "Read",
    value2: 5312,
    type2: "Views",
    value3: 32,
    type3: "Comments",
    image: expAsset.images.image1,
  },
  {
    date: "10 days ago",
    title: "Post Two",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus, maiores adipisci commodi",
    value1: 9,
    type1: "Read",
    value2: 1312,
    type2: "Views",
    value3: 33,
    type3: "Comments",
    image: expAsset.images.image2,
  },
  {
    date: "24 days ago",
    title: "Post Three",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus, maiores adipisci commodi",
    value1: 20,
    type1: "Read",
    value2: 9312,
    type2: "Views",
    value3: 34,
    type3: "Comments",
    image: expAsset.images.image3,
  },
  {
    date: "24 days ago",
    title: "Post Three",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus, maiores adipisci commodi",
    value1: 20,
    type1: "Read",
    value2: 9312,
    type2: "Views",
    value3: 34,
    type3: "Comments",
    image: expAsset.images.image3,
  },
  {
    date: "24 days ago",
    title: "Post Three",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus, maiores adipisci commodi",
    value1: 20,
    type1: "Read",
    value2: 9312,
    type2: "Views",
    value3: 34,
    type3: "Comments",
    image: expAsset.images.image3,
  },
];

const Gallery = () => {
  return (
    <Maincontent>
        <Title title="Gallery" />
      <ShowCardWrap>
        {CardData.map((item, idx) => {
          return <ShowCard data={item} key={idx} />;
        })}
      </ShowCardWrap>
    </Maincontent>
  );
};

export default Gallery;
