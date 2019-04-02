import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: '',
            description: '',
            note: '',
            createdAt: moment(),
            calendarFocused: false
        }
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }))
    }

    handleAmountChange = (e) => {
        const amount = e.target.value
        const amountPattern = /^\d*(\.\d{0,2})?$/
        const patternMatch = amount.match(amountPattern)
        
        if (patternMatch) {
            this.setState(() => ({ amount }))
        }
    }

    handleFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        autoFocus
                        name="description"
                        onChange={this.handleInputChange}
                        placeholder="Description"
                        type="text"
                        value={this.state.description}
                    />
                    <input
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
                        name="note"
                        onChange={this.handleInputChange}
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}