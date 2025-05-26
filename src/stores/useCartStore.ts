import * as cartApi from '@/apis/cart';
import type { Product } from '@/types/shopTypes';
import { defineStore } from 'pinia';
import { onMounted } from 'vue';

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
      const { error } = await cartApi.postProductToCart(product, quantity);
      if (error) addLocal(product, -quantity);
   };

   const remove = async (product: Product, quantity: number) => {
      await removeLocal(product, quantity);
      const { error } = await cartApi.removeProductFromCart(product, quantity);
      if (error) addLocal(product, -quantity);
   };

   onMounted(async () => {
      await fetch();
   });

   return { cart, cartMap, ids, quantities, add, remove };
});
