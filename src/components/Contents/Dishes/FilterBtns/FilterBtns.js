import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 5px 25px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-weight: 500;
  font-size: 1rem;
  outline: none;
  background-color: #fff;
  transition: all 0.3s;
  &:hover {
    background-color: #ff6b81;
    color: #fff;
  }
`;

const FilterBtns = props => {
  return (
    <div className="text-center my-4">
      <p>Filter by country</p>
      <Button className="me-2 mb-2" onClick={() => props.cateBtn("Italian")}>
        Italian
      </Button>
      <Button className="me-2 mb-2" onClick={() => props.cateBtn("Canadian")}>
        Canadian
      </Button>
      <Button className="me-2 mb-2" onClick={() => props.cateBtn("Indian")}>
        Indian
      </Button>

      <Button className="me-2 mb-2" onClick={() => props.cateBtn("American")}>
        American
      </Button>
      <Button className="me-2 mb-2" onClick={() => props.cateBtn("Chinese")}>
        Chinese
      </Button>
      <Button className="me-2 mb-2" onClick={() => props.cateBtn("Turkish")}>
        Turkish
      </Button>
      <Button className="me-2 mb-2" onClick={() => props.cateBtn("French")}>
        French
      </Button>
    </div>
  );
};

export default FilterBtns;
