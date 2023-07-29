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
import useMoney from "../../composables/useMoney";
export default {
  name: "savingStatus",
  setup() {
    const { addMoney, totalMoney } = useMoney(5000);
    //const { addMoney, totalMoney } = useMoney();
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
