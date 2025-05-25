import type { Product } from '@/types/shopTypes';

export function updateProductQuantity(array: Product[], product: Product, currentQuantity: number) {
   const index = array.findIndex((p) => p.id === product.id);

   if (currentQuantity === 0) {
      array.splice(index, 1);
      return;
   }

   if (index === -1) array.push({ ...product, quantity: currentQuantity });
   else array[index].quantity = currentQuantity;
}
