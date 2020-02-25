import React from 'react';

const Overview = () => (
  <div className="w-100 card bg-white shadow-sm">
    <div className="card-body d-flex justify-content-evenly align-items-center">
      <div className="income text-center">
        <h6 className="small font-weight-bold text-uppercase">Income</h6>
        <h5 className="text-success">$120.00</h5>
      </div>
      <div className="divider" />
      <div className="expense text-center">
        <h6 className="small font-weight-bold text-uppercase">Expense</h6>
        <h5 className="text-danger">$240.00</h5>
      </div>
    </div>
  </div>
);

export default Overview;
