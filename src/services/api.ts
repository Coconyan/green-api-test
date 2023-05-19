import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://api.green-api.com';
const TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  // api.interceptors.request.use(
  //   (config: AxiosRequestConfig) => {
  //     const token = getToken();

  //     if (token) {
  //       config.headers['x-token'] = token;
  //     }

  //     return config;
  //   },
  // );

  return api;
};
