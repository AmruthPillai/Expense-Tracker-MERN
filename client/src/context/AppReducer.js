export default (state, { type, payload }) => {
  switch (type) {
    case 'GET_TXNS':
      return {
        ...state,
        loading: false,
        transactions: payload,
      };
    case 'ADD_TXN':
      return {
        ...state,
        transactions: [...state.transactions, payload],
      };
    case 'DELETE_TXN':
      return {
        ...state,
        transactions: state.transactions.filter((x) => x._id !== payload),
      };
    case 'TXN_ERROR':
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
