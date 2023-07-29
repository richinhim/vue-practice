<template>
  <div>
    <h1>Hello</h1>
    <ul>
      <!-- <li v-for="(city, index) in cities" :key="index">
        {{ city.name }}
      </li> -->
      <!-- array.filter(a=> {return true;}) -->
      <li
        v-for="(city, index) in cities.filter((c) => c.province === '경상도')"
        :key="index"
      >
        {{ city.name }}
      </li>
    </ul>
    <ul>
      <template v-for="(city, index) in cities" :key="index">
        <li v-if="city.province === '경상도'">{{ city.name }}</li>
      </template>
      <!--  <li v-for="(city, index) in cities" :key="index">
        <span v-if="city.province === '경상도'">{{ city.name }}</span>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cities: [
        { name: "서울", province: "경기도" },
        { name: "대전", province: "충청도" },
        { name: "대구", province: "경상도" },
        { name: "부산", province: "경상도" },
        { name: "인천", province: "경기도" },
        { name: "광주", province: "전라도" },
      ],
    };
  },
};
</script>

<style></style>
