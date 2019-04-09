import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expensesFixtures'

import { EditExpensePage } from '../../components/EditExpensePage'

let editExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
    editExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <EditExpensePage
            editExpense={editExpense} 
            startRemoveExpense={startRemoveExpense}
            history={history}
            expense={expenses[0]}
        />
    )
})

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
    const note = 'New note'

    wrapper
        .find('ExpenseForm')
        .prop('onSubmit')
        ({ ...expenses[0], note })

    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, { ...expenses[0], note })
})

test('should handle startRemoveExpense', () => {
    wrapper
        .find('button')
        .simulate('click')

    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[0].id })
})