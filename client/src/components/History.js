import React, { useContext } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';

const History = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="w-100">
      <h5 className="font-weight-bold">History</h5>
      <hr />
      {
        transactions.map((x) => (
          <Transaction
            key={x.id}
            id={x.id}
            description={x.description}
            amount={x.amount}
          />
        ))
      }
    </div>
  );
};

export default History;
