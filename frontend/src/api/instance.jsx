import axios, { isAxiosError } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000",
});
instance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);
export default instance;
