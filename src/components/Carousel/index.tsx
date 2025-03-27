import { useRef, useState, useEffect } from "react";
import GameCard from "../GameCard";
import Header from "./components/Header/Header";
import styles from "./carousel.module.css";
import useCasinos from "@/utility/hooks/useCasinos";
import { isEmpty } from "lodash";
import ViewAllCard from "../ViewAllCard";
import { usePathname, useRouter } from "next/navigation";
import ErrorCarouselState from "./components/ErrorState/index";
import NoDataCarouselState from "./components/NoDataState/index";

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
  
  const router = useRouter()
  const pathname = usePathname()
  
  const viewAll = () => {
      router.push(`${pathname}?category=${id}`)
  }
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, isError } = useCasinos(params);
  const { items = [] } = data?.data || {}

  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(true);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);

  // this useEffect is used to check if the user has scrolled to the left or right of the carousel
  // if the user has scrolled to the left or right of the carousel then the isLeftButtonDisabled or isRightButtonDisabled is set to true
  useEffect(() => {
    const updateButtonStates = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        setIsLeftButtonDisabled(container.scrollLeft <= 0);
        
        // Check if we've reached the end of scroll
        const hasReachedEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;
        setIsRightButtonDisabled(hasReachedEnd);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateButtonStates);
      // Initial check
      updateButtonStates();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', updateButtonStates);
      }
    };
  }, [items]);


  //implement two buttons to scroll left and right such than on clicking right it will take me to last set of items and on clicking left it will take me to first set of items
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += (171 + 16) * 13; // Adjust the amount to scroll
    }
  };
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0; // Adjust the amount to scroll
    }
  };

  return (
    <div>
      <Header
        handleScrollLeft={handleScrollLeft}
        handleScrollRight={handleScrollRight}
        isLeftButtonDisabled={isLeftButtonDisabled}
        isRightButtonDisabled={isRightButtonDisabled}
        title={title}
        Icon={Icon}
        viewAll={viewAll}
        isError={isError}
      />
      <div
        ref={scrollContainerRef}
        className={`${styles.carouselContainer}`}
      >
        {isLoading ? (
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
            {/* here we are expecting 13 cards as the limit is set 13, it is to check if there are cards more than 12 if that is the case  */}
            {/* if there are more than 12 cards then we are showing view all card as last card */}
            {!isEmpty(items) ? (
              <>
              {items.slice(0, 12).map((item: any) => (
                <div key={item.slug} className={styles.gameCardWrapper}>
                  <GameCard data={item} />
                </div>
              ))}
              {
                items?.length > 12 && 
                  <div className={styles.gameCardWrapper} onClick={viewAll}>
                    <ViewAllCard />
                  </div>
              }
              </>
            ) : isError ? (
              <ErrorCarouselState />
            ) : (
              <>
                <NoDataCarouselState />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CarouselComponent;
