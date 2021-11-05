import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpenses/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 100,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 85000, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 25000,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 10000,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    //Better way to update when the state is dependent on previous states (Scheduling in React)
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
  }
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;