import React from "react";
import Dishes from "./Dishes/Dishes";
import TopDishes from "./Dishes/TopDishes/TopDishes";

const Content = () => {
  return (
    <div>
      <Dishes />
      <div className="container">
        <h3 className="mb-3">Checkout our Categories</h3>
        <TopDishes />
      </div>
    </div>
  );
};

export default Content;
