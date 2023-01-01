import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Section = styled.div`
    margin-bottom: 4%;
`;

export const MainSection = styled.div`
  width: 95%;
`;

export const ContentSection = styled.div`
  display: flex;
  width: 100%;
`;

export const Maincontent = styled.div`
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
