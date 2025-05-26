<template>
   <div class="account-view">
      <RouterView :products="cartStore.cart" />
   </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/useCartStore';
const cartStore = useCartStore();
</script>

<style scoped></style>
