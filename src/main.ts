import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router/router';

import { onResponseHandler } from './apis/https';
import { useAlertStore } from './stores/alerts/useAlertStore';

const app = createApp(App);

app.use(createPinia());
app.use(router);

onResponseHandler(
   (response: any) => {
      response.data = { success: true, data: response.data };
      return response;
   },
   (error: any) => {
      const errorSuppression = error.config.errorSuppression.message;

      if (!errorSuppression) {
         const criticalError = {
            url: error.config.url,
            method: error.config.method,
            params: error.config.params,
            message: error.message,
            data: error.config.data,
         };

         console.log('🔴🔴🔴 | CRITICAL ERROR ', criticalError);

         document.body.innerHTML = '😵 Critical error ' + JSON.stringify(criticalError);
         return Promise.reject(error);
      }

      const alertStore = useAlertStore();

      if (error.config.errorSuppression.critical) {
         alertStore.addAlert(
            {
               message: errorSuppression,
               type: 'error',
            },
            0
         );
      } else {
         alertStore.addAlert(
            {
               message: errorSuppression,
               type: 'error',
            },
            3000
         );
      }

      return { success: false, data: error.config.errorSuppression.message };
   }
);

app.mount('#app');
