import React from "react";
import carouselStyles from "../Carousel/carousel.module.css";
import { INLINE_STYLE_FOR_GAME_CARD } from "./index";

const LoadingState = () => {
  return (
    <div style={INLINE_STYLE_FOR_GAME_CARD}>
      {Array.from({ length: 24 }).map((_, index) => (
        <div
          key={index}
          className={`${carouselStyles.loadingCard} ${carouselStyles.shimmer}`}
        />
      ))}
    </div>
  );
};

export default LoadingState;
