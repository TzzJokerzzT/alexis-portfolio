import axios, { type AxiosInstance, type AxiosResponse } from "axios";

const createApiClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3001",
    headers: {
      "Content-Type": "application/json",
    },
  });

  client.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
      console.error("API Error:", error);
      return Promise.reject(error);
    },
  );

  return client;
};

const apiClient = createApiClient();

export const api = {
  get: <T>(url: string) => apiClient.get<T>(url).then((res) => res.data),
};
