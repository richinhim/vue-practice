<template>
  <h1>Hello {{ username }} !! 만나서 반갑습니다</h1>
  <h1 v-text="username"></h1>
  <h1 v-text="`${username} 만나서 반갑습니다`"></h1>
  <p>{{ year }}</p>
  <p>{{ user }}</p>
  <p>안녕하세요 저는 {{ user.name }} 입니다.</p>
  <p>저의 직업은 {{ user.job }} 입니다.</p>
  <p>그리고 저는 올해 {{ user.age }} 살 입니다.</p>
  <p>{{ button }}</p>
  <p v-html="button"></p>
  <p v-html="button2"></p>
  <p v-html="button3"></p>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "scalper!!!",
      year: 2021,
      user: {
        name: "scalper",
        job: "programmer",
        age: 100,
      },
      button: "<button>click!</button>",
      button2: `<button onclick='alert("hacking!!!")'>click!</button>`,
      button3: `<button onclick='document.body.style="background:red; transform:rotate(180deg)"'>click!</button>`,
    };
  },
};
</script>

<style></style>
