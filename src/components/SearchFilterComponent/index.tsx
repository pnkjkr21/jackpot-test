import { useSearchStore } from "@/store";
import React, { useEffect } from "react";
import { useSearchGames } from "@/utility/hooks/useSearchGames";
import { useDebounce } from "use-debounce";
import GameCard from "../GameCard";
import styles from "../InfiniteScrollPage/infinite-scroll-page.module.css";
import NoDataComponent from "../NoDataComponent.tsx";
import { isEmpty } from "lodash";
import ErrorState from "../ErrorState";
import LoadingState from "../LoadingState/LoadingState";
const SearchFilterComponent = () => {
  const { searchQuery } = useSearchStore();
  // we are debouncing the search query to avoid unnecessary api calls
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const { data, isLoading, isError } = useSearchGames(debouncedSearchQuery);
  const { items } = data?.data || [];
  
  if (isError) {
    return <ErrorState />
  }
  
  if (isLoading) {
    return <LoadingState />
  }
  return isEmpty(items) ? (
    <NoDataComponent text="No Games Found For this Filter" />
  ) : (
    <div className={styles.container}>
      {items?.map((item: any, index: number) => (
        <GameCard key={item?.thumbnail || index} data={item} />
      ))}
    </div>
  );
};

export default SearchFilterComponent;
