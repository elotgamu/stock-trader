<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <h1>Trade or view your portfolio</h1>
    <h6>You may save & load your data</h6>
    <h6>Click on 'End Day' to begin a new day!</h6>
    <hr />
    <p>
      Your funds:
      <b>{{ funds | currency }}</b>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    // HelloWorld
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("portfolio", ["funds"])
  }
};
</script>
