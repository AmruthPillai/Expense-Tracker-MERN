import { v4 as uuidv4 } from 'uuid';
import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const transaction = {
      id: uuidv4(),
      description,
      amount: +amount,
    };

    addTransaction(transaction);

    setDescription('');
    setAmount(0);
  };

  return (
    <div className="w-100">
      <h5>Add New Transaction</h5>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input className="form-control" type="text" value={description} onChange={(e) => setDescription(e.target.value)} name="description" id="description" />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input className="form-control" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} name="amount" id="amount" />
          <small className="form-text text-muted">(negative - expense, positive - income)</small>
        </div>

        <div className="my-4" />

        <button type="submit" className="btn btn-primary btn-block">Submit</button>
      </form>
    </div>
  );
};

export default AddTransaction;
