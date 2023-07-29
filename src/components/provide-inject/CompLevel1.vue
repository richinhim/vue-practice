<template>
  <h2>component1</h2>
  <CompLevel2 />
</template>

<script>
import CompLevel2 from "./CompLevel2";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "comp1",
  components: {
    CompLevel2,
  },
};
</script>

<style></style>
