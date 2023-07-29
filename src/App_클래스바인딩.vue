<template>
  <h1>Hello Vue!</h1>
  <h1 v-bind:style="[titleStyle, basicStyle]">Hello Vue!</h1>
  <h1 v-bind:style="titleStyle">Hello Vue!</h1>
  <h1 id="title">Hello Title</h1>
  <h1 v-bind:id="dynamicId">Hello Title</h1>
  <a href="https://www.naver.com">naver</a><br />
  <a v-bind:href="url">naver</a><br />
  <img v-bind:src="image.src" v-bind:alt="image.alt" /><br />
  <input v-bind:type="inputType" /><br />
  <p v-bind:style="pStyle">Hello Vue!</p>
  <p v-bind:style="{ color: 'red', 'font-size': '50px' }">Hello Vue!</p>
  <p v-bind:style="{ color: 'red', fontSize: '50px' }">Hello Vue!</p>
  <p v-bind:style="{ color: 'red', fontSize: `${basicSize}px` }">Hello Vue!</p>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      dynamicId: "content",
      url: "https://www.naver.com",
      image: {
        src: "https://placeimg.com/100/100/any",
        alt: "random image",
      },
      inputType: "color",
      pStyle: "color:red; font-size:36px",
      basicSize: 100,
      basicStyle: {
        background: "yellow",
      },
      titleStyle: {
        "font-weight": "bold",
        fontSize: "50px",
        border: "1px solid red",
      },
    };
  },
};
</script>

<style>
#title {
  color: red;
  background: yellow;
}
#content {
  color: blue;
  background: pink;
}
</style>
