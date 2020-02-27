import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  errors: null,
  loading: true,
  transactions: [],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const getTransactions = async () => {
    try {
      const res = await axios.get('/api/v1/transactions/');
      dispatch({
        type: 'GET_TXNS',
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: 'TXN_ERROR',
        payload: error,
      });
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);

      dispatch({
        type: 'DELETE_TXN',
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: 'TXN_ERROR',
        payload: error,
      });
    }
  };

  const addTransaction = async (transaction) => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    try {
      const res = await axios.post('/api/v1/transactions', transaction, config);

      dispatch({
        type: 'ADD_TXN',
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: 'TXN_ERROR',
        payload: error,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        loading: state.loading,
        error: state.error,
        deleteTransaction,
        getTransactions,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
