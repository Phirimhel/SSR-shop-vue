<template>
   <TransitionGroup name="alert">
      <div
         v-for="alert in alertStore.alerts"
         :key="alert.id"
         :class="['alert', `alert-${alert.type}`]"
      >
         <div class="alert-icon">
            <span v-if="lastAlert.type === 'success'">✅</span>
            <span v-else-if="lastAlert.type === 'error'">❌</span>
            <span v-else-if="lastAlert.type === 'warning'">⚠️</span>
            <span v-else>ℹ️</span>
         </div>
         <div class="alert-content">
            <div class="alert-title">{{ lastAlert.title }}</div>
            <div class="alert-message">{{ lastAlert.message }}</div>
         </div>
      </div>
   </TransitionGroup>
</template>

<script setup lang="ts">
import { useAlertStore } from '@/stores/alerts/useAlertStore';

import { computed } from 'vue';
const alertStore = useAlertStore();

const lastAlert = computed(() => alertStore.alerts[alertStore.alerts.length - 1]);

defineEmits<{
   (e: 'close'): void;
}>();
</script>

<style scoped>
.alert {
   position: relative;
   display: flex;
   align-items: flex-start;
   gap: 12px;
   padding: 16px;
   border-radius: 12px;
   margin: 8px 0;
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
   backdrop-filter: blur(8px);
   border: 1px solid transparent;
   animation: slideIn 0.3s ease-out;
}

.alert-success {
   background: linear-gradient(135deg, rgba(42, 179, 113, 0.413) 0%, rgba(40, 167, 69, 0.05) 100%);
   border-color: rgba(40, 167, 69, 0.2);
}

.alert-error {
   background: linear-gradient(135deg, rgba(228, 14, 36, 0.365) 0%, rgba(220, 53, 69, 0.05) 100%);
   border-color: rgba(220, 53, 69, 0.2);
}

.alert-warning {
   background: linear-gradient(135deg, rgba(255, 193, 7, 0.391) 0%, rgba(255, 193, 7, 0.05) 100%);
   border-color: rgba(255, 193, 7, 0.2);
}

.alert-info {
   background: linear-gradient(135deg, rgba(23, 162, 184, 0.1) 0%, rgba(23, 162, 184, 0.05) 100%);
   border-color: rgba(23, 162, 184, 0.2);
}

.alert-icon {
   font-size: 1.2rem;
   line-height: 1;
   padding: 4px;
   border-radius: 8px;
}

.alert-content {
   flex: 1;
}

.alert-title {
   font-weight: 600;
   font-size: 1rem;
   margin-bottom: 4px;
   color: #2c3e50;
}

.alert-message {
   font-size: 0.9rem;
   color: #6c757d;
   line-height: 1.4;
}

.alert-close {
   position: absolute;
   top: 8px;
   right: 8px;
   background: none;
   border: none;
   font-size: 1.5rem;
   color: #6c757d;
   cursor: pointer;
   padding: 4px;
   line-height: 1;
   border-radius: 4px;
   transition: all 0.2s ease;
}

.alert-close:hover {
   background: rgba(0, 0, 0, 0.05);
   color: #2c3e50;
}

@keyframes slideIn {
   from {
      opacity: 0;
      transform: translateY(-1000px);
   }
   to {
      opacity: 1;
      transform: translateY(0);
   }
}

.alert-enter-active,
.alert-leave-active {
   transition: all 0.3s ease;
}

.alert-enter-from,
.alert-leave-to {
   opacity: 0;
   transform: translateY(-30px);
}

/* Success specific styles */
.alert-success .alert-title {
   color: #28a745;
}

/* Error specific styles */
.alert-error .alert-title {
   color: #dc3545;
}

/* Warning specific styles */
.alert-warning .alert-title {
   color: #ffc107;
}

/* Info specific styles */
.alert-info .alert-title {
   color: #17a2b8;
}
</style>
