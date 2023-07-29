<template>
  <div>
    <h1>3-14.이벤트 핸들링</h1>
    <h1>Hello {{ name }}!</h1>
    <button v-on:click.middle="changeName">change name</button>
    <!-- <button v-on:click.right="changeName">change name</button> -->
    <!-- <button v-on:click="changeName">change name</button> -->
    <button
      v-on:mouseover="name = 'Code Scalper'"
      v-on:mouseleave="name = 'Scalper'"
    >
      change name
    </button>
    <a v-on:click.prevent="movePage" href="https://naver.com">naver로 이동</a>
    <!-- <button v-on:mouseleave="name = 'Scalper'">change name</button> -->
    <h2>{{ number }}</h2>
    <button v-on:click="number += 1">숫자 1증가</button>
    <button v-on:click="number -= 1">숫자 1감소</button>
    <button v-on:click="number += 5">숫자 5증가</button>
    <button v-on:click="number -= 5">숫자 5감소</button><br /><br />
    <button v-on:click="increment($event, 1)">숫자 1증가</button>
    <button v-on:click="decrement(1)">숫자 1감소</button>
    <button v-on:click="increment(5)">숫자 5증가</button>
    <button v-on:click="decrement(5)">숫자 5감소</button><br /><br />
    <!-- <button v-on:click="increment($event, 1)">숫자 5감소</button> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "scalper",
      number: 0,
    };
  },
  methods: {
    changeName() {
      this.name = "Code Scalper";
    },
    movePage() {
      //movePage(e) {
      // console.log(e, "event");

      //e.preventDefault();

      const check = confirm("페이지를 이동하시겠습니까?");
      if (check) {
        console.log("page 이동");
      } else {
        //e.preventDefault();
        console.log("페이지 이동x");
      }
    },
    increment(e, num) {
      console.log(e);

      this.number += num;
    },
    decrement(num) {
      this.number -= num;
    },
  },
};
</script>

<style>
a {
  font-size: 24px;
  display: block;
}
</style>
