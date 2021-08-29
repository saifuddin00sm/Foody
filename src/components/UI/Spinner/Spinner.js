import React from "react";
import "./Spinner.css";
import BackDrop from "../BackDrop";

const Spinner = props => {
  return (
    <>
      <div className="LoaderContainer">
        {" "}
        <div className="loader"></div>
      </div>
      <BackDrop show={props.show} />
    </>
  );
};

export default Spinner;
