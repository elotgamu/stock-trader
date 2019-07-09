<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">{{ stock.name }}</h3>
        <small>(Price: ${{ stock.price }} | Quantity: {{stock.quantity}})</small>
      </div>
      <div class="panel-body">
        <div class="pull-left" :class="{'has-error': insufficientQuantity}">
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
            v-on:click="sellStocks"
            :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
          >{{ insufficientQuantity ? 'Not enough stocks' : 'Sell' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    sellStocks() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("portfolio/sellStock", order);
    }
  }
};
</script>

<style lang="scss" scoped></style>