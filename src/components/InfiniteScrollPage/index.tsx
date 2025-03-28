import React from "react";
import GameCard from "../GameCard";
import carouselStyles from "../Carousel/carousel.module.css";
import { useInfiniteGames } from "@/utility/hooks/useInfiniteSearchGames";
import InfinitScrollContainer from "../InfinitScrollContainer.tsx/index";
import { isEmpty } from "lodash";
import NoDataComponent from "../NoDataComponent.tsx";
import ErrorState from "../ErrorState";
import LoadingState from "../LoadingState/LoadingState";

export const INLINE_STYLE_FOR_GAME_CARD = {
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(150px, 1fr))`,
  width: "100%",
  padding: "20px 0px",
  gap: "20px",
  boxSizing: "border-box" as const,
};

const InfiniteScrollPage = ({ params }: { params: any }) => {
  const {
    data,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    isPending,
    isFetching,
    isError,
  } = useInfiniteGames(params);
  const searchData = data?.pages.flatMap((page: any) => page.data?.items)?.filter((item: any) => !isEmpty(item)) || [];

  if (isPending) {
    return (
      <LoadingState />
    );
  }
  
  if (isError) {
    return (
      <ErrorState />
    )
  }
  
  if (isEmpty(searchData)) {
    return (
      <NoDataComponent />
    )
  }

  return (
    <div>
      <InfinitScrollContainer
        style={INLINE_STYLE_FOR_GAME_CARD}
        onBottomReached={() => {
          if (!isFetchingNextPage) {
            fetchNextPage();
          }
        }}
      >
        {
          searchData?.map((item: any, index: number) => (
            <GameCard key={item?.thumbnail || index} data={item} />
          ))
          }
      </InfinitScrollContainer>
      {isFetchingNextPage && (
        <LoadingState />
      )}
    </div>
  );
};

export default InfiniteScrollPage;
