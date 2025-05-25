import { ref, computed } from 'vue';
import type { Product } from '@/types/shopTypes';

export function useProductCollection(initial: Product[] = []) {
   const collectionMap = ref(new Map<number, Product>(initial.map((p) => [p.id, p])));

   const collection = computed(() => Array.from(collectionMap.value.values()));

   const ids = computed(() => {
      console.log('🟨 | store | computed: ids');
      return new Set(collectionMap.value.keys());
   });

   const quantities = computed(() => {
      console.log('🟨 | store | computed: quantities');
      const map = new Map<number, number>();
      collectionMap.value.forEach((p) => map.set(p.id, p.quantity));
      return map;
   });

   const addLocal = (product: Product, quantity: number) => {
      const existing = collectionMap.value.get(product.id);
      if (existing) existing.quantity += quantity;
      else collectionMap.value.set(product.id, { ...product, quantity });
   };

   const removeLocal = (product: Product, quantity: number) => {
      const existing = collectionMap.value.get(product.id);
      if (!existing) return;

      existing.quantity -= quantity;

      if (existing.quantity <= 0) collectionMap.value.delete(product.id);
   };

   const clearLocal = () => {
      collectionMap.value.clear();
   };

   return {
      collection,
      collectionMap,
      ids,
      quantities,
      addLocal,
      removeLocal,
      clearLocal,
   };
}
