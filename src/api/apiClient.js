import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: { "x-api-key": API_KEY },
});
