<template>
   <!-- <div class="cart-container">
      <div class="cart-header">
         <h1 class="cart-title">Shopping Cart</h1>
         <p class="cart-subtitle">{{ totalProductsInCart }} items</p>
      </div>

      <div class="cart-content" v-if="products.length > 0">
         <div class="cart-items">
            <CartItem
               v-for="product in props.products"
               :key="product.id"
               :product="product"
               :controls="controls.get(product.id)!"
            />
         </div>
         <div class="cart-summary">
            <div class="summary-row">
               <span>Subtotal</span>
               <span>${{ totalPrice }}</span>
            </div>
            <div class="summary-row">
               <span>Shipping</span>
               <span>Free</span>
            </div>
            <div class="summary-row total">
               <span>Total</span>
               <span>${{ totalPrice }}</span>
            </div>
            <button class="checkout-button" @click="goToCheckout">
               <span class="checkout-icon">→</span>
               <span>Proceed to Checkout</span>
            </button>
         </div>
      </div>

      <div class="empty-cart" v-else>
         <div class="empty-cart-icon">🛒</div>
         <h2>Your cart is empty</h2>
         <p>Add some products to your cart to see them here</p>
         <router-link to="/" class="continue-shopping"> Continue Shopping </router-link>
      </div>
   </div> -->
</template>

<script setup lang="ts">
import type { Product } from '../../types/shopTypes';

defineProps<{
   products: Product[];
}>();
</script>

<style scoped>
.cart-container {
   max-width: 1200px;
   margin: 2rem auto;
   padding: 0 1rem;
}

.cart-header {
   margin-bottom: 2rem;
   text-align: center;
}

.cart-title {
   font-size: 2rem;
   font-weight: 600;
   color: #1d1d1f;
   margin: 0;
}

.cart-subtitle {
   color: #86868b;
   margin: 0.5rem 0 0;
}

.cart-content {
   display: grid;
   grid-template-columns: 2fr 1fr;
   gap: 2rem;
}

.cart-items {
   background: #ffffff;
   border-radius: 12px;
   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
   padding: 1.5rem;
   max-height: 600px;
   min-height: 327px;
   overflow-y: auto;
}

.cart-summary {
   background: #ffffff;
   border-radius: 12px;
   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
   padding: 1.5rem;
   height: fit-content;
}

.summary-row {
   display: flex;
   justify-content: space-between;
   padding: 1rem 0;
   color: #1d1d1f;
   font-size: 1.1rem;
}

.summary-row.total {
   border-top: 1px solid #f5f5f7;
   margin-top: 1rem;
   padding-top: 1rem;
   font-weight: 600;
   font-size: 1.2rem;
}

.checkout-button {
   width: 100%;
   background: #0066cc;
   color: white;
   border: none;
   border-radius: 8px;
   padding: 1rem;
   font-size: 1.1rem;
   font-weight: 600;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.5rem;
   margin-top: 1.5rem;
   transition: all 0.3s ease;
}

.checkout-button:hover {
   background: #0055b3;
   transform: translateY(-2px);
   box-shadow: 0 4px 12px rgba(0, 102, 204, 0.2);
}

.checkout-icon {
   font-size: 1.2rem;
}

.empty-cart {
   text-align: center;
   padding: 4rem 2rem;
   background: #ffffff;
   border-radius: 12px;
   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.empty-cart-icon {
   font-size: 4rem;
   margin-bottom: 1rem;
}

.empty-cart h2 {
   color: #1d1d1f;
   margin: 0 0 0.5rem;
}

.empty-cart p {
   color: #86868b;
   margin: 0 0 2rem;
}

.continue-shopping {
   display: inline-block;
   background: #0066cc;
   color: white;
   text-decoration: none;
   padding: 0.8rem 1.5rem;
   border-radius: 8px;
   font-weight: 500;
   transition: all 0.3s ease;
}

.continue-shopping:hover {
   background: #0055b3;
   transform: translateY(-2px);
   box-shadow: 0 4px 12px rgba(0, 102, 204, 0.2);
}

@media (max-width: 768px) {
   .cart-content {
      grid-template-columns: 1fr;
   }

   .cart-item {
      grid-template-columns: auto 1fr;
   }

   .remove-button {
      grid-column: 2;
      justify-self: end;
   }
}
</style>
