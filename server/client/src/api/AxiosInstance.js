import axios from "axios";

const SERVER_PORT=process.env.SERVER_PORT
const AxiosInstance = axios.create({
    baseURL: `http://localhost:${SERVER_PORT}/api/v1`,
    headers:{
        "Content-Type":'application/json'
    },
    withCredentials: true
});

export default AxiosInstance;
