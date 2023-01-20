// import ExpenseItem from "./components/ExpenseItem";
import React, { useState } from "react";
// import Chart from "./components/Chart/Chart";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet paper',
    amount: 94.12,
    date: new Date(2023, 10, 1),
  },
  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 104.66,
    date: new Date(2021, 1, 2),
  },
  {
    id: 'e3',
    title: 'School Payment',
    amount: 405.12,
    date: new Date(2022, 4, 3),
  },
  {
    id: 'e4',
    title: 'DSTv Payment',
    amount: 245.12,
    date: new Date(2023, 8, 3),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };
  // return React.createElement('div', {},
  //   React.createElement('h2', {}, "Let go..."),
  //   React.createElement(Expenses, { items: expences })
  // )


  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      {/* <Chart /> */}
    </>
  );
}


export default App;