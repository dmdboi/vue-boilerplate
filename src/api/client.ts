import axios from "axios";
import router from "@/router";

const baseUrl = import.meta.env.VUE_APP_API_URL;

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const publicAxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function logout() {
  localStorage.removeItem("token");
  clearAxiosAuth();
  return router.push("/");
}

export function setAxiosAuth() {
  axiosInstance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    if (!token) {
      logout();
    }
    if (!config.headers) return config;
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response?.status === 401 || error.message === "401") {
        logout();
        return;
      }
      if (error.response?.status === 402) {
        return;
      }
    }
  );
}

export function clearAxiosAuth() {
  axiosInstance.interceptors.request.use(function (config) {
    if (!config.headers) return config;
    config.headers.Authorization = "";
    return config;
  });
}
