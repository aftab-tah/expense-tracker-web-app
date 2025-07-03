import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="app-container">
        <Header />
        <div className="content-container">
          <div className="top-section">
            <Balance />
            <IncomeExpenses />
          </div>
          <div className="bottom-section">
            <div className="transaction-section">
              <h3>History</h3>
              <TransactionList />
            </div>
            <div className="add-transaction-section">
              <AddTransaction />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
