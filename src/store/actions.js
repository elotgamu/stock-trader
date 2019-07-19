import axios from "axios";

const loadStockData = ({ commit }) => {
  axios
    .get(process.env.VUE_APP_API_URL + "/data.json")
    .then(result => {
      if (result.data) {
        const { funds, stockPortfolio, stocks } = result.data;
        const portfolio = {
          stockPortfolio,
          funds
        };
        commit("stocks/SET_STOCKS", stocks); //set stocks
        commit("portfolio/SET_PORTFOLIO", portfolio); // set portfolio
      }
    })
    .catch(err => {
      console.log(err);
    });
};
export default {
  loadStockData
};
