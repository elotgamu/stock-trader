<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">{{ stock.name }}</h3>
        <small>(Price: ${{ stock.price }})</small>
      </div>
      <div class="panel-body">
        <div class="pull-left" :class="{'has-error': insufficientFunds}">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model.number="quantity"
          />
        </div>
        <div class="pull-right">
          <button
            type="button"
            class="btn btn-success"
            :class="{'btn-danger': insufficientFunds}"
            v-on:click="buyStock"
            :disabled="insufficientFunds ||  quantity <= 0 || !Number.isInteger(quantity)"
          >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    stock: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    /** getting funds from store */
    ...mapState("portfolio", ["funds"]),
    /** make funds calculations */
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        id: this.stock.id,
        name: this.stock.name,
        price: this.stock.price,
        quantity: this.quantity
      };
      this.quantity = 0;
      this.$store.dispatch("stocks/buyStock", order);
    }
  }
};
</script>

<style lang="scss" scoped>
.danger {
  border: 1px solid red;
}
</style>