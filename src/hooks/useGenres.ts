// import useData from "./useData";
import genres from "../data/genresStaticData";

// const apiClient = new APIClient<Genre>('/genres')

export interface Genre {
    id: number;
    name: string;
    image_background : string;
  }

const useGenres = () =>  ({data: genres, isLoading: false})
//   useQuery({
//   queryKey: ['genres'],
//   queryFn: apiClient.getAll
// })


export default useGenres;