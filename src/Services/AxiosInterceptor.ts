// src/Services/AxiosInterceptor.ts
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const setupAxiosInterceptor = () => {
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        toast.error("Session expired. Please log in again.");
        const navigate = useNavigate();
        navigate("/");
      }
      return Promise.reject(error);
    }
  );
};

export default setupAxiosInterceptor;
