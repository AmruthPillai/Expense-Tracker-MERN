import React, { useContext } from 'react';
import './Transaction.css';
import { GlobalContext } from '../context/GlobalState';
import numberWithCommas from '../utils/format';

const TxnType = {
  INCOME: 0,
  EXPENSE: 1,
};

const Transaction = ({ id, description, amount }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const type = amount >= 0 ? TxnType.INCOME : TxnType.EXPENSE;
  const typeClass = type === TxnType.INCOME ? 'income' : 'expense';
  const typeSymbol = type === TxnType.INCOME ? '+' : '-';

  return (
    <div
      id="Transaction"
      className={`my-3 cursor-pointer card shadow-sm ${typeClass}`}
      onClick={() => deleteTransaction(id)}
    >
      <div className="py-2 px-3 d-flex justify-content-between align-items-center">
        <span id="description">{description}</span>
        <div className="d-flex align-items-center">
          <span id="amount">{`${typeSymbol} $${numberWithCommas(Math.abs(amount))}`}</span>
          <i id="delete" className="pl-3 text-danger material-icons">
            delete
          </i>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
