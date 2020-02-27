import React, { useContext, useEffect } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';

const History = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  // eslint-disable-next-line
  }, []);

  return (
    <div className="w-100">
      <h5 className="font-weight-bold">History</h5>
      <hr />
      {
        transactions.map((x) => (
          <Transaction
            key={x._id}
            id={x._id}
            description={x.description}
            amount={x.amount}
          />
        ))
      }
    </div>
  );
};

export default History;
