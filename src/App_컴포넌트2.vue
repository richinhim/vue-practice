<template>
  <div>
    <h1>3-20.component2</h1>
    <!-- <GreetingUser username="scalper" /> -->
    <GreetingUser
      :username="username"
      :numberOfVisit="numberOfVisit"
      :siteInfo="siteInfo"
    />

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
      numberOfVisit: undefined,
      //numberOfVisit: 25,
      /* siteInfo: {
        name: "vue practice",
        teacher: "scalper",
        subject: "frontend",
      }, */
      siteInfo: undefined,
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
