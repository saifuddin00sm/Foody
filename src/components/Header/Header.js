import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Logo from "./Logo/Logo";
import Humburger from "./Humburger/Humburger";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: black;
  color: #fff;

  @media (max-width: 768px) {
    nav {
      display: none;
    }
  }
`;

const Header = props => {
  return (
    <header>
      <StyledHeader>
        <Humburger openSideDrawer={props.openSideDrawer} />
        <Logo />
        <nav>
          <Navbar />
        </nav>
      </StyledHeader>
    </header>
  );
};

export default Header;
