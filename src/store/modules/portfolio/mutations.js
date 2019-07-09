export default {
  BUY_STOCK: (state, stock) => {
    const record = state.stocks.find(ownedStock => ownedStock.id === stock.id);
    if (record) {
      record.quantity += stock.quantity;
    } else {
      state.stocks = [...state.stocks, stock];
    }
    state.funds -= stock.price * stock.quantity;
  },
  SELL_STOCK: (state, stock) => {
    const record = state.stocks.find(ownedStock => ownedStock.id == stock.id);
    if (record.quantity > stock.quantity) {
      record.quantity -= stock.quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stock.price * stock.quantity;
  }
};
