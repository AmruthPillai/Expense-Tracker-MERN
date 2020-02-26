export default (state, { type, payload }) => {
  switch (type) {
    case 'ADD_TXN':
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      };
    case 'DELETE_TXN':
      return {
        ...state,
        transactions: state.transactions.filter((x) => x.id !== payload),
      };
    default:
      return state;
  }
};
