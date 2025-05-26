import 'axios';

declare module 'axios' {
   export interface AxiosRequestConfig {
      error?: boolean;
      vueAlertMessage?: {
         message: string;
         error: boolean;
      };
   }
}

declare module 'axios' {
   export interface AxiosResponse {
      error?: boolean;
   }
}
