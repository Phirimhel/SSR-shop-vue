<template>
   <header class="header">
      <div class="header-content">
         <div class="header-left">
            <h1 class="brand">Shop</h1>
         </div>
         <div class="header-right">
            <div class="header-actions">
               <router-link to="/shop/wishlist" class="action-button">
                  <span class="action-icon">❤️</span>
                  <span class="action-count" v-if="false">{{ 0 }}</span>
               </router-link>
               <router-link to="/shop/cart" class="action-button">
                  <span class="action-icon">🛒</span>
                  <span class="action-count" v-if="false">{{ 0 }}</span>
               </router-link>
            </div>
         </div>
      </div>
   </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
   background: linear-gradient(40deg, #ffffff69 0%, #ffffff 100%);
   border-bottom: 1px solid #e5e5e5;
   padding: 1rem 2rem;
   position: sticky;
   top: 0;
   box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
   border-radius: 10px;
}

.header-content {
   max-width: 1200px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.brand {
   font-size: 1.5rem;
   font-weight: 600;
   color: #1d1d1f;
   letter-spacing: -0.5px;
   margin: 0;
}

.header-actions {
   display: flex;
   gap: 1.5rem;
   align-items: center;
}

.action-button {
   position: relative;
   text-decoration: none;
   padding: 0.5rem;
   border-radius: 50%;
   transition: all 0.3s ease;
   display: flex;
   align-items: center;
   justify-content: center;
}

.action-button:hover {
   background: rgba(0, 0, 0, 0.05);
}

.action-icon {
   font-size: 1.4rem;
   line-height: 1;
}

.action-count {
   position: absolute;
   top: -5px;
   right: -5px;
   background: #0066cc;
   color: white;
   font-size: 0.75rem;
   font-weight: 600;
   min-width: 18px;
   height: 18px;
   border-radius: 9px;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0 4px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
   .header {
      padding: 1rem;
   }

   .brand {
      font-size: 1.2rem;
   }

   .header-actions {
      gap: 1rem;
   }

   .action-icon {
      font-size: 1.2rem;
   }
}
</style>
