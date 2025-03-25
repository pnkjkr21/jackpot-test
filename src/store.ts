import { create } from "zustand";

interface Store {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useSearchStore = create<Store>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
