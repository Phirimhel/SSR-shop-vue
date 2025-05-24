<template>
   <div class="products-page">
      <RouterView v-slot="{ Component }">
         <keep-alive>
            <component :is="Component" />
         </keep-alive>
      </RouterView>
   </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { fetchAllProducts } from '@/apis/products';
import type { Product } from '@/types/shopTypes';

const route = useRoute();
</script>

<style scoped>
.products-page {
   height: 100%;
   width: 100%;
   overflow-y: hidden;
}
</style>
