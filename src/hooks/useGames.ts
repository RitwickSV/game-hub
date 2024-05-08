import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";

const apiClient = new APIClient<Game>('/games');

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image : string;
    parent_platforms: {platform: Platform}[]
    metacritic : number;
  }
  
const useGames = () => {
  
  const gameQuery = useGameQueryStore(s=>s.gameQuery);
  
  return useQuery<FetchResponse<Game>, Error>({
 
  queryKey : ['games', gameQuery],
  queryFn: () => apiClient.getAll({
    params:
    {
      genres: gameQuery.genreId,
      parent_platforms: gameQuery.platformId,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchInput
    }
})
})}
export default useGames;