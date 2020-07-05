import React, { useContext } from 'react'
import { TransactionsContext } from '../context/TransactionsContext'


export const ExpenseIncome = () => {
    const { transactions } = useContext(TransactionsContext)

    // Get all the amount values and store in amounts array
    const amounts = transactions.map(transaction => transaction.amount)

    // Filter the amounts array and get all the amounts greater than 0 and then add them togather.
    const income = amounts.filter(amount => amount > 0).reduce((total, item) => (total += item), 0)

    // Filter the amounts array and get all the amounts less than 0 and then add them togather.
    const expense = amounts.filter(amount => amount < 0).reduce((total, item) => (total += item), 0) * -1

    return (
        <>
            <div className='inc-exp-container'>
                <div className='first'>
                    <h4>INCOME</h4>
                    <p className='moneyplus'>{income}</p>
                </div>

                <div className='second'>
                    <h4>EXPENSE</h4>
                    <p className='moneyminus'>{expense}</p>
                </div>
            </div>
        </>
    )
}
