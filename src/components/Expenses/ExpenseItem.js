import Card from "../UI/Card";
import React from 'react';

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
    return (
        <Card className="expence-item">
            <ExpenseDate date={props.date} />
            <div className="expence-item_description">
                <h2>{props.title}</h2>
                <div className="expence-item_price">${props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;