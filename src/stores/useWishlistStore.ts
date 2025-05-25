import { defineStore } from 'pinia';
import { useProductCollection } from './composables/useProductCollection';
import * as wishlistApi from '@/apis/wishlist';
import type { Product } from '@/types/shopTypes';
import { onMounted } from 'vue';

export const useWishlistStore = defineStore('wishlist', () => {
   const {
      collection: wishlist,
      collectionMap: wishlistMap,
      ids: wishlistIds,
      quantities,
      addLocal,
      removeLocal,
   } = useProductCollection();

   const fetch = async () => {
      const data: Product[] = await wishlistApi.fetchWishlist();
      wishlistMap.value = new Map(data.map((p) => [p.id, p]));
   };

   const add = async (product: Product) => {
      await addLocal(product, 1);
      await wishlistApi.setWishlist([...wishlist.value, product]);
   };

   const remove = async (product: Product) => {
      await removeLocal(product, product.quantity);
      await wishlistApi.delteWishlistItem(product);
   };

   onMounted(async () => {
      await fetch();
   });

   return { wishlist, wishlistIds, quantities, add, remove };
});
