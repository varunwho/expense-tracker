import React, { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    // const filteredExpenses = props.items.filter(element => {
    //     if((element.date.getYear()+1900).toString() === filteredYear ) {
    //         return element;
    //     }
    //     return null;
    // })

    const filteredExpenses = props.items.filter(expense => {
        // This will return elements who's year equals filteredYear
        return expense.date.getFullYear().toString() === filteredYear;
    })
    
    
    
    return (
        <Card className='expenses'>
            {/* {[<Card/>, <Card/>,<Card/>]} */}
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}  />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses