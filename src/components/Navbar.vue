<template>
   <nav class="sidebar">
      <div class="sidebar-header">
         <h1 class="logo">Shop</h1>
      </div>
      <div class="sidebar-links">
         <router-link to="/shop/products" class="sidebar-link">
            <span class="link-icon">🛍️</span>
            <span class="link-text">Products</span>
         </router-link>
         <router-link to="/shop/wishlist" class="sidebar-link">
            <span class="link-icon">❤️</span>
            <span class="link-text">Wishlist</span>
         </router-link>
         <router-link to="/shop/cart" class="sidebar-link">
            <span class="link-icon">🛒</span>
            <span class="link-text">Cart</span>
         </router-link>
      </div>
   </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.sidebar {
   left: 0;
   top: 0;
   height: 100%;
   border-radius: 10px;

   border-right: 1px solid #e5e5e5;
   display: flex;
   flex-direction: column;
   padding: 2rem 1rem;
   box-shadow: 2px 0 10px rgba(0, 0, 0, 0.03);
   background: linear-gradient(40deg, #ffffff69 0%, #ffffff 100%);
}

.sidebar-header {
   padding: 0 1rem 2rem 1rem;
   border-bottom: 1px solid #f5f5f5;
   margin-bottom: 2rem;
}

.logo {
   font-size: 1.5rem;
   font-weight: 600;
   color: #1d1d1f;
   letter-spacing: -0.5px;
}

.sidebar-links {
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
}

.sidebar-link {
   text-decoration: none;
   color: #1d1d1f;
   font-size: 1rem;
   font-weight: 500;
   padding: 0.8rem 1rem;
   border-radius: 8px;
   transition: all 0.2s ease;
   display: flex;
   align-items: center;
   gap: 0.8rem;
}

.sidebar-link:hover {
   background: #f5f5f7;
   color: #0066cc;
}

.sidebar-link.router-link-active {
   background: #f5f5f7;
   color: #0066cc;
   font-weight: 600;
}

.link-icon {
   font-size: 1.2rem;
   width: 24px;
   text-align: center;
}

.link-text {
   flex: 1;
}

@media (max-width: 768px) {
   .sidebar {
      width: 100%;
      height: auto;
      position: relative;
      padding: 1rem;
   }

   .sidebar-links {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
   }

   .sidebar-link {
      padding: 0.6rem 1rem;
   }

   .link-text {
      display: none;
   }

   .link-icon {
      margin: 0;
   }
}
</style>
