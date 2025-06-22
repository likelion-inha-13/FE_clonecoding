import React from "react";
import styled from "styled-components";
import Header from "./components/Header.jsx";
import Home from "./Home.jsx";
import Footer from "./components/Footer.jsx";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f8f9fa;
  margin: 0;
  font-family: sans-serif;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Home />
      <Footer />
    </AppWrapper>
  );
}

export default App;