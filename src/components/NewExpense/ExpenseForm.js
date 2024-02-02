import React, { useState } from "react";

// import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  // storing exact time
  const padZero = (value) => (value < 10 ? `0${value}` : value);
  const currentDate = new Date();
  const hours = padZero(currentDate.getHours());
  const minutes = padZero(currentDate.getMinutes());
  const seconds = padZero(currentDate.getSeconds());

  // Create a string representation of the time
  const timeString = `${hours}:${minutes}:${seconds}`;
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      time: timeString,
    };
    props.onSaveExpenseData(expenseData);
    const existingExpensesJSON =localStorage.getItem("ALLeXpense");
    const existingExpenses = existingExpensesJSON ? JSON.parse(existingExpensesJSON) : [];
    const updatedExpenses = Array.isArray(existingExpenses) ? existingExpenses : [];
    
    // Add the new expense to the array
    updatedExpenses.push(expenseData);

    localStorage.setItem("ALLeXpense", JSON.stringify(updatedExpenses));
      
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onSaveExpenseData(updatedExpenses);
  };

  return (
    <div className="m-4 flex flex-col justify-center items-center absolute">
      <div className=" flex flex-col justify-center items-center shadow-slate-400 shadow-inner py-3 px-3 inset-0 backdrop-filter backdrop-blur-lg">
        <h1 className="text-center font-bold  py-4 text-2xl text-white">Expense Form</h1>
        <div className="new-expense__control ">
          <input
            placeholder="Expense Name"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            className="outline-none shadow-lg shadow-slate-600 m-1 p-3 rounded-md"
          />
        </div>
        <div className="new-expense__control">
          <input
            placeholder="Amount Invested"
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            className="outline-none shadow-lg shadow-slate-600 m-1 p-3 rounded-md"
          />
        </div>
        <div className="new-expense__control">
          <input
            placeholder="Date"
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            className="outline-none shadow-lg shadow-slate-600 m-1 p-3 w-[275px]  rounded-md"
          />
        </div>

        <div className="flex gap-20">
          <button
            onClick={props.onCancel}
            className="bg-red-500 text-white p-3 rounded-md my-1"
          >
            Cancel
          </button>
          <button
            onClick={submitHandler}
            className="bg-green-700 text-white p-3 rounded-md my-1"
          >
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};
export default ExpenseForm;
