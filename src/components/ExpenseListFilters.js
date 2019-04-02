import React from 'react'
import { connect } from 'react-redux'

import { setTextFilter, sortByAmount, sortByDate } from '../actions/filtersActions'

const ExpenseListFilters = (props) => (
    <div>
        <input
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }}
            type="text"
            value={props.filters.text}
        />
        <select
            onChange={(e) => {
                if (e.target.value === 'amount') {
                    props.dispatch(sortByAmount())
                } else if (e.target.value === 'date') {
                    props.dispatch(sortByDate())
                }
            }}
            value={props.filters.sortBy}
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
)

const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps)(ExpenseListFilters)