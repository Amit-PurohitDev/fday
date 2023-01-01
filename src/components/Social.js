import React from "react";
import {
  SocialWrapper,
  SocialHeader,
  ListItem,
  ListContent,
  InnerWrap,
} from "../style/SocialSt";
import Search from '../components/Search';
import { ImageWrap, Next } from "./common/Cta";
import { ListSubTitle } from "./common/Title";
import expAsset from "../constants";
import Connects from "./Connect";

const OnlineData = [
  {
    name: "Ant-Man",
    src: expAsset.images.Profilepic,
  },
  {
    name: "Black Panther",
    src: expAsset.images.Profilepic,
  },
  {
    name: "Captain America",
    src: expAsset.images.Profilepic,
  },
  {
    name: "Deadpool",
    src: expAsset.images.Profilepic,
  },
  {
    name: "Doctor Strange",
    src: expAsset.images.Profilepic,
  },
  {
    name: "Hulk",
    src: expAsset.images.Profilepic,
  },
  //   {
  //     name: "Iron Man",
  //     src: expAsset.images.Profilepic,
  //   },
  //   {
  //     name: "Thor",
  //     src: expAsset.images.Profilepic,
  //   },
  //   {
  //     name: "Peter Parker",
  //     src: expAsset.images.Profilepic,
  //   },
];

const Social = () => {
  return (
    <SocialWrapper>
      <InnerWrap>
        <Search />
        <SocialHeader>
          <ListSubTitle title="Social" />
          <Next icon={true} wid="20" height="20" />
        </SocialHeader>
        <div>
          {OnlineData.map((item, idx) => {
            return (
              <ListItem key={idx}>
                <ImageWrap
                  wid="40"
                  height="40"
                  alt="profile"
                  rad="10"
                  img={expAsset.images.Profilepic}
                />
                <ListContent>
                  <p>{item.name}</p>
                  <p>{item.name}</p>
                </ListContent>
              </ListItem>
            );
          })}
        </div>
      </InnerWrap>
      <Connects />
    </SocialWrapper>
  );
};

export default Social;
