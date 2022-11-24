import axios from 'axios'

const api = axios.create({
    baseURL: import.meta?.ENV?.BASE_API_URL || "https://5db2-177-87-14-201.sa.ngrok.io"
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