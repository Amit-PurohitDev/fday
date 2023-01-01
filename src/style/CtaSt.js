import styled from "styled-components";
import expAsset from "../constants";

const Mixins = `
    width: 40px;
    height: 40px;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4e5252;
`;

export const CtaWrapper = styled.div`
  ${Mixins}
  img {
    width: 20px;
    filter: ${ props => props.mode ? expAsset.colors.lightmode.svg : expAsset.colors.darkmode.svg};
  }
`;

export const ProfileWrapper = styled.div`
  ${Mixins}
  img {
    width: 100%;
    height: 100%;
  }
`;

export const TabWrapper = styled.div`
  padding: 2px 10px;
  background-color: #ab0423;
  display: inline-block;
  border-radius: 5px;
  color: #fff;
  width: 54px;
`;

export const NextWprapper = styled.div`
  width: ${props => props.wid + "px"};
  height: ${props => props.height + "px"};
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: ${props => props.icon ? expAsset.colors.lightmode.svg : "unset"};
  }
`;

export const StatusWrapper = styled.div`
    color:  ${props => props.colurs ? "#2196f3" : "#9E9E9E"};
    border: 2px solid ${props => props.colurs ? "#2196f3" : "#9E9E9E"};
    display: flex;
    padding: 5px 0;
    width: ${props => props.colurs ? '90px' : '100px' };
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: ${props => props.colurs ? 'unset' : 'pointer' };
    user-select: none;
`;

export const CtaSlideWrapper = styled.div`
  background-color: #747476;
  padding: 5px;
  border-radius: 10px;
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  div{
    color: #fff;
    font-size: 10px;
    font-weight: 600;
    padding-left: 5px;
    font-family: sans-serif;
    letter-spacing: .5px;
  }

  div:nth-child(2) {
    font-weight: unset;
    background:  ${props => props.mode ? expAsset.colors.darkmode.tab : expAsset.colors.lightmode.tab};
    padding: 10px 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #8958fd;
    color: #fff;
  }
`;

export const Line = styled.div`
  width: ${props => props.wid+"%"};
  height: ${props => props.hght+"px"};
  background-color: ${props => props.color};
`;

export const Imgwrapper = styled.div`
    width: ${props => props.width + 'px'};
    height: ${props => props.width + 'px'};
    border-radius: ${props => props.rad + 'px'};
    overflow: hidden;
    margin-right: 10px;
    img{
        width: 100%;
        height: 100%;
        filter: ${props => props.icon ? expAsset.colors.lightmode.svg : "unset"};
    }
`;