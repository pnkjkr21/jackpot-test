import { useSearchStore } from "@/store";
import React, { useEffect } from "react";
import { useSearchGames } from "@/utility/hooks/useSearchGames";
import { useDebounce } from "use-debounce";
import GameCard from "../GameCard";
import styles from "../InfiniteScrollPage/infinite-scroll-page.module.css";

const SearchFilterComponent = () => {
  const { searchQuery } = useSearchStore();
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const { data, isLoading, isError } = useSearchGames(debouncedSearchQuery);
  const { items } = data?.data || [];

  return (
    <div className={styles.container}>
      {items?.map((item: any, index: number) => (
        <GameCard key={item?.thumbnail || index} data={item} />
      ))}
    </div>
  );
};

export default SearchFilterComponent;