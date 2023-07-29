<template>
  <div>
    <h1>3-20.component2</h1>
    <!-- <GreetingUser username="scalper" /> -->
    <GreetingUser :username="username" />
    <GreetingUser username="doorli" />
    <GreetingUser username="pororo" />
    <GreetingUser username="monkey" />
    <GreetingUser />
    <button @click="changeName">change</button>
  </div>
</template>

<script>
import GreetingUser from "./components/GreetingUser";
export default {
  name: "App",
  components: {
    GreetingUser,
  },
  data() {
    return {
      username: "scalper",
    };
  },
  computed: {},
  watch: {},
  directives: {},
  methods: {
    changeName() {
      this.username = "DDochi";
    },
  },
};
</script>

<style></style>
