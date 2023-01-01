import styled from "styled-components";

export const Slidbar = styled.div`
  display: flex;
  gap: 20px;
  transition: all 0.4s;
  position: relative;
`;

export const PrevSlide = styled.button`
  cursor: pointer;
  transform: rotate(180deg);
  border: 0;
  background-color: transparent;
`;

export const NextSlide = styled.button`
  cursor: pointer;
  border: 0;
  background-color: transparent;
`;

export const SliderBtn = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 14%;
    float: right;
    margin: 10px;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
  margin: 0 auto;
  padding: 10px 20px;
  margin-left: -10px;
  scroll-snap-type: x mandatory;
  user-select: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
