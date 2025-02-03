import { apiClient } from "@/api/apiClient";

export const getMovies = async () => {
    const response = await apiClient.get("/movies");
    return response.data;
};

export const getActors = async () => {
    const response = await apiClient.get("/actors");
    return response.data;
};
