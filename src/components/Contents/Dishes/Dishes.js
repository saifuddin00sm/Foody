import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getData, getInitialData } from "../../../containers/redux/actionType";
import SearchBar from "../SearchBar/SearchBar";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { withRouter } from "react-router-dom";
import Spinner from "../../UI/Spinner/Spinner";
import TopDishes from "./TopDishes/TopDishes";
import Overlay from "../../UI/Overlay/Overlay";
import FilterBtns from "./FilterBtns/FilterBtns";

const DishContainer = styled.div`
  position: relative;
`;

const Hr = styled.div`
  border: 1px solid #ff6b81;
  margin: 1.4rem 0rem;
`;

const Dishes = props => {
  const { dishes, fetchedData, category } = props;

  const [state, setState] = useState({
    searchVal: "",
  });

  // Input onChange function
  const inputHandler = e => {
    setState({ searchVal: e.target.value });
  };

  // getting data on search
  const dishValue = val => {
    fetchedData("=" + val);
  };

  // Search input submit handler
  const submitHandler = e => {
    e.preventDefault();
    dishValue(state.searchVal);
  };

  // getting data by category
  const cate = val => {
    category(val);
  };

  // show details via id
  const detailsHandler = id => {
    props.history.push(id);
  };

  let allDish = null;

  if (dishes.loading) {
    allDish = <Spinner show={dishes.loading} />;
  } else if (dishes.error) {
    allDish = <p className="text-center text-danger">{dishes.error}</p>;
  } else {
    if (dishes.dish) {
      allDish = dishes.dish.map(dish => (
        <DishContainer
          className="col-lg-3 col-md-4 mb-3"
          onClick={() => detailsHandler(dish.idMeal)}
          key={dish.idMeal}
        >
          <Overlay>View details</Overlay>
          <Card key={dish.idMeal}>
            <CardImg
              top
              src={dish.strMealThumb}
              alt={dish.strMeal}
              width="100%"
              className="img-fluid"
            />

            <CardBody>
              <CardTitle>
                <strong>{dish.strMeal}</strong>
              </CardTitle>
            </CardBody>
          </Card>
        </DishContainer>
      ));
    }

    if (dishes.dish[0] === "no result") {
      allDish = (
        <div className="text-center text-danger">
          <p>There is no matching result found...!!</p>
        </div>
      );
    }
  }

  return (
    <>
      <div className="container m-auto">
        <SearchBar
          searchSubmit={e => submitHandler(e)}
          inputHandler={event => inputHandler(event)}
          validity={state.searchVal}
        />
        <FilterBtns cateBtn={cate} />
        <div className="row">{allDish}</div>
        <Hr />
        <div>
          <h3 className="mb-3">Checkout our Categories</h3>
          <TopDishes />
        </div>
      </div>
    </>
  );
};

// redux
const mapToStateProps = state => {
  return {
    dishes: state,
  };
};

const mapToDispatchProps = dispatch => {
  return {
    fetchedData: val => dispatch(getData(val)),
    category: ct => dispatch(getInitialData("=" + ct)),
  };
};

export default connect(mapToStateProps, mapToDispatchProps)(withRouter(Dishes));
