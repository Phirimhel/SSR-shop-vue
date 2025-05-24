import { https } from '@/apis/https';

export async function fetchAllProducts() {
   const { data } = await https.get('/products');
   return data;
}

export async function fetchProductById(id: string) {
   const { data } = await https.get(`/products/${id}`);
   return data;
}
