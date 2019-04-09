import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'

import AppRouter, { history } from './routers/AppRouter'
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
let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(app, document.getElementById('app'))
        hasRendered = true
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))


firebase
    .auth()
    .onAuthStateChanged((user) => {
        if (user) {
            store
                .dispatch(startSetExpenses())
                .then(() => {
                    renderApp()

                    if (history.location.pathname === '/') {
                        history.push('/dashboard')
                    }
                })
        } else {
            renderApp()
            history.push('/')
        }
    })