import React from 'react'

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: '',
            description: '',
            note: ''
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

    handleAmountChange = (e) => {
        const amount = e.target.value
        const amountPattern = /^\d*(\.\d{0,2})?$/
        const patternMatch = amount.match(amountPattern)
        
        if (patternMatch) {
            this.setState(() => ({ amount }))
        }
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