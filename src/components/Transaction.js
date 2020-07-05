import React, { useContext } from 'react';
import { TransactionsContext } from '../context/TransactionsContext'

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(TransactionsContext);

    // Return single li containing the transaction data.
    return (
        <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
            {transaction.description} : {transaction.amount}
            <button onClick={() => deleteTransaction(transaction.id)} className='delete-btn'>X</button>
        </li>
    )
}
