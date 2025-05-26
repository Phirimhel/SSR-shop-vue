<template>
   <div class="wishlist-container">
      <div class="wishlist-header">
         <h1 class="wishlist-title">Wishlist</h1>
         <p class="wishlist-subtitle">{{ wishlistIds.size }} items</p>
      </div>
      <div class="wishlist-content" v-if="wishlistIds.size > 0">
         <div class="wishlist-items">
            <div v-for="product in products" :key="product.id" class="wishlist-item">
               <div class="item-image">
                  <img :src="product.image" :alt="product.title" />
               </div>
               <div class="item-details">
                  <h3 class="item-title">{{ product.title }}</h3>
                  <p class="item-price">${{ product.price }}</p>
               </div>
               <button class="remove-button" @click="removeFromWishlist(product)">
                  <span class="remove-icon">✕</span>
               </button>
            </div>
         </div>

         <div class="wishlist-summary">
            <div class="summary-content">
               <h3>Your Wishlist</h3>
               <p class="summary-text">
                  Save items you love and add them to your cart when you're ready to buy.
               </p>
               <div class="summary-stats">
                  <div class="stat-item">
                     <span class="stat-value">{{ wishlistIds.size }}</span>
                     <span class="stat-label">Items</span>
                  </div>
                  <div class="stat-item">
                     <span class="stat-value">${{ totalPrice }}</span>
                     <span class="stat-label">Total Value</span>
                  </div>
               </div>
               <button class="add-all-button">
                  <span class="add-all-icon">+</span>
                  <span>Add All to Cart</span>
               </button>
            </div>
         </div>
      </div>

      <div class="empty-wishlist" v-else>
         <div class="empty-wishlist-icon">❤️</div>
         <h2>Your wishlist is empty</h2>
         <p>Save items you love to your wishlist</p>
         <router-link to="/" class="continue-shopping"> Continue Shopping </router-link>
      </div>
   </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Product } from '../../types/shopTypes';
import { useRouter } from 'vue-router';
import { useWishlistStore } from '@/stores/useWishlistStore';
import { storeToRefs } from 'pinia';

const wishlistStore = useWishlistStore();
const { wishlistIds } = storeToRefs(wishlistStore);

const router = useRouter();

const removeFromWishlist = async (product: Product) => {
   console.log('🟪 | action: removeProductFromCart');
   wishlistStore.remove(product);
};

const { products } = defineProps<{
   products: Product[];
}>();

const totalPrice = computed(() => {
   return products.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2);
});
</script>

<style scoped>
.wishlist-header {
   text-align: center;
}

.wishlist-title {
   font-size: 2rem;
   font-weight: 600;
   color: #1d1d1f;
   margin: 0;
}

.wishlist-subtitle {
   color: #86868b;
   margin: 0.5rem 0 0;
}

.wishlist-header {
   margin-bottom: 2rem;
   text-align: center;
}

.wishlist-title {
   font-size: 2rem;
   font-weight: 600;
   color: #1d1d1f;
   margin: 0;
}

.wishlist-subtitle {
   color: #86868b;
   margin: 0.5rem 0 0;
}

.wishlist-content {
   display: grid;
   grid-template-columns: 2fr 1fr;
   gap: 2rem;
}

.wishlist-items {
   background: #ffffff;
   border-radius: 12px;
   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
   padding: 1.5rem;
   max-height: 600px;
   min-height: 327px;
   overflow-y: auto;
}

.wishlist-item {
   display: grid;
   grid-template-columns: auto 1fr auto;
   gap: 1.5rem;
   padding: 1rem;
   border-bottom: 1px solid #f5f5f7;
   align-items: center;
}

.wishlist-item:last-child {
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

.item-actions {
   display: flex;
   gap: 1rem;
   align-items: center;
}

.add-to-cart-button {
   background: #0066cc;
   color: white;
   border: none;
   border-radius: 8px;
   padding: 0.8rem 1.2rem;
   font-size: 0.95rem;
   font-weight: 500;
   cursor: pointer;
   display: flex;
   align-items: center;
   gap: 0.5rem;
   transition: all 0.3s ease;
}

.add-to-cart-button:hover {
   background: #0055b3;
   transform: translateY(-2px);
   box-shadow: 0 4px 12px rgba(0, 102, 204, 0.2);
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

.wishlist-summary {
   background: #ffffff;
   border-radius: 12px;
   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
   padding: 1.5rem;
   height: fit-content;
}

.summary-content {
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
}

.summary-content h3 {
   font-size: 1.2rem;
   color: #1d1d1f;
   margin: 0;
}

.summary-text {
   color: #86868b;
   font-size: 0.95rem;
   line-height: 1.5;
   margin: 0;
}

.summary-stats {
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 1rem;
   padding: 1rem 0;
   border-top: 1px solid #f5f5f7;
   border-bottom: 1px solid #f5f5f7;
}

.stat-item {
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 0.5rem;
}

.stat-value {
   font-size: 1.2rem;
   font-weight: 600;
   color: #1d1d1f;
}

.stat-label {
   font-size: 0.9rem;
   color: #86868b;
}

.add-all-button {
   width: 100%;
   background: #0066cc;
   color: white;
   border: none;
   border-radius: 8px;
   padding: 1rem;
   font-size: 1rem;
   font-weight: 600;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.5rem;
   transition: all 0.3s ease;
}

.add-all-button:hover {
   background: #0055b3;
   transform: translateY(-2px);
   box-shadow: 0 4px 12px rgba(0, 102, 204, 0.2);
}

.add-all-icon {
   font-size: 1.2rem;
}

.empty-wishlist {
   text-align: center;
   padding: 4rem 2rem;
   background: #ffffff;
   border-radius: 12px;
   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.empty-wishlist-icon {
   font-size: 4rem;
   margin-bottom: 1rem;
}

.empty-wishlist h2 {
   color: #1d1d1f;
   margin: 0 0 0.5rem;
}

.empty-wishlist p {
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
   .wishlist-content {
      grid-template-columns: 1fr;
   }

   .wishlist-item {
      grid-template-columns: 1fr;
   }

   .item-image {
      width: 100%;
      height: 200px;
   }

   .item-actions {
      flex-direction: column;
      align-items: stretch;
   }

   .add-to-cart-button {
      width: 100%;
   }
}
</style>
