// Import necessary libraries
import React from 'react';

// css
import './ExpenseData.css';

const ExpenseData = (props) => {
    const date = new Date(props.date);

    if (isNaN(date.getTime())) {
        console.error("Invalid date passed to ExpenseData:", props.date);
        return null; 
    }

    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
};

export default ExpenseData;
