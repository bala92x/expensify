import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import 'react-dates/initialize'

import {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate
} from '../actions/filtersActions'

export class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            calendarFocused: null
        }
    }

    handleTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    handleDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    handleFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    handleSortChange = (e) => {
        if (e.target.value === 'amount') {
            this.props.sortByAmount()
        } else if (e.target.value === 'date') {
            this.props.sortByDate()
        }
    }

    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            autoFocus
                            className="text-input"
                            onChange={this.handleTextChange}
                            placeholder="Search expenses"
                            type="text"
                            value={this.props.filters.text}
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            onChange={this.handleSortChange}
                            value={this.props.filters.sortBy}
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            endDate={this.props.filters.endDate}
                            endDateId="qkjelwql"
                            focusedInput={this.state.calendarFocused}
                            isOutsideRange={() => false}
                            numberOfMonths={1}
                            onDatesChange={this.handleDatesChange}
                            onFocusChange={this.handleFocusChange}
                            showClearDates={true}
                            startDate={this.props.filters.startDate}
                            startDateId="vczxwe"
                        />
                    </div>
                </div>
            </div>
        )
    }
} 

const mapStateToProps = (state) => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)