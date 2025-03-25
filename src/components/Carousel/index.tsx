import { useRef } from "react";
import GameCard from "../GameCard";
import Header from "./Header";
import styles from "./carousel.module.css";
import useCasinos from "@/utility/hooks/useCasinos";
import { isEmpty } from "lodash";


const CarouselComponent = ({
  title,
  params,
  Icon,
  id,
}: {
  title: string;
  params: any;
  Icon: React.ComponentType;
  id: string;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { data, isLoading: useCasinosLoading } = useCasinos(params);
  const { items = [] } = data?.data || {}

  //implement two buttons to scroll left and right such than on clicking right it will take me to last set of items and on clicking left it will take me to first set of items
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += (200 + 16) * 12; // Adjust the amount to scroll
    }
  };
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0; // Adjust the amount to scroll
    }
  };
  const isLeftButtonDisabled =
    scrollContainerRef.current?.scrollLeft === 0 && false;
  const isRightButtonDisabled =
    scrollContainerRef.current?.scrollLeft === (items?.length - 1) * (200 + 16);

  return (
    <div>
      <Header
        handleScrollLeft={handleScrollLeft}
        handleScrollRight={handleScrollRight}
        isLeftButtonDisabled={isLeftButtonDisabled}
        isRightButtonDisabled={isRightButtonDisabled}
        title={title}
        Icon={Icon}
        id={id}
      />
      <div
        ref={scrollContainerRef}
        className={`${styles.carouselContainer}`}
      >
        {useCasinosLoading ? (
          // Show shimmer loading cards
          Array(12)
            .fill(0)
            .map((_, index) => (
              <div key={`loading-${index}`} className={styles.gameCardWrapper}>
                <div className={`${styles.loadingCard} ${styles.shimmer}`} />
              </div>
            ))
        ) : (
          <>
            {/* Show actual cards */}
            {!isEmpty(items) ? (
              items?.map((item: any) => (
                <div key={item?.thumbnail} className={styles.gameCardWrapper}>
                  <GameCard data={item} />
                </div>
              ))
            ) : (
              <>
                <div className={styles.noData}>No data found</div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CarouselComponent;
