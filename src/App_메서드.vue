<template>
  <div>
    <h1>3-13.메서드</h1>
    <h2>5년뒤 ::{{ add(5) }}</h2>
    <h2>10년뒤 ::{{ add(10) }}</h2>
    <h2>15년뒤 ::{{ add(15) }}</h2>
    <h2>20년뒤 ::{{ add(20) }}</h2>
    <h2>동갑의 10명이 있다면 나이의 총 합은 {{ multiply(age, 20) }}</h2>
    <h2>{{ getTotalScore(100) }}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      age: 30,
    };
  },
  methods: {
    add(num) {
      console.log(num);
      console.log(this);
      return this.age + num;
    },
    multiply(num1, num2 = 10) {
      return num1 * num2;
    },
    getTotalScore(num) {
      return this.multiply(num, num);
    },
    /* add: (num) => {
      console.log(this); //화살표 함수를 쓰게 되면 this가 고정이 되고
      return this.age + num;
    }, */
  },
};
</script>

<style></style>
