import React, { useState } from "react";
import "./FilterBtn.css";

const FilterBtns = props => {
  const [btnState, setBtnState] = useState({
    activeBtn: null,
    btns: [
      { id: 1, btnText: "Italian" },
      { id: 2, btnText: "Canadian" },
      { id: 3, btnText: "Indian" },
      { id: 4, btnText: "American" },
      { id: 5, btnText: "Chinese" },
      { id: 6, btnText: "Turkish" },
      { id: 7, btnText: "French" },
    ],
  });

  const filterBtn = (val, index) => {
    setBtnState({ ...btnState, activeBtn: btnState.btns[index] });
    props.cateBtn(val);
  };

  const toggleActiveBtn = index => {
    if (btnState.btns[index] === btnState.activeBtn) {
      return "active";
    }
  };

  return (
    <div className="text-center my-4">
      <p>Filter by country</p>
      {btnState.btns.map((btn, index) => (
        <button
          key={btn.id}
          className={`${toggleActiveBtn(index)} me-3 mb-2 FilterBtn`}
          onClick={() => filterBtn(btn.btnText, index)}
        >
          {btn.btnText}
        </button>
      ))}
    </div>
  );
};

export default FilterBtns;
