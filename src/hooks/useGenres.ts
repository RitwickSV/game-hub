import { useQuery } from "@tanstack/react-query";
// import useData from "./useData";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>('/genres')

export interface Genre {
    id: number;
    name: string;
    image_background : string;
  }

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll
})

export default useGenres;