<template>
  <div>
    <h1>3-21.component4</h1>
    <button @click="displayDetail = true">show detail</button>
    <!-- <DetailView v-if="displayDetail" :displayDetail="displayDetail" /> -->
    <DetailView
      v-if="displayDetail"
      @closeDetail="close"
      @sendData="showData"
    />
  </div>
</template>

<script>
import DetailView from "./components/DetailView";

export default {
  name: "App",
  components: {
    DetailView,
  },
  data() {
    return {
      displayDetail: false,
    };
  },
  computed: {},
  watch: {},
  directives: {},
  methods: {
    close() {
      //부모에서 자식의 데이터를 바꾸는 것은 된다.
      this.displayDetail = false;
      console.log("event emitted");
    },
    showData(data) {
      console.log(data, "data sent!");
    },
  },
};
</script>

<style></style>
