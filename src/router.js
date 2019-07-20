import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Portfolio from "./views/portfolio/Portfolio.vue";
import Stocks from "./views/stocks/Stocks.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio
    },
    {
      path: "/stocks",
      name: "stocks",
      component: Stocks
    }
  ],
  linkExactActiveClass: "active"
});
