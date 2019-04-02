import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom'

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

const NotFoundPage = () => (
    <div>404 - <Link to="/">Go home</Link></div>
)

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <nav>
            <NavLink to="/" activeClassName="is-active" exact >Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
            <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </nav>
    </header>
)

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))