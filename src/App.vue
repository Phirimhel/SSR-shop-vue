<template>
   <shop-main-layout />
</template>

<script setup lang="ts">
import ShopMainLayout from '@/layouts/shop-main-layout.vue';
import * as cartApi from '@/apis/cart';
import { onMounted } from 'vue';

onMounted(() => {
   const token = '1234';
   //    cartApi.fetchCart(token);
   //    cartApi.addProductToCart(token, '1234');
   //    cartApi.removeProductFromCart(token, '1234');
   //    cartApi.clearCart(token);
});
</script>

<style scoped></style>
