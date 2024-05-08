import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchInput? : string;
}

interface GameQueryStore {
    gameQuery : GameQuery,
    setGenreId:(genreId: number)=> void,
    setPlatformId:(platformId: number)=> void,
    setSortOrder:(sortOrder: string)=> void,
    setSearchInput: (searchInput: string) => void,
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setGenreId: (genreId) => set(state => ({ gameQuery: {...state.gameQuery, genreId, searchInput:undefined } })),
    setPlatformId: (platformId) => set(state => ({gameQuery: {...state.gameQuery, platformId, searchInput:undefined } })),
    setSortOrder: (sortOrder) => set(state => ({gameQuery: {...state.gameQuery, sortOrder } })),
    setSearchInput: (searchInput) => set( () => ({gameQuery: { searchInput } })),
})
)

export default useGameQueryStore;