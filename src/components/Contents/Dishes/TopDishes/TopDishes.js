import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import styled from "styled-components";
import { getCategory } from "../../../../containers/redux/actionType";
import Spinner from "../../../UI/Spinner/Spinner";
import Overlay from "../../../UI/Overlay/Overlay";

const Category = styled.div`
  position: relative;
`;

class TopDishes extends Component {
  state = {
    foods: null,
    error: "",
    spin: true,
  };

  componentDidMount() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => {
        const data = res.data.categories;
        this.setState({ foods: data, spin: false });
      })
      .catch(err => {
        this.setState({ error: err.message });
      });
  }

  getCategories(category) {
    const { categoryFunc } = this.props;
    categoryFunc(category);
  }

  render() {
    let foodsArray = <Spinner show={this.state.spin} />;

    if (this.state.error) {
      foodsArray = (
        <div className="text-center text-danger">
          <p>{this.state.error}</p>
        </div>
      );
    }

    if (this.state.foods) {
      foodsArray = this.state.foods.map(food => (
        <Category
          onClick={() => this.getCategories(food.strCategory)}
          key={food.idCategory}
          className="col-lg-3 col-md-6 mb-3"
        >
          <Overlay>View Category</Overlay>
          <Card>
            <CardImg src={food.strCategoryThumb} alt={food.strCategory} top />
            <CardBody>
              <CardTitle>{food.strCategory}</CardTitle>
            </CardBody>
          </Card>
        </Category>
      ));
    }
    return <div className="row">{foodsArray}</div>;
  }
}

const mapToStateProps = state => {
  return {
    foods: state,
  };
};

const mapToDispatchProps = dispatch => {
  return {
    categoryFunc: val => dispatch(getCategory(val)),
  };
};

export default connect(mapToStateProps, mapToDispatchProps)(TopDishes);
