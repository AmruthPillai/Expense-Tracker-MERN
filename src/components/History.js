import React, { useContext } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';

const History = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="w-100">
      <h5 className="font-weight-bold">History</h5>
      <hr />
      <Transaction title="Cash" amount={500} />
      <Transaction title="Food" amount={-30} />
    </div>
  );
};

export default History;
