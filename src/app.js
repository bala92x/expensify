import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expensesActions'
import { firebase } from './firebase/firebase'
import './styles/styles.scss'

const store = configureStore()

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

store
    .dispatch(startSetExpenses())
    .then(() => {
        ReactDOM.render(app, document.getElementById('app'))
    })

firebase
    .auth()
    .onAuthStateChanged((user) => {
        if (user) {
            console.log('log in');
        } else {
            console.log('log out');
        }
    })