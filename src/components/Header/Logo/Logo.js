import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLogo = styled.div`
  color: white;
  h1 {
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  span {
    color: #ff6b81;
  }
`;
const Logo = () => {
  return (
    <StyledLogo>
      <Link exact="true" to="/">
        <h1 style={{ margin: "0px 15px" }}>
          F<span>oo</span>dy
        </h1>
      </Link>
    </StyledLogo>
  );
};

export default Logo;
