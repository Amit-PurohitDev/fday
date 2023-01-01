import styled from "styled-components";
import expAsset from "../constants";

export const ProBannerWrap = styled.div`
  width: 100%;
  box-shadow: 0px 0px 10px #000;
  background: linear-gradient(48deg, rgba(0,0,0,1) 0%, rgba(29,147,145,1) 100%);
  display: flex;
  align-items: center;
  padding: 5%;
  margin-top: 20px;
`;

export const ProBannerContent = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const ProBannerDetail = styled.div``;

export const ProBanImg = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  border: 3px solid ${expAsset.colors.darkmode.blue};
  box-shadow: 0px 0px 10px ${expAsset.colors.darkmode.dark};
  margin-right: 5%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ProBanName = styled.div``;

export const ProText = styled.div`
  color: ${expAsset.colors.darkmode.blue};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 3px 0;
  font-size: 26px;
  &:nth-child(1) {
    font-size: 20px;
  }
  &:nth-child(2) {
    font-weight: 600;
  }
  &:nth-child(3) {
    color: #8bc34a;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 2px;
    word-spacing: 3px;
  }
`;
