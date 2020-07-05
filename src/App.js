import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { AccountsSummery } from './components/AccountsSummery';
import { ExpenseIncome } from './components/ExpenseIncome'
import { TransactionHistory } from './components/TransactionHistory'
import { AddTransaction } from './components/AddTransaction'
import { TransactionsProvider } from './context/TransactionsContext'

function App() {
  return (

    <div className="root">
      <TransactionsProvider>
        <Header />
        <div className='container'>
          <AccountsSummery />
          <ExpenseIncome />
          <TransactionHistory />
          <AddTransaction />
        </div>
      </TransactionsProvider>
    </div>
  );
}

export default App;
