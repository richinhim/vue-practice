<template>
  <li>
    <p class="title">{{ product.name }}</p>
    <p class="image">
      <img
        :src="`https://placeimg.com/200/100/${product.id}`"
        :alt="product.name"
      />
    </p>
    <p class="price">{{ product.price }}</p>

    <!-- <p class="title">제품명</p>
    <p class="image">
      <img src="https://placeimg.com/200/100/any" alt="random image" />
    </p>
    <p class="price">5000</p> -->
  </li>
</template>

<script>
export default {
  name: "product-item",
  props: {
    product: Object,
  },
};
</script>

<style scoped>
li {
  border: 2px solid salmon;
  margin-bottom: 0.5rem;
}
.title {
  font-size: 24px;
  color: #2c82c9;
  font-weight: bold;
}
</style>
