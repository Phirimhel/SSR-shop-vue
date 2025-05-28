import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Alert } from '@/types/message';

let id = 0;

export const useAlertStore = defineStore('alert', () => {
   const alerts = ref<Alert[]>([]);

   function addAlert(alert: Alert, timeout: number) {
      alert.id = id++;
      alerts.value.push(alert);

      if (timeout) {
         setTimeout(() => {
            removeAlert(alert.id!);
         }, timeout);
      }
   }

   function removeAlert(id: number) {
      alerts.value = alerts.value.filter((alert) => alert.id !== id);
   }

   return { alerts, addAlert };
});
