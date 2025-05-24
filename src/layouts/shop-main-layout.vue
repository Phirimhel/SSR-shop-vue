<template>
   <div class="shop-main-layout">
      <div class="alert">
         <Alert />
      </div>
      <div class="header">
         <Header />
      </div>
      <div class="side-bar">
         <navbar />
      </div>
      <div class="main-content">
         <RouterView />
      </div>
   </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Header from '@/components/Header.vue';
import Alert from '@/components/Alert.vue';
</script>

<style scoped>
.shop-main-layout {
   background: linear-gradient(0deg, #a8a8a8 0%, #ffffff 100%);
   display: grid;
   grid-template-columns: 1fr 4fr;
   grid-template-rows: 1fr 10fr;
   grid-template-areas:
      'side-bar header header'
      'side-bar main-content main-content'
      'side-bar main-content main-content';
   box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
   height: 100vh;
   padding: 20px;
   gap: 20px;
}

.header {
   grid-area: header;
}

.side-bar {
   grid-area: side-bar;
}

.main-content {
   grid-area: main-content;
}

.header,
.side-bar,
.main-content {
}

/* Transition styles */
.fade-enter-active,
.fade-leave-active {
   transition: all 0.3s ease;
   position: absolute;
   width: 100%;
}

.fade-enter-from {
   opacity: 0;
   transform: translateX(20px);
}

.fade-leave-to {
   opacity: 0;
   transform: translateX(-20px);
}

/* Ensure the router-view container maintains its position */
.main-content > :first-child {
   position: relative;
}

.alert {
   position: fixed;
   top: 5%;
   right: calc(50% - 25%);
   z-index: 1000;
   width: 50%;
}
</style>
