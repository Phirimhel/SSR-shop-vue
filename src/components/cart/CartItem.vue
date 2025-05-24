<template>
   <!-- <div class="cart-item">
      <div class="item-image">
         <img :src="product.image" :alt="product.title" />
      </div>
      <div class="item-details">
         <h3 class="item-title">{{ product.title }}</h3>
         <p class="item-price">
            ${{ product.price }}
            <span class="item-quantity">Quantity: {{ controls?.quantityInCart }} </span>
            <span class="item-quantity"> ${{ product.price * controls?.quantityInCart }}</span>
         </p>
      </div>
      <button class="remove-button" @click="removeProductFromCart">
         <span class="remove-icon">✕</span>
      </button>
   </div> -->
</template>

<script setup lang="ts">
import type { Product } from '@/types/shopTypes';

const props = defineProps<{
   product: Product;
}>();

const removeProductFromCart = async () => {};
</script>

<style scoped>
.cart-item {
   display: grid;
   grid-template-columns: auto 1fr auto;
   gap: 1.5rem;
   padding: 1rem;
   border-bottom: 1px solid #f5f5f7;
   align-items: center;
}

.cart-item:last-child {
   border-bottom: none;
}

.item-image {
   width: 100px;
   height: 100px;
   display: flex;
   align-items: center;
   justify-content: center;
   background: #f5f5f7;
   border-radius: 8px;
   padding: 0.5rem;
}

.item-image img {
   max-width: 100%;
   max-height: 100%;
   object-fit: contain;
}

.item-details {
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
}

.item-title {
   font-size: 1.1rem;
   font-weight: 500;
   color: #1d1d1f;
   margin: 0;
}

.item-price {
   font-size: 1.2rem;
   font-weight: 600;
   color: #1d1d1f;
   margin: 0;
}
.remove-button {
   background: none;
   border: none;
   color: #86868b;
   cursor: pointer;
   padding: 0.5rem;
   border-radius: 50%;
   transition: all 0.2s ease;
}

.remove-button:hover {
   background: #f5f5f7;
   color: #ff3b30;
}

.item-quantity {
   font-size: 0.8rem;
   color: #86868b;
}
</style>
