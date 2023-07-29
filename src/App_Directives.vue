<template>
  <div>
    <h1>3-16.Directives</h1>
    <h2 v-once>유저의 이름은 {{ userName }}</h2>
    <button @click="changeName">change name</button>
    <h2 v-pre>{{ userName }}</h2>
    <input v-focus type="text" /><br /><br />
    highlight => <input v-highlight type="text" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userName: "scalper",
    };
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
    highlight: {
      mounted(el) {
        console.log(el);
        console.log({ el });
        el.oninput = () => {
          el.style.background = "salmon";
          el.style.color = "#fff";
        };
      },
    },
  },
  methods: {
    changeName() {
      console.log("name change!!!");
      this.userName = "code!!!";
    },
  },
};
</script>

<style></style>
