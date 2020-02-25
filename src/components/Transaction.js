import React from 'react';
import './Transaction.css';

const TxnType = {
  INCOME: 0,
  EXPENSE: 1,
};

const Transaction = ({ title, amount }) => {
  const type = amount >= 0 ? TxnType.INCOME : TxnType.EXPENSE;
  const typeClass = type === TxnType.INCOME ? 'income' : 'expense';
  const typeSymbol = type === TxnType.INCOME ? '+' : '-';

  return (
    <div id="Transaction" className={`my-3 card shadow-sm ${typeClass}`}>
      <div className="py-2 px-3 d-flex justify-content-between align-items-center">
        <span>{title}</span>
        <span>{`${typeSymbol} $${Math.abs(amount)}`}</span>
      </div>
    </div>
  );
};

export default Transaction;
