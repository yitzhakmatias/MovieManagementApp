import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/services/movieService";

export const useMovies = () => {
    return useQuery({ queryKey: ["movies"], queryFn: getMovies });
};
