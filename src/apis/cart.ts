import { https } from '@/apis/https';
import type { Cart } from '@/types/cart';
import type { Product } from '@/types/shopTypes';
import type { AxiosResponse } from 'axios';

const GUEST_CART_ID = 'GUEST_CART_ID';
const PRODUCT_ID = 1;
const QUANTITY = 1;

export async function createCart() {
   const { data } = await https.post(
      '/cart/guest/add',
      {
         cartId: GUEST_CART_ID,
         productId: PRODUCT_ID,
         quantity: QUANTITY,
      },
      {
         errorSuppression: {
            message: 'error of creating the cart',
            critical: false,
         },
      }
   );
   return data;
}

export async function getCart(): Promise<AxiosResponse<Cart>> {
   const { data } = await https.get('/cart/guest/load1', {
      params: {
         cartId: GUEST_CART_ID,
      },
      errorSuppression: {
         message: 'Critical error of loading the cart, pls try reload the page',
         critical: true,
      },
   });

   return data;
}

export async function postProductToCart(product: Product, quantity: number) {
   //await new Promise((resolve) => setTimeout(resolve, 2000));
   const response = await https.post(
      '/cart/guest/add',
      {
         cartId: GUEST_CART_ID,
         productId: product.id,
         quantity: quantity,
      },
      {
         errorSuppression: {
            message: `error of adding product "${product.title}" to the cart`,
            critical: false,
         },
      }
   );
   return response;
}

export async function removeProductFromCart(product: Product, quantity: number) {
   const { data } = await https.post(
      '/cart/guest/remove',
      {
         cartId: GUEST_CART_ID,
         productId: product.id,
         quantity: quantity,
      },
      {
         errorSuppression: {
            message: 'error of removing from the cart',
            critical: false,
         },
      }
   );
   return data;
}

// export function createGuestCartInLocalStorage() {
//    const cartId = Math.random().toString(36).substring(2, 15);
//    const cart: Cart = {
//       id: cartId,
//       products: [],
//    };

// }
