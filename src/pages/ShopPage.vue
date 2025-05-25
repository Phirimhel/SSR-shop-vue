<template>
   <div class="products-page">
      <RouterView v-slot="{ Component }">
         <keep-alive>
            <component :is="Component" />
         </keep-alive>
      </RouterView>
   </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.products-page {
   height: 100%;
   width: 100%;
   overflow-y: hidden;
}
</style>
