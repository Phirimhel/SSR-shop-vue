import axios, { AxiosError, type AxiosResponse } from 'axios';

export const https = axios.create({
   baseURL: 'https://philirium.kesug.com',
   timeout: 30000,
});

export function onResponseHandler(onSuccess: any, onError: any) {
   https.interceptors.response.use(onSuccess, onError);
}
