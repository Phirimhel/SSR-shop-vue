import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router/router';

import { addErrorHandler } from './apis/https';
import { useAlertStore } from './stores/alerts/useAlertStore';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

addErrorHandler((error: any) => {
   const alertStore = useAlertStore();
   const vueAlertMessage = error?.config?.vueAlertMessage;

   if (vueAlertMessage) {
      alertStore.addAlert({
         message: vueAlertMessage.message,
         type: 'error',
      });
   }
   alertStore.showAlert = true;
   return { error: true, vueAlertMessage };
});
