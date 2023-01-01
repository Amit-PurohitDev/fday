import styled from "styled-components";
import expAsset from "../constants";

export const ContentWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: baseline;
    input{
        background-color: transparent;
        border: 0;
        outline: none;
        color: #fff;
    }
`;

export const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Section = styled.div`
    padding: 10px 10px 10px 10px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:first-child{
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const ConnectWrapper = styled.div`
    border: 2px solid ${expAsset.colors.darkmode.blue};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    background: ${expAsset.colors.lightmode.highlight};
    position: absolute;
    bottom: 0;
    left: 0px;
    width: 100%;
`;