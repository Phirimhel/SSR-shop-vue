import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
   const name = ref('John');
   const age = ref(20);
   const isAuthenticated = ref(false);

   return { name, age, isAuthenticated };
});
