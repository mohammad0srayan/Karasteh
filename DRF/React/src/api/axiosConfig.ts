import axios from 'axios';

export const BASE_URL = 'https://karasteh.com/api/';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': '077daf8b-27d1-49c9-9f0f-a595934c7760',
  },
});

// مدیریت پاسخ‌ها و خطاها
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;