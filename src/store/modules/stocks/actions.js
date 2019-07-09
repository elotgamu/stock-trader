import stocks from "../../../data/stocks";

const actions = {
  // Commiting the mutation from portfolio module
  buyStock: ({ commit }, payload) => {
    commit("portfolio/BUY_STOCK", payload, { root: true });
  },
  initStocks: ({ commit }) => {
    commit("SET_STOCKS", stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit("RANDOM_STOCKS");
  }
};

export default actions;
