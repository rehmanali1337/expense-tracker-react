import React, { useState, useContext } from 'react'
import { TransactionsContext } from '../context/TransactionsContext'

export const AddTransaction = () => {
    const [desc, setDesc] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransaction } = useContext(TransactionsContext)

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            description: desc,
            amount: +amount
        }
        addTransaction(newTransaction)
    }

    return (
        <div>
            <h3>
                Add New Transactions
            </h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor="description"
                    >
                        Transaction Description
                </label>
                    <br />
                    <input type='text' id="description"
                        value={desc}
                        onChange={(e) => {
                            setDesc(e.target.value)
                        }}
                        placeholder="Enter Description of transcation" />
                    <br />
                </div>

                <div className='form-control'>
                    <label htmlFor="amount"

                    >
                        Transaction Amount
                </label>
                    <br />
                    <input type='number' id="amount"
                        value={amount}
                        onChange={(e) => {
                            setAmount(e.target.value)
                        }}
                        placeholder="Enter transaction amount" />
                    <br />
                    <button className='btn'>
                        Add Transaction
                </button>
                </div>
            </form>
        </div>
    )
}
