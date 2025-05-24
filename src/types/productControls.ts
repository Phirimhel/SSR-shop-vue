import type { Product } from './shopTypes';

export interface ProductControls {
   index: number;
   productId: number;
   quantity: number;
   quantityInCart: number;
   isInCart: boolean;
   isWishlisted: boolean;
   allowToAddToCart: boolean;
}
