import React from "react";
import { useInView } from "react-intersection-observer";

interface InfinitScrollContainerProps {
  children: React.ReactNode;
  onBottomReached: () => void;
  style?: React.CSSProperties;
}
// this component is used to load more data when the user scrolls to the bottom of the page
// here the ref is used to check if the user has scrolled to the bottom of the page
// if the user has scrolled to the bottom of the page then the onBottomReached function is called
// that is why the ref is place at the bottome of the children component

const InfinitScrollContainer = ({
  children,
  onBottomReached,
  style,
}: InfinitScrollContainerProps) => {
  const { ref } = useInView({
    rootMargin: "50px",
    onChange: (inView) => {
      if (inView) {
        onBottomReached();
      }
    },
  });
  return (
    <div style={style}>     
      {children}
      <div ref={ref} />
    </div>
  );
};

export default InfinitScrollContainer;
