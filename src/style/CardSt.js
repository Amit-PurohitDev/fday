import styled from "styled-components";
import expAsset from "../constants";

export const CardWrapper = styled.div``;

export const CardImage = styled.div`
  width: ${(props) => props.wid + "px"};
  height: 150px;
  border-radius: 20px;
  background-color: bisque;
  margin-bottom: 10px;
  scroll-snap-align: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardTitle = styled.p`
  color: #bcbcbc;
  font-size: 14px;
  font-family: ui-sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
`;

export const CardTime = styled.p`
  color: #aeaeae;
  font-size: 10px;
  font-family: ui-sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
`;

export const ProCard = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  padding: 3%;
  box-shadow: 0px 0px 10px #000;
  text-align: center;
  /* background: linear-gradient(
    48deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(29, 147, 145, 1) 100%
  ); */
  margin-top: 20px;
  gap: 30px;
`;

export const Protitle = styled.div`
  color: ${expAsset.colors.darkmode.blue};
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
`;

export const ProPara = styled.div`
  color: ${expAsset.colors.darkmode.blue};
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
  line-height: 1.4;
  letter-spacing: 0.4px;
  word-spacing: 1px;
`;

export const ConSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Sect = styled.div`
  width: 50%;
  color: ${expAsset.colors.darkmode.grey};
  font-size: 12px;
  font-weight: 600;
  p:nth-child(1) {
    color: ${expAsset.colors.darkmode.text};
    font-size: 15px;
    font-weight: 500;
  }
  p:nth-child(2) {
    padding: 5px 0;
  }
  p:nth-child(3) {
  }
`;

export const ConIntrest = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 67px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20px;
  margin: 20px;
  position: relative;
  &::after{
    content: '';
    border: 2px solid ${expAsset.colors.darkmode.svg};
    width: 50px;
    height: 50px;
    position: absolute;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0px 0px 10px ${expAsset.colors.darkmode.blue};
    margin: 10% 6%;
    }
    div{
      margin: 0 !important;
    }
  img{
    filter: ${expAsset.colors.darkmode.svg};
  }
`;
