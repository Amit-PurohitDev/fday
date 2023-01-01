import styled from "styled-components";
import expAsset from "../constants";

const Mixins = `
    font-family: sans-serif;
    font-size: 12px;
    color: #9e9e9e;
    font-weight: 600;
    display: flex;
    flex-direction: column;
`;

export const LibraryWrapper = styled.div`
    border: 1px solid ${ props => props.mode ?  expAsset.colors.lightmode.grey : expAsset.colors.darkmode.grey };
    width: 50%;
    padding: 20px;
    border-radius: 25px;
    background: ${ props => props.mode ?  expAsset.colors.lightmode.highlight : expAsset.colors.darkmode.highlight };
`;

export const BottomSection = styled.div`
    height: 170px;
    overflow: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
`;

export const SubTitleWrapper = styled.div`
    color: #dcd3d3;
    font-size: 14px;
    font-weight: 600;
`;

export const  TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    img{
        cursor: pointer;
        filter: ${props => props.icon ? expAsset.colors.lightmode.svg : "unset"};
    }
`;

export const  Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    span:first-child{
        font-family: sans-serif;
        font-size: 14px;
        font-weight: 600;
        padding-bottom: 5px;
    }
    span:last-child{
        ${Mixins};
    }
`;

export const  LibRow = styled.div`
    display: flex;
    justify-content: space-between;
    color: #dcd3d3;
    align-items: center;
    margin-bottom: 10px;
`;

export const  LibImg = styled.div`
    display: flex;
    flex: 2;
`;

export const  LibTime = styled.div`
    justify-content: center;
    ${Mixins}
    flex: 1;
    span:first-child{
        padding-bottom: 5px;
    }
`;

export const  LibCta = styled.div`
    ${Mixins}
    display: inline-block;
    flex: 1;
`;

