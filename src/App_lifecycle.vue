<template>
  <div>
    <h2>3-27.LifeCycle</h2>
    <ParentComp />
  </div>
</template>

<script>
import ParentComp from "./components/lifecycle/ParentComp.vue";

export default {
  name: "App",
  components: { ParentComp },
  data() {
    return {};
  },
  provide() {
    return {};
  },
  computed: {},
  watch: {},
  directives: {},
  methods: {},
};
</script>

<style scoped></style>
