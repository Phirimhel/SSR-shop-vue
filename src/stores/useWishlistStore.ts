import { defineStore } from 'pinia';
import { useProductCollection } from './composables/useProductCollection';

export const useWishlistStore = defineStore('wishlist', () => {
   const {
      collection: wishlist,
      ids: wishlistIds,
      quantities,
      addLocal,
      removeLocal,
   } = useProductCollection();

   return { wishlist, wishlistIds, quantities, addLocal, removeLocal };
});
