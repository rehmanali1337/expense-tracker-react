import React, { useContext } from 'react';
import { TransactionsContext } from '../context/TransactionsContext'
import { Transaction } from './Transaction'

export const TransactionHistory = () => {
    const { transactions } = useContext(TransactionsContext)
    // console.log(transactions)
    return (
        <div>
            <h3>Transactions History</h3>
            <ul className='list'>
                {/* Render all the transaction as list items using Transaction component. */}
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>

        </div >
    )
}
