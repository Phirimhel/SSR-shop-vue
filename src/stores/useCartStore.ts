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
      const { data, success } = await cartApi.getCart();
      cartMap.value = new Map(data.products.map((p: Product) => [p.id, p]));
   };

   const add = async (product: Product, quantity: number = 1) => {
      await addLocal(product, quantity);
      const { success } = await cartApi.postProductToCart(product, quantity);
      if (!success) addLocal(product, -quantity);
   };

   const remove = async (product: Product, quantity: number) => {
      await removeLocal(product, quantity);
      const { success } = await cartApi.removeProductFromCart(product, quantity);
      if (!success) addLocal(product, -quantity);
   };

   onMounted(async () => {
      console.log('🟨 | useCartStore | store | onMounted');
      await fetch();
      console.log('🍎 |  MOUNTED | store | fetch | data');
   });

   return { cart, cartMap, ids, quantities, add, remove };
});
