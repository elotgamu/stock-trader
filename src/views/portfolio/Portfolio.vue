<template>
  <div>
    <div class v-if="stockPortfolio">
      <PortfolioStock
        v-for="stock in stockPortfolio"
        :key="stock.id"
        :stock="stock"
      >
      </PortfolioStock>
    </div>
    <div v-if="stockPortfolio.length == 0">
      <h3>
        <span class="label label-info">No stocks on your portfolio</span>
      </h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PortfolioStock from "./Stock.vue";
export default {
  components: {
    PortfolioStock
  },
  computed: {
    ...mapGetters("portfolio", ["stockPortfolio"])
  }
};
</script>

<style lang="scss" scoped></style>
