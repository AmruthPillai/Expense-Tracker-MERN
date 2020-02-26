import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((x) => x.amount);
  const balance = amounts.reduce((acc, x) => (acc += x), 0).toFixed(2);

  return (
    <div className="text-center">
      <h6 className="small text-uppercase font-weight-bold">Your Balance</h6>
      <h2>{`$${balance}`}</h2>
    </div>
  );
};

export default Balance;
