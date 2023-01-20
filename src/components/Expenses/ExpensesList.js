import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";


const ExpensesList = props => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list_fallback">Found no expences.</h2>
    }

    return (<ul className="expense-list">
        {props.items.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />
        ))}
    </ul>)
};

export default ExpensesList;