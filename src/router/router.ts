import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/stores/useUserSrore';

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         redirect: '/shop/products',
      },
      {
         path: '/login',
         name: 'login',
         component: () => import('@/pages/LoginPage.vue'),
      },
      {
         path: '/shop',
         name: 'shop',
         component: () => import('@/pages/ShopPage.vue'),
         redirect: '/shop/products',
         children: [
            {
               path: 'home',
               name: 'home',
               component: () => import('@/views/HomeView.vue'),
               redirect: '/shop/home/profile',
               children: [
                  {
                     path: 'profile',
                     name: 'profile',
                     component: () => import('@/components/home/profile.vue'),
                     meta: {
                        requiresAuth: true,
                     },
                  },
                  {
                     path: 'recent-orders',
                     name: 'recent-orders',
                     component: () => import('@/components/home/History.vue'),
                  },
               ],
            },
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

router.beforeEach((to, from, next) => {
   const userStore = useUserStore();
   if (to.matched.some((record) => record.meta.requiresAuth) && !userStore.isAuthenticated) {
      next({ name: 'login' });
   } else {
      next();
   }
   next();
});

export default router;
