import styled from "styled-components";
import expAsset from "../constants";

export const SidebarWrapper = styled.div`
  min-width: 65px;
  height: 100%;
  border-right: 1px solid
    ${(props) =>
      props.mode
        ? expAsset.colors.lightmode.grey
        : expAsset.colors.darkmode.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const List = styled.ul`
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    border-radius: 10px;
    margin: 25px 0;
    user-select: none;
    overflow: hidden;
    cursor: pointer;
    a {
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 20px;
        filter: ${(props) =>
          props.mode
            ? expAsset.colors.lightmode.svg
            : expAsset.colors.darkmode.svg};
      }
    }
    a.active {
      background-color: ${expAsset.colors.darkmode.blue};
      transition: 0.3s;
      /* &::after{
        height: 42px;
        position: absolute;
        width: 3px;
        background-color: #93cfff;
        content: '';
        left: 63px;
        transition: all .3s;
      } */
      img {
        width: 20px;
        transition: 0.3s;
        filter: ${(props) =>
          props.mode
            ? expAsset.colors.lightmode.activeSvg
            : expAsset.colors.darkmode.activeSvg};
      }
    }
  }
`;

export const Dash = styled.div`
  height: ${props => props.height+"px"};
  width: 4px;
  background-color: #93cfff;
  position: absolute;
  right: -2px;
  top: ${props => props.top+"px"};
  transition:.2s;
`;
