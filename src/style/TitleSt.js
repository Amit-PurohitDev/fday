import styled from "styled-components";
import expAsset from "../constants";


const logoTitle = `
    font-size: 25px;
    font-family: fantasy;
    letter-spacing: 2px;
    font-variant: small-caps;
    color: #93cfff;
    text-shadow: 0px 0px 10px #000;
`;

export const TitleWrapper = styled.h1`
  color: ${expAsset.colors.darkmode.blue};
  font-size: 30px;
  font-family: sans-serif;
  font-weight: 800;
  letter-spacing: 1px;
  word-spacing: 2px;
`;

export const SubTitleWrapper = styled.h2`
  color: #fff;
  font-size: 24px;
  font-family: sans-serif;
  font-weight: 800;
  letter-spacing: 1px;
  word-spacing: 2px;
`;

export const LabelWrapper = styled.div`
  font-family: sans-serif;
  font-size: 12px;
  color: #9e9e9e;
  font-weight: 600;
  display: flex;
  flex-direction: column;
`;

export const TitleLabelWrapper = styled.div`
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 5px;
  color: #dcd3d3;
  ${props => props.logoTitle ? logoTitle : null}
`;

export const ListTitleWrapper = styled.div`
  color: #dcd3d3;
  font-size: 14px;
  font-weight: 600;
`;
