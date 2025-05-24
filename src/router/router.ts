import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         redirect: '/shop/products',
      },
      {
         path: '/shop',
         name: 'shop',
         component: () => import('@/pages/ShopPage.vue'),
         children: [
            {
               path: 'products',
               name: 'products',
               component: () => import('@/views/ProductsView.vue'),
            },
            {
               path: 'cart',
               name: 'cart',
               component: () => import('@/views/CardView.vue'),
            },
            {
               path: 'wishlist',
               name: 'wishlist',
               component: () => import('@/views/WishListView.vue'),
            },
         ],
      },
   ],
});

export default router;
