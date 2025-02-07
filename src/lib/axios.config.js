// src/lib/api/config.js
import CONFIG from '@/lib/contant';
import axios from 'axios';

// API Configuration
const API_CONFIG = {
    BASE_URL: CONFIG.BASE_API,
    TIMEOUT: 30000,
    RETRY_COUNT: 3,
    RETRY_DELAY: 1000,
};

// Create axios instance
const axiosInstance = axios.create({
    baseURL: API_CONFIG.BASE_URL,
    timeout: API_CONFIG.TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// Request retry logic
const retryRequest = async (error) => {
    const { config } = error;

    // Create retry count if it doesn't exist
    config.retryCount = config.retryCount || 0;

    // Check if we should retry the request
    if (config.retryCount >= API_CONFIG.RETRY_COUNT) {
        return Promise.reject(error);
    }

    // Increase retry count
    config.retryCount += 1;

    // Create new promise to handle retry delay
    const backoff = new Promise((resolve) => {
        setTimeout(() => resolve(), API_CONFIG.RETRY_DELAY * config.retryCount);
    });

    // Wait for backoff delay, return request call
    await backoff;
    return axiosInstance(config);
};

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // Get token from storage
        const token = localStorage.getItem('token');

        // If token exists, add to headers
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Add language header if needed
        const language = localStorage.getItem('language') || 'en';
        config.headers['Accept-Language'] = language;

        // Add timestamp to prevent caching if needed
        if (config.method === 'get') {
            config.params = {
                ...config.params,
                timestamp: new Date().getTime(),
            };
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        // You can modify the response data here
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        // Handle network errors
        if (!error.response) {
            return retryRequest(error);
        }

        // Handle different error status codes
        switch (error.response.status) {
            case 401: // Unauthorized
                // Clear user data
                localStorage.clear();

                // If not already redirecting to login and not a login request
                if (!originalRequest.url.includes('login')) {
                    window.location.href = '/login';
                }
                break;

            case 403: // Forbidden
                // Handle forbidden access
                console.error('Forbidden access:', error);
                break;

            case 404: // Not Found
                // Handle not found
                console.error('Resource not found:', error);
                break;

            case 408: // Request Timeout
            case 500: // Server Error
            case 502: // Bad Gateway
            case 503: // Service Unavailable
            case 504: // Gateway Timeout
                // Retry the request for these status codes
                return retryRequest(error);

            default:
                // Handle other errors
                console.error('API Error:', error);
        }

        // Create user-friendly error message
        const errorMessage = error.response?.data?.message
            || error.message
            || 'An unexpected error occurred';

        // You can dispatch to your error handling system here
        // For example, using a toast notification system
        // toast.error(errorMessage);

        return Promise.reject({
            ...error,
            userMessage: errorMessage,
        });
    }
);

// API response wrapper
const apiWrapper = async (request) => {
    try {
        const response = await request;
        return {
            data: response.data,
            error: null,
            status: response.status,
        };
    } catch (error) {
        return {
            data: null,
            error: error.userMessage || 'An error occurred',
            status: error.response?.status,
        };
    }
};

// Export the wrapped instance
export const api = {
    get: (url, config) => apiWrapper(axiosInstance.get(url, config)),
    post: (url, data, config) => apiWrapper(axiosInstance.post(url, data, config)),
    put: (url, data, config) => apiWrapper(axiosInstance.put(url, data, config)),
    patch: (url, data, config) => apiWrapper(axiosInstance.patch(url, data, config)),
    delete: (url, config) => apiWrapper(axiosInstance.delete(url, config)),
};

// Example usage of API methods with error handling
export const exampleApiCall = async () => {
    const { data, error, status } = await api.get('/users');

    if (error) {
        console.error('Error fetching users:', error);
        return null;
    }

    return data;
};

export default axiosInstance;