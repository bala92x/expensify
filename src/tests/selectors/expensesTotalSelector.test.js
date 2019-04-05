import selectExpensesTotal from '../../selectors/expensesTotalSelector'
import expenses from '../fixtures/expensesFixtures'

test('should return 0 if no expenses', () => {
    const total = selectExpensesTotal([])
    const totalToBe = 0
    
    expect(total).toBe(totalToBe)
})

test('should correctly add up a single expense', () => {
    const total = selectExpensesTotal([expenses[0]])
    const totalToBe = expenses[0].amount
    
    expect(total).toBe(totalToBe)
})

test('should correctly add up multiple expenses', () => {
    const total = selectExpensesTotal(expenses)
    const totalToBe = expenses[0].amount + expenses[1].amount + expenses[2].amount
    
    expect(total).toBe(totalToBe)
})