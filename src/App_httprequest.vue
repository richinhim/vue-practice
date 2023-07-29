<template>
  <div>
    <h2>3-26.HTTP Request</h2>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/http/TodoList";
export default {
  name: "App",
  components: {
    TodoList,
  },
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

<style scoped>
.modal {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
