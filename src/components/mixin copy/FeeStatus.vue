<template>
  <h2>합산된 요금:{{ totalMoney }}</h2>
  <div>
    <button @click="addMoney(50)">50</button>
    <button @click="addMoney(100)">100</button>
    <button @click="addMoney(150)">150</button>
    <button @click="addMoney(200)">200</button>
  </div>
</template>

<script>
import moneyMixin from "../../mixins/moneyMixins";
export default {
  name: "feeStatus",
  mixins: [moneyMixin],
  data() {
    return {
      //totalMoney: 0,
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
