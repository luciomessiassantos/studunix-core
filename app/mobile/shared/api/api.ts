import axios from "axios";

const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL || "http://localhost:8080",
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 3000,
});

api.interceptors.request.use(
    async (config) => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config;
    },
    (err) => Promise.reject(err)
)


let isRefreshing = false;
let failedQueue = []


// const processQueue = (error, token = null) => {

// }


export default api;
