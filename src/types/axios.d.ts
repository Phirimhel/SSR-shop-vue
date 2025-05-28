import 'axios';

declare module 'axios' {
   export interface AxiosRequestConfig {
      errorSuppression?: {
         message: string;
         critical: boolean;
      };
   }
}

declare module 'axios' {
   export interface AxiosResponse {
      success?: boolean;
      data?: any;
   }
}
