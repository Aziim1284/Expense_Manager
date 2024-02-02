import React, { useState } from 'react';

import Card from "../UI/Card"
import ExpensesFilter from './ExpensesFilter';

import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props?.items?.filter(expense => {
        
    const expenseDate = new Date(expense?.date);

    return (
        !isNaN(expenseDate.getTime()) && 
        expenseDate.getFullYear().toString() === filteredYear
    );
    });
   const locastorageData = localStorage.getItem("ALLeXpense")
   const parsedExpenseData = JSON.parse(locastorageData)
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                  selected={filteredYear}
                  onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}
export default Expenses;