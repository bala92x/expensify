import React from 'react'
import { connect } from 'react-redux'

import { setTextFilter } from '../actions/filtersActions'

const ExpenseListFilters = (props) => (
    <div>
        <input
            type="text"
            defaultValue="bill"
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }}
        />
    </div>
)

const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps)(ExpenseListFilters)