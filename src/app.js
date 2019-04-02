import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expensesActions'
import { setTextFilter } from './actions/filtersActions'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill', amount: 4500} ))
store.dispatch(addExpense({ description: 'Gas bill', amount: 5000 }))
store.dispatch(setTextFilter('gas'))

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(app, document.getElementById('app'))