import styled from "styled-components";
import expAsset from "../constants";

export const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${ props => props.mode ? expAsset.colors.lightmode.light : expAsset.colors.darkmode.dark };
  overflow: hidden;
`;

export const Homecontent = styled.div`
  width: 77%;
  padding: 1% 2%;
  padding-top: 0;
  height: calc(100vh - 100px);
  overflow: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar{
    display: none;
  }
`;
