import React, { useState } from "react";
import { CardWrap, Cardimage, Cardcontent, Carddate, Cardtitle, CardText, CardStats, Stats, Type, CardValue } from "../../style/ShowCardSt";

const ShowCard = (props) => {
    const rs = props.data;
    const [expand, setExpand] = useState(false);
  
    const expands = () => {
      setExpand(!expand);
      console.log(expand);
    };
  return (
      <CardWrap onClick={expands} state={expand}>
        <Cardimage img={rs.image}/>
        <Cardcontent state={expand}>
          <Carddate>{ rs.date }</Carddate>
          <Cardtitle>{ rs.title }</Cardtitle>
          <CardText>{ rs.text }</CardText>
        </Cardcontent>
        <CardStats>
          <Stats>
            <CardValue>
              { rs.value1 }<sup>m</sup>
            </CardValue>
            <Type>{ rs.type1 }</Type>
          </Stats>
          <Stats>
            <CardValue>{ rs.value2 }</CardValue>
            <Type>{ rs.type2 }</Type>
          </Stats>
          <Stats>
            <CardValue>{ rs.value3 }</CardValue>
            <Type>{ rs.type3 }</Type>
          </Stats>
        </CardStats>
      </CardWrap>
  );
};

export default ShowCard;
