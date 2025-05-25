<template>
   <Cart :products="cartStore.cart" />
</template>

<script setup lang="ts">
import Cart from '@/components/cart/Cart.vue';
import { useCartStore } from '@/stores/useCartStore';
const cartStore = useCartStore();
</script>

<style scoped>
.products-view {
   display: flex;
   flex-direction: column;
   align-items: center;
}
</style>
