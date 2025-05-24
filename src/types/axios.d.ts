import 'axios';

declare module 'axios' {
   export interface AxiosRequestConfig {
      vueAlertMessage?: string;
   }
}
