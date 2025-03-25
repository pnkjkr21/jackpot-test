import { QueryKey, useInfiniteQuery } from "@tanstack/react-query";
import { fetchGames } from "../api/fetchCasinos";

const queryKey: QueryKey = ["games"];

interface UseInfiniteGamesOptions {
  limit?: number;
  category?: string;
  vendor?: string;
}

export function useInfiniteGames({ 
  limit = 50, 
  category, 
  vendor 
}: UseInfiniteGamesOptions = {}) {
  return useInfiniteQuery({
    queryKey: [...queryKey, { category, vendor, limit }], // Unique key per filter
    queryFn: ({ pageParam = 0 }) => {
      return fetchGames({ 
        offset: pageParam * limit, // Start from 0
        limit,
        category,
        vendor,
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.data.items?.length === limit ? allPages.length: undefined
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });
}