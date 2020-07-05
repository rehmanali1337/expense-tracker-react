import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initial = {
    transactions: [
        {
            id: Math.floor(Math.random() * 100000000),
            amount: 500,
            description: 'Income 1'
        },
        {
            id: Math.floor(Math.random() * 100000000),
            amount: 1000,
            description: 'Income 2'
        },
        {
            id: Math.floor(Math.random() * 100000000),
            amount: -300,
            description: 'Expense 1'
        }]
}

export const TransactionsContext = createContext(initial)


export const TransactionsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initial)

    function deleteTransaction(id) {
        dispatch({
            type: 'DEL_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        console.log("Dispatching the transaction.")
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <TransactionsContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </TransactionsContext.Provider >
    )
}