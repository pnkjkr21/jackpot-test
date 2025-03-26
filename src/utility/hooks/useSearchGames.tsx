import { QueryKey, useQuery } from "@tanstack/react-query";
import { searchGames } from "../api/searchGames";

const queryKey: QueryKey = ["searchGames"];

export function useSearchGames(searchQuery: string) {
  return useQuery({
    queryKey: [...queryKey, searchQuery], // Unique key per filter
    queryFn: () => searchGames(searchQuery),
    enabled: !!searchQuery,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
    retry: 2,
    retryDelay: attempt => Math.min(1000 * 2 ** attempt, 30000),
  });
}