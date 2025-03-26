import { create } from "zustand";

interface Store {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  favoriteGames: any[];
  setFavoriteGames: (games: any[]) => void;
}

export const useSearchStore = create<Store>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  favoriteGames: [],
  setFavoriteGames: (games) => set({ favoriteGames: games }),
}));
