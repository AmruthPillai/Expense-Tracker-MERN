import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import numberWithCommas from '../utils/format';

const Overview = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((x) => x.amount);

  const income = amounts
    .filter((x) => x > 0)
    .reduce((acc, x) => (acc += x), 0)
    .toFixed(2);

  const expenses = (amounts
    .filter((x) => x < 0)
    .reduce((acc, x) => (acc += x), 0) * -1)
    .toFixed(2);

  return (
    <div className="w-100 card bg-white shadow-sm">
      <div className="card-body d-flex justify-content-evenly align-items-center">
        <div className="income text-center">
          <h6 className="small font-weight-bold text-uppercase">Income</h6>
          <h5 className="text-success">{`$${numberWithCommas(income)}`}</h5>
        </div>
        <div className="divider" />
        <div className="expense text-center">
          <h6 className="small font-weight-bold text-uppercase">Expense</h6>
          <h5 className="text-danger">{`$${numberWithCommas(expenses)}`}</h5>
        </div>
      </div>
    </div>
  );
};

export default Overview;
