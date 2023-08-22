import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "localhost:3001/api/v1/" // Your base URL here
});

export default AxiosInstance;
