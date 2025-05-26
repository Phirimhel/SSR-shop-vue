<template>
   <nav class="sidebar">
      <div class="sidebar-header">
         <h1 class="logo">Shop</h1>
      </div>
      <div class="sidebar-links">
         <div class="dropdown-container">
            <router-link to="/shop/home" class="sidebar-link" @click="toggleDropdown">
               <span class="link-icon">🏠</span>
               <span class="link-text">Home</span>
               <span class="dropdown-arrow" :class="{ 'is-open': isDropdownOpen }">▼</span>
            </router-link>
            <div class="dropdown-menu" :class="{ 'is-open': isDropdownOpen }">
               <router-link to="/shop/home/profile" class="dropdown-item">
                  <span class="dropdown-icon">👤</span>
                  <span class="dropdown-text">Profile</span>
               </router-link>
               <router-link to="/shop/home/recent-orders" class="dropdown-item">
                  <span class="dropdown-icon">📋</span>
                  <span class="dropdown-text">Order History</span>
               </router-link>
            </div>
         </div>
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

<script setup lang="ts">
import { ref } from 'vue';

const isDropdownOpen = ref(false);

const toggleDropdown = (event: Event) => {
   event.preventDefault();
   isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

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
   position: relative;
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

/* Dropdown Styles */
.dropdown-container {
   position: relative;
}

.dropdown-arrow {
   font-size: 0.8rem;
   transition: transform 0.3s ease;
   color: #666;
}

.dropdown-arrow.is-open {
   transform: rotate(180deg);
}

.dropdown-menu {
   display: none;
   margin-left: 2rem;
   margin-top: 0.5rem;

   border-radius: 8px;

   overflow: hidden;
   transition: all 0.3s ease;
   opacity: 0;
   transform: translateY(-10px);
}

.dropdown-menu.is-open {
   display: block;
   opacity: 1;
   transform: translateY(0);
}

.dropdown-item {
   display: flex;
   align-items: center;
   gap: 0.8rem;
   padding: 0.8rem 1rem;
   color: #1d1d1f;
   text-decoration: none;
   transition: all 0.2s ease;
}

.dropdown-item:hover {
   background: #f5f5f7;
   color: #0066cc;
}

.dropdown-item.router-link-active {
   background: #f5f5f7;
   color: #0066cc;
   font-weight: 600;
}

.dropdown-icon {
   font-size: 1.1rem;
   width: 20px;
   text-align: center;
}

.dropdown-text {
   font-size: 0.9rem;
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

   .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      margin-left: 0;
      width: 200px;
      z-index: 1000;
   }

   .dropdown-text {
      display: block;
   }
}
</style>
