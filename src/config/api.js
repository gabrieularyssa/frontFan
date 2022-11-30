import axios from 'axios'

const api = axios.create({
    baseURL: import.meta?.ENV?.BASE_API_URL || "http://100.24.34.51:3010"
})

api.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem("@auth/token");
  
      if (token && config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

export default api