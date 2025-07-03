import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (type) => (e) => {
    e.preventDefault();

    if (text.trim() === '' || amount === '' || isNaN(amount)) {
      alert('Please enter a valid description and amount.');
      return;
    }

    const value = Math.abs(Number(amount));
    const signedAmount = type === 'debit' ? -value : value;

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: signedAmount
    };

    addTransaction(newTransaction);
    setText('');
    setAmount('');
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (Enter a value. Use Debit for expense, Credit for income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn-debit" onClick={handleSubmit('debit')}>Debit</button>
        <button className="btn-credit" onClick={handleSubmit('credit')}>Credit</button>
      </form>
    </>
  );
};