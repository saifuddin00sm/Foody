import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Spinner from "../../../UI/Spinner/Spinner";
import "./DishDetails.css";

class DishDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishDetails: null,
      spin: true,
    };
  }

  componentDidMount() {
    this.loadedData();
  }
  componentDidUpdate() {
    this.loadedData();
  }

  loadedData() {
    if (this.props.match.params.id) {
      if (
        !this.state.dishDetails ||
        (this.state.dishDetails &&
          this.state.dishDetails[0].idMeal !== this.props.match.params.id)
      ) {
        axios
          .get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`
          )
          .then(res => {
            const data = res.data.meals;
            this.setState({ dishDetails: data, spin: false });
          })
          .catch(err => console.log(err));
      }
    }
  }

  render() {
    let loadedDish = <Spinner show={this.state.spin} />;
    if (this.state.dishDetails) {
      let elements = this.state.dishDetails[0];

      const ingredients = [];

      for (let i = 1; i <= 20; i++) {
        if (elements[`strIngredient${i}`]) {
          ingredients.push(
            `${elements[`strIngredient${i}`]} - ${elements[`strMeasure${i}`]}`
          );
        } else {
          break;
        }
      }

      loadedDish = (
        <>
          <div className="img-container mb-3">
            <img
              src={elements.strMealThumb}
              alt={elements.strMeal}
              width="100%"
              top="true"
            />
          </div>
          <div className="items">
            <h5 className="fw-bold">Name : {elements.strMeal}</h5>
            <h6>Category : {elements.strCategory} </h6>
            <p className="fw-bold large mb-1">Instructions: </p>
            <p>{elements.strInstructions}</p>
            <h6 className="fw-bold">Ingredients :</h6>
            <ul>
              {ingredients.map(ing => (
                <li key={ing}>{ing}</li>
              ))}
            </ul>
          </div>
        </>
      );
    }
    return (
      <div className="container Details">
        <div className="shadow Details-card">{loadedDish}</div>
      </div>
    );
  }
}

export default withRouter(DishDetails);
