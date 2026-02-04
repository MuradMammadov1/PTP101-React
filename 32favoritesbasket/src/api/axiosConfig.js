import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://northwind.vercel.app/api'
});

export default axiosInstance;