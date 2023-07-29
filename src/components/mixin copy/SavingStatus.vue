<template>
  <h2>총 적금:{{ totalMoney }}</h2>
  <div>
    <button @click="addMoney(1000)">1000</button>
    <button @click="addMoney(2000)">2000</button>
    <button @click="addMoney(1150)">1150</button>
    <button @click="addMoney(2200)">2200</button>
  </div>
</template>

<script>
import moneyMixin from "../../mixins/moneyMixins";
export default {
  name: "savingStatus",
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
