import React from "react";
import styled from "styled-components";

const ShowOverlay = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  opacity: 0;
  transition: opacity 0.3s;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 500;
  &:hover {
    opacity: 1;
  }
`;

const Overlay = props => {
  return <ShowOverlay>{props.children}</ShowOverlay>;
};

export default Overlay;
