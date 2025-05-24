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
         vueAlertMessage: 'error of creating the cart',
      }
   );
   return data;
}

export async function getCart(): Promise<Cart> {
   const { data } = await https.get('/cart/guest/load', {
      params: {
         cartId: GUEST_CART_ID,
      },
      vueAlertMessage: 'error of loading the cart',
   });
   return data;
}

export async function postProductToCart(product: Product, quantity: number) {
   //await new Promise((resolve) => setTimeout(resolve, 2000));
   const { data } = await https.post(
      '/cart/guest/add',
      {
         cartId: GUEST_CART_ID,
         productId: product.id,
         quantity: quantity,
      },
      {
         vueAlertMessage: `error of adding product "${product.title}" to the cart`,
      }
   );
   return data;
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
         vueAlertMessage: 'Error of removing from the cart',
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
