<template>
  <h2>3-33.컴포지션 API- Life Cycle</h2>
  <input type="text" v-model="username" ref="inputRef" />
  <ChildComponent
    firstname="Code"
    lastname="Scalper"
    @sendParent="sendParent"
  />
</template>

<script>
import ChildComponent from "./ChildComponent";
import {
  ref,
  //onBeforeMount,
  onMounted,
  //onBeforeUpdate,
  //onUpdated,
  //OnBeforeUnmount,
  //onUnmounted,
} from "vue";
export default {
  name: "TestComponent",
  components: { ChildComponent },
  methods: {
    sendParent() {
      console.log("parent event!!!");
    },
  },
  setup() {
    const inputRef = ref(null);
    const username = ref("Scalper");
    /* onBeforeMount(() => {
      console.log("onBeforeMount");
    }); */

    onMounted(() => {
      console.log(inputRef.value);
      inputRef.value.focus();
      console.log("onMounted");
    });
    /*
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });

    onUpdated(() => {
      console.log("onUpdated");
    });

     OnBeforeUnmount(() => {
      console.log("OnBeforeUnmount");
    });

    onUnmounted(() => {
      console.log("onUnmounted");
    }); */
    return {
      username,
      inputRef,
    };
  },
};
</script>

<style></style>
