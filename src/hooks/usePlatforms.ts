import platforms from "../data/platformsStaticData";

// const apiClient = new APIClient<Platform>('/platforms/list/parents')

// interface Platform {
//     id: number;
//     name: string;
//     slug: string;
// }

const usePlatforms = () => ({data: platforms, error:null})
//     useQuery({
//     queryKey: ['platforms'],
//     queryFn: apiClient.getAll
// })

export default usePlatforms;