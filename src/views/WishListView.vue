<template>
   <Wishlist :products="wishlistStore.wishlist" />
</template>

<script setup lang="ts">
import Wishlist from '@/components/wishlist/Wishlist.vue';
import { useWishlistStore } from '@/stores/useWishlistStore';

const wishlistStore = useWishlistStore();
</script>

<style scoped>
.products-view {
   display: flex;
   flex-direction: column;
   align-items: center;
}
</style>
