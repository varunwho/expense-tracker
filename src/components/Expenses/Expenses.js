import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
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
    
    let expensesContent = <p>No Expenses found</p>

    if (filteredExpenses.length > 0) {
        expensesContent = 
        filteredExpenses.map(expense => ( 
            <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} 
            />
        ))
    }
    
    return (
        <Card className='expenses'>
            {/* {[<Card/>, <Card/>,<Card/>]} */}
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}  />
            <Card>{expensesContent}</Card>
        </Card>
    )
}

export default Expenses