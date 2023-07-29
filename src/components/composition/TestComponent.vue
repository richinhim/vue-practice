<template>
  <h2>3-34.컴포지션 API- Reusability</h2>
  <hr />
  <ProductStatus />
  <hr />
  <FeeStatus />
  <hr />
  <SavingStatus />
</template>

<script>
import FeeStatus from "../mixin/FeeStatus";
import ProductStatus from "../mixin/ProductStatus";
import SavingStatus from "../mixin/SavingStatus";

import {} from "vue";
export default {
  name: "TestComponent",
  components: { FeeStatus, ProductStatus, SavingStatus },
  methods: {},
  setup() {
    return {};
  },
};
</script>

<style></style>
