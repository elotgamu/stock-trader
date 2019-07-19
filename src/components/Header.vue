<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand" to="/">Stock Trader</router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" tag="li">
            <a>Portfolio</a>
          </router-link>
          <router-link to="/stocks" tag="li">
            <a>Stocks</a>
          </router-link>
        </ul>

        <strong class="navbar-text navbar-right">
          Funds: {{ funds | currency }}
        </strong>

        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#" @click="endDay">End Day</a>
          </li>
          <li
            class="dropdown"
            :class="{ open: isDropDownOpen }"
            @click="toggleDropDown"
          >
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Save & Load
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#" v-on:click="loadData">Load Data</a>
              </li>
              <li>
                <a href="#" v-on:click="saveData">Save Data</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      isDropDownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.state.portfolio.funds;
    }
  },
  methods: {
    toggleDropDown() {
      this.isDropDownOpen = !this.isDropDownOpen;
    },
    endDay() {
      this.$store.dispatch("stocks/randomizeStocks");
    },
    saveData() {
      const data= {
        funds: this.funds,
        stockPortfolio: this.$store.getters["portfolio/stockPortfolio"],
        stocks: this.$store.state.stocks.stocks
      }
      axios.put(process.env.VUE_APP_API_URL + '/data.json', data);
    },
    loadData() {
      this.$store.dispatch("loadStockData");
    }
  }
};
</script>
<style lang="scss" scoped></style>
