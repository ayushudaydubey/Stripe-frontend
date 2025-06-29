import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://stripe-backend-k7a0.onrender.com',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
