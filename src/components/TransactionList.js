import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '₹ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <ul className="list">
      {transactions.map(transaction => (
        <li
          key={transaction.id}
          className={transaction.amount < 0 ? 'minus' : 'plus'}
        >
          {transaction.text}
          <span>{moneyFormatter(transaction.amount)}</span>
          <button
            onClick={() => deleteTransaction(transaction.id)}
            className="delete-btn"
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
};