<template>
  <div>
    <h2>전체 금액: {{ totalMoney }}</h2>
  </div>
  <div>
    <!-- <button @click="totalMoney += 100">100</button> -->
    <button @click="addMoney(100)">100</button>
    <button @click="addMoney(200)">200</button>
    <button @click="addMoney(300)">300</button>
    <button @click="addMoney(400)">400</button>
  </div>
  <!-- <FeeStatus />
  <SavingStatus /> -->
</template>

<script>
//import FeeStatus from "./FeeStatus";
//import SavingStatus from "./SavingStatus";
import moneyMixin from "../../mixins/moneyMixins";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "productStatus",
  mixins: [moneyMixin],
  components: {
    //FeeStatus,
    //SavingStatus,
  },
  data() {
    return {
      //totalMoney: 0,
      totalMoney: 3000,
    };
  },
  methods: {
    /*  addMoney(price) {
      this.totalMoney += price;
    }, */
  },
};
</script>

<style></style>
