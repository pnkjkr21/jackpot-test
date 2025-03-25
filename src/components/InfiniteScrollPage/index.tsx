import React from "react";
import GameCard from "../GameCard";
import styles from "./infinite-scroll-page.module.css";
import carouselStyles from "../Carousel/carousel.module.css";
import { useInfiniteGames } from "@/utility/hooks/useInfiniteSearchGames";
import InfinitScrollContainer from "../InfinitScrollContainer.tsx/index";

const InfiniteScrollPage = ({ params }: { params: any }) => {
  const {
    data,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    isPending,
    isFetching,
  } = useInfiniteGames(params);
  const searchData = data?.pages.flatMap((page: any) => page.data?.items);

  if (isPending) {
    return (
      <div className={styles.container}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className={`${carouselStyles.loadingCard} ${carouselStyles.shimmer}`}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <InfinitScrollContainer
        onBottomReached={() => {
          if (!isFetchingNextPage) {
            fetchNextPage();
          }
        }}
        style={{ display: "flex", flexWrap: "wrap", gap: "13px" }}
      >
        {searchData &&
          searchData.length > 0 &&
          searchData?.map((item: any, index: number) => (
            <div key={item?.thumbnail || index}>
              {item && <GameCard key={item?.thumbnail || index} data={item} />}
            </div>
          ))}
      </InfinitScrollContainer>

      {isFetchingNextPage &&
        Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className={`${carouselStyles.loadingCard} ${carouselStyles.shimmer}`}
          />
        ))}
    </div>
  );
};

export default InfiniteScrollPage;
