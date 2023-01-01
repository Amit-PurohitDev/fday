import React from "react";
import { LayoutWrapper, MainSection, ContentSection } from "../style/LayoutSt";
import Siderbar from "../components/global/Sidebar";
import Header from "../components/global/Header";
import Home from "../pages/Home";
import Gallary from "../pages/Gallary";
import Profile from "../pages/Profile";
import Users from "../pages/Users";
import { Route, Routes } from 'react-router-dom';
import Chat from "./Chat";

const PageLayout = () => {
  return (
    <LayoutWrapper>
      <Siderbar />
      <MainSection>
        <Header />
        <ContentSection>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={ <Gallary /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/chat" element={ <Chat /> } />
            <Route path="/users" element={ <Users /> } />
          </Routes>
        </ContentSection>
      </MainSection>
    </LayoutWrapper>
  );
};

export default PageLayout;
