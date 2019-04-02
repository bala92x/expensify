import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const ExpenseDashboardPage = () => (
    <div>Dashboard</div>
)

const AddExpensePage = () => (
    <div>Add Expense</div>
)

const EditExpensePage = () => (
    <div>Edit Expense</div>
)

const HelpPage = () => (
    <div>Help</div>
)

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ExpenseDashboardPage} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))