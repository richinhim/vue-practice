<template>
  <h2>component3</h2>
  <h3>passed Data from App = {{ name }}</h3>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "comp3",
  inject: ["name"],
};
</script>

<style></style>
