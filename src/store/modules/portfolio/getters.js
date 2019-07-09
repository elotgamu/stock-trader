export default {
  /**
   * This is a getter for portfolio stuffs doesn't make sense calling
   */
  // stockPortfolio: (state, getters) => {
  //   return state.stocks.map(stock => {
  //     debugger;
  //     const record = getters.stocks.find(element => element.id === stock.id);
  //     return {
  //       id: stock.id,
  //       quantity: stock.quantity,
  //       name: record.name,
  //       price: record.price
  //     };
  //   });
  // },
  funds: state => state.funds
};
