import { fetchGames } from "@/utility/api/fetchCasinos";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

const useCasinos = (params:any = {}) => {
    if (!params) {
        return {
            data: [],
            isLoading: false,
            isError: false,
        }
    }
  const actualLimit = params.limit ?? 50;
  const actualOffset = params.offset ?? 0;

  // Use useMemo to ensure a stable queryKey
  const queryKey = useMemo(() => {
    const key = ["getCasinoGames", actualLimit, actualOffset];

    if (params.category) key.push(params.category);
    if (params.vendor) {
      key.push(
        ...(Array.isArray(params.vendor) ? [...params.vendor].sort() : [params.vendor])
      );
    }
    if (params.sort) key.push(params.sort);
    if (params.order) key.push(params.order);
    if (params.excludeCategory) key.push(params.excludeCategory);

    return key;
  }, [
    actualLimit,
    actualOffset,
    params.category,
    params.vendor,
    params.sort,
    params.order,
    params.excludeCategory,
  ]);
  
  console.log(queryKey)

  return useQuery({
    queryKey,
    queryFn: () => fetchGames(params),
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
};

export default useCasinos;