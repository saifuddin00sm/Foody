import React from "react";
import styled from "styled-components";
import img from "../assets/banner.jpg";

const StyledBanner = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
    url(${img}) center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 60vh;
  width: 100%;
  /* position: fixed;
  left: 0; */
  text-transform: uppercase;
  color: #fff;
  display: flex;
  flex-direction: column;

  justify-content: center;
  div {
    margin: 0 30px;
    .Banner-text {
      width: 50%;
      line-height: 1.7;
    }
  }

  @media (max-width: 768px) {
    div {
      .Banner-text {
        width: 100%;
        font-size: 0.8rem;
      }
    }
  }
`;

const Banner = () => {
  return (
    <StyledBanner>
      <div>
        <h1>Welcome to the Foody</h1>
        <p className="Banner-text">
          Don't know How to Cook? Well, Your in the right place. We will make
          you a Good chef in a few minutes, you do not need to have any
          experience. our website is better then any cookery books. Let's
          Continue..!
        </p>
      </div>
    </StyledBanner>
  );
};

export default Banner;
