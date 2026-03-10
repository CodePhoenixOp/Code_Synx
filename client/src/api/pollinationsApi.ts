import axios, { AxiosInstance } from "axios"

const openaiBaseUrl = "https://api.openai.com/v1"

const instance: AxiosInstance = axios.create({
    baseURL: openaiBaseUrl,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
})

export default instance
