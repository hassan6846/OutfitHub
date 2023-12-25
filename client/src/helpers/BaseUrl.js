import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: process.env.baseURL
});

export default AxiosInstance;
