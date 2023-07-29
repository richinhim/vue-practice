<template>
  <div>
    <h2>3-34.컴포지션 API- Reusability</h2>
    <TestComponent />
  </div>
</template>

<script>
import TestComponent from "./components/composition/TestComponent";
export default {
  name: "App",
  components: { TestComponent },
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
