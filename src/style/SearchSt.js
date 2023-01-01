import styled from "styled-components";
import expAsset from "../constants";

export const SearchWrapper = styled.div`
    width: 100%;
    padding: 9px 10px;
    margin-bottom:10px;
    border-radius: 20px;
    user-select: none;
    background-color: #4e5252;
    box-shadow: ${props => props.state ? `3px 0px 2px ${ expAsset.colors.darkmode.blue }`  : "0px 0px 10px #1f1d1d"};
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all .4s;
    img{
        width: 20px;
        cursor: pointer;
        filter:${expAsset.colors.darkmode.blue}
    }
`;

export const Input = styled.input`
    background-color: transparent;
    border: 0;
    outline: none;
    color: #c6c3c3;
    letter-spacing: .5px;
    width: 90%;
    font-weight: 700;
`;