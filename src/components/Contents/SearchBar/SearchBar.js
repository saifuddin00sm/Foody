import React from "react";
import { InputGroup, Input, Button, InputGroupAddon } from "reactstrap";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 50%;
  margin: 10px auto;
  margin-top: 40px;
`;

const SearchBar = props => {
  return (
    <StyledDiv>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <InputGroup>
          <Input
            className="shadow-none outline-none"
            onChange={props.inputHandler}
            value={props.val}
            placeholder="Search for Your Favorite Food"
          />
          <InputGroupAddon addonType="append">
            <Button
              type="submit"
              onClick={props.searchSubmit}
              color="primary"
              disabled={!props.validity}
            >
              Search
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </form>
    </StyledDiv>
  );
};

export default SearchBar;
