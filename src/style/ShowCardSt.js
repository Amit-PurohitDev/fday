import styled from "styled-components";

export const ShowCardWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 20px;
`;

export const CardWrap = styled.div`
  display: grid;
  grid-template-columns: 290px;
  grid-template-rows: 210px ${props => props.state ? 210: 0}px 80px;
  grid-template-areas: "image" "text" "stats";
  font-family: Roboto;
  border-radius: 18px;
  background-color: #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  transition: 0.5s ease;
  cursor: pointer;
`;

export const Cardimage = styled.div`
  grid-area: image;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const Cardcontent = styled.div`
  overflow: hidden;
  grid-area: text;
  margin: 25px;
`;

export const Carddate = styled.span`
  color: #ff2c53;
  font-size: 13px;
`;

export const Cardtitle = styled.h2`
  font-size: 28px;
  margin-bottom: 28px;
  margin-top: 10px;
`;

export const CardText = styled.p`
  font-size: 15px;
  font-weight: 300;
`;

export const CardStats = styled.div`
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: #607d8b;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  color: #ffffff;
  &:nth-child(2){
    border-right:1px solid ;
    border-left:1px solid ;
}
`;

export const Type = styled.div`
  font-weight: 300;
  font-size: 11px;
  text-transform: uppercase;
`;

export const CardValue = styled.div`
  font-weight: 500;
  font-size: 22px;
  sup {
    font-weight: 700;
    font-size: 12px;
  }
`;
