import { https } from '@/apis/https';
import type { Cart } from '@/types/cart';
import type { Product } from '@/types/shopTypes';

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
         vueAlertMessage: {
            message: 'error of creating the cart',
            error: true,
         },
      }
   );
   return data;
}

export async function getCart(): Promise<Cart> {
   const { data } = await https.get('/cart/guest/load', {
      params: {
         cartId: GUEST_CART_ID,
      },
      vueAlertMessage: {
         message: 'error of loading the cart',
         error: true,
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
         vueAlertMessage: {
            message: `error of adding product "${product.title}" to the cart`,
            error: true,
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
         vueAlertMessage: {
            message: 'Error of removing from the cart',
            error: true,
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
