import axios from 'axios';

export const https = axios.create({
   baseURL: 'https://philirium.kesug.com',
   timeout: 30000,
});

export function addErrorHandler(fn: any) {
   https.interceptors.response.use((response) => response, fn);
}
