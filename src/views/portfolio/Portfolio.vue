<template>
  <div>
    <div class v-if="stocks">
      <PortfolioStock v-for="stock in stocks" :key="stock.id" :stock="stock"></PortfolioStock>
    </div>
    <div v-if="stocks.length == 0">
      <h3>
        <span class="label label-info">No stocks on your portfolio</span>
      </h3>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PortfolioStock from "./Stock.vue";
export default {
  components: {
    PortfolioStock
  },
  computed: {
    ...mapState("portfolio", ["stocks"])
  }
};
</script>

<style lang="scss" scoped>
</style>