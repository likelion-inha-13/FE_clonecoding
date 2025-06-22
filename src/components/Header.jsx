import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background: white;
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  z-index: 100;
`;

function Header() {
  return (
    <HeaderWrapper>
      <h1>Album example</h1>
    </HeaderWrapper>
  );
}

export default Header;