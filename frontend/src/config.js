import axios from "axios"


const axiosInstance = axios.create({
    baseURL: "https://mappin-app.herokuapp.com/api"
})

export default axiosInstance;

