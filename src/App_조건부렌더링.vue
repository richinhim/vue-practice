<template>
  <div>
    <!-- <h1>Hello {{ user.name }}</h1>
    <h1 v-once v-text="user.name"></h1>
    <h1 v-text="user.name"></h1>
    <input type="text" v-model="user.name" />

    <h2 v-if="showName">My name is {{ user.name }}</h2>
    <h2 v-else>이름을 보여줄 수 없습니다.</h2>
    <h2 v-if="user.age > 20">당신은 성인입니다.</h2>
    <h2 v-else-if="user.age > 14 && user.age < 20">당신은 청소년입니다.</h2>
    <h2 v-else>당신은 어린이 입니다.</h2> -->

    <h2 v-if="!showName">{{ user.name }} IF</h2>
    <h2 v-show="!showName">{{ user.name }} Show</h2>
    <!-- <h2 style="display:none;">-->

    <ul>
      <!-- <div v-if="question === 'frontend'">
        <li>HTML은 재미있나요?</li>
        <li>CSS은 재미있나요?</li>
        <li>Javascript은 재미있나요?</li>
      </div>
      <li v-if="question === 'frontend'">HTML은 재미있나요?</li>
      <div v-else>
        <li>Java은 재미있나요?</li>
        <li>Python은 재미있나요?</li>
        <li>C#은 재미있나요?</li>
      </div> -->

      <template v-if="question === 'frontend'">
        <li>HTML은 재미있나요?</li>
        <li>CSS은 재미있나요?</li>
        <li>Javascript은 재미있나요?</li>
      </template>
      <!-- <li v-if="question === 'frontend'">HTML은 재미있나요?</li> -->
      <template v-else>
        <li>Java은 재미있나요?</li>
        <li>Python은 재미있나요?</li>
        <li>C#은 재미있나요?</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //question: "back",
      question: "frontend",
      showName: true,
      user: {
        name: "scalper",
        age: 10,
        job: "programmer",
      },
    };
  },
};
</script>

<style></style>
