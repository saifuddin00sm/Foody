import React from "react";
import styled from "styled-components";

const MenuBtn = styled.div`
  width: 35px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
  display: none;

  div {
    width: 90%;
    height: 4px;
    background-color: #fff;
    margin-bottom: 5px;
  }

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const Humburger = props => {
  return (
    <MenuBtn onClick={props.openSideDrawer}>
      <div></div>
      <div></div>
      <div></div>
    </MenuBtn>
  );
};

export default Humburger;
