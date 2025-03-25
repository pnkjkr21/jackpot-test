import React from "react";
import { useInView } from "react-intersection-observer";

interface InfinitScrollContainerProps {
  children: React.ReactNode;
  onBottomReached: () => void;
  style?: React.CSSProperties;
}

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
