export default {
  /**
   * This is a getter for portfolio stuffs where
   * we return the items matched in stock modules
   * with the stock in portfolio(bought stocks) since we need to track
   * stock value change
   */
  stockPortfolio: (state, getters, rootState, rootGetters) => {
    return state.stocks.map(stock => {
      const stocksGetters = rootGetters["stocks/stocks"];
      const record = stocksGetters.find(element => element.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds: state => state.funds
};
