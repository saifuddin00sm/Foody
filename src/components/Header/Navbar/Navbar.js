import React from "react";
import styled from "styled-components";
import NavItems from "./NavItems/NavItems";

const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 10px;
  a {
    text-decoration: none;
    padding: 0px 15px;
  }
`;

const Navbar = props => {
  return (
    <Navigation>
      <NavItems exact="true" link="/">
        Home
      </NavItems>
      <NavItems link="/about">About</NavItems>
      <NavItems link="/blogs">Blogs</NavItems>
    </Navigation>
  );
};

export default Navbar;
