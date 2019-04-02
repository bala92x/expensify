import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'

import {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate
} from '../actions/filtersActions'

class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            calendarFocused: null
        }
    }

    handleDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    handleFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    render() {
        return (
            <div>
                <input
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value))
                    }}
                    type="text"
                    value={this.props.filters.text}
                />
                <select
                    onChange={(e) => {
                        if (e.target.value === 'amount') {
                            this.props.dispatch(sortByAmount())
                        } else if (e.target.value === 'date') {
                            this.props.dispatch(sortByDate())
                        }
                    }}
                    value={this.props.filters.sortBy}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    endDate={this.props.filters.endDate}
                    focusedInput={this.state.calendarFocused}
                    isOutsideRange={() => false}
                    numberOfMonths={1}
                    onDatesChange={this.handleDatesChange}
                    onFocusChange={this.handleFocusChange}
                    showClearDates={true}
                    startDate={this.props.filters.startDate}
                />
            </div>
        )
    }
} 

const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps)(ExpenseListFilters)