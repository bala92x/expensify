import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize'

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            calendarFocused: false,
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            description: props.expense ? props.expense.description : '',
            error: '',
            note: props.expense ? props.expense.note : ''
        }
    }

    handleInputChange = (e) => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }

    handleAmountChange = (e) => {
        const amount = e.target.value
        const amountPattern = /^\d{1,}(\.\d{0,2})?$/
        const patternMatch = amount.match(amountPattern)
        
        if (!amount || patternMatch) {
            this.setState(() => ({ amount }))
        }
    }

    handleFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount.' }))
        } else {
            const {
                amount,
                createdAt,
                description,
                note
            } = this.state

            this.setState(() => ({ error: '' }))

            this.props.onSubmit({
                amount: parseFloat(amount, 10) * 100,
                createdAt: createdAt.valueOf(),
                description,
                note
            })
        }
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    autoFocus
                    className="text-input"
                    name="description"
                    onChange={this.handleInputChange}
                    placeholder="Description"
                    type="text"
                    value={this.state.description}
                />
                <input
                    className="text-input"
                    name="amount"
                    onChange={this.handleAmountChange}
                    placeholder="Amount"
                    type="text"
                    value={this.state.amount}
                />
                <SingleDatePicker
                    date={this.state.createdAt}
                    focused={this.state.calendarFocused}
                    isOutsideRange={() => false}
                    numberOfMonths={1}
                    onDateChange={this.handleDateChange}
                    onFocusChange={this.handleFocusChange}
                />
                <textarea
                    className="textarea"
                    name="note"
                    onChange={this.handleInputChange}
                    placeholder="Add a note for your expense (optional)"
                    value={this.state.note}
                >
                </textarea>
                <div>
                    <button className="button">Save Expense</button>
                </div>
            </form>
        )
    }
}