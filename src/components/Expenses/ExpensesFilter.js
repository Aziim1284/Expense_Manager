import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="py-3 ">
      <div className=" text-white py-4 px-2 flex justify-between items-center">
        <label className="font-bold">Filter Your Expense by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler} className=" text-black w-1/2 p-3 rounded-md cursor-pointer">
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
