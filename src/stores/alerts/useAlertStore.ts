import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Alert } from '@/types/message';

export const useAlertStore = defineStore('alert', () => {
   const alerts = ref<Alert[]>([]);
   const showAlert = ref<boolean>(false);

   function addAlert(alert: Alert) {
      alerts.value.push(alert);
      showAlert.value = true;
      setTimeout(() => {
         showAlert.value = false;
      }, 2000);
   }

   function removeAlert(alert: Alert) {
      alerts.value = alerts.value.filter((alert) => alert.message !== alert.message);
   }

   return { alerts, showAlert, addAlert, removeAlert };
});
