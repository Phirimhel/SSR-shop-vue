<template>
   <Cart :products="products" />
</template>

<script setup lang="ts">
import Cart from '@/components/cart/Cart.vue';
import type { Product } from '@/types/shopTypes';

defineProps<{
   products: Product[];
}>();
</script>

<style scoped>
.products-view {
   display: flex;
   flex-direction: column;
   align-items: center;
}
</style>
