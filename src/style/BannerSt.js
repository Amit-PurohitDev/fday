import styled from "styled-components";
import expAsset from "../constants";

export const BannerWrapper = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid ${ props => props.mode ?  expAsset.colors.lightmode.grey : expAsset.colors.darkmode.grey };
  border-radius: 30px;
  background: ${ props => props.mode ?  expAsset.colors.lightmode.highlight : expAsset.colors.darkmode.highlight };
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  padding: 20px;
`;

export const RightSection = styled.div``;
