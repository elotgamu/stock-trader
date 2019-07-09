export default {
  sellStock: ({ commit }, stock) => {
    commit("SELL_STOCK", stock);
  }
};
