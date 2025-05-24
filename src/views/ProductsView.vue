<template>
   <ProductList :products="products" />
</template>

<script setup lang="ts">
import { fetchAllProducts } from '@/apis/products';
import ProductList from '@/components/product/ProductList.vue';
import type { Product } from '@/types/shopTypes';
import { onMounted, ref } from 'vue';

const products = ref<Product[]>([]);

onMounted(async () => {
   const data = await fetchAllProducts();
   products.value = data;
});
</script>

<style scoped>
.products-view {
   display: flex;
   flex-direction: column;
   align-items: center;
}
</style>
