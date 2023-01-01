import styled from "styled-components";
import expAsset from "../constants";

export const SocialWrapper = styled.div`
    width: 21%;
    border: 1px solid ${ props => props.mode ?  expAsset.colors.lightmode.grey : expAsset.colors.darkmode.grey };
    background: ${ props => props.mode ?  expAsset.colors.lightmode.rgb : expAsset.colors.darkmode.rgb };
    border-radius: 26px;
    position: relative;
`;

export const SocialHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ListContent = styled.div`
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: .5px;
    p:last-child{
        color: #c1c1c1;
        font-size: 11px;
    }
`;

export const InnerWrap = styled.div`
    padding: 20px;
`;
export const ListItem = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 10px 0;
`;