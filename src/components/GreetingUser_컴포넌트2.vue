<template>
  <div>
    <!-- <h2>Hello User!!</h2> -->
    <h2>Hello {{ username }}!!</h2>
    <h3>오늘이 {{ numberOfVisit }} 번째 방문입니다.</h3>
    <h3>사이트 이름은 {{ siteInfo.name }} 입니다.</h3>
  </div>
</template>
<script>
export default {
  name: "GreetingUser",
  props: {
    username: String,
    /* username: {
      type: String,
      default: "User!",
    }, */
    //numberOfVisit: Number,
    numberOfVisit: {
      type: Number,
      default: 0,
    },
    //siteInfo: Object,
    siteInfo: {
      // Object의 초기화
      type: Object,
      default: () => {
        return { name: "-", teacher: "-" };
      },
    },
  },
};
</script>
<style scoped></style>
