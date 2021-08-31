import React from "react";
import styled from "styled-components";
import Logo from "../../Logo/Logo";
import Navbar from "../Navbar";
import BackDrop from "../../../UI/BackDrop";

const SideDraw = styled.div`
  background-color: #111;
  width: 300px;
  max-width: 70%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transform: ${prop =>
    prop.condition ? "translateX(0%)" : "translateX(-100%)"};
  transition: 0.4s all;
  z-index: 1220;
  div {
    margin-bottom: 1.4rem;
    padding: 1.3rem 0;
  }
  nav {
    ul {
      flex-direction: column;
      padding-left: 0;
      line-height: 2;
      li {
        font-size: 1.2rem;
      }
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const SideDrawer = props => (
  <>
    <SideDraw condition={props.open} onClick={props.closeSideDrawer}>
      <Logo />
      <nav>
        <Navbar />
      </nav>
    </SideDraw>
    <BackDrop show={props.open} clicked={props.closeSideDrawer} />
  </>
);

export default SideDrawer;
