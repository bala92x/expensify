export default (expenses) => {
    let total = 0
    const expensesCount = expenses.length

    for (let i = 0; i < expensesCount; i++) {
        total += expenses[i].amount
    }

    return total
}