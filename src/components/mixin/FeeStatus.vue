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
import useMoney from "../../composables/useMoney";
export default {
  name: "feeStatus",
  setup() {
    const { addMoney, totalMoney } = useMoney();
    return {
      addMoney,
      totalMoney,
    };
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
