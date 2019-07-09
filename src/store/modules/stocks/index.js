import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const stocks = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
};

export default stocks;
