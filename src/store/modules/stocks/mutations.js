let mutations = {
  SET_STOCKS: (state, payload) => {
    state.stocks = payload;
  },
  /**
   * Create a random price for stocks
   * TO DO: Fix when stock price get to 1 then, doesnot change
   * We need to change even when $1 price is set
   */
  RANDOM_STOCKS: state => {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  }
};

export default mutations;
