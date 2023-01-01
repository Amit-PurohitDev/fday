import React from "react";
import { HomeWrapper } from "../style/HomeSt";
import PageLayout from "../pages/PageLayout";
import Sign from "./sign";

function App() {
  return (
    <div className="App">
      <HomeWrapper mode={0}>
        <Sign />
      </HomeWrapper>
    </div>
  );
}

export default App;
