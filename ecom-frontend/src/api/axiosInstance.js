import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// --- ADD THIS: Request Interceptor to attach token automatically ---
axiosInstance.interceptors.request.use(
  (config) => {
    // Get user from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    
    // If user exists and has a token, attach it to the request
    if (user?.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;