import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css"
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };


    const filteredExpense = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });



    return (

        <>
            <Card className="expences-wrapper">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler} />

                <ExpensesChart expenses={filteredExpense} />
                <ExpensesList items={filteredExpense} />



            </Card>
        </>
    )
}
export default Expenses;