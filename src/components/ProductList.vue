<template>
  <div>
    <!-- <ul>
      {{
        products
      }}
    </ul>
    <ProductItem /> -->
    <ul>
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </ul>
  </div>
</template>

<script>
import ProductItem from "./ProductItem";

export default {
  name: "product-list",
  components: {
    ProductItem,
  },
  props: {
    products: {
      type: Array,
      default: () => {
        return [];
      },
      /* default(){

        } */
    },
  },
};
</script>

<style></style>
