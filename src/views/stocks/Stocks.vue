<template>
  <div id="stocks">
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"></Stock>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Stock from "./Stock.vue";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("stocks", ["stocks"])
  },
  components: {
    Stock
  }
};
</script>

<style lang="scss" scoped>
</style>