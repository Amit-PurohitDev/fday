import styled from "styled-components";

export const Maincontent = styled.div`
  width: 100%;
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