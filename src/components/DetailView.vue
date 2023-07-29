<template>
  <div class="wrapper">
    <div class="container">
      <h2>Detail Page</h2>
      <!-- <button @click="displayDetail = false">close</button> -->
      <button @click="closeDetail">close</button>
      <input type="text" v-model="username" /><br />
      <button @click="sendData">send Data</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailPage",
  data() {
    return {
      username: "",
    };
  },

  props: {
    //displayDetail: Boolean,
  },
  methods: {
    closeDetail() {
      this.$emit("closeDetail"); //부모로 이벤트 전달
    },
    sendData() {
      this.$emit("sendData", this.username); //부모로 이벤트 전달
    },
  },
};
</script>

<style scoped>
.wrapper {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background: #fff;
  width: 60%;
}
</style>
