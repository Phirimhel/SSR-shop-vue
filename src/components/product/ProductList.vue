<template>
   <div class="product-item-list">
      <transition-group name="product-item">
         <ProductItem
            v-for="product in products"
            :key="product.id"
            v-bind="{
               product,
               inCart: ids.has(product.id),
               quantityInCart: quantities.get(product.id) ?? 0,
               productsLeft: product.quantity - (quantities.get(product.id) ?? 0),
               inWishlist: wishlistIds.has(product.id),
            }"
         />
      </transition-group>
   </div>
</template>

<script setup lang="ts">
import ProductItem from '@/components/product/Product.vue';
import { useCartStore } from '@/stores/useCartStore';
import { useWishlistStore } from '@/stores/useWishlistStore';
import type { Product } from '@/types/shopTypes';
import { storeToRefs } from 'pinia';

const wishlistStore = useWishlistStore();
const cartStore = useCartStore();

const { ids, quantities } = storeToRefs(cartStore);
const { wishlistIds } = storeToRefs(wishlistStore);

defineProps<{
   products: Product[];
}>();
</script>

<style scoped>
.product-item-list {
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
   justify-items: center;
   gap: 20px;
   height: 100%;
   width: 100%;
   overflow-y: auto;
   position: relative;
}

.product-item-enter-active,
.product-item-leave-active {
   transition: all 0.3s ease;
}

.product-item-enter-from,
.product-item-leave-to {
   opacity: 0;
   transform: translateY(20px);
}
</style>
