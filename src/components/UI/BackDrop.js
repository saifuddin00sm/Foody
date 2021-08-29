import React from "react";
import styled from "styled-components";

const StyledBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 900;
`;

const BackDrop = props => {
  return props.show ? (
    <StyledBackDrop onClick={props.clicked}></StyledBackDrop>
  ) : null;
};

export default BackDrop;
