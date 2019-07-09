let mutations = {
  SET_STOCKS: (state, payload) => {
    state.stocks = payload;
  },
  RANDOM_STOCKS: () => {
    return true;
  }
};

export default mutations;
