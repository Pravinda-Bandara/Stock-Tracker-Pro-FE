// src/Services/ApiClient.ts
import axios from 'axios';
import { AxiosResponse, AxiosError } from 'axios';
import { toast } from 'react-toastify';

// Create an Axios instance
const apiClient = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'https://localhost:7242/api/' : '/',
    headers: {
        'Content-type': 'application/json',
    },
});

// Request Interceptor to add Authorization token to headers
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor to handle various error cases

export const setupInterceptors = (navigate: (path: string) => void) => {
  apiClient.interceptors.response.use(
      (response: AxiosResponse) => response, // pass the response to the next handler
      (error: AxiosError) => {
          if (error.response) {
              const { status, data } = error.response;

              // Check if `data` has a `message` property
              const message = data && typeof data === 'object' && 'message' in data
                  ? (data as { message: string }).message
                  : 'An unexpected error occurred.';

              switch (status) {
                  case 401:
                      console.warn('Unauthorized: Session expired or credentials invalid.');
                      localStorage.removeItem('token');
                      localStorage.removeItem('user');
                      toast.error('Session expired. Please log in again.');
                      navigate('/login');
                      break;
                  case 403:
                      console.warn('Forbidden: Access denied.');
                      toast.error('You do not have permission to access this resource.');
                      navigate('/unauthorized');
                      break;
                  case 500:
                      console.error('Internal Server Error. Please try again later.');
                      toast.error('Internal server error. Please try again later.');
                      break;
                  default:
                      console.error(`Error: ${message}`);
                      toast.error(message);
                      break;
              }
          } else {
              console.error('Network Error: Please check your internet connection.');
              toast.error('Network error. Please check your internet connection.');
          }
          return Promise.reject(error);
      }
  );
};

export default apiClient;
