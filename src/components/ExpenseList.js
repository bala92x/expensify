import React from 'react'
import { connect } from 'react-redux'

import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expensesSelectors'

const renderExpenseListItems = (expenses) => {
    if (expenses.length > 0) {
        return expenses.map((expense) => (
            <ExpenseListItem key={expense.id} {...expense} />
        ))
    } else {
        return <p>No expenses found.</p>
    }
} 

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {renderExpenseListItems(props.expenses)}
    </div>
)

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList)