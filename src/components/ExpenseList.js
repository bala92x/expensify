import React from 'react'
import { connect } from 'react-redux'

import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expensesSelector'

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
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        {renderExpenseListItems(props.expenses)}
    </div>
)

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList)