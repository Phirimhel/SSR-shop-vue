<template>
   <ProductList :products="products" />
</template>

<script setup lang="ts">
import { fetchAllProducts } from '@/apis/products';
import ProductList from '@/components/product/ProductList.vue';
import type { Product } from '@/types/shopTypes';
import { onMounted, ref } from 'vue';

const products = ref<Product[]>([]);

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

onMounted(async () => {
   const data = await fetchAllProducts();
   for (const product of data) {
      await delay(100);
      products.value.push(product);
   }
});
</script>

<style scoped>
.products-view {
   display: flex;
   flex-direction: column;
   align-items: center;
}
</style>
