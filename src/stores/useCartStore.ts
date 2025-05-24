import * as cartApi from '@/apis/cart';
import type { Product } from '@/types/index';
import { defineStore } from 'pinia';
import { computed, onMounted } from 'vue';

import { useProductCollection } from './composables/useProductCollection';

export const useCartStore = defineStore('cart', () => {
   const {
      collection: cart,
      collectionMap: cartMap,
      quantities,
      ids,
      addLocal,
      removeLocal,
   } = useProductCollection();

   const fetch = async () => {
      const response = await cartApi.getCart();
      cartMap.value = new Map(response.products.map((p) => [p.id, p]));
   };

   const add = async (product: Product, quantity: number = 1) => {
      await addLocal(product, quantity);
      await cartApi.postProductToCart(product, quantity);
   };

   const remove = async (product: Product, quantity: number) => {
      await removeLocal(product, quantity);
      await cartApi.removeProductFromCart(product, quantity);
   };

   onMounted(async () => {
      await fetch();
   });

   return { cart, cartMap, ids, quantities, add, remove };
});
