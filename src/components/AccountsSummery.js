import React, { useContext } from 'react'
import { TransactionsContext } from '../context/TransactionsContext'

export const AccountsSummery = () => {
    // Get the transaction object from TransactionsContext(Global store.)
    const { transactions } = useContext(TransactionsContext);
    // map through the transaction object, get all the amounts and store it in amounts var.
    const amounts = transactions.map(transaction => transaction.amount)
    // Sum all the amounts stored in the amounts array using reduce method.
    const total = amounts.reduce((tot, item) => (tot += item), 0)
    return (
        <>
            <h2>Current Balance</h2>
            <h2 className="cb">${total}</h2>
        </>
    )
}
