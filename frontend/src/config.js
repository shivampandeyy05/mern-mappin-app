import axios from "axios"


export const axiosInstance = axios.create({
    baseURL: "https://mappin-app.herokuapp.com/api"
})

