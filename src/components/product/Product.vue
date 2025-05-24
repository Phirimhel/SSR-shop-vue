<template>
   <div class="product-item">
      <div class="product-title">
         <div class="product-title-text">{{ product.title }}</div>
         <div class="product-rating">
            <span class="rating-star">★</span>
            <span class="rating-value">{{ product.rating.rate }}</span>
            <span class="rating-count">{{ product.rating.count }}</span>
         </div>
      </div>
      <div class="product-image-container">
         <img class="product-image" :src="product.image" alt="product image" />

         <transition name="quantity-controls">
            <div class="quantity-controls" v-if="inCart">
               <button
                  class="quantity-btn"
                  @click="decreaseQuantity()"
                  :disabled="quantityInCart ? quantityInCart <= 0 : false"
               >
                  -
               </button>
               <span class="quantity-value">{{ quantityInCart }}</span>
               <button class="quantity-btn" @click="increaseQuantity()" :disabled="false">+</button>
            </div>
         </transition>
         <button class="wishlist-button" @click="">
            <span class="wishlist-icon" v-if="false"> ✔️ </span>
            <span class="wishlist-icon" v-else> 🤍 </span>
         </button>
      </div>
      <div class="product-quantity">
         <span>In stock:</span>
         <span>{{ productsLeft }}</span>
      </div>
      <div class="product-info">
         <div class="product-description">
            <div class="product-description-text">{{ product.description }}</div>
         </div>

         <div class="product-title-price">
            <div class="product-price">{{ product.price }}</div>
            <button
               :disabled="false"
               class="product-category"
               @click="inCart ? removeProductFromCart() : addProductToCart()"
               :class="{ 'is-in-cart': inCart }"
            >
               {{ inCart ? 'Remove from Cart' : 'Add to Cart' }}
            </button>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/useCartStore';
import type { Product } from '@/types/shopTypes';
import { watch } from 'vue';

const { product, inCart, quantityInCart, productsLeft } = defineProps<{
   product: Product;
   inCart: boolean;
   quantityInCart: number;
   productsLeft: number;
}>();

const cartStore = useCartStore();

watch(
   () => product,
   (newProduct) => {
      console.log('🧿| Product changed:', newProduct);
   },
   { deep: true }
);

watch(
   () => inCart,
   (newInCart) => {
      console.log('🧿| Cart status changed:', newInCart);
   }
);

watch(
   () => quantityInCart,
   (newQuantity) => {
      console.log('🧿| Quantity in cart changed:', newQuantity);
   }
);

watch(
   () => productsLeft,
   (newProductsLeft) => {
      console.log('🧿 | Products left changed:', newProductsLeft);
   }
);

const addProductToCart = () => {
   console.log('🟪 | action: addProductToCart');
   cartStore.add(product);
};

const removeProductFromCart = async () => {
   console.log('🟪 | action: removeProductFromCart');
   cartStore.remove(product, quantityInCart);
};

const increaseQuantity = async () => {
   console.log('🟪 | action: increaseQuantity');
   cartStore.add(product, 1);
};

const decreaseQuantity = async () => {
   console.log('🟪 | action: decreaseQuantity');
   cartStore.remove(product, 1);
};
</script>

<style scoped>
.product-item {
   display: grid;
   grid-template-rows: auto 1fr auto;
   width: 300px;
   height: 500px;
   background: linear-gradient(145deg, #ffffff 30%, #e4e5e7 100%);
   border-radius: 16px;
   border: 0.5px solid #e4e5e7;
   padding: 16px;
   margin: 10px;
   gap: 16px;
   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
   transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
}

.product-item:hover {
   transform: translateY(-5px);
   box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.product-title {
   font-size: 1rem;
   display: grid;
   grid-template-columns: 3fr 1fr;
   padding: 8px;
   background: linear-gradient(90deg, #f8f9fa 0%, #e9ecef 100%);
   border-radius: 10px;
   gap: 12px;
}

.product-title-text {
   font-size: 1.1rem;
   font-weight: 600;
   color: #2c3e50;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   border-radius: 10px;
}

.product-rating {
   display: flex;
   align-items: center;
   gap: 4px;
   padding: 4px 8px;
   background: linear-gradient(135deg, #fff4ea 0%, #fff9f0 100%);
   border-radius: 12px;
   font-size: 0.9rem;
   transition: all 0.3s ease;
}

.product-rating:hover {
   transform: translateY(-1px);
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.rating-star {
   color: #ffd700;
   font-size: 1rem;
   text-shadow: 0 1px 2px rgba(255, 215, 0, 0.3);
}

.rating-value {
   font-weight: 600;
   color: #2c3e50;
}

.rating-count {
   color: #6c757d;
   font-size: 0.85rem;
}

.product-image-container {
   width: 100%;
   height: 200px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 12px;
   background: #ffffff;
   padding: 16px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   transition: all 0.3s ease;
   position: relative;
}

.product-image-container:hover {
   transform: scale(1.02);
}

.product-image {
   width: auto;
   height: 100%;
   max-width: 100%;
   object-fit: contain;
}

.product-info {
   display: grid;
   gap: 12px;
   background: linear-gradient(90deg, #f8f9fa 0%, #e9ecef 100%);
   padding: 12px;
   border-radius: 10px;
}

.product-description {
   color: #495057;
}

.product-description-text {
   display: -webkit-box;
   -webkit-line-clamp: 3;
   line-clamp: 3;
   -webkit-box-orient: vertical;
   overflow: hidden;
   text-overflow: ellipsis;
   font-size: 0.9rem;
   line-height: 1.4;
}

.product-title-price {
   background: transparent;
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.product-price {
   font-size: 1.2rem;
   font-weight: 600;
   color: #2c3e50;
   padding: 8px;
   background: #ffffff;
   border-radius: 8px;
   display: inline-block;
}

.product-price::before {
   content: '$';
   margin-right: 2px;
}

.product-actions {
   display: flex;
   justify-content: center;
   gap: 12px;
   margin-top: 8px;
}

.cart-button:hover {
   transform: translateY(-2px);
   box-shadow: 0 4px 12px rgba(76, 175, 80, 0.2);
}

.cart-button:active {
   transform: translateY(0);
}

.wishlist-button {
   position: absolute;
   top: 12px;
   right: 12px;
   background: white;
   border: none;
   border-radius: 50%;
   width: 40px;
   height: 40px;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
   transition: all 0.3s ease;
}

.wishlist-button:hover {
   transform: scale(1.1);
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.wishlist-button i {
   font-size: 1.2rem;
   color: #ff4757;
}

.product-category {
   padding: 6px 12px;
   border: none;
   border-radius: 8px;
   border: 1px solid #d8d8d8;
   background: rgb(244, 244, 244);
   color: #2c3e50;
   font-size: 0.85rem;
   font-weight: 500;
   cursor: pointer;
   transition: all 0.3s ease;
   height: 100%;
}

.product-category:hover {
   background: #ffffff;
}

.product-category:disabled {
   background: #e9ecef;
   color: #6c757d;
   cursor: not-allowed;
}

.is-in-cart {
   background: linear-gradient(135deg, #ffffff 0%, #faede6 100%);
}

.quantity-controls {
   position: absolute;
   bottom: 12px;
   left: 12px;
   display: flex;
   align-items: center;
   gap: 8px;
   margin-right: 12px;
   padding: 4px;
   border-radius: 8px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
   background: white;
   width: fit-content;
}

.quantity-btn {
   width: 32px;
   height: 32px;
   border: none;
   background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
   border-radius: 6px;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   font-size: 1.2rem;
   font-weight: 600;
   color: #2c3e50;
   transition: all 0.2s ease;
   user-select: none;
}

.quantity-btn:disabled {
   opacity: 0.5;
   cursor: not-allowed;
   background: #f1f3f5;
}

.quantity-btn:hover:not(:disabled) {
   background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
   transform: translateY(-1px);
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.quantity-btn:active:not(:disabled) {
   transform: translateY(0);
   box-shadow: none;
}

.quantity-value {
   min-width: 32px;
   text-align: center;
   font-weight: 600;
   font-size: 1.1rem;
   color: #2c3e50;
   padding: 0 4px;
   user-select: none;
}

.product-rating-container {
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 12px;
   padding: 8px 16px;
   background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%);
   backdrop-filter: blur(8px);
   border-radius: 20px;
   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
   margin: 12px 0;
   position: relative;
   overflow: hidden;
   transition: all 0.3s ease;
}

.product-rating-container::before {
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   height: 2px;
   background: linear-gradient(90deg, transparent 0%, #ffd700 50%, transparent 100%);
   animation: shimmer 2s infinite;
}

.product-rating-container:hover {
   transform: translateY(-2px);
   box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.product-rating-rate {
   font-size: 1.2rem;
   font-weight: 700;
   color: #2c3e50;
   display: flex;
   align-items: center;
   gap: 4px;
}

.product-rating-rate::before {
   content: '★';
   color: #ffd700;
   font-size: 1.4rem;
   text-shadow: 0 2px 4px rgba(255, 215, 0, 0.3);
}

.product-rating-count {
   font-size: 0.9rem;
   color: #6c757d;
   padding: 4px 8px;
   background: rgba(255, 255, 255, 0.8);
   border-radius: 12px;
   font-weight: 500;
   transition: all 0.3s ease;
}

.product-rating-count:hover {
   background: rgba(255, 255, 255, 0.95);
   transform: scale(1.05);
}

@keyframes shimmer {
   0% {
      transform: translateX(-100%);
   }
   100% {
      transform: translateX(100%);
   }
}

.quantity-info {
   font-size: 0.8rem;
   color: #6c757d;
   padding: 4px 8px;
}

.low-quantity {
   color: rgb(234, 179, 102);
}

.quantity-controls-disabled {
   opacity: 0.5;
   cursor: not-allowed;
}

.quantity-controls-enter-active,
.quantity-controls-leave-active {
   transition: all 0.3s ease;
}

.quantity-controls-enter-from,
.quantity-controls-leave-to {
   opacity: 0;
   transform: translateY(20px);
}

.product-quantity {
   margin-left: 10px;
   font-size: 0.8rem;
   font-weight: 500;
   color: #959798;
   -webkit-background-clip: text;
   background-clip: text;
   display: flex;
   align-items: center;
   gap: 4px;
   letter-spacing: 0.5px;
}
</style>
