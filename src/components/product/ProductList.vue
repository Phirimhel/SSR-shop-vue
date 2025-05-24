<template>
   <div class="product-item-list">
      <transition-group name="product-item">
         <template v-for="product in products" :key="product.id">
            <ProductItem
               :product="product"
               :inCart="inCart.has(product.id)"
               :quantityInCart="quantityInCart.get(product.id) ?? 0"
               :productsLeft="product.quantity - (quantityInCart.get(product.id) ?? 0)"
            />
         </template>
      </transition-group>
   </div>
</template>

<script setup lang="ts">
import ProductItem from '@/components/product/Product.vue';
import { useCartStore } from '@/stores/useCartStore';
import type { Product } from '@/types/shopTypes';
import { computed } from 'vue';

const cartStore = useCartStore();

const inCart = computed(() => {
   console.log('🟠 | component | computed: inCart');
   return cartStore.ids;
});
const quantityInCart = computed(() => {
   console.log('🟠 | component | computed: quantityInCart');
   return cartStore.quantities;
});
const productsLeft = computed(() => {
   console.log('🟠 | component | computed: productsLeft');
   return cartStore.quantities;
});

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
