<template>
  <h3>{{ username }}</h3>
  <button @click="changeName">ChangeUserName</button>
  <h2>제품명: {{ name }}, 가격 {{ price }}</h2>
  <button @click="changeProduct">제품 바꾸기</button>

  <div>
    <input type="text" v-model="username" />
  </div>
</template>

<script>
//import { reactive, toRefs } from "vue";
import { ref, reactive, toRefs } from "vue";
export default {
  name: "TestComponent",
  setup() {
    const username = ref("scalper");

    function changeName() {
      username.value = "Messi";
    }

    const state = reactive({
      name: "TV",
      price: 100,
    });

    function changeProduct() {
      state.name = "세탁기";
      state.price = 5000;
    }
    return {
      username,
      changeName,
      changeProduct,
      ...toRefs(state),
    };
  },
  /* data() {
    return {
      // username: "scalper",
    };
  },
  methods: {
    changeName() {
      this.username = "code";
    },
  }, */
};
</script>

<style></style>
