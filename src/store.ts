import { create } from "zustand";

interface Store {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchedGames: any[];
  setSearchedGames: (games: any[]) => void;
}

export const useSearchStore = create<Store>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  searchedGames: [],
  setSearchedGames: (games) => set({ searchedGames: games }),
}));
