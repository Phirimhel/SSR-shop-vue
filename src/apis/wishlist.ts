import { https } from './https';
import type { Product } from '@/types/shopTypes';

const WISHLIST_KEY = 'wishlist';

export async function setWishlist(wishlist: Product[]) {
   localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

export async function fetchWishlist(): Promise<Product[]> {
   if (!localStorage.getItem(WISHLIST_KEY)) {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify([]));
   }
   const data = localStorage.getItem(WISHLIST_KEY);
   return data ? JSON.parse(data) : [];
}

export async function delteWishlistItem(product: Product) {
   const wishlist = await fetchWishlist();
   const newWishlist = wishlist.filter((p) => p.id !== product.id);
   localStorage.setItem(WISHLIST_KEY, JSON.stringify(newWishlist));
}
