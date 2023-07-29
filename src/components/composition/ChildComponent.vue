<template>
  <hr />
  <h3>{{ fullname }}</h3>
  <button @click="sendParent">child click</button>
</template>

<script>
import { computed } from "vue";
export default {
  name: "childComponent",
  props: ["firstname", "lastname"],
  setup(props, context) {
    console.log(context);
    const fullname = computed(() => {
      return `${props.firstname} ${props.lastname}`;
      //return `${this.firstname} ${this.lastname}`;
    });
    function sendParent() {
      context.emit("sendParent");
      //this.$emit("sendParent");
    }
    return {
      fullname,
      sendParent,
    };
  },
  /* computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`;
    },
  }, */
};
</script>

<style></style>
