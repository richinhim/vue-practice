<template>
  <div>
    <h1>3-22.component5</h1>
    <!-- <CompLevel1Vue /> -->
    <!-- <CompLevel1Vue :username="username" /> -->
    <button @click="activeTab = 'Menu1'">Menu1</button>
    <button @click="activeTab = 'Menu2'">Menu2</button>
    <button @click="activeTab = 'Menu3'">Menu3</button>
    <!--   <Menu1 v-if="activeTab === 'Menu1'" />
    <Menu2 v-if="activeTab === 'Menu2'" />
    <Menu3 v-if="activeTab === 'Menu3'" /> -->
    <keep-alive>
      <component :is="activeTab"></component>
    </keep-alive>
    <!-- <component :is="activeTab"></component> -->
  </div>
</template>

<script>
import Menu1 from "./components/tabItems/Menu1";
import Menu2 from "./components/tabItems/Menu2";
import Menu3 from "./components/tabItems/Menu3";
//import CompLevel1Vue from "./components/provide-inject/CompLevel1";

export default {
  name: "App",
  components: {
    //CompLevel1Vue,
    // eslint-disable-next-line vue/no-unused-components
    Menu1,
    // eslint-disable-next-line vue/no-unused-components
    Menu2,
    // eslint-disable-next-line vue/no-unused-components
    Menu3,
  },
  data() {
    return {
      username: "scalper",
      activeTab: "Menu1",
    };
  },
  provide() {
    return {
      name: this.username,
    };
  },
  computed: {},
  watch: {},
  directives: {},
  methods: {},
};
</script>

<style></style>
