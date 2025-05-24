<template>
   <Wishlist :products="products" />
</template>

<script setup lang="ts">
import Wishlist from '@/components/wishlist/Wishlist.vue';
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
